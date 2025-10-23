import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { Space_Mono } from 'next/font/google'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'

const space_mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'A smol cat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark">
        <body className={`${space_mono.className} bg-bg text-text`}>
          <Script id="theme-init" strategy="beforeInteractive">
            {`try {
  const storedTheme = window.localStorage.getItem('theme');
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.classList.add(storedTheme);
  } else {
    root.classList.add('dark');
  }
} catch (_) {
  document.documentElement.classList.add('dark');
}`}
          </Script>
          <ThemeProvider>
            <div className="flex min-h-screen flex-col items-center px-5 pb-24 pt-14 sm:pt-20">
              <Nav />
              <main className="mt-14 w-full max-w-[680px] sm:mt-16">
                <div className="border-border bg-bw text-text shadow-[10px_10px_0_0_var(--shadow-color)] border-4 px-6 py-8 sm:px-10 sm:py-12">
                  {children}
                </div>
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
