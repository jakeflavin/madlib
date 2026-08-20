import { styled } from 'styled-components'

import { displayType } from '@/styles/type'
import { Character } from './Character'
import { Kicker } from './Writer.styled'

export const Story = styled.article`
  max-width: 720px;
  margin: 0 auto;
  padding: clamp(26px, 5vw, 48px) var(--gutter) 96px;

  /* Printed, the page is the story: no chrome, no page furniture, ink-sized type. */
  @media print {
    padding: 0;
    max-width: none;
  }
`

export const StoryHead = styled.header`
  padding-bottom: 26px;
  margin-bottom: 30px;
  border-bottom: 3px solid var(--text);
  text-align: center;

  ${Kicker} {
    margin-top: 4px;
  }
`

export const StoryCharacter = styled(Character)`
  width: clamp(72px, 12vw, 104px);
  height: clamp(72px, 12vw, 104px);
  --character-fill: var(--fill);
`

export const StoryTitle = styled.h1`
  ${displayType}
  margin: 4px 0 0;
  font-size: clamp(34px, 6vw, 60px);
  line-height: 1.05;
`

export const Byline = styled.p`
  margin: 14px 0 0;
  font-family: var(--hand);
  font-size: 22px;
  color: var(--dim);

  strong {
    font-weight: 700;
    color: var(--text);
  }
`

/** The player's word: their hand, on the line they wrote it on. */
export const Word = styled.button`
  padding: 0 3px;
  border: none;
  border-bottom: 2px solid var(--text);
  background: none;
  font-family: var(--hand);
  font-size: 1.2em;
  font-weight: 600;
  line-height: 1;
  color: var(--text);
  transition: background 120ms ease-out;

  &:hover {
    background: var(--yellow);
  }

  /*
   * A finger is not a cursor, and these sit inline in flowing prose with other words
   * either side — a mis-tap opens the wrong word for editing.
   */
  @media (pointer: coarse) {
    padding: 4px 5px;
  }

  /*
   * On paper the highlight is just grey, so it goes. Written against &:hover as well,
   * because a bare declaration here loses to it on specificity and whichever word the
   * mouse last rested on printed with a yellow block behind it.
   */
  @media print {
    &,
    &:hover {
      background: none;
    }
  }
`

/**
 * What just happened, in words. Copying used to report itself by swapping an icon to
 * a tick for a moment — no use unless you were watching that exact button, and
 * nothing at all to a screen reader. role="status" tells both.
 */
export const Flash = styled.p`
  position: fixed;
  top: 74px;
  left: 50%;
  z-index: 25;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 9px 16px;
  transform: translateX(-50%);
  border: 3px solid var(--text);
  border-radius: 6px;
  background: var(--yellow);
  box-shadow: var(--shadow-sm);
  font-family: var(--ui);
  font-size: 14px;
  font-weight: 800;
  white-space: nowrap;

  /* A crayon fill takes ink in both themes. */
  color: var(--art-ink);

  @media print {
    display: none;
  }
`

export const WordEdit = styled.input`
  min-width: 4ch;
  padding: 0 3px;
  border: none;
  border-bottom: 2px solid var(--text);
  background: var(--yellow);
  font-family: var(--hand);
  font-size: 1.2em;
  font-weight: 600;
  color: var(--text);

  &:focus {
    outline: none;
  }
`

export const Chapter = styled.section`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0 0 1.15em;
    font-family: var(--story);
    font-size: 19px;
    line-height: 1.8;
    color: var(--text);
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }

  @media print {
    break-inside: avoid-page;

    p {
      font-size: 12pt;
      line-height: 1.7;
    }
  }
`

export const ChapterTitle = styled.h2`
  ${displayType}
  margin-bottom: 16px;
  font-size: 22px;
`

/** Hidden on a phone, where the icon alone has to carry the button. */
/**
 * Hides the label on a phone, where there is not room for several of them.
 *
 * Used sparingly, and never on the control someone came to the screen to press: a
 * masthead where every label has collapsed is a row of glyphs to guess at, which is
 * how this one ended up with seven of them.
 */
export const ButtonLabel = styled.span`
  @media (width <= 620px) {
    display: none;
  }
`

/** Keeps its words at every width. */
export const AlwaysLabel = styled.span``
