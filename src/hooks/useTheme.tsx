import { createContext, useContext, type ReactNode } from 'react'
import { usePersistentState } from './usePersistentState'
import { useAppliedTheme, type Theme } from './useAppliedTheme'

type ThemeValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeValue | null>(null)

/*
 * The theme is applied here rather than in the masthead that shows the control, so a
 * screen that renders without a masthead is still themed.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = usePersistentState<Theme>('fable.theme', 'system')
  useAppliedTheme(theme)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeValue {
  const value = useContext(ThemeContext)
  if (!value) throw new Error('useTheme must be used inside ThemeProvider')
  return value
}
