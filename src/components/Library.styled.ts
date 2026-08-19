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
