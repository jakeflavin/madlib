import { Character } from './Character'
import type { Tale } from '@/types'

interface TileProps {
  tale: Tale
  /** Small line under the title — progress, or when it was saved. */
  note?: string
  onOpen: () => void
}

/**
 * A booklet cover: flat crayon fill, fat ink outline, hard shadow, the story's
 * character drawn large, the title beneath in the cartoon face.
 */
export function Tile({ tale, note, onOpen }: TileProps) {
  return (
    <button
      type="button"
      className="cover"
      onClick={onOpen}
      style={{ '--fill': tale.accent } as React.CSSProperties}
    >
      <span className="cover-art">
        <Character name={tale.character} className="cover-character" />
      </span>
      <span className="cover-band">
        <span className="cover-title">{tale.title}</span>
        <span className="cover-note">{note ?? `${tale.minutes} min read`}</span>
      </span>
    </button>
  )
}
