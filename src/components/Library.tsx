import { ArrowLeft, BookOpen, Trash2 } from 'lucide-react'
import { findTale } from '../tales'
import type { SavedTale } from '../types'

interface LibraryProps {
  tales: SavedTale[]
  onRead: (saved: SavedTale) => void
  onDelete: (id: string) => void
  onBack: () => void
}

const formatDate = (at: number) =>
  new Date(at).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })

export function Library({ tales, onRead, onDelete, onBack }: LibraryProps) {
  return (
    <div className="library">
      <header className="page-head">
        <button type="button" className="text-btn" onClick={onBack}>
          <ArrowLeft size={15} aria-hidden="true" />
          Contents
        </button>
      </header>

      <div className="writer-intro">
        <p className="eyebrow">Bound and kept</p>
        <h1 className="page-title">Your library</h1>
      </div>

      {tales.length === 0 ? (
        <p className="empty">Nothing kept yet. Finish a tale and press the ribbon to save it.</p>
      ) : (
        <ul className="saved-list">
          {tales.map((saved) => {
            const tale = findTale(saved.taleId)
            return (
              <li
                key={saved.id}
                className="saved-card"
                style={{ '--accent': tale?.accent ?? '#8a7a66' } as React.CSSProperties}
              >
                <div className="saved-body">
                  <strong>{saved.title}</strong>
                  <span>
                    {tale?.kicker ?? 'A lost tale'} · kept {formatDate(saved.savedAt)}
                  </span>
                </div>
                <button
                  type="button"
                  className="tool"
                  onClick={() => onRead(saved)}
                  disabled={!tale}
                  aria-label={`Read ${saved.title}`}
                  title="Read"
                >
                  <BookOpen size={17} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="tool danger"
                  onClick={() => onDelete(saved.id)}
                  aria-label={`Delete ${saved.title}`}
                  title="Delete"
                >
                  <Trash2 size={17} aria-hidden="true" />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
