import { BookMarked, Clock, Feather } from 'lucide-react'
import { motion } from 'motion/react'
import type { SavedTale, Tale } from '../types'

interface ShelfProps {
  tales: Tale[]
  drafts: Record<string, Record<string, string>>
  library: SavedTale[]
  onOpen: (tale: Tale) => void
  onOpenLibrary: () => void
}

export function Shelf({ tales, drafts, library, onOpen, onOpenLibrary }: ShelfProps) {
  return (
    <div className="shelf">
      <header className="shelf-head">
        <p className="eyebrow">Six tales, ten thousand endings</p>
        <h1 className="wordmark">Fable</h1>
        <p className="shelf-lede">
          Choose a tale. Answer its riddles with whatever words you like. The story writes itself
          around them — and then you read the whole ridiculous thing aloud.
        </p>
        {library.length > 0 && (
          <button type="button" className="ghost-btn" onClick={onOpenLibrary}>
            <BookMarked size={16} aria-hidden="true" />
            Your library · {library.length}
          </button>
        )}
      </header>

      <ul className="tale-grid">
        {tales.map((tale, index) => {
          const draft = drafts[tale.id]
          const answered = draft ? tale.slots.filter((slot) => draft[slot.id]?.trim()).length : 0

          return (
            <motion.li
              key={tale.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.45, ease: 'easeOut' }}
            >
              <button
                type="button"
                className="tale-card"
                onClick={() => onOpen(tale)}
                style={
                  {
                    '--hue-a': tale.hues[0],
                    '--hue-b': tale.hues[1],
                  } as React.CSSProperties
                }
              >
                <span className="tale-sigil" aria-hidden="true">
                  {tale.sigil}
                </span>
                <span className="tale-kicker">{tale.kicker}</span>
                <span className="tale-title">{tale.title}</span>
                <span className="tale-blurb">{tale.blurb}</span>
                <span className="tale-meta">
                  <span>
                    <Clock size={13} aria-hidden="true" /> {tale.minutes} min read
                  </span>
                  <span>
                    <Feather size={13} aria-hidden="true" /> {tale.slots.length} words to give
                  </span>
                </span>
                {answered > 0 && answered < tale.slots.length && (
                  <span className="tale-draft">
                    In progress · {answered}/{tale.slots.length}
                  </span>
                )}
              </button>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
