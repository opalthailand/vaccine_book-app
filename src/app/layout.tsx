import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaccine Book App',
  description: 'Created by Thanakorn Thaminkaew',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu/>
        {children}
      </body>
    </html>
  )
}