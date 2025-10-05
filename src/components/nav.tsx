'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/posts',
      text: 'Blog',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/work',
      text: 'Work',
    },
  ]

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base bg-main font-base w450:gap-4 mx-auto flex w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-border dark:hover:border-darkBorder rounded-base border-2 px-2 py-1 transition-colors',
                path === link.path
                  ? 'border-border dark:border-darkBorder'
                  : 'border-transparent',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
        <span />
      </nav>
    </div>
  )
}
