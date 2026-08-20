import { styled } from 'styled-components'

import { displayType } from '@/styles/type'
import { Character } from './Character'

/**
 * A booklet cover: flat crayon fill, fat ink outline, hard shadow. --fill is the story's
 * own accent, set inline, so one component covers twelve differently coloured stories.
 */
export const Cover = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 3px solid var(--text);
  border-radius: 8px;
  background: var(--fill);
  text-align: left;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition:
    transform 120ms ease-out,
    box-shadow 120ms ease-out;

  &:hover,
  &:focus-visible {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--text);
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 var(--text);
  }
`

/*
 * A fixed proportion rather than `flex: 1`. Letting the art take the leftover space
 * meant a two-line title stole from it, so the crayon panels in a row ended at
 * different heights — a visible stagger down a grid whose whole appeal is flat,
 * aligned blocks of colour.
 */
export const Art = styled.span`
  display: grid;
  place-items: center;
  aspect-ratio: 4 / 3;
  padding: 18px;
`

/**
 * On a coloured cover the character is knocked out in paper, the way the cartoon faces
 * sit on a printed cover — in *paper*, not in the page's background. Those are the same
 * colour in the light theme and opposites in the dark one, where --bg is near-black
 * while the cover it is drawn on stays a light pastel. Knocking out in --bg filled every
 * interior black and collapsed the whole cast into silhouettes, which is precisely the
 * technique DESIGN.md says these drawings do not use.
 */
export const CoverCharacter = styled(Character)`
  width: 96px;
  height: 96px;
  --character-fill: var(--art-paper);

  @media (width <= 620px) {
    width: 72px;
    height: 72px;
  }
`

/** The white panel a cover carries its logotype on. */
export const Band = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 14px 16px 16px;
  border-top: 3px solid var(--text);
  background: var(--bg);
`

export const Title = styled.span`
  ${displayType}
  display: block;
  font-size: 21px;
  line-height: 1.15;

  @media (width <= 620px) {
    font-size: 18px;
  }
`

export const Note = styled.span`
  display: block;
  margin-top: auto;
  padding-top: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--dim);
`
