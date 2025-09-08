// src/components/header.tsx
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { KaeyrosAnalyticsLogoSvgIcon } from './custom/svg'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLocale } from 'next-intl'

interface HeaderProps {
  onLocaleChange?: (locale: string) => void;
}

export function Header({ onLocaleChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const currentLocale = useLocale()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/products', label: 'Produits' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/contact-us', label: 'Restons en contact' },
  ]

  const handleLocaleChange = (locale: string) => {
    if (onLocaleChange) {
      onLocaleChange(locale)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all py-5 duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/80 shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <KaeyrosAnalyticsLogoSvgIcon />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? 'text-[#0F2A96] underline underline-offset-8'
                      : 'text-gray-800 hover:text-[#0F2A96]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions (CTA + Language Switcher) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-[#FF5F00] text-white py-[1.5rem] px-[2rem] rounded-lg shadow hover:bg-[#e65500] transition-colors">
              Demander une démo
            </Button>
            <LanguageSwitcher
              currentLocale={currentLocale}
              onChange={handleLocaleChange}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2A96]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col space-y-4 p-6">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isActive
                      ? 'text-[#0F2A96] underline underline-offset-8'
                      : 'text-gray-800 hover:text-[#0F2A96]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}

            {/* Mobile Actions (Language Switcher + CTA) */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <div className="flex justify-center">
                <LanguageSwitcher
                  currentLocale={currentLocale}
                  onChange={handleLocaleChange}
                />
              </div>
              <Button className="bg-[#FF5F00] text-white py-[1.5rem] px-[2rem] rounded-lg shadow hover:bg-[#e65500] transition-colors w-full">
                Demander une démo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

// // src/components/header.tsx
// 'use client'

// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'
// import { KaeyrosAnalyticsLogoSvgIcon } from './custom/svg'
// import { Menu, X } from 'lucide-react'
// import LanguageSwitcher from './LanguageSwitcher'
// import { useNavigationStore } from '@/store/navigation'

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const pathname = usePathname()
//   const { changeLocale, locale } = useNavigationStore ()

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 0)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { href: '/', label: 'Accueil' },
//     { href: '/about', label: 'À propos' },
//     { href: '/products', label: 'Produits' },
//     { href: '/solutions', label: 'Solutions' },
//     { href: '/contact-us', label: 'Restons en contact' },
//   ]

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all py-5 duration-300 ${
//         isScrolled
//           ? 'backdrop-blur-md bg-white/80 shadow-lg'
//           : 'bg-white'
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <KaeyrosAnalyticsLogoSvgIcon />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map(({ href, label }) => {
//               const isActive = pathname === href
//               return (
//                 <Link
//                   key={href}
//                   href={href}
//                   className={`font-medium transition-colors ${
//                     isActive
//                       ? 'text-[#0F2A96] underline underline-offset-8'
//                       : 'text-gray-800 hover:text-[#0F2A96]'
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* CTA (Desktop Only) */}
//           <div className="hidden md:block">
//             <Button className="bg-[#FF5F00] text-white py-[1.5rem] px-[2rem] rounded-lg shadow hover:bg-[#e65500] transition-colors">
//               Demander une démo
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2A96]"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="h-6 w-6 text-gray-800" />
//             ) : (
//               <Menu className="h-6 w-6 text-gray-800" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
//           <nav className="flex flex-col space-y-4 p-6">
//             {navItems.map(({ href, label }) => {
//               const isActive = pathname === href
//               return (
//                 <Link
//                   key={href}
//                   href={href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`font-medium transition-colors ${
//                     isActive
//                       ? 'text-[#0F2A96] underline underline-offset-8'
//                       : 'text-gray-800 hover:text-[#0F2A96]'
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               )
//             })}

//             {/* CTA inside mobile menu */}
//             <Button className="bg-[#FF5F00] text-white py-[1.5rem] px-[2rem] rounded-lg shadow hover:bg-[#e65500] transition-colors w-full">
//               Demander une démo
//             </Button>
//             <LanguageSwitcher currentLocale={locale} onChange={changeLocale} />
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }


// // src/components/header.tsx
// 'use client'

// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'
// import { KaeyrosAnalyticsLogoSvgIcon } from './custom/svg'

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { href: '/', label: 'Accueil' },
//     { href: '/about', label: 'À propos' },
//     { href: '/products', label: 'Produits' },
//     { href: '/solutions', label: 'Solutions' },
//     { href: '/contact-us', label: 'Restons en contact' },
//   ]

//   return (
//     <header className={`fixed top-0 py-5 left-0 right-0 z-50 transition-all duration-300  ${isScrolled ? 'fixed top-0 left-0 bg-transparent right-0 z-50 backdrop-blur-md shadow-lg' : 'backdrop-blur-lg bg-white'}`}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href={'/'} className="flex items-center">
//             <KaeyrosAnalyticsLogoSvgIcon />
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map(({ href, label }) => {
//               const isActive = pathname === href
//               return (
//                 <Link
//                   key={href}
//                   href={href}
//                   className={`font-medium transition-colors ${
//                     isActive
//                       ? 'text-[#0F2A96] underline underline-offset-10'
//                       : 'text-primary-900 hover:text-primary-700'
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* CTA Button */}
//           <Button className="bg-[#FF5F00] text-white cursor-pointer py-[1.5rem] px-[2rem]">
//             Demander une démo
//           </Button>
//         </div>
//       </div>
//     </header>
//   )
// }


// // src/components/header.tsx
// 'use client'

// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import { useState } from 'react';

// export function Header() {
//     const [isScrolled, setIsScrolled] = useState(false);
//   return (
//     <header className={`fixed top-0 py-5 left-0 right-0 z-50 transition-all duration-300  ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-lg' : 'backdrop-blur-lg bg-transparent'}`}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex items-center space-x-2">
//               <div className="relative">
//                 {/* Simplified logo representation */}
//                 <div className="flex items-center space-x-1">
//                   <div className="w-3 h-8 bg-primary-900 rounded-full transform -rotate-45"></div>
//                   <div className="w-8 h-3 bg-orange-500 rounded-full transform rotate-45"></div>
//                   <div className="w-6 h-3 bg-primary-900 rounded-full"></div>
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-primary-900 font-bold text-xl">kaeyros</span>
//                 <span className="text-orange-500 text-sm font-medium">ANALYTICS</span>
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="#" className="text-primary-900 hover:text-primary-700 font-medium">
//               Accueil
//             </Link>
//             <Link href="#about" className="text-primary-900 hover:text-primary-700 font-medium">
//               À propos
//             </Link>
//             <Link href="#products" className="text-primary-900 hover:text-primary-700 font-medium">
//               Produits
//             </Link>
//             <Link href="#solutions" className="text-primary-900 hover:text-primary-700 font-medium">
//               Solutions
//             </Link>
//             <Link href="#contact" className="text-primary-900 hover:text-primary-700 font-medium">
//               Restons en contact
//             </Link>
//           </nav>

//           {/* CTA Button */}
//           <Button className='bg-[#FF5F00] text-white cursor-pointer py-[1.5rem] px-[2rem]' >
//             Demander une démo
//           </Button>
//         </div>
//       </div>
//     </header>
//   )
// }