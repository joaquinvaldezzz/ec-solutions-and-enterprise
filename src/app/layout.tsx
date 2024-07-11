import { type Metadata } from 'next'

import '@/styles/main.css'

export const metadata: Metadata = {
  title: 'EC Solutions and Enterprise',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-w-80 antialiased">{children}</body>
    </html>
  )
}
