import type { ReactNode } from 'react'

interface TopBarProps {
  onHome: () => void
  /** Buttons for the right-hand side. */
  children?: ReactNode
  /** 0–100. Draws the reading line along the bar's lower edge. */
  progress?: number
}

/**
 * Sticky chrome across every screen: wordmark left, actions right, and on the
 * reader a progress line along the bottom edge.
 */
export function TopBar({ onHome, children, progress }: TopBarProps) {
  return (
    <header className="topbar" style={{ '--read': `${progress ?? 0}%` } as React.CSSProperties}>
      <div className="topbar-inner">
        <button type="button" className="wordmark" onClick={onHome}>
          Fable
        </button>
        <div className="topbar-actions">{children}</div>
      </div>
    </header>
  )
}
