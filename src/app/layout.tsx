import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Space_Mono } from 'next/font/google'
import React from 'react'

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
      <html lang="en">
        <body className={space_mono.className}>
          <Analytics />
          <SpeedInsights />
          <Nav />
          <div className="dark:text-darkText text-text mx-auto w-[750px] max-w-full px-5 pt-28 pb-10">
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
