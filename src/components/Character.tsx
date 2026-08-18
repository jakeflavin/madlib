import type { Character as CharacterName } from '../types'

/**
 * The cast, drawn flat: fat ink outlines, crayon fills, no shading and no
 * gradients — the same construction as the cartoon faces on a Mad Libs cover,
 * with fantasy characters in their place.
 *
 * Composition follows what game-icons.net gets right about fantasy marks at
 * small sizes (see DESIGN.md): creatures are front-facing heads or busts, built
 * symmetrically from a few chunky shapes, with almost no interior detail. Their
 * icons are solid silhouettes and ours are outlined and filled, so nothing is
 * traced — only the way of composing is borrowed.
 *
 * Everything sits on a 64×64 grid. The fill comes from `--character-fill`:
 * paper when the character stands on a coloured cover, the story's own crayon
 * colour when it stands on paper.
 */
const FILL = 'var(--character-fill, var(--fill))'

const DRAWINGS: Record<CharacterName, React.ReactNode> = {
  dragon: (
    <>
      <path d="M19 22 L16 6 L29 17 Z" fill={FILL} />
      <path d="M45 22 L48 6 L35 17 Z" fill={FILL} />
      <circle cx="32" cy="36" r="20" fill={FILL} />
      <circle cx="24" cy="32" r="6.5" fill="#fff" />
      <circle cx="40" cy="32" r="6.5" fill="#fff" />
      <circle cx="25" cy="33" r="2.8" fill="var(--ink)" stroke="none" />
      <circle cx="41" cy="33" r="2.8" fill="var(--ink)" stroke="none" />
      <ellipse cx="32" cy="46" rx="10" ry="7" fill="#fff" />
      <path d="M27 45c3 3 7 3 10 0" />
      <circle cx="29" cy="42" r="1.3" fill="var(--ink)" stroke="none" />
      <circle cx="35" cy="42" r="1.3" fill="var(--ink)" stroke="none" />
    </>
  ),
  crown: (
    <>
      <path d="M11 45 L8 18 L22 29 L32 11 L42 29 L56 18 L53 45 Z" fill={FILL} />
      <path d="M9 45 H55 V54 H9 Z" fill={FILL} />
      <circle cx="8" cy="16" r="3.5" fill={FILL} />
      <circle cx="32" cy="9" r="3.5" fill={FILL} />
      <circle cx="56" cy="16" r="3.5" fill={FILL} />
      <circle cx="32" cy="38" r="3" fill="#fff" />
    </>
  ),
  tree: (
    <>
      <path d="M29 44 H35 V56 H29 Z" fill="#fff" />
      <path d="M32 8 L46 27 H18 Z" fill={FILL} />
      <path d="M32 22 L50 45 H14 Z" fill={FILL} />
      <circle cx="21" cy="34" r="2" fill="#fff" />
      <circle cx="44" cy="38" r="2" fill="#fff" />
      <circle cx="32" cy="16" r="2" fill="#fff" />
    </>
  ),
  mermaid: (
    <>
      {/* hair first, then the face — a bust, as the reference builds people */}
      <path
        d="M19 24c-1-11 5-18 13-18s14 7 13 18c-1 5-3 8-5 10-1-8-4-12-8-12s-7 4-8 12c-2-2-4-5-5-10Z"
        fill={FILL}
      />
      <circle cx="32" cy="18" r="8" fill="#fff" />
      <path d="M26 27c4 3 8 3 12 0 3 4 5 8 5 12H21c0-4 2-8 5-12Z" fill={FILL} />
      {/* tail, curling down to a fluke */}
      <path
        d="M21 39h22c1 7-2 12-7 15 6 2 10 6 11 11-7 1-13-1-17-5-4 4-10 6-17 5 1-5 5-9 11-11-5-3-8-8-7-15Z"
        fill={FILL}
      />
      <path d="M26 47c4 2 8 2 12 0" />
    </>
  ),
  castle: (
    <>
      <path d="M9 26h12v30H9Z" fill={FILL} />
      <path d="M43 26h12v30H43Z" fill={FILL} />
      <path d="M9 26V19h3v4h3v-4h3v4h3v-4h3v7Z" fill={FILL} />
      <path d="M43 26v-7h3v4h3v-4h3v4h3v-4h3v7Z" fill={FILL} />
      <path d="M21 34h22v22H21Z" fill={FILL} />
      <path d="M21 34v-6h4v3h4v-3h4v3h4v-3h4v6Z" fill={FILL} />
      <path d="M28 56v-9a4 4 0 0 1 8 0v9Z" fill="#fff" />
      <path d="M32 28V13" />
      <path d="M32 13h11l-4 4 4 4H32Z" fill={FILL} />
    </>
  ),
  fairy: (
    <>
      {/* two rounded wings a side — points don't read at 24px, lobes do */}
      <path d="M27 27C19 15 9 14 7 21c-2 8 8 13 20 11Z" fill={FILL} />
      <path d="M27 34c-8 5-14 13-10 18 5 5 11-2 14-13Z" fill={FILL} />
      <path d="M37 27c8-12 18-13 20-6 2 8-8 13-20 11Z" fill={FILL} />
      <path d="M37 34c8 5 14 13 10 18-5 5-11-2-14-13Z" fill={FILL} />
      <circle cx="32" cy="16" r="7" fill="#fff" />
      <path d="M32 23c4 0 7 6 7 14v7H25v-7c0-8 3-14 7-14Z" fill={FILL} />
    </>
  ),
  knight: (
    <>
      {/* a shield, not a helm: heraldry reads instantly at this size, and this
          is the knight who never carried a sword anyway */}
      <path d="M32 6 L53 12v17c0 14-9 24-21 29-12-5-21-15-21-29V12Z" fill={FILL} />
      <path d="M29 17h6v11h11v6H35v13h-6V34H18v-6h11Z" fill="#fff" />
    </>
  ),
  witch: (
    <>
      {/* a hat says witch faster than a face does */}
      <path d="M30 10c1-4 5-5 7-2l10 26H21Z" fill={FILL} />
      <path d="M20 36h24v7H20Z" fill="#fff" />
      <ellipse cx="32" cy="46" rx="24" ry="7" fill={FILL} />
      <circle cx="32" cy="39" r="2.4" fill="var(--ink)" stroke="none" />
      <path d="M52 14l1.6 3.8L57 19l-3.4 1.2L52 24l-1.6-3.8L47 19l3.4-1.2Z" fill={FILL} />
      <circle cx="10" cy="22" r="2.4" fill={FILL} />
    </>
  ),
  unicorn: (
    <>
      {/* front-facing, to match the others; a long face and a horn do the work */}
      <path d="M21 20 L17 6 L28 15 Z" fill={FILL} />
      <path d="M43 20 L47 6 L36 15 Z" fill={FILL} />
      <path d="M28 17 L32 1 L36 17 Z" fill={FILL} />
      <path d="M20 26c0-9 5-15 12-15s12 6 12 15v13c0 9-5 15-12 15s-12-6-12-15Z" fill={FILL} />
      <ellipse cx="32" cy="44" rx="9" ry="7" fill="#fff" />
      <circle cx="26" cy="29" r="2.6" fill="var(--ink)" stroke="none" />
      <circle cx="38" cy="29" r="2.6" fill="var(--ink)" stroke="none" />
      <circle cx="29" cy="43" r="1.5" fill="var(--ink)" stroke="none" />
      <circle cx="35" cy="43" r="1.5" fill="var(--ink)" stroke="none" />
    </>
  ),
  troll: (
    <>
      <circle cx="10" cy="34" r="7" fill={FILL} />
      <circle cx="54" cy="34" r="7" fill={FILL} />
      {/* wide skull, heavy brow, tusks over the lip */}
      <path d="M12 30c0-11 9-19 20-19s20 8 20 19v10c0 10-9 17-20 17s-20-7-20-17Z" fill={FILL} />
      <path d="M18 27c4-3 9-3 12 0M34 27c3-3 8-3 12 0" />
      <circle cx="24" cy="34" r="3.2" fill="#fff" />
      <circle cx="40" cy="34" r="3.2" fill="#fff" />
      <ellipse cx="32" cy="45" rx="11" ry="6" fill="#fff" />
      <path d="M24 51 L26 37 L32 51 Z" fill="#fff" />
      <path d="M40 51 L38 37 L32 51 Z" fill="#fff" />
    </>
  ),
  book: (
    <>
      <path d="M32 20c-6-5-13-7-22-6v32c9-1 16 1 22 6Z" fill={FILL} />
      <path d="M32 20c6-5 13-7 22-6v32c-9-1-16 1-22 6Z" fill={FILL} />
      <path d="M32 20v32" />
      <path d="M42 14v16l4-4 4 4V13" fill="#fff" />
      <path d="M32 4l1.8 4.2L38 10l-4.2 1.8L32 16l-1.8-4.2L26 10l4.2-1.8Z" fill={FILL} />
    </>
  ),
  phoenix: (
    <>
      {/* wings up, the pose every firebird gets drawn in */}
      <path d="M27 30C20 16 10 10 4 12c2 12 10 20 22 24Z" fill={FILL} />
      <path d="M37 30c7-14 17-20 23-18-2 12-10 20-22 24Z" fill={FILL} />
      <path d="M32 20c5 0 9 6 9 14 0 7-4 12-9 12s-9-5-9-12c0-8 4-14 9-14Z" fill={FILL} />
      <circle cx="32" cy="17" r="6" fill="#fff" />
      <path d="M38 17h6l-4 3Z" fill={FILL} />
      <circle cx="33" cy="16" r="1.8" fill="var(--ink)" stroke="none" />
      <path d="M26 45c-2 6-1 11 2 15 2-4 3-8 3-12" fill={FILL} />
      <path d="M38 45c2 6 1 11-2 15-2-4-3-8-3-12" fill={FILL} />
    </>
  ),
}

export function Character({ name, className }: { name: CharacterName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {DRAWINGS[name]}
    </svg>
  )
}
