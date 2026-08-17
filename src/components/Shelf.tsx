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
        <div>
          <h1 className="wordmark">Fable</h1>
          <p className="lede">
            Long fantasy tales with their best words missing. Fill in the blanks, then read the
            whole ridiculous thing aloud.
          </p>
        </div>
        {library.length > 0 && (
          <button type="button" className="text-btn" onClick={onOpenLibrary}>
            Your library ({library.length})
          </button>
        )}
      </header>

      <div className="filters" role="group" aria-label="Filter stories">
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
    </div>
  )
}
