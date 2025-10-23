'use client'

import { useTheme } from './theme-provider'
import { SunIcon, MoonIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const { theme, toggleTheme, hasMounted } = useTheme()

  return (
        <Button variant={"neutral"} onClick={toggleTheme} disabled={!hasMounted}>{theme === 'dark' ? <MoonIcon /> : <SunIcon />}</Button>
  )
}
