import { BookMarked, Clock, PencilLine } from 'lucide-react'
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

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

export function Shelf({ tales, drafts, library, tag, onTag, onOpen, onOpenLibrary }: ShelfProps) {
  // Only offer filters that actually lead somewhere.
  const tags = [...new Set(tales.flatMap((tale) => tale.tags))].sort((a, b) =>
    TAG_LABELS[a].localeCompare(TAG_LABELS[b]),
  )
  const shown = tag ? tales.filter((tale) => tale.tags.includes(tag)) : tales

  return (
    <div className="shelf">
      <header className="masthead">
        <p className="eyebrow">Fantasy mad libs</p>
        <h1 className="wordmark">Fable</h1>
        <p className="lede">
          Six long tales with their best words missing. Fill in the blanks, then read the whole
          ridiculous thing aloud.
        </p>
        {library.length > 0 && (
          <button type="button" className="text-btn" onClick={onOpenLibrary}>
            <BookMarked size={15} aria-hidden="true" />
            Your library ({library.length})
          </button>
        )}
      </header>

      <div className="contents-head">
        <h2 className="section-title">Contents</h2>
        <div className="filters" role="group" aria-label="Filter tales">
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
                <span className="tale-numeral" aria-hidden="true">
                  {NUMERALS[tales.indexOf(tale)]}
                </span>
                <span className="tale-kicker">{tale.kicker}</span>
                <span className="tale-title">{tale.title}</span>
                <span className="tale-blurb">{tale.blurb}</span>
                <span className="tale-meta">
                  <span>
                    <Clock size={13} aria-hidden="true" /> {tale.minutes} min read
                  </span>
                  <span>
                    <PencilLine size={13} aria-hidden="true" /> {tale.slots.length} blanks
                  </span>
                  {answered > 0 && (
                    <span className="tale-draft">
                      {answered === tale.slots.length
                        ? 'Ready to read'
                        : `In progress · ${answered}/${tale.slots.length}`}
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
