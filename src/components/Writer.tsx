import { Character } from './Character'
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
 * What gets printed under a write-on line. The part of speech always shows,
 * because that is what the player is answering; a custom prompt or hint rides
 * along beneath it when the story has one.
 */
function prompt(slot: Slot): { kind: string; hint: string | null } {
  const kind = kindLabel(slot.kind)
  const hint = slot.label ?? slot.hint ?? null
  return { kind, hint: hint === kind ? null : hint }
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
    <div className="writer" style={{ '--fill': tale.accent } as React.CSSProperties}>
      <TopBar onHome={onBack}>
        <button type="button" className="btn-quiet" onClick={onBack}>
          All stories
        </button>
      </TopBar>

      <section className="sheet-head">
        <Character name={tale.character} className="sheet-character" />
        <div className="sheet-head-body">
          <p className="kicker">{tale.kicker}</p>
          <h1 className="page-title">{tale.title}</h1>
          <label className="picker">
            <span className="picker-label">Playing</span>
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

      <section className="sheet">
        <h2 className="sheet-title">Fill in the blanks</h2>
        <ol className="blanks">
          {tale.slots.map((slot, index) => {
            const { kind, hint } = prompt(slot)

            return (
              <li key={slot.id} className="blank">
                <span className="blank-number">{index + 1}</span>
                <label className="blank-body">
                  {/* The line, then the part of speech under it — the format's
                      one non-negotiable. */}
                  <span className="write-on">
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
                      aria-label={`Suggest a ${kind.toLowerCase()}`}
                    >
                      Suggest
                    </button>
                  </span>
                  <span className="blank-kind">{kind}</span>
                  {hint && <span className="blank-hint">{hint}</span>}
                </label>
              </li>
            )
          })}
        </ol>
      </section>

      {/* The action bar rides with you: on a 28-blank sheet the button that
          matters should never be a scroll away. */}
      <div className="action-bar">
        <div className="action-bar-inner">
          <p className="tally">
            <strong>{filled}</strong> of {tale.slots.length} filled in
          </p>

          <div className="action-buttons">
            <button
              type="button"
              className="btn-quiet"
              onClick={() => onReplaceAll({})}
              disabled={filled === 0}
            >
              Clear
            </button>
            <button type="button" className="btn-secondary" onClick={fillEmpty} disabled={complete}>
              Suggest the rest
            </button>
            <button type="button" className="btn-primary" onClick={onRead} disabled={!complete}>
              {complete ? 'Read it out loud' : `${tale.slots.length - filled} to go`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
