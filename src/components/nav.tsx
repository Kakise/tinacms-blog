'use client'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import ThemeToggle from './theme-toggle'
import { Button } from '@/components/ui/button'


export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/posts/',
      text: 'Blog',
    },
    {
      path: '/about/',
      text: 'About',
    },
    {
      path: '/work/',
      text: 'Work',
    },
  ]

  return (
      <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
        <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-4">
          {links.map((link) => {
            const isActive = path === link.path
            return (
              <Link
                key={link.path}
                aria-current={isActive ? 'page' : undefined}
                href={link.path}
              >
                <Button variant={isActive ? "clicked" : "default"}>{link.text}</Button>
              </Link>
            )
          })}
          <ThemeToggle />
        </div>
      </div>
  )
}
