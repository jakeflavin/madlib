import { css } from 'styled-components'

/**
 * The cartoon face, and the tracking that keeps it readable at size.
 *
 * Shared rather than repeated because it is what makes the app look like one booklet:
 * every heading in it — the wordmark, a cover, a chapter — is set the same way.
 */
export const displayType = css`
  font-family: var(--display);
  letter-spacing: 0.01em;
  text-wrap: balance;
`
