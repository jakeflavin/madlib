import { Trash2 } from 'lucide-react'
import { QuietButton } from './buttons.styled'
import { DeleteButton, Empty, SavedItem } from './Library.styled'
import { Banner, BannerLine, BannerTitle, CoverGrid } from './Shelf.styled'
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

      <Banner>
        <BannerLine>Kept for later</BannerLine>
        <BannerTitle>Your stories</BannerTitle>
      </Banner>

      {tales.length === 0 ? (
        <Empty role="status">
          Nothing kept yet. Finish a story and press the ribbon to save it.
        </Empty>
      ) : (
        <CoverGrid>
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
        </CoverGrid>
      )}
    </div>
  )
}
