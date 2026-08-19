import { Trash2 } from 'lucide-react'
import { QuietButton } from './buttons.styled'
import { DeleteButton, SavedItem } from './Library.styled'
import { Tile } from './Tile'
import { TopBar } from './TopBar'
import { findTale } from '@/tales'
import type { SavedTale } from '@/types'

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
        <QuietButton type="button" onClick={onBack}>
          All stories
        </QuietButton>
      </TopBar>

      <section className="banner">
        <p className="banner-line">Kept for later</p>
        <h1 className="banner-title">Your stories</h1>
      </section>

      {tales.length === 0 ? (
        <p className="empty" role="status">
          Nothing kept yet. Finish a story and press the ribbon to save it.
        </p>
      ) : (
        <ul className="cover-grid">
          {tales.map((saved) => {
            const tale = findTale(saved.taleId)
            if (!tale) return null

            return (
              <SavedItem key={saved.id}>
                <Tile
                  tale={{ ...tale, title: saved.title }}
                  note={`Saved ${formatDate(saved.savedAt)}`}
                  onOpen={() => onRead(saved)}
                />
                <DeleteButton
                  type="button"
                  onClick={() => onDelete(saved.id)}
                  aria-label={`Delete ${saved.title}`}
                  title="Delete"
                >
                  <Trash2 size={16} aria-hidden="true" />
                </DeleteButton>
              </SavedItem>
            )
          })}
        </ul>
      )}
    </div>
  )
}
