import type { Character as CharacterName } from '../types'

/**
 * The cast, drawn flat: fat ink outlines, crayon fills, no shading and no
 * gradients — the same construction as the cartoon faces on a Mad Libs cover,
 * with fantasy characters in their place.
 *
 * A first pass, deliberately kept in one file so they can all be redrawn
 * without touching anything else. Every shape is on a 64×64 grid. The fill
 * comes from `--character-fill`: paper when the character stands on a coloured
 * cover, the story's own crayon colour when it stands on paper.
 */
const DRAWINGS: Record<CharacterName, React.ReactNode> = {
  dragon: (
    <>
      {/* horns */}
      <path d="M19 22 L16 6 L29 17 Z" fill="var(--character-fill, var(--fill))" />
      <path d="M45 22 L48 6 L35 17 Z" fill="var(--character-fill, var(--fill))" />
      {/* head */}
      <circle cx="32" cy="36" r="20" fill="var(--character-fill, var(--fill))" />
      {/* eyes */}
      <circle cx="24" cy="32" r="6.5" fill="#fff" />
      <circle cx="40" cy="32" r="6.5" fill="#fff" />
      <circle cx="25" cy="33" r="2.8" fill="var(--ink)" stroke="none" />
      <circle cx="41" cy="33" r="2.8" fill="var(--ink)" stroke="none" />
      {/* snout and grin */}
      <ellipse cx="32" cy="46" rx="10" ry="7" fill="#fff" />
      <path d="M27 45c3 3 7 3 10 0" />
      <circle cx="29" cy="42" r="1.3" fill="var(--ink)" stroke="none" />
      <circle cx="35" cy="42" r="1.3" fill="var(--ink)" stroke="none" />
    </>
  ),
  crown: (
    <>
      <path
        d="M11 45 L8 18 L22 29 L32 11 L42 29 L56 18 L53 45 Z"
        fill="var(--character-fill, var(--fill))"
      />
      <path d="M9 45 H55 V54 H9 Z" fill="var(--character-fill, var(--fill))" />
      <circle cx="8" cy="16" r="3.5" fill="var(--character-fill, var(--fill))" />
      <circle cx="32" cy="9" r="3.5" fill="var(--character-fill, var(--fill))" />
      <circle cx="56" cy="16" r="3.5" fill="var(--character-fill, var(--fill))" />
      <circle cx="32" cy="38" r="3" fill="#fff" />
    </>
  ),
  tree: (
    <>
      <path d="M29 44 H35 V56 H29 Z" fill="#fff" />
      <path d="M32 8 L46 27 H18 Z" fill="var(--character-fill, var(--fill))" />
      <path d="M32 22 L50 45 H14 Z" fill="var(--character-fill, var(--fill))" />
      {/* snow */}
      <circle cx="21" cy="34" r="2" fill="#fff" />
      <circle cx="44" cy="38" r="2" fill="#fff" />
      <circle cx="32" cy="16" r="2" fill="#fff" />
    </>
  ),
  mermaid: (
    <>
      {/* a tail, curling up out of the water */}
      <path
        d="M36 6c-4 11-5 20-2 27 3 6 3 11-1 15 7 3 12 8 14 14-8 1-15-1-19-6-4 5-11 7-19 6 2-7 7-12 15-15-4-8-3-18 3-27 2-5 5-9 9-14Z"
        fill="var(--character-fill, var(--fill))"
      />
      <path d="M30 24c4 2 7 2 10 0" />
      <path d="M28 34c4 2 8 2 12 0" />
      {/* bubbles */}
      <circle cx="50" cy="14" r="3.5" fill="#fff" />
      <circle cx="57" cy="24" r="2.2" fill="#fff" />
    </>
  ),
  castle: (
    <>
      {/* towers */}
      <path d="M9 26h12v30H9Z" fill="var(--character-fill, var(--fill))" />
      <path d="M43 26h12v30H43Z" fill="var(--character-fill, var(--fill))" />
      <path d="M9 26V19h3v4h3v-4h3v4h3v-4h3v7Z" fill="var(--character-fill, var(--fill))" />
      <path d="M43 26v-7h3v4h3v-4h3v4h3v-4h3v7Z" fill="var(--character-fill, var(--fill))" />
      {/* keep */}
      <path d="M21 34h22v22H21Z" fill="var(--character-fill, var(--fill))" />
      <path d="M21 34v-6h4v3h4v-3h4v3h4v-3h4v6Z" fill="var(--character-fill, var(--fill))" />
      {/* door and flag */}
      <path d="M28 56v-9a4 4 0 0 1 8 0v9Z" fill="#fff" />
      <path d="M32 28V13" />
      <path d="M32 13h11l-4 4 4 4H32Z" fill="var(--character-fill, var(--fill))" />
    </>
  ),
  fairy: (
    <>
      {/* wings, a pair each side */}
      <path
        d="M28 28C20 14 10 12 7 19c-3 7 6 14 21 13Z"
        fill="var(--character-fill, var(--fill))"
      />
      <path
        d="M28 34C19 40 12 48 16 53c4 5 11 0 14-12Z"
        fill="var(--character-fill, var(--fill))"
      />
      <path
        d="M36 28C44 14 54 12 57 19c3 7-6 14-21 13Z"
        fill="var(--character-fill, var(--fill))"
      />
      <path d="M36 34c9 6 16 14 12 19-4 5-11 0-14-12Z" fill="var(--character-fill, var(--fill))" />
      {/* head and body */}
      <circle cx="32" cy="16" r="6" fill="#fff" />
      <path
        d="M32 22c4 0 7 6 7 13v9h-14v-9c0-7 3-13 7-13Z"
        fill="var(--character-fill, var(--fill))"
      />
      {/* a spark */}
      <path
        d="M53 40l1.6 3.8L58 45l-3.4 1.2L53 50l-1.6-3.8L48 45l3.4-1.2Z"
        fill="var(--character-fill, var(--fill))"
      />
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
