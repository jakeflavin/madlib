import { styled } from 'styled-components'

import { displayType } from '@/styles/type'
import { Character } from './Character'

/** The banner a booklet carries above its logotype. */
export const Banner = styled.section`
  max-width: 780px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 52px) var(--gutter) clamp(20px, 3vw, 32px);
  text-align: center;
`

export const BannerLine = styled.p`
  margin: 0;
  font-family: var(--hand);
  font-size: 26px;
  font-weight: 600;
  color: var(--dim);
`

export const BannerTitle = styled.h1`
  ${displayType}
  margin: 2px 0 0;
  font-size: clamp(38px, 8vw, 76px);
  line-height: 1;
`

export const BannerBlurb = styled.p`
  max-width: 46ch;
  margin: 16px auto 0;
  font-family: var(--story);
  font-size: 17px;
  line-height: 1.6;
  color: var(--dim);
`

export const Rack = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 var(--gutter);
`

export const RackHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 10px;
  border-bottom: 3px solid var(--text);
`

export const RackTitle = styled.h2`
  ${displayType}
  font-size: 26px;
`

export const RackCount = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
`

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 0 4px;
`

export const Chip = styled.button`
  padding: 6px 14px;
  border: 2px solid var(--text);
  border-radius: 999px;
  background: var(--bg);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
  transition:
    background 120ms ease-out,
    color 120ms ease-out;

  &:hover {
    background: var(--yellow);
  }

  &[aria-pressed='true'] {
    background: var(--text);
    color: var(--bg);
  }
`

export const CoverGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 26px 22px;
  list-style: none;
  margin: 0;
  padding: 26px 0 40px;

  @media (width <= 620px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px 16px;
  }
`

export const Colophon = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px var(--gutter) 64px;
  font-family: var(--story);
  font-size: 15px;
  color: var(--dim);

  p {
    margin: 0;
  }
`

export const ColophonCharacter = styled(Character)`
  width: 34px;
  height: 34px;
  flex: none;
  --fill: var(--yellow);
`
