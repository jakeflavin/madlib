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
 * The hard part is that a round head with two pointed ears is a cat, whatever
 * you meant it to be. Each creature here leans on the one feature that can only
 * belong to it: the dragon its snout and fangs, the unicorn its horn, the troll
 * its underbite, the phoenix its flame tail.
 *
 * Everything sits on a 64×64 grid. The fill comes from `--character-fill`:
 * paper when the character stands on a coloured cover, the story's own crayon
 * colour when it stands on paper.
 */
const FILL = 'var(--character-fill, var(--fill))'
const INK = 'var(--ink)'

const DRAWINGS: Record<CharacterName, React.ReactNode> = {
  dragon: (
    <>
      {/* in profile: a long snout and a jawful of teeth are the only things
          that cannot be mistaken for a cat or an owl */}
      <path d="M24 16 L22 3 L34 13 Z" fill={FILL} />
      <path d="M15 25 L4 20 L13 33 Z" fill={FILL} />
      <path
        d="M14 35c0-12 9-20 20-20 6 0 11 2 15 6l7 8c2 2 1 5-2 5h-5l2 4c1 2 0 4-3 4l-11 1c-6 4-13 5-18 2-4-2-5-5-5-10Z"
        fill={FILL}
      />
      <path d="M28 45h15" />
      <path d="M31 45 L32 50 L34 45 Z" fill="#fff" />
      <path d="M38 45 L39 50 L41 45 Z" fill="#fff" />
      <circle cx="29" cy="29" r="4.6" fill="#fff" />
      <circle cx="30" cy="29" r="2" fill={INK} stroke="none" />
      <circle cx="51" cy="31" r="1.7" fill={INK} stroke="none" />
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
      <path d="M28 44 H36 V58 H28 Z" fill="#fff" />
      <path d="M32 4 L47 25 H17 Z" fill={FILL} />
      <path d="M32 19 L52 45 H12 Z" fill={FILL} />
      {/* snow lying along each tier, not dotted over it */}
      <path d="M17 25h30l-5 5-5-3-5 4-5-4-5 3Z" fill="#fff" />
      <path d="M12 45h40l-6 5-6-3-6 4-6-4-6 3Z" fill="#fff" />
    </>
  ),
  mermaid: (
    <>
      <path
        d="M20 22c0-9 5-15 12-15s12 6 12 15c0 4-1 7-3 9-1-7-4-10-9-10s-8 3-9 10c-2-2-3-5-3-9Z"
        fill={FILL}
      />
      <circle cx="32" cy="17" r="7" fill="#fff" />
      {/* shoulders and arms, so the top half is plainly a person */}
      <path d="M23 32c0-5 4-8 9-8s9 3 9 8l-2 7H25Z" fill={FILL} />
      <path d="M23 33c-3 2-4 5-4 9M41 33c3 2 4 5 4 9" />
      {/* then a narrower tail, and a fluke wide enough to read */}
      <path d="M27 39h10c2 6 1 11-2 15l-3 4-3-4c-3-4-4-9-2-15Z" fill={FILL} />
      <path d="M32 55c-9 1-15 5-17 10 6 2 12 1 17-3 5 4 11 5 17 3-2-5-8-9-17-10Z" fill={FILL} />
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
      {/* wings behind the figure, not beside it */}
      <path d="M28 26c-9-9-18-9-21-3-3 7 5 14 19 13Z" fill={FILL} />
      <path d="M36 26c9-9 18-9 21-3 3 7-5 14-19 13Z" fill={FILL} />
      <circle cx="32" cy="15" r="7" fill="#fff" />
      {/* a dress and legs read as a person; a blob reads as a moth */}
      <path d="M32 22c5 0 10 8 12 17 1 3-1 5-4 5H24c-3 0-5-2-4-5 2-9 7-17 12-17Z" fill={FILL} />
      <path d="M29 44v7M35 44v7" />
      {/* wand */}
      <path d="M44 42 L52 34" />
      <path d="M54 26l1.5 4.5L60 32l-4.5 1.5L54 38l-1.5-4.5L48 32l4.5-1.5Z" fill={FILL} />
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
      <circle cx="32" cy="39" r="2.4" fill={INK} stroke="none" />
      <path d="M52 14l1.6 3.8L57 19l-3.4 1.2L52 24l-1.6-3.8L47 19l3.4-1.2Z" fill={FILL} />
      <circle cx="10" cy="22" r="2.4" fill={FILL} />
    </>
  ),
  unicorn: (
    <>
      {/* head and neck in profile, facing left: a straight nose bridge, a jaw,
          and a thick neck are what make a horse rather than a blob */}
      <path
        d="M13 45c0-6 4-11 10-14l8-11c2-3 6-3 8 0 6 8 9 18 9 29v9H29v-9c0-4-3-6-7-6h-5c-3 0-4-1-4-3Z"
        fill={FILL}
      />
      {/* mane down the back of the neck */}
      <path d="M39 20c6 8 9 18 9 29h-6c0-11-3-20-7-26Z" fill={FILL} />
      {/* ear, then the horn — which must out-top everything else on the grid */}
      <path d="M36 17 L41 7 L44 18 Z" fill={FILL} />
      <path d="M28 16 L33 2 L36 17 Z" fill={FILL} />
      <path d="M30.5 10h4" />
      <circle cx="30" cy="28" r="2.6" fill={INK} stroke="none" />
      <circle cx="18" cy="42" r="1.7" fill={INK} stroke="none" />
    </>
  ),
  troll: (
    <>
      <path d="M13 30 L5 25 L10 39 Z" fill={FILL} />
      <path d="M51 30 L59 25 L54 39 Z" fill={FILL} />
      {/* a flat top and a jaw wider than the skull; round plus big ears is an ape */}
      <path
        d="M14 23c0-7 8-11 18-11s18 4 18 11v11c0 4-3 7-7 8l-3 1c-2 5-4 7-8 7s-6-2-8-7l-3-1c-4-1-7-4-7-8Z"
        fill={FILL}
      />
      <path d="M19 27h11M34 27h11" />
      <circle cx="25" cy="32" r="2.3" fill="#fff" />
      <circle cx="39" cy="32" r="2.3" fill="#fff" />
      <path d="M32 33 L37 42 H27 Z" fill="#fff" />
      <path d="M25 46h14" />
      {/* the underbite is the whole point */}
      <path d="M28 46 L29 36 L32 46 Z" fill="#fff" />
      <path d="M36 46 L35 36 L32 46 Z" fill="#fff" />
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
      <path d="M26 28C18 14 8 8 3 11c1 13 10 21 23 24Z" fill={FILL} />
      <path d="M38 28C46 14 56 8 61 11c-1 13-10 21-23 24Z" fill={FILL} />
      {/* flame tail, because a bird without one is just a bird */}
      <path d="M26 38c-4 8-4 15 1 21 2-4 3-9 3-13 1 5 3 10 6 13 4-6 4-14 0-21Z" fill={FILL} />
      <path d="M32 17c5 0 8 6 8 13 0 6-3 11-8 11s-8-5-8-11c0-7 3-13 8-13Z" fill={FILL} />
      <circle cx="32" cy="15" r="6" fill="#fff" />
      <path d="M32 9c0-5 3-7 6-7-2 2-3 5-2 7Z" fill={FILL} />
      <path d="M38 15h6l-4 4Z" fill={FILL} />
      <circle cx="33" cy="14" r="1.7" fill={INK} stroke="none" />
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
