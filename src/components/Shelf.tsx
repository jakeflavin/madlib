import { BookMarked } from 'lucide-react'
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
  // Only offer filters that actually lead somewhere.
  const tags = [...new Set(tales.flatMap((tale) => tale.tags))].sort((a, b) =>
    TAG_LABELS[a].localeCompare(TAG_LABELS[b]),
  )
  const shown = tag ? tales.filter((tale) => tale.tags.includes(tag)) : tales

  return (
    <div className="shelf">
      <header className="masthead">
        <div className="masthead-top">
          <h1 className="wordmark">Fable</h1>
          {library.length > 0 && (
            <button type="button" className="quiet-btn" onClick={onOpenLibrary}>
              <BookMarked size={15} aria-hidden="true" />
              Saved stories ({library.length})
            </button>
          )}
        </div>
        <p className="lede">
          Long fantasy tales with their best words missing. Fill in the blanks, then read the whole
          ridiculous thing aloud.
        </p>
      </header>

      {/* The pills only read as a control if something says what they do and the
          result of pressing one is visible, so the count sits opposite them. */}
      <section className="browse" aria-labelledby="browse-heading">
        <div className="browse-head">
          <h2 id="browse-heading" className="browse-title">
            Choose a story
          </h2>
          <p className="browse-count">
            {tag
              ? `${shown.length} of ${tales.length} — ${TAG_LABELS[tag].toLowerCase()}`
              : `${tales.length} stories`}
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter stories by theme">
          <button
            type="button"
            className="filter"
            aria-pressed={tag === null}
            onClick={() => onTag(null)}
          >
            All
          </button>
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              className="filter"
              aria-pressed={tag === item}
              onClick={() => onTag(tag === item ? null : item)}
            >
              {TAG_LABELS[item]}
            </button>
          ))}
        </div>

        <ul className="tale-list">
          {shown.map((tale) => {
            const draft = drafts[tale.id]
            const answered = draft ? tale.slots.filter((slot) => draft[slot.id]?.trim()).length : 0

            return (
              <li key={tale.id}>
                <button
                  type="button"
                  className="tale-card"
                  onClick={() => onOpen(tale)}
                  style={{ '--accent': tale.accent } as React.CSSProperties}
                >
                  <span className="tale-kicker">{tale.kicker}</span>
                  <span className="tale-title">{tale.title}</span>
                  <span className="tale-blurb">{tale.blurb}</span>
                  <span className="tale-meta">
                    <span>{tale.minutes} min read</span>
                    <span>{tale.slots.length} blanks</span>
                    {answered > 0 && (
                      <span className="tale-draft">
                        {answered === tale.slots.length
                          ? 'Ready to read'
                          : `${answered}/${tale.slots.length} filled`}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
