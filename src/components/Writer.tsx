import { ArrowLeft } from 'lucide-react'
import { Emblem } from './Emblem'
import { TopBar } from './TopBar'
import { kindLabel } from '../lib/template'
import { suggestWord } from '../lib/suggestions'
import type { Slot, Tale } from '../types'

interface WriterProps {
  tale: Tale
  tales: Tale[]
  words: Record<string, string>
  onChange: (slotId: string, value: string) => void
  onReplaceAll: (words: Record<string, string>) => void
  onSwitchTale: (tale: Tale) => void
  onRead: () => void
  onBack: () => void
}

/**
 * One line per blank. A custom label already says what the blank is for; where
 * there isn't one, the hint does the job. The word kind trails behind either as
 * an aside, and is dropped when the prompt is already just the kind.
 */
function prompt(slot: Slot): { label: string; kind: string | null } {
  const kind = kindLabel(slot.kind)
  const label = slot.label ?? slot.hint ?? kind
  return { label, kind: label === kind ? null : kind.toLowerCase() }
}

export function Writer({
  tale,
  tales,
  words,
  onChange,
  onReplaceAll,
  onSwitchTale,
  onRead,
  onBack,
}: WriterProps) {
  const filled = tale.slots.filter((slot) => words[slot.id]?.trim()).length
  const complete = filled === tale.slots.length

  const fillEmpty = () => {
    const filledIn = { ...words }
    for (const slot of tale.slots) {
      if (!filledIn[slot.id]?.trim()) filledIn[slot.id] = suggestWord(slot.kind)
    }
    onReplaceAll(filledIn)
  }

  return (
    <div className="writer" style={{ '--accent': tale.accent } as React.CSSProperties}>
      <TopBar onHome={onBack}>
        <button type="button" className="btn-ghost" onClick={onBack}>
          <ArrowLeft size={15} aria-hidden="true" />
          <span className="btn-label">All stories</span>
        </button>
      </TopBar>

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="hero-eyebrow">
            <Emblem name={tale.emblem} className="eyebrow-emblem" />
            {tale.kicker}
          </p>
          <h1 className="page-title">{tale.title}</h1>

          <label className="picker">
            <span className="picker-label">Story</span>
            <select
              value={tale.id}
              onChange={(event) => {
                const next = tales.find((item) => item.id === event.target.value)
                if (next) onSwitchTale(next)
              }}
            >
              {tales.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <ul className="field-list">
        {tale.slots.map((slot) => {
          const { label, kind } = prompt(slot)

          return (
            <li key={slot.id} className="field">
              <label>
                <span className="field-label">
                  {label} {kind && <span className="field-kind">· {kind}</span>}
                </span>
                <span className="field-input">
                  <input
                    value={words[slot.id] ?? ''}
                    onChange={(event) => onChange(slot.id, event.target.value)}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <button
                    type="button"
                    className="suggest"
                    onClick={() => onChange(slot.id, suggestWord(slot.kind, words[slot.id]))}
                    aria-label={`Suggest a ${kindLabel(slot.kind).toLowerCase()}`}
                  >
                    Suggest
                  </button>
                </span>
              </label>
            </li>
          )
        })}
      </ul>

      {/* The action bar rides with you: on a 28-field form the button that
          matters should never be a scroll away. */}
      <div className="action-bar">
        <div className="action-bar-inner">
          <div className="action-progress">
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={filled}
              aria-valuemin={0}
              aria-valuemax={tale.slots.length}
              aria-label="Blanks filled"
            >
              <div
                className="progress-fill"
                style={{ width: `${(filled / tale.slots.length) * 100}%` }}
              />
            </div>
            <p className="progress-label">
              {filled}/{tale.slots.length}
            </p>
          </div>

          <div className="action-buttons">
            <button
              type="button"
              className="btn-ghost"
              onClick={() => onReplaceAll({})}
              disabled={filled === 0}
            >
              Clear
            </button>
            <button type="button" className="btn-secondary" onClick={fillEmpty} disabled={complete}>
              Suggest the rest
            </button>
            <button type="button" className="btn-primary" onClick={onRead} disabled={!complete}>
              {complete ? 'Read the story' : `${tale.slots.length - filled} to go`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
