import { type Metadata } from 'next'
import localFont from 'next/font/local'

import '@/styles/main.css'

export const metadata: Metadata = {
  title: 'EC Solutions and Enterprise',
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
      <body className="min-w-80 bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
