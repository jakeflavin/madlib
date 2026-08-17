import { ArrowLeft } from 'lucide-react'
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
      <header className="page-head">
        <button type="button" className="text-btn" onClick={onBack}>
          <ArrowLeft size={15} aria-hidden="true" />
          All stories
        </button>

        {/* Sits up in the chrome rather than under the title, where it only read
            as a duplicate of the heading. */}
        <div className="picker">
          <select
            value={tale.id}
            aria-label="Choose a different story"
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
        </div>
      </header>

      <p className="eyebrow">{tale.kicker}</p>
      <h1 className="page-title">{tale.title}</h1>

      <div className="writer-status">
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

      <div className="writer-actions">
        <button type="button" className="quiet-btn" onClick={fillEmpty} disabled={complete}>
          Suggest the rest
        </button>
        <button
          type="button"
          className="quiet-btn"
          onClick={() => onReplaceAll({})}
          disabled={filled === 0}
        >
          Clear
        </button>
        <button type="button" className="primary-btn" onClick={onRead} disabled={!complete}>
          {complete ? 'Read the story' : `${tale.slots.length - filled} to go`}
        </button>
      </div>
    </div>
  )
}
