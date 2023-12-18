import { AppProvider } from '@/components/providers/app-provider'
import { AppHeader } from '@/components/features/header'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppRunningText } from '@/components/features/running-text'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
      )}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
