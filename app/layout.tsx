import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KRACKED_OS v2.0 // Where Malaysia Comes To Build',
  description: 'A self-sustaining builder ecosystem for Malaysia. Community + School + Labs. Free to join. XP for shipping, not for showing up.',
  openGraph: {
    title: 'KRACKED_OS v2.0 // KrackedDevs',
    description: 'Where Malaysia comes to build. Community + AI Builder School + KD Labs.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261011-230827-v2cHm1bYdpQa46xQHJILu1poeKf9pI.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#050508',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-[#050508]">
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-mono bg-[#050508] text-[#E0E7FF] antialiased selection:bg-[#00FF9F]/20 selection:text-[#00FF9F] min-h-screen overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
