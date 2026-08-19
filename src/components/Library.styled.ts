import { styled } from 'styled-components'

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
    color: #fff;
  }
`

/** The shelf with nothing on it. Set in the story face, because it is a sentence. */
export const Empty = styled.p`
  max-width: 1120px;
  margin: 0 auto;
  padding: 8px var(--gutter) 96px;
  font-family: var(--story);
  font-size: 18px;
  color: var(--dim);
`
