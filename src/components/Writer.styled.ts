import { styled } from 'styled-components'

import { displayType } from '@/styles/type'
import { Character } from './Character'
import { PrimaryButton, SecondaryButton } from './buttons.styled'

/** Pinned to the bottom, because the count and the read button are what you come back to. */
export const ActionBar = styled.div`
  position: fixed;
  inset: auto 0 0;
  z-index: 15;
  border-top: 3px solid var(--text);
  background: var(--bg);

  /* Screen furniture: a printed sheet has nothing to press. */
  @media print {
    display: none;
  }
`

export const ActionBarInner = styled.div`
  display: flex;
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

/*
 * Only the primary rides in the bar now. Three controls would not sit on one
 * phone-width row, so the bar grew to three effective rows — 170px of a 664px
 * iPhone viewport, a quarter of the screen permanently gone on a sheet you have to
 * scroll through twenty-eight times. Clear and "Suggest the rest" act on the sheet,
 * so they live on the sheet; what has to ride along is the count and the way out.
 */
export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (width <= 620px) {
    ${PrimaryButton} {
      flex: 1;
    }
  }
`

/**
 * Clear and "Suggest the rest", at the head of the sheet they act on.
 *
 * They wrap rather than share a fixed split. Both labels are `nowrap`, so `flex: 1`
 * sized them to equal halves they could not fit inside and they overran the sheet on a
 * phone. With `auto` bases they sit side by side when the words fit and take a line
 * each when they don't, which is also what happens when "Clear" becomes the wider
 * "Undo clear".
 */
export const SheetTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (width <= 620px) {
    ${SecondaryButton} {
      flex: 1 1 auto;
      padding-inline: 14px;
    }
  }
`

export const SheetHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: min(940px, 100% - var(--gutter) * 2);
  margin: 0 auto;
  padding: clamp(22px, 4vw, 40px) 0 20px;
  text-align: center;
`

export const SheetCharacter = styled(Character)`
  width: clamp(56px, 9vw, 82px);
  height: clamp(56px, 9vw, 82px);
  flex: none;
  --character-fill: var(--fill);
`

export const SheetHeadBody = styled.div`
  min-width: 0;
`

/** The handwritten line above a title. */
export const Kicker = styled.p`
  margin: 0;
  font-family: var(--hand);
  font-size: 21px;
  font-weight: 600;
  color: var(--dim);
`

export const PageTitle = styled.h1`
  ${displayType}
  margin: 0;
  font-size: clamp(28px, 5vw, 44px);
`

export const Picker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 100%;
  margin-top: 14px;

  select {
    flex: 1;
    min-width: 0;
    height: 38px;
    max-width: max-content;
    padding: 0 34px 0 12px;
    border: 2px solid var(--text);
    border-radius: 6px;
    background-color: var(--bg);
    /* A chevron, drawn with two hard-edged wedges rather than a gradient wash. */
    background-image:
      linear-gradient(45deg, transparent 50%, var(--text) 50%),
      linear-gradient(135deg, var(--text) 50%, transparent 50%);
    background-position:
      right 17px center,
      right 12px center;
    background-size:
      6px 6px,
      6px 6px;
    background-repeat: no-repeat;
    appearance: none;
    font-size: 14px;
    font-weight: 700;
  }
`

export const PickerLabel = styled.span`
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dim);
`

export const Sheet = styled.div`
  width: min(940px, 100% - var(--gutter) * 2);

  /*
   * The bar is fixed, so it sits over the end of the sheet rather than after it. Room
   * for it below, or the last blank is one you can reach but never see.
   */
  margin: 0 auto var(--bar-room);
  padding: 22px clamp(16px, 3vw, 32px) 30px;
  border: 3px solid var(--text);
  border-radius: 10px;
  background: var(--surface);
  box-shadow: var(--shadow);

  @media (width <= 620px) {
    width: calc(100% - 24px);
    padding-inline: 14px;
  }
`

export const SheetTitle = styled.h2`
  ${displayType}
  margin-bottom: 18px;
  font-size: 24px;
  text-align: center;
`

/*
 * `minmax(0, 1fr)` rather than `1fr`, and `min-width: 0` on the blank itself.
 *
 * A grid item's automatic minimum size is min-content, and a blank's min-content is
 * its widest unbreakable part — the write-on line plus the Suggest button. On a narrow
 * phone that came to 315px inside a 262px sheet, so the column was sized to the
 * content and the rules and buttons ran straight through the sheet's right border.
 * Both halves are needed: the track has to be allowed to be small, and the item has to
 * be allowed to shrink into it.
 */
export const Blanks = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px 32px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (width <= 620px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

/**
 * Quiet until you approach it, so a sheet of thirty blanks is not thirty buttons —
 * but no longer invisible. At zero opacity the only way to discover the feature was
 * to happen to hover a field, which on a pointer device most people never did.
 */
export const Suggest = styled.button`
  flex: none;
  padding: 4px 6px 6px;
  border: none;
  background: none;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--dim);
  opacity: 0.5;
  transition:
    opacity 120ms ease-out,
    color 120ms ease-out;

  &:hover {
    color: var(--red);
  }

  &:hover,
  &:focus-visible {
    opacity: 1;
  }

  /* Nothing hovers on a touch screen, so there it is always visible — and sized for
     a finger, since 25px of it was not something anyone was going to hit. */
  @media (hover: none) {
    opacity: 1;
  }

  @media (pointer: coarse) {
    min-height: 44px;
    padding-inline: 10px;
  }
`

/** The write-on line: handwriting sits on it, the part of speech goes under. */
export const WriteOn = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  border-bottom: 2px solid var(--text);
  transition:
    border-color 120ms ease-out,
    background 120ms ease-out;

  &:focus-within {
    border-bottom-width: 3px;
    background: color-mix(in srgb, var(--yellow) 34%, transparent);
  }

  &:focus-within ${Suggest} {
    opacity: 1;
  }

  input {
    flex: 1;
    min-width: 0;
    height: 38px;
    padding: 0 2px;
    border: none;
    background: none;
    font-family: var(--hand);
    font-size: 26px;
    font-weight: 600;
    line-height: 1;
    color: var(--text);
  }

  input:focus {
    outline: none;
  }
`

export const Blank = styled.li`
  display: flex;
  gap: 10px;
  min-width: 0;

  &:hover ${Suggest} {
    opacity: 1;
  }
`

export const BlankNumber = styled.span`
  flex: none;
  width: 22px;
  padding-top: 2px;
  font-size: 14px;
  font-weight: 800;
  color: var(--dim);
  font-variant-numeric: tabular-nums;
`

export const BlankBody = styled.div`
  flex: 1;
  min-width: 0;
`

/** The label, printed under the line — the one thing the format insists on. */
export const BlankKind = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dim);
`

export const BlankHint = styled.span`
  display: block;
  margin-top: 2px;
  font-family: var(--story);
  font-size: 13px;
  font-style: italic;
  line-height: 1.35;
  color: var(--dim);
`

/*
 * Wraps the whole screen so the bar can answer to what the sheet is doing.
 *
 * On a phone the on-screen keyboard takes roughly half the viewport, and the bar was
 * taking a quarter of what remained — leaving about one and a half blanks visible
 * while you type into them. While a blank has focus the bar has nothing to offer:
 * the count is on screen anyway and the story cannot be read until the sheet is
 * finished. So it steps aside, and comes back the moment you are done typing.
 */
export const Page = styled.div`
  /* Roughly the bar's height plus the home indicator, kept in one place so the sheet's
     bottom margin and the bar cannot drift apart. */
  --bar-room: calc(86px + env(safe-area-inset-bottom));

  @media (width <= 620px) {
    &:has(${Sheet} input:focus) ${ActionBar} {
      transform: translateY(110%);
    }
  }

  ${ActionBar} {
    transition: transform 160ms ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    ${ActionBar} {
      transition: none;
    }
  }
`
