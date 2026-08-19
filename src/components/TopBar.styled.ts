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
`

export const Wordmark = styled.button`
  ${displayType}
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
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;
`
