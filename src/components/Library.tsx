import { Trash2 } from 'lucide-react'
import { Tile } from './Tile'
import { TopBar } from './TopBar'
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
      <TopBar onHome={onBack}>
        <button type="button" className="btn-quiet" onClick={onBack}>
          All stories
        </button>
      </TopBar>

      <section className="banner">
        <p className="banner-line">Kept for later</p>
        <h1 className="banner-title">Your stories</h1>
      </section>

      {tales.length === 0 ? (
        <p className="empty" role="status">Nothing kept yet. Finish a story and press the ribbon to save it.</p>
      ) : (
        <ul className="cover-grid">
          {tales.map((saved) => {
            const tale = findTale(saved.taleId)
            if (!tale) return null

            return (
              <li key={saved.id} className="saved-item">
                <Tile
                  tale={{ ...tale, title: saved.title }}
                  note={`Saved ${formatDate(saved.savedAt)}`}
                  onOpen={() => onRead(saved)}
                />
                <button
                  type="button"
                  className="btn-icon saved-delete"
                  onClick={() => onDelete(saved.id)}
                  aria-label={`Delete ${saved.title}`}
                  title="Delete"
                >
                  <Trash2 size={16} aria-hidden="true" />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
