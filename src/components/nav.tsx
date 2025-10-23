'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import ThemeToggle from './theme-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"

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

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "https://ui.shadcn.com/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "https://ui.shadcn.com/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "https://ui.shadcn.com/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "https://ui.shadcn.com/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "https://ui.shadcn.com/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "https://ui.shadcn.com/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  return (
    <>
      <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
        <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-4">
          {links.map((link) => {
            console.log(path, link.path)
            const isActive = path === link.path
            return (
              <Link
                key={link.path}
                className={clsx(
                  'border-border bg-main font-heading text-mtext focus-visible:ring-ring focus-visible:ring-offset-ringOffset before:bg-mtext relative border-4 px-6 py-3 text-xs tracking-[0.3rem] uppercase shadow-[6px_6px_0_0_var(--shadow-color)] transition-transform before:absolute before:right-4 before:-bottom-2 before:left-4 before:h-1 before:opacity-0 before:transition-opacity hover:-translate-y-[2px] focus-visible:ring-4 focus-visible:ring-offset-4 focus-visible:outline-none sm:text-sm',
                  isActive && 'before:opacity-100',
                )}
                aria-current={isActive ? 'page' : undefined}
                href={link.path}
              >
                {link.text}
              </Link>
            )
          })}
          <ThemeToggle />
        </div>
      </div>
      <NavigationMenu className="z-5">
        <NavigationMenuList>
          <NavigationMenuItem className="hidden sm:block">
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] gap-3 p-2 lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="rounded-base flex h-full w-full flex-col justify-end p-6 no-underline outline-hidden select-none"
                      href="https://ui.shadcn.com"
                    >
                      <div className="font-heading mt-4 mb-2 text-lg">
                        shadcn/ui
                      </div>
                      <p className="font-base text-sm leading-tight">
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="https://ui.shadcn.com/docs"
                  title="Introduction"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem
                  href="https://ui.shadcn.com/docs/installation"
                  title="Installation"
                >
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem
                  href="https://ui.shadcn.com/docs/primitives/typography"
                  title="Typography"
                >
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://ui.shadcn.com/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

function ListItem({
                    className,
                    title,
                    children,
                    ...props
                  }: React.ComponentProps<"a">) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "hover:bg-accent block text-main-foreground select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-hidden transition-colors hover:border-border",
            className,
          )}
          {...props}
        >
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
ListItem.displayName = "ListItem"