import type { Emblem as EmblemName } from '../types'

/**
 * Line art standing in for key art. Drawn rather than blurred: flat strokes in
 * the story's accent, so a plate reads as an engraved book plate instead of a
 * gradient wash.
 */
const PATHS: Record<EmblemName, React.ReactNode> = {
  flame: (
    <>
      <path d="M12 2.5c3 3.6 4.8 6.2 4.8 9.1a4.8 4.8 0 0 1-9.6 0c0-2.9 1.8-5.5 4.8-9.1Z" />
      <path d="M12 12.6c1.1 1.3 1.7 2.2 1.7 3.1a1.7 1.7 0 0 1-3.4 0c0-.9.6-1.8 1.7-3.1Z" />
    </>
  ),
  crown: (
    <>
      <path d="M3.5 18.5h17" />
      <path d="M4.5 18.5 3 7.5l5.2 3.6L12 4l3.8 7.1L21 7.5l-1.5 11" />
      <circle cx="12" cy="14" r="1" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2.5v19M3.8 7.2l16.4 9.6M20.2 7.2 3.8 16.8" />
      <path d="M12 5.6 9.8 3.9M12 5.6l2.2-1.7M12 18.4l-2.2 1.7M12 18.4l2.2 1.7" />
      <path d="m6.5 9-2.7.2M6.5 9 5.6 6.4M17.5 15l2.7-.2M17.5 15l.9 2.6" />
    </>
  ),
  wave: (
    <>
      <path d="M2.5 9.5c2.2-2.4 4.4-2.4 6.6 0s4.4 2.4 6.6 0 4.4-2.4 5.8 0" />
      <path d="M2.5 14.5c2.2-2.4 4.4-2.4 6.6 0s4.4 2.4 6.6 0 4.4-2.4 5.8 0" />
      <path d="M2.5 19c2.2-2.4 4.4-2.4 6.6 0" />
    </>
  ),
  cloud: (
    <>
      <path d="M7.5 18h9a3.6 3.6 0 0 0 .6-7.2 5.2 5.2 0 0 0-9.9 1.3A3.1 3.1 0 0 0 7.5 18Z" />
      <path d="M19 4.5v3M17.5 6h3" />
    </>
  ),
  lantern: (
    <>
      <path d="M9.5 3.5h5M12 3.5v2.2" />
      <path d="M7.6 5.7h8.8l1.3 8.4a5.7 5.7 0 0 1-11.4 0L7.6 5.7Z" />
      <path d="M12 16.2v3.3M9.5 9.6h5" />
    </>
  ),
}

export function Emblem({ name, className }: { name: EmblemName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
