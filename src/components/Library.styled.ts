import { styled } from 'styled-components'

import { displayType } from '@/styles/type'
import { Character } from './Character'
import { IconButton } from './buttons.styled'

/** Positioned, so the delete button can sit on the cover rather than beneath it. */
export const SavedItem = styled.li`
  position: relative;
`

/** Bordered and filled, unlike the masthead's icon buttons: this one sits on artwork. */
export const DeleteButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 2px solid var(--text);
  background: var(--bg);
  color: var(--text);

  &:hover {
    background: var(--red);
    color: var(--on-red);
  }
`

/**
 * The shelf with nothing on it. Centred under the centred banner, and carrying a way
 * onward: it used to be one left-aligned sentence in an otherwise empty screen, giving
 * the reader nothing to look at and nowhere to go.
 */
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 40px 0 96px;
  text-align: center;

  p {
    max-width: 40ch;
    margin: 0;
    font-family: var(--story);
    font-size: 17px;
    line-height: 1.6;
    color: var(--dim);
  }
`

export const EmptyTitle = styled.h2`
  ${displayType}
  margin: 0;
  font-size: 26px;
`

export const EmptyCharacter = styled(Character)`
  width: 62px;
  height: 62px;
  --fill: var(--yellow);
`
