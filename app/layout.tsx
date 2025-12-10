import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'TurboTech Cleaners - Premium Condo Cleaning Across the GTA',
  description: 'Fast, professional, and powered-cleaning technology for spotless results. Serving the Greater Toronto Area.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

