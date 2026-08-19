import { css, styled } from 'styled-components'

/**
 * The app's buttons. Shared, because a story, the shelf and the library all use them.
 *
 * The heavy border and hard shadow are the booklet's, not a framework's: pressing moves
 * the button into its own shadow rather than dimming it.
 */
const pressable = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 20px;
  border: 3px solid var(--text);
  border-radius: 6px;
  font-family: var(--ui);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: var(--shadow);
  transition:
    transform 120ms ease-out,
    box-shadow 120ms ease-out,
    background 120ms ease-out;

  /* Pressing moves the thing into its own shadow. */
  &:hover:not(:disabled) {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--text);
  }

  &:active:not(:disabled) {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 var(--text);
  }

  &:disabled {
    background: var(--surface);
    color: var(--dim);
    box-shadow: none;
    transform: none;
    cursor: default;
  }
`

export const PrimaryButton = styled.button`
  ${pressable}
  background: var(--red);
  color: #fff;
`

export const SecondaryButton = styled.button`
  ${pressable}
  background: var(--bg);
  color: var(--text);
`

/** For the masthead, where a bordered button would fight the band it sits on. */
export const QuietButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  background: none;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  color: currentColor;
  transition: background 120ms ease-out;

  &:hover:not(:disabled) {
    background: rgb(255 255 255 / 18%);
  }

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`

/**
 * Square, because it carries an icon and no label — a text button's padding would make it
 * read as a wider, more important control than it is.
 */
export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex: none;
  border: none;
  border-radius: 4px;
  background: none;
  color: currentColor;
  transition: background 120ms ease-out;

  &:hover:not(:disabled) {
    background: rgb(255 255 255 / 18%);
  }
`
