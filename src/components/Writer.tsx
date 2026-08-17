import { ArrowLeft, BookOpen, Dices, Eraser } from 'lucide-react'
import { kindLabel, slotLabel } from '../lib/template'
import { suggestWord } from '../lib/suggestions'
import type { Tale } from '../types'

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

  const rollEmpty = () => {
    const rolled = { ...words }
    for (const slot of tale.slots) {
      if (!rolled[slot.id]?.trim()) rolled[slot.id] = suggestWord(slot.kind)
    }
    onReplaceAll(rolled)
  }

  return (
    <div className="writer" style={{ '--accent': tale.accent } as React.CSSProperties}>
      <header className="page-head">
        <button type="button" className="text-btn" onClick={onBack}>
          <ArrowLeft size={15} aria-hidden="true" />
          Contents
        </button>
      </header>

      <div className="writer-intro">
        <p className="eyebrow">{tale.kicker}</p>
        <h1 className="page-title">{tale.title}</h1>

        <label className="picker">
          <span>Story</span>
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
        <p className="picker-note">
          Switch stories whenever you like — the words you have already given are carried across.
        </p>
      </div>

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
          {filled} of {tale.slots.length} blanks filled
        </p>
      </div>

      <ul className="field-list">
        {tale.slots.map((slot) => (
          <li key={slot.id} className="field">
            <label>
              <span className="field-label">
                {slotLabel(slot)}
                {/* The kind is only worth repeating when the prompt doesn't already say it. */}
                {slotLabel(slot) !== kindLabel(slot.kind) && (
                  <span className="field-kind">{kindLabel(slot.kind)}</span>
                )}
              </span>
              {slot.hint && <span className="field-hint">{slot.hint}</span>}
              <span className="field-input">
                <input
                  value={words[slot.id] ?? ''}
                  onChange={(event) => onChange(slot.id, event.target.value)}
                  placeholder={kindLabel(slot.kind).toLowerCase()}
                  autoComplete="off"
                  spellCheck={false}
                />
                <button
                  type="button"
                  className="die"
                  onClick={() => onChange(slot.id, suggestWord(slot.kind, words[slot.id]))}
                  aria-label={`Suggest a ${kindLabel(slot.kind).toLowerCase()}`}
                  title="Roll a word"
                >
                  <Dices size={16} aria-hidden="true" />
                </button>
              </span>
            </label>
          </li>
        ))}
      </ul>

      <div className="writer-actions">
        <button type="button" className="quiet-btn" onClick={rollEmpty} disabled={complete}>
          <Dices size={16} aria-hidden="true" />
          Roll the empty ones
        </button>
        <button
          type="button"
          className="quiet-btn"
          onClick={() => onReplaceAll({})}
          disabled={filled === 0}
        >
          <Eraser size={16} aria-hidden="true" />
          Clear
        </button>
        <button type="button" className="primary-btn" onClick={onRead} disabled={!complete}>
          <BookOpen size={16} aria-hidden="true" />
          {complete ? 'Read the story' : `${tale.slots.length - filled} to go`}
        </button>
      </div>
    </div>
  )
}
