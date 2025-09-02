// src/components/footer.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-8 bg-white rounded-full transform -rotate-45"></div>
                <div className="w-8 h-3 bg-orange-500 rounded-full transform rotate-45"></div>
                <div className="w-6 h-3 bg-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">kaeyros</span>
                <span className="text-orange-500 text-sm font-medium">ANALYTICS</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Nous transformons vos données en croissance durable pour propulser votre entreprise 
              vers de nouveaux sommets de performance et d'innovation.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs">📧</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs">💼</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs">🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="#products" className="text-gray-300 hover:text-white transition-colors">Produits</Link></li>
              <li><Link href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Big Data</span></li>
              <li><span className="text-gray-300">Intelligence Artificielle</span></li>
              <li><span className="text-gray-300">Analytics Avancées</span></li>
              <li><span className="text-gray-300">SEMA Universe</span></li>
            </ul>
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