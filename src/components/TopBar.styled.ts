import { styled } from 'styled-components'

import { displayType } from '@/styles/type'

/** The masthead band, as a booklet cover has: solid navy on a heavy ink rule. */
export const Masthead = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--navy);
  border-bottom: 3px solid var(--text);
  color: #fff;

  /* Reading progress, drawn along the band's ink rule. */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 3px;
    width: var(--read, 0%);
    background: var(--yellow);
    transition: width 100ms linear;
  }

  /* The page is the story on paper; the band and its progress rule are screen furniture. */
  @media print {
    display: none;
  }
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 60px;
  padding: 8px var(--gutter);

  /*
   * The page gutter is generous by design, but the reader's bar carries the wordmark,
   * a labelled button and four 44px targets — at 390px that is the one row in the app
   * with nothing to spare, and the gutter is the cheapest thing in it.
   */
  @media (width <= 620px) {
    gap: 8px;
    padding-inline: 12px;
  }
`

export const Wordmark = styled.button`
  ${displayType}
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  font-size: 30px;
  line-height: 1;
  color: #fff;
  transition: color 120ms ease-out;

  &:hover {
    color: var(--yellow);
  }

  @media (width <= 620px) {
    font-size: 26px;
  }

  /* It goes home when pressed, so it is a target and not just a logotype. */
  @media (pointer: coarse) {
    min-height: 44px;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;
`

/**
 * Separates what the app does from what this story does. The theme control used to sit
 * in the same row at the same size as "save this story" and "print", so a setting read
 * as one more document action.
 */
export const Divider = styled.span`
  width: 1px;
  height: 22px;
  margin: 0 6px;
  flex: none;
  background: currentColor;
  opacity: 0.35;

  @media (width <= 620px) {
    margin: 0 2px;
  }
`
