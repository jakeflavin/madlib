import type { Character as CharacterName } from '@/types'

/**
 * The cast is deliberately drawn like the little illustrations on a printed
 * activity-book cover: one sturdy silhouette, a few large secondary shapes,
 * and only the details that survive when the art is reduced to 56px.
 */
/*
 * The drawing's own ink and paper, not the page's. It is printed on the story's
 * accent — a pastel that is the same colour in either theme — so repainting it with
 * the page would put a cream line on a cream-lit pastel and lose the line art.
 */
const FILL = 'var(--character-fill, var(--fill))'
const INK = 'var(--art-ink)'
const PAPER = 'var(--art-paper)'

const DRAWINGS: Record<CharacterName, React.ReactNode> = {
  dragon: (
    <>
      {/* Flying side profile: a bat wing, long tail and a proper reptile snout. */}
      <path d="M29 34 7 7l5 28-9 11 26-5Z" fill={FILL} />
      <path d="M12 20 27 36M11 35l16 2" />
      <path d="M28 39c-8 1-16 7-20 16 10 1 18-2 24-9Z" fill={FILL} />
      <path
        d="M24 48c0-14 4-24 13-30l2-10 6 8c5-1 10 2 13 6l5 1-5 5c-2 7-8 12-16 14l-3 15h-8v-10h-7Z"
        fill={FILL}
      />
      <path d="m34 20 4-12 5 13" fill={FILL} />
      <path d="M44 26h14l-5 5 5 4H43" fill={FILL} />
      <circle cx="45" cy="23" r="2" fill={INK} stroke="none" />
      <path d="m48 35 3 5 3-5 3 5" fill={PAPER} />
      <path d="m26 43 4-5 3 5 3-5" fill={FILL} />
    </>
  ),
  crown: (
    <>
      <path d="m9 45 3-27 13 12L32 9l7 21 13-12 3 27Z" fill={FILL} />
      <path d="M9 45h46v10H9Z" fill={FILL} />
      <circle cx="12" cy="17" r="4" fill={FILL} />
      <circle cx="32" cy="8" r="4" fill={FILL} />
      <circle cx="52" cy="17" r="4" fill={FILL} />
      <path d="M25 38h14l-7-8Z" fill={PAPER} />
      <path d="M16 50h32" />
    </>
  ),
  tree: (
    <>
      <path d="M27 42h10v16H27Z" fill={FILL} />
      <path d="m32 4 16 22H16Z" fill={FILL} />
      <path d="m32 17 22 29H10Z" fill={FILL} />
      <path d="M17 26h31l-5 5-5-2-6 4-6-4-5 2Z" fill={PAPER} />
      <path d="M10 46h44l-6 5-6-3-10 4-10-4-6 3Z" fill={PAPER} />
      <path d="M25 58h14" />
    </>
  ),
  mermaid: (
    <>
      {/* A swimming profile, with the tail taking up half the drawing. */}
      <path d="M16 25c0-9 6-15 14-15 7 0 12 5 12 12v8H19Z" fill={FILL} />
      <path d="M24 17c3-5 9-5 13-1 3 4 2 10-2 13l-8 2c-4-3-5-9-3-14Z" fill={PAPER} />
      <circle cx="34" cy="22" r="1.6" fill={INK} stroke="none" />
      <path d="M36 27h4" />
      <path d="M24 31c5-4 11-2 14 4l3 6-9 3-10-5Z" fill={FILL} />
      <path d="M28 39c6 3 10 8 11 14 1 5-2 8-6 9-5-6-9-12-12-19Z" fill={FILL} />
      <path d="M34 54c-8 1-13 5-15 10 6 1 11-1 15-5 4 4 9 6 15 5-2-5-7-9-15-10Z" fill={FILL} />
      <path d="M19 32c-4 2-6 6-6 10M29 46l6 3m-4 4 6 3" />
    </>
  ),
  castle: (
    <>
      <path d="M9 25h13v31H9ZM42 25h13v31H42Z" fill={FILL} />
      <path d="M22 32h20v24H22Z" fill={FILL} />
      <path
        d="M9 25v-8h4v5h5v-5h4v8M42 25v-8h4v5h5v-5h4v8M22 32v-7h4v4h4v-4h4v4h4v-4h4v7"
        fill={FILL}
      />
      <path d="M28 56v-9a4 4 0 0 1 8 0v9Z" fill={PAPER} />
      <path d="M32 25V9m0 0h13l-5 4 5 4H32Z" fill={FILL} />
      <path d="M13 34h5m28 0h5M27 40h3m7 0h3" />
    </>
  ),
  fairy: (
    <>
      {/* A tiny flying person, not a wing-shaped abstract mark. */}
      <path
        d="M27 29C16 12 6 15 7 25c1 8 10 12 21 8ZM37 29C48 12 58 15 57 25c-1 8-10 12-21 8Z"
        fill={FILL}
      />
      <circle cx="32" cy="16" r="6" fill={PAPER} />
      <path d="M26 15c1-6 4-8 7-8 4 0 6 3 7 8-4-2-10-2-14 0Z" fill={FILL} />
      <path d="M28 23h8l5 20H23Z" fill={FILL} />
      <path d="m26 29-7 6m19-6 7 6M29 43v8m6-8v8m2-20 11-9" />
      <path d="m53 16 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill={FILL} />
    </>
  ),
  knight: (
    <>
      <path d="M32 5 53 12v18c0 13-8 23-21 29C19 53 11 43 11 30V12Z" fill={FILL} />
      <path d="M29 17h6v11h11v6H35v13h-6V34H18v-6h11Z" fill={PAPER} />
      <path d="M20 15 32 11l12 4" />
    </>
  ),
  witch: (
    <>
      <path d="M30 8c3-5 8-3 8 2l9 27H20Z" fill={FILL} />
      <path d="M20 36h27v7H20Z" fill={PAPER} />
      <path d="M18 43c-7 2-10 6-10 9h48c0-4-4-8-11-9Z" fill={FILL} />
      <circle cx="32" cy="47" r="3" fill={INK} stroke="none" />
      <path
        d="m50 14 1.5 4L56 19.5l-4.5 1.5L50 25l-1.5-4-4.5-1.5 4.5-1.5ZM14 20l1 3 3 1-3 1-1 3-1-3-3-1 3-1Z"
        fill={FILL}
      />
    </>
  ),
  unicorn: (
    <>
      {/* A full pony in profile so the horn belongs to a whole unicorn. */}
      <path
        d="M8 42c0-9 8-14 18-12l8 3 4-10c3-6 9-8 14-5 4 2 6 5 7 9l5 3-6 4c-3 4-8 6-14 6l-2 13h-7V43H26v10h-7V43H8Z"
        fill={FILL}
      />
      <path d="M15 36C9 34 5 37 4 42c5 1 9 0 13-3Z" fill={FILL} />
      <path d="m40 23-3-10 10 7" fill={FILL} />
      <path d="m47 21 9-16-4 19Z" fill={FILL} />
      <path d="m51 12 3 2m-5 4 4 2" />
      <path d="M33 29c-5 7-6 14-5 20h7c0-9 2-15 7-20Z" fill={FILL} />
      <circle cx="50" cy="27" r="2" fill={INK} stroke="none" />
      <circle cx="60" cy="32" r="1.3" fill={INK} stroke="none" />
    </>
  ),
  troll: (
    <>
      <path d="m17 30-11-7 5 16m36-9 11-7-5 16" fill={FILL} />
      <path d="M13 28c0-10 8-16 19-16s19 6 19 16v12c0 10-8 17-19 17S13 50 13 40Z" fill={FILL} />
      <path d="M19 27h10m6 0h10" />
      <circle cx="25" cy="34" r="3" fill={PAPER} />
      <circle cx="39" cy="34" r="3" fill={PAPER} />
      <circle cx="25" cy="34" r="1" fill={INK} stroke="none" />
      <circle cx="39" cy="34" r="1" fill={INK} stroke="none" />
      <ellipse cx="32" cy="41" rx="5" ry="4" fill={PAPER} />
      <path d="M27 49c3 3 7 3 10 0" />
    </>
  ),
  book: (
    <>
      <path d="M32 20c-7-5-14-6-23-4v33c9-2 16 0 23 5Z" fill={FILL} />
      <path d="M32 20c7-5 14-6 23-4v33c-9-2-16 0-23 5Z" fill={FILL} />
      <path d="M32 20v34" />
      <path d="M44 16v17l5-4 5 4V15" fill={PAPER} />
    </>
  ),
  phoenix: (
    <>
      {/* A rising firebird: feathered wings, crest and three flame-tail plumes. */}
      <path d="M28 33C15 25 8 14 9 6c11 4 19 12 23 24Z" fill={FILL} />
      <path d="M36 33C47 25 56 14 55 6 44 10 37 18 33 30Z" fill={FILL} />
      <path d="M32 15c6 0 10 6 10 15 0 8-4 14-10 14s-10-6-10-14c0-9 4-15 10-15Z" fill={FILL} />
      <circle cx="32" cy="17" r="6" fill={PAPER} />
      <path d="m27 12 2-11 4 9 5-8 1 11" fill={FILL} />
      <path d="m38 17 8 3-8 3Z" fill={FILL} />
      <circle cx="34" cy="16" r="1.5" fill={INK} stroke="none" />
      <path d="m24 35-7 7m23-7 7 7" />
      <path d="M27 42c-6 7-6 14-1 20 2-5 3-10 3-14 2 6 4 11 8 14 5-7 5-14 0-20Z" fill={FILL} />
    </>
  ),
}

export function Character({ name, className }: { name: CharacterName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke={INK}
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {DRAWINGS[name]}
    </svg>
  )
}
