import { type Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'

import '@/styles/main.css'

export const metadata: Metadata = {
  title: {
    default: 'EC Solutions and Enterprise',
    template: '%s | EC Solutions and Enterprise',
  },
  description:
    'EC Solutions and Enterprise is a software development company that specializes in web development, mobile development, and custom software development.',
  metadataBase: new URL('https://ecsae.vercel.app'),
  openGraph: {
    title: {
      default: 'EC Solutions and Enterprise',
      template: '%s | EC Solutions and Enterprise',
    },
    description:
      'EC Solutions and Enterprise is a software development company that specializes in web development, mobile development, and custom software development.',
    siteName: 'EC Solutions and Enterprise',
    locale: 'en_US',
  },
}

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/InterVariable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/InterVariable-Italic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
})

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-w-80 bg-white text-gray-900 antialiased [--header-height:4.5rem] lg:[--header-height:5rem]">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
