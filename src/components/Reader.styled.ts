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

  /* On paper the highlight is just grey, so it goes. */
  @media print {
    background: none;
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
export const ButtonLabel = styled.span`
  @media (width <= 620px) {
    display: none;
  }
`
