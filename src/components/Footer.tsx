// src/components/footer.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { KaeyrosAnalyticsLogoSvgIcon } from './custom/svg'
import { Settings } from 'lucide-react'
import { FacebookSvgIcon } from './custom/CountrySvg'

export function Footer() {
  return (
    <footer className="bg-primary-900 bg-[#DFE3F45E]  py-16">
      <div className="container flex flex-col gap-5 mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className='flex justify-between w-full  items-center'>
          <div>
            <h1 className='text-black font-bold text-[24px]'>We provide data driven solutions!</h1>
          </div>
          <div>
            <Button className='bg-[#3E52BC] px-[2rem] py-[1.5rem] cursor-pointer'>
              Contactez-nous
            </Button>
          </div>
        </div>
        <div className=' flex flex-row justify-between'>
          <div className='w-full'>
            <div>
              <KaeyrosAnalyticsLogoSvgIcon />
            </div>
            <div>
              <h1>CAMEROUN: Av du 27 Août Tsinga, Yaoundé</h1>
              <h2>DEUTSCHLAND: Martin-Schmeißer Weg  10, 44227 Dortmund </h2>
              <h3>info@kaeyros-analytics.de</h3>
            </div>
          </div>
          <div className="w-full mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 text-sm text-gray-700">
              {/* Left column */}
              <div className="space-y-4">
                <a href="#" className="hover:text-blue-900 block">Produits</a>
                <a href="#" className="hover:text-blue-900 block">Services</a>
                <a href="#" className="hover:text-blue-900 block">Team</a>
                <a href="#" className="hover:text-blue-900 block">À propos</a>
                <a href="#" className="hover:text-blue-900 block">Blog</a>
                <a href="#" className="hover:text-blue-900 block">Carrière</a>
              </div>

              {/* Middle column (socials) */}
              <div className="space-y-4 flex flex-col items-start bg-">
                <a href="#" className="flex  items-center justify-between gap-3 hover:text-blue-900">
                  <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded">
                    in
                  </span>
                  <span>
                    LinkedIn
                  </span>
                </a>
                <a href="#" className=" flex items-center justify-between gap-3 hover:text-blue-900">
                  <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded">
                    F
                  </span>
                  <span>
                    Facebook
                  </span>
                </a>
              </div>

              {/* Right column (languages) */}
              <div className="space-y-4 flex flex-col items-end">
                <a href="#" className="hover:text-blue-900 block">Français</a>
                <a href="#" className="hover:text-blue-900 block">Anglais</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Kaeyros Analytics. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}