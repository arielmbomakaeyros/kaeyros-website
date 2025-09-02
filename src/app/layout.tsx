// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import I18nProvider from '@/components/I18nProvider'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <main className="min-h-screen">
          <I18nProvider>
            <Header />
            {children}
          </I18nProvider>
        </main>
      </body>
    </html>
  )
}

// import './globals.css';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Kaeyros Analytics - Solutions d\'Intelligence de Données',
//   description: 'Transformez vos données en insights actionnables avec la plateforme d\'analytics avancée de Kaeyros Analytics.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           href="https://fonts.cdnfonts.com/css/articulat-cf"
//           rel="preload"
//           as="style"
//         />
//         <link
//           href="https://fonts.cdnfonts.com/css/articulat-cf"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="font-articulat antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }
