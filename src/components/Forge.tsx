import { ArrowLeft, ArrowRight, Check, Dices, List, Sparkles, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { countUses, kindLabel, slotLabel } from '../lib/template'
import { exampleWords, suggestWord } from '../lib/suggestions'
import type { Tale } from '../types'

interface ForgeProps {
  tale: Tale
  words: Record<string, string>
  onChange: (slotId: string, value: string) => void
  onFillAll: (words: Record<string, string>) => void
  onFinish: () => void
  onBack: () => void
}

export function Forge({ tale, words, onChange, onFillAll, onFinish, onBack }: ForgeProps) {
  const [index, setIndex] = useState(() => {
    const firstEmpty = tale.slots.findIndex((slot) => !words[slot.id]?.trim())
    return firstEmpty === -1 ? 0 : firstEmpty
  })
  const [listView, setListView] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const slot = tale.slots[index]
  const uses = useMemo(() => countUses(tale.chapters), [tale])
  const filled = tale.slots.filter((item) => words[item.id]?.trim()).length
  const complete = filled === tale.slots.length
  // New examples per slot, not per keystroke — they'd flicker otherwise.
  const examples = useMemo(() => exampleWords(slot.kind), [slot])

  useEffect(() => {
    if (!listView) inputRef.current?.focus()
  }, [index, listView])

  const go = (delta: number) => {
    setIndex((current) => Math.min(tale.slots.length - 1, Math.max(0, current + delta)))
  }

  const rollRest = () => {
    const rolled = { ...words }
    for (const item of tale.slots) {
      if (!rolled[item.id]?.trim()) rolled[item.id] = suggestWord(item.kind)
    }
    onFillAll(rolled)
  }

  return (
    <div className="forge">
      <header className="forge-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back to the shelf">
          <X size={18} aria-hidden="true" />
        </button>
        <div className="forge-title">
          <span className="eyebrow">{tale.kicker}</span>
          <h2>{tale.title}</h2>
        </div>
        <button
          type="button"
          className="icon-btn"
          onClick={() => setListView((value) => !value)}
          aria-pressed={listView}
          aria-label={listView ? 'Answer one at a time' : 'Show every blank'}
        >
          {listView ? (
            <Sparkles size={18} aria-hidden="true" />
          ) : (
            <List size={18} aria-hidden="true" />
          )}
        </button>
      </header>

      <div
        className="progress"
        role="progressbar"
        aria-valuenow={filled}
        aria-valuemin={0}
        aria-valuemax={tale.slots.length}
        aria-label="Blanks filled"
      >
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${(filled / tale.slots.length) * 100}%` }}
          transition={{ type: 'spring', stiffness: 160, damping: 24 }}
        />
      </div>
      <p className="progress-label">
        {filled} of {tale.slots.length} words given
      </p>

      {listView ? (
        <ul className="slot-list">
          {tale.slots.map((item, itemIndex) => (
            <li key={item.id}>
              <label>
                <span className="slot-list-label">
                  <span className="slot-kind">{kindLabel(item.kind)}</span>
                  {slotLabel(item) !== kindLabel(item.kind) && <span>{slotLabel(item)}</span>}
                </span>
                <span className="slot-list-input">
                  <input
                    value={words[item.id] ?? ''}
                    onChange={(event) => onChange(item.id, event.target.value)}
                    onFocus={() => setIndex(itemIndex)}
                    placeholder="…"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="icon-btn small"
                    onClick={() => onChange(item.id, suggestWord(item.kind, words[item.id]))}
                    aria-label={`Roll a ${kindLabel(item.kind)}`}
                  >
                    <Dices size={15} aria-hidden="true" />
                  </button>
                </span>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <div className="prompt-stage">
          {/* Keyed rather than wrapped in AnimatePresence — an exit animation the next
              card has to wait on can leave an empty prompt behind if it never finishes. */}
          <motion.div
            key={slot.id}
            className="prompt-card"
            initial={{ opacity: 0, y: 24, rotate: -0.6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <span className="slot-kind">{kindLabel(slot.kind)}</span>
            <h3 className="prompt-label">{slotLabel(slot)}</h3>
            {slot.hint && <p className="prompt-hint">{slot.hint}</p>}

            <div className="prompt-input">
              <input
                ref={inputRef}
                value={words[slot.id] ?? ''}
                onChange={(event) => onChange(slot.id, event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    if (index === tale.slots.length - 1 && complete) onFinish()
                    else go(1)
                  }
                }}
                placeholder="Write anything…"
                aria-label={slotLabel(slot)}
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                className="icon-btn"
                onClick={() => onChange(slot.id, suggestWord(slot.kind, words[slot.id]))}
                aria-label="Roll a word"
              >
                <Dices size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="chips">
              {examples.map((word) => (
                <button
                  key={word}
                  type="button"
                  className="chip"
                  onClick={() => onChange(slot.id, word)}
                >
                  {word}
                </button>
              ))}
            </div>

            {uses[slot.id] > 1 && (
              <p className="prompt-note">This one turns up {uses[slot.id]} times in the tale.</p>
            )}
          </motion.div>

          <div className="prompt-nav">
            <button
              type="button"
              className="icon-btn"
              onClick={() => go(-1)}
              disabled={index === 0}
              aria-label="Previous blank"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <span className="prompt-count">
              {index + 1} / {tale.slots.length}
            </span>
            <button
              type="button"
              className="icon-btn"
              onClick={() => go(1)}
              disabled={index === tale.slots.length - 1}
              aria-label="Next blank"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <footer className="forge-foot">
        <button type="button" className="ghost-btn" onClick={rollRest} disabled={complete}>
          <Dices size={16} aria-hidden="true" />
          Roll the rest
        </button>
        <button type="button" className="gold-btn" onClick={onFinish} disabled={!complete}>
          <Check size={16} aria-hidden="true" />
          {complete ? 'Bind the book' : `${tale.slots.length - filled} to go`}
        </button>
      </footer>
    </div>
  )
}
