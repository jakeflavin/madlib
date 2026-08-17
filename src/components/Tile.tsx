import { Emblem } from './Emblem'
import type { Tale } from '../types'

interface TileProps {
  tale: Tale
  /** Small line under the title — progress, or when it was saved. */
  note?: string
  onOpen: () => void
}

/**
 * A book plate rather than a poster: flat navy, a gold rule inset like a frame,
 * the story's emblem drawn in its own colour, and the title set in the display
 * serif. No gradients — the plate is printed, not lit.
 */
export function Tile({ tale, note, onOpen }: TileProps) {
  return (
    <button
      type="button"
      className="tile"
      onClick={onOpen}
      style={{ '--accent': tale.accent } as React.CSSProperties}
    >
      <span className="tile-frame" aria-hidden="true" />
      <span className="tile-plate">
        <Emblem name={tale.emblem} className="tile-emblem" />
      </span>
      <span className="tile-lockup">
        <span className="tile-title">{tale.title}</span>
        <span className="tile-note">{note ?? `${tale.minutes} min read`}</span>
      </span>
    </button>
  )
}
