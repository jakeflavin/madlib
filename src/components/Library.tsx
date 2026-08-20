import { Trash2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { PrimaryButton, QuietButton, SecondaryButton } from './buttons.styled'
import { DeleteButton, Empty, EmptyCharacter, EmptyTitle, SavedItem } from './Library.styled'
import { Banner, BannerLine, BannerTitle, CoverGrid, Rack } from './Shelf.styled'
import { Tile } from './Tile'
import { TopBar } from './TopBar'
import { findTale } from '@/tales'
import type { SavedTale } from '@/types'

interface LibraryProps {
  tales: SavedTale[]
  onRead: (saved: SavedTale) => void
  onDelete: (id: string) => void
  /** Puts a deleted story back where it was. */
  onRestore: (entry: SavedTale, index: number) => void
  onBack: () => void
}

const formatDate = (at: number) =>
  new Date(at).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })

export function Library({ tales, onRead, onDelete, onRestore, onBack }: LibraryProps) {
  /* Deleting is one press on a small icon over the artwork, so it needs a way back —
     the same trade the fill sheet's Clear makes. */
  const [deleted, setDeleted] = useState<{ entry: SavedTale; index: number } | null>(null)
  const undoTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const remove = (entry: SavedTale, index: number) => {
    setDeleted({ entry, index })
    onDelete(entry.id)
    clearTimeout(undoTimer.current)
    undoTimer.current = setTimeout(() => setDeleted(null), 10000)
  }

  const undo = () => {
    if (!deleted) return
    onRestore(deleted.entry, deleted.index)
    setDeleted(null)
    clearTimeout(undoTimer.current)
  }

  return (
    <div>
      <TopBar onHome={onBack}>
        <QuietButton type="button" onClick={onBack}>
          All stories
        </QuietButton>
      </TopBar>

      <Banner>
        <BannerLine>Kept for later</BannerLine>
        <BannerTitle>Your stories</BannerTitle>
      </Banner>

      {/*
        The grid lives inside the Rack the shelf uses. Without it the covers took their
        width from the viewport and started at its left edge — border and shadow clipped
        at x=0 — under a banner that was still centred.
      */}
      <Rack>
        {tales.length === 0 ? (
          /*
            This screen is only reachable from a "Saved (n)" button that exists when n is
            at least one, so the only way to arrive here is to have just deleted the last
            story. "Nothing kept yet" was the one thing that could not be true.
          */
          <Empty>
            <EmptyCharacter name="book" />
            <EmptyTitle>Your shelf is empty</EmptyTitle>
            <p>
              Finish a story and choose <strong>Save to your library</strong> to keep it here.
            </p>
            {deleted ? (
              <SecondaryButton type="button" onClick={undo} aria-label="Undo delete">
                Undo
              </SecondaryButton>
            ) : (
              <PrimaryButton type="button" onClick={onBack}>
                Pick a story
              </PrimaryButton>
            )}
          </Empty>
        ) : (
          <>
            <CoverGrid>
              {tales.map((saved, index) => {
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
                      onClick={() => remove(saved, index)}
                      aria-label={`Delete ${saved.title}`}
                      title="Delete"
                    >
                      <Trash2 size={16} aria-hidden="true" />
                    </DeleteButton>
                  </SavedItem>
                )
              })}
            </CoverGrid>

            {deleted && (
              <Empty as="div" role="status">
                <p>
                  Deleted <strong>{deleted.entry.title}</strong>.
                </p>
                <SecondaryButton type="button" onClick={undo} aria-label="Undo delete">
                  Undo
                </SecondaryButton>
              </Empty>
            )}
          </>
        )}
      </Rack>
    </div>
  )
}
