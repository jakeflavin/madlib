import { ArrowLeft, BookOpen, Trash2 } from 'lucide-react'
import { motion } from 'motion/react'
import { findTale } from '../tales'
import type { SavedTale } from '../types'

interface LibraryProps {
  tales: SavedTale[]
  onRead: (saved: SavedTale) => void
  onDelete: (id: string) => void
  onBack: () => void
}

const formatDate = (at: number) =>
  new Date(at).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })

export function Library({ tales, onRead, onDelete, onBack }: LibraryProps) {
  return (
    <div className="library">
      <header className="forge-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back to the shelf">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <div className="forge-title">
          <span className="eyebrow">Bound and kept</span>
          <h2>Your library</h2>
        </div>
        <span className="icon-btn ghost" aria-hidden="true" />
      </header>

      {tales.length === 0 ? (
        <p className="empty">Nothing bound yet. Finish a tale and press the ribbon to keep it.</p>
      ) : (
        <ul className="saved-list">
          {tales.map((saved, index) => {
            const tale = findTale(saved.taleId)
            return (
              <motion.li
                key={saved.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="saved-card">
                  <span className="saved-sigil" aria-hidden="true">
                    {tale?.sigil ?? '📖'}
                  </span>
                  <div className="saved-body">
                    <strong>{saved.title}</strong>
                    <span>
                      {tale?.kicker ?? 'A lost tale'} · {formatDate(saved.savedAt)}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => onRead(saved)}
                    disabled={!tale}
                    aria-label={`Read ${saved.title}`}
                  >
                    <BookOpen size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="icon-btn danger"
                    onClick={() => onDelete(saved.id)}
                    aria-label={`Delete ${saved.title}`}
                  >
                    <Trash2 size={18} aria-hidden="true" />
                  </button>
                </div>
              </motion.li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
