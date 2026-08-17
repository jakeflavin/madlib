import { useMemo } from 'react'

/**
 * Ambient drifting embers behind everything. Purely decorative, so it sits
 * behind aria-hidden and switches itself off for reduced-motion readers via CSS.
 */
export function Motes({ count = 26 }: { count?: number }) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        key: index,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 3.5,
        delay: Math.random() * -30,
        duration: 22 + Math.random() * 26,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.25 + Math.random() * 0.5,
      })),
    [count],
  )

  return (
    <div className="motes" aria-hidden="true">
      {motes.map((mote) => (
        <span
          key={mote.key}
          className="mote"
          style={
            {
              left: `${mote.left}%`,
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              opacity: mote.opacity,
              animationDelay: `${mote.delay}s`,
              animationDuration: `${mote.duration}s`,
              '--drift': `${mote.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
