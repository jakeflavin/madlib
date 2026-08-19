import { Character } from './Character'
import { QuietButton } from './buttons.styled'
import { Tile } from './Tile'
import { TopBar } from './TopBar'
import type { SavedTale, Tag, Tale } from '@/types'

interface ShelfProps {
  tales: Tale[]
  drafts: Record<string, Record<string, string>>
  library: SavedTale[]
  tag: Tag | null
  onTag: (tag: Tag | null) => void
  onOpen: (tale: Tale) => void
  onOpenLibrary: () => void
}

const TAG_LABELS: Record<Tag, string> = {
  dragons: 'Dragons',
  royalty: 'Royalty',
  magic: 'Magic',
  sea: 'Sea',
  winter: 'Winter',
  sky: 'Sky',
  spirits: 'Spirits',
  friendship: 'Friendship',
  family: 'Family',
  adventure: 'Adventure',
}

export function Shelf({ tales, drafts, library, tag, onTag, onOpen, onOpenLibrary }: ShelfProps) {
  const tags = [...new Set(tales.flatMap((tale) => tale.tags))].sort((a, b) =>
    TAG_LABELS[a].localeCompare(TAG_LABELS[b]),
  )
  const shown = tag ? tales.filter((tale) => tale.tags.includes(tag)) : tales

  const answeredIn = (tale: Tale) => {
    const draft = drafts[tale.id]
    return draft ? tale.slots.filter((slot) => draft[slot.id]?.trim()).length : 0
  }

  return (
    <div className="browse">
      <TopBar onHome={() => onTag(null)}>
        {library.length > 0 && (
          <QuietButton type="button" onClick={onOpenLibrary}>
            Saved ({library.length})
          </QuietButton>
        )}
      </TopBar>

      {/* The banner a booklet carries above its logotype. */}
      <section className="banner">
        <p className="banner-line">The world's most ridiculous word game</p>
        <h1 className="banner-title">Fantasy Mad Libs</h1>
        <p className="banner-blurb">
          Pick a story. Fill in the blanks without reading it first. Then read the whole ridiculous
          thing out loud.
        </p>
      </section>

      <section className="rack">
        <div className="rack-head">
          <h2 className="rack-title">{tag ? TAG_LABELS[tag] : 'All stories'}</h2>
          <p className="rack-count">
            {shown.length} of {tales.length}
          </p>
        </div>

        <div className="chips" role="group" aria-label="Filter stories by theme">
          <button
            type="button"
            className="chip"
            aria-pressed={tag === null}
            onClick={() => onTag(null)}
          >
            All
          </button>
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              className="chip"
              aria-pressed={tag === item}
              onClick={() => onTag(tag === item ? null : item)}
            >
              {TAG_LABELS[item]}
            </button>
          ))}
        </div>

        <ul className="cover-grid">
          {shown.map((tale) => {
            const answered = answeredIn(tale)
            return (
              <li key={tale.id}>
                <Tile
                  tale={tale}
                  note={
                    answered === tale.slots.length
                      ? 'Ready to read'
                      : answered > 0
                        ? `${answered}/${tale.slots.length} filled in`
                        : `${tale.slots.length} blanks · ${tale.minutes} min`
                  }
                  onOpen={() => onOpen(tale)}
                />
              </li>
            )
          })}
        </ul>
      </section>

      <footer className="colophon">
        <Character name="fairy" className="colophon-character" />
        <p>Twelve stories. Nearly thirty blanks apiece. No two readings alike.</p>
      </footer>
    </div>
  )
}
