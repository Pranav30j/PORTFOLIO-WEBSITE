import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pranav Bopche - Full-Stack Developer & AI Enthusiast',
  description: 'I build intelligent systems, scalable apps, and data-driven solutions that solve real-world problems.',
  keywords: ['Pranav Bopche', 'Full-Stack Developer', 'AI Enthusiast', 'Machine Learning', 'Data Science', 'React', 'Next.js'],
  authors: [{ name: 'Pranav Bopche' }],
  openGraph: {
    title: 'Pranav Bopche - Full-Stack Developer & AI Enthusiast',
    description: 'I build intelligent systems, scalable apps, and data-driven solutions that solve real-world problems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranav Bopche - Full-Stack Developer & AI Enthusiast',
    description: 'I build intelligent systems, scalable apps, and data-driven solutions that solve real-world problems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

