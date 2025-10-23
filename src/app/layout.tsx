import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { Space_Mono } from 'next/font/google'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'

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
      <html lang="en">
        <body className={`${space_mono.className} bg-bg text-text`}>
          <ThemeProvider>
            <ViewTransitions>
            <div className="flex min-h-screen flex-col items-center px-5 pb-24 pt-14 sm:pt-20">
              <Nav />
              <br />
              {children}
            </div>
            </ViewTransitions>
          </ThemeProvider>
        </body>
      </html>
  )
}
