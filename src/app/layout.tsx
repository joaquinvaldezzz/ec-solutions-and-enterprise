import { type Metadata } from 'next'
import localFont from 'next/font/local'

import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'

import OGImage from '@/public/images/ec-solutions-and-enterprise.jpg'

import '@/styles/main.css'

export const metadata: Metadata = {
  title: 'EC Solutions and Enterprise',
  description:
    'EC Solutions and Enterprise is a software development company that specializes in web development, mobile development, and custom software development.',
  metadataBase: new URL('https://ecsae.vercel.app'),
  openGraph: {
    title: 'EC Solutions and Enterprise',
    description:
      'EC Solutions and Enterprise is a software development company that specializes in web development, mobile development, and custom software development.',
    siteName: 'EC Solutions and Enterprise',
    locale: 'en_US',
    images: [{ url: OGImage.src, type: 'image/png', width: OGImage.width, height: OGImage.height }],
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
      </body>
    </html>
  )
}
