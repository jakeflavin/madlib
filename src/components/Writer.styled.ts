import { styled } from 'styled-components'

import { PrimaryButton, SecondaryButton } from './buttons.styled'

/** Pinned to the bottom, because the count and the read button are what you come back to. */
export const ActionBar = styled.div`
  position: fixed;
  inset: auto 0 0;
  z-index: 15;
  border-top: 3px solid var(--text);
  background: var(--bg);
`

export const ActionBarInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 12px var(--gutter) max(12px, env(safe-area-inset-bottom));
`

export const Tally = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--dim);

  strong {
    font-size: 20px;
    color: var(--text);
  }
`

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  /*
   * Three controls will not sit on one phone-width row: the two helpers share a line and
   * the button that matters takes its own. Interpolated rather than written as a class
   * selector, so the relationship survives the buttons being renamed.
   */
  @media (width <= 620px) {
    flex-wrap: wrap;
    width: 100%;

    ${SecondaryButton} {
      flex: 1;
    }

    ${PrimaryButton} {
      flex-basis: 100%;
    }
  }
`
