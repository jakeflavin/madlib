import { QuietButton } from './buttons.styled'
import { Tile } from './Tile'
import {
  Banner,
  BannerBlurb,
  BannerLine,
  BannerTitle,
  Chip,
  Chips,
  Colophon,
  ColophonCharacter,
  CoverGrid,
  Rack,
  RackCount,
  RackHead,
  RackTitle,
} from './Shelf.styled'
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
    <div>
      <TopBar onHome={() => onTag(null)}>
        {library.length > 0 && (
          <QuietButton type="button" onClick={onOpenLibrary}>
            Saved ({library.length})
          </QuietButton>
        )}
      </TopBar>

      {/* The banner a booklet carries above its logotype. */}
      <Banner>
        <BannerLine>The world's most ridiculous word game</BannerLine>
        <BannerTitle>Fantasy Mad Libs</BannerTitle>
        <BannerBlurb>
          Pick a story. Fill in the blanks without reading it first. Then read the whole ridiculous
          thing out loud.
        </BannerBlurb>
      </Banner>

      <Rack>
        <RackHead>
          <RackTitle>{tag ? TAG_LABELS[tag] : 'All stories'}</RackTitle>
          <RackCount>
            {shown.length} of {tales.length}
          </RackCount>
        </RackHead>

        <Chips role="group" aria-label="Filter stories by theme">
          <Chip
            type="button"
            aria-pressed={tag === null}
            onClick={() => onTag(null)}
          >
            All
          </Chip>
          {tags.map((item) => (
            <Chip
              key={item}
              type="button"
              aria-pressed={tag === item}
              onClick={() => onTag(tag === item ? null : item)}
            >
              {TAG_LABELS[item]}
            </Chip>
          ))}
        </Chips>

        <CoverGrid>
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
        </CoverGrid>
      </Rack>

      <Colophon>
        <ColophonCharacter name="fairy" />
        <p>Twelve stories. Nearly thirty blanks apiece. No two readings alike.</p>
      </Colophon>
    </div>
  )
}
