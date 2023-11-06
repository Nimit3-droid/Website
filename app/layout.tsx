"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CanvasBackground from '@/components/CanvasBackground'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
        <CanvasBackground />
      </div>
    </html>
  )
}
