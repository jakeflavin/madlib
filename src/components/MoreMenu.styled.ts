import { styled } from 'styled-components'

export const MenuWrap = styled.div`
  position: relative;
  display: inline-flex;
`

/**
 * A slip of paper pinned under the band — ink outline, hard shadow, square corners,
 * the same object every other surface in the app is.
 */
export const MenuPanel = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 30;
  min-width: 232px;
  padding: 6px;
  border: 3px solid var(--text);
  border-radius: 8px;
  background: var(--bg);
  box-shadow: var(--shadow);
  color: var(--text);

  @media print {
    display: none;
  }
`

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 0 12px;
  border: none;
  border-radius: 5px;
  background: none;
  font-family: var(--ui);
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  color: var(--text);
  transition: background 120ms ease-out;

  svg {
    flex: none;
  }

  &:hover {
    background: var(--surface);
  }

  &[aria-pressed='true'] {
    background: var(--yellow);
    color: var(--art-ink);
  }
`
