// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import I18nProvider from '@/components/I18nProvider'
import { Footer } from '@/components/Footer'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

// const cursive = localFont({
//   src: '/fonts/all/GILGONM_.ttf',
//   variable: '--font-cursive',
// })

export const metadata: Metadata = {
  title: 'Kaeyros Analytics - Transformons vos données en croissance durable',
  description: 'De l\'information brute à la décision stratégique, nos produits et solutions innovantes transforment vos données en opportunités durables.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/articulat-cf"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.cdnfonts.com/css/articulat-cf"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={` ${ inter.className }`}>
        {/* ${cursive.variable} */}
        <main className="min-h-screen">
          <I18nProvider>
            {children}
            <Footer />
          </I18nProvider>
        </main>
      </body>
    </html>
  )
}
