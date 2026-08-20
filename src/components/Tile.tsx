import type { Tale } from '@/types'
import { Art, Band, Cover, CoverCharacter, Note, Title } from './Tile.styled'

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
    <Cover type="button" onClick={onOpen} style={{ '--fill': tale.accent } as React.CSSProperties}>
      <Art>
        <CoverCharacter name={tale.character} />
      </Art>
      <Band>
        <Title>{tale.title}</Title>
        <Note>{note ?? `${tale.minutes} min read`}</Note>
      </Band>
    </Cover>
  )
}
