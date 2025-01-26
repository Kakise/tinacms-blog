import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const montserrat = Montserrat({ subsets: ['latin'] })

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
        <Analytics />
        <SpeedInsights />
        <body className={montserrat.className}>
          <Nav />
          <div className="dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28 text-text">
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
