import type { Tale } from '../types'

interface TileProps {
  tale: Tale
  /** Small line under the title — progress, or when it was saved. */
  note?: string
  onOpen: () => void
}

/**
 * The poster. There is no licensed key art to draw on, so each tile generates
 * its own from the story's accent: a wash of colour over deep blue, with the
 * title lockup sitting on a scrim at the foot of the artwork.
 */
export function Tile({ tale, note, onOpen }: TileProps) {
  return (
    <button
      type="button"
      className="tile"
      onClick={onOpen}
      style={{ '--accent': tale.accent } as React.CSSProperties}
    >
      <span className="tile-orb" aria-hidden="true" />
      <span className="tile-lockup">
        {/* The kicker is a full phrase and only ever truncated at this width, so
            the poster carries the title and its status and nothing else. */}
        <span className="tile-title">{tale.title}</span>
        <span className="tile-note">{note ?? `${tale.minutes} min read`}</span>
      </span>
    </button>
  )
}
