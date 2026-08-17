import { BookMarked } from 'lucide-react'
import { Tile } from './Tile'
import { TopBar } from './TopBar'
import type { SavedTale, Tag, Tale } from '../types'

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

  const started = tales.filter((tale) => {
    const answered = answeredIn(tale)
    return answered > 0 && answered < tale.slots.length
  })

  // The hero features whatever is in progress, else the first story.
  const featured = started[0] ?? tales[0]

  return (
    <div className="browse">
      <TopBar onHome={() => onTag(null)}>
        {library.length > 0 && (
          <button type="button" className="btn-secondary" onClick={onOpenLibrary}>
            <BookMarked size={15} aria-hidden="true" />
            Saved ({library.length})
          </button>
        )}
      </TopBar>

      <section className="hero" style={{ '--accent': featured.accent } as React.CSSProperties}>
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">{featured.kicker}</p>
          <h1 className="hero-title">{featured.title}</h1>
          <p className="hero-blurb">{featured.blurb}</p>
          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={() => onOpen(featured)}>
              {answeredIn(featured) > 0 ? 'Keep going' : 'Start this story'}
            </button>
            <p className="hero-meta">
              {featured.minutes} min read · {featured.slots.length} blanks
            </p>
          </div>
        </div>
      </section>

      {started.length > 0 && (
        <section className="row">
          <h2 className="row-title">Continue where you left off</h2>
          <div className="row-track">
            {started.map((tale) => (
              <Tile
                key={tale.id}
                tale={tale}
                note={`${answeredIn(tale)}/${tale.slots.length} blanks filled`}
                onOpen={() => onOpen(tale)}
              />
            ))}
          </div>
        </section>
      )}

      <section className="row">
        <div className="row-head">
          <h2 className="row-title">{tag ? TAG_LABELS[tag] : 'All stories'}</h2>
          <p className="row-count">
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

        <div className="row-track">
          {shown.map((tale) => {
            const answered = answeredIn(tale)
            return (
              <Tile
                key={tale.id}
                tale={tale}
                note={
                  answered === tale.slots.length
                    ? 'Ready to read'
                    : answered > 0
                      ? `${answered}/${tale.slots.length} blanks filled`
                      : `${tale.minutes} min read`
                }
                onOpen={() => onOpen(tale)}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
