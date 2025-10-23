'use client'

import { useTheme } from './theme-provider'

export default function ThemeToggle() {
  const { theme, toggleTheme, hasMounted } = useTheme()

  const label =
    theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      className="flex min-w-[180px] items-center justify-center gap-3 border-4 border-border bg-main px-6 py-3 font-heading uppercase tracking-[0.25rem] text-mtext shadow-[6px_6px_0_0_var(--shadow-color)] transition-transform hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-ringOffset disabled:cursor-not-allowed disabled:opacity-70"
      onClick={toggleTheme}
      aria-label={label}
      disabled={!hasMounted}
    >
      <span className="text-xs sm:text-sm">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
      <span className="text-lg">
        {theme === 'dark' ? '☾' : '☼'}
      </span>
    </button>
  )
}
