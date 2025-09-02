// src/components/solutions-section.tsx
'use client'

import { useUIStore } from '@/store/ui-store'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const partners = [
  {
    name: "FMCG",
    category: "enterprise",
    logo: "FMCG"
  },
  {
    name: "Voyage",
    category: "travel", 
    logo: "Voyage"
  },
  {
    name: "Laboratoire",
    category: "lab",
    logo: "Lab"
  },
  {
    name: "ONG",
    category: "ngo",
    logo: "ONG"
  }
]

const partnerProjects = [
  {
    title: "Premium foods",
    description: "Nous avons conçu pour Premium Food une application intelligente qui digitalise la gestion des points de vente, optimise le merchandising, simplifie les commandes et sécurise les livraisons pour booster efficacité et croissance des marques agroalimentaires.",
    image: "premium-foods",
    company: "Premium Foods"
  },
  {
    title: "Voyage Solutions",
    description: "Plateforme digitale complète pour la gestion des voyages et réservations, optimisant l'expérience client et les opérations.",
    image: "voyage",
    company: "Voyage Partners"
  },
  {
    title: "Lab Analytics",
    description: "Solutions d'analyse de données pour laboratoires, automatisant les processus et améliorant la précision des résultats.",
    image: "laboratory",
    company: "Science Lab"
  }
]

export function SolutionsSection() {
  const { partnersCarouselIndex, nextPartnersCarousel, prevPartnersCarousel } = useUIStore()

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">🤝 Nos Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Nos Partenaires de Croissance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des entreprises qui innovent et réussissent grâce à notre expertise data et nos solutions digitales
          </p>
        </div>

        {/* Partners Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-100 rounded-full p-2">
            {partners.map((partner, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  index === 0 
                    ? 'bg-primary-900 text-white' 
                    : 'text-gray-600 hover:text-primary-900'
                }`}
              >
                {partner.name}
                {partner.name === "Voyage" && <span className="ml-2 w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>}
                {partner.name === "Laboratoire" && <span className="ml-2 w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>}
                {partner.name === "ONG" && <span className="ml-2 w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>}
              </button>
            ))}
          </div>
        </div>

        {/* Partner Showcase Carousel */}
        <div className="relative">
          <div className="flex items-center">
            <button 
              onClick={prevPartnersCarousel}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-primary-900" />
            </button>

            <div className="w-full overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${partnersCarouselIndex * 100}%)` }}
              >
                {partnerProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-8 bg-primary-100 rounded flex items-center justify-center">
                            <span className="text-xs font-bold text-primary-900">LOGO</span>
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold text-primary-900">{project.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      </div>
                      
                      <div className="relative">
                        <div className="h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden">
                          {project.image === 'premium-foods' && (
                            <div className="w-full h-full flex items-center justify-center relative">
                              <div className="w-48 h-64 bg-gradient-to-b from-blue-900 to-blue-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <span className="text-white font-medium text-center px-4">Store Manager with Mobile Device</span>
                              </div>
                              {/* Colorful product shelves background */}
                              <div className="absolute left-4 top-4 bottom-4 w-12 bg-gradient-to-b from-red-400 to-red-600 rounded opacity-60"></div>
                              <div className="absolute left-20 top-8 bottom-8 w-12 bg-gradient-to-b from-green-400 to-green-600 rounded opacity-60"></div>
                              <div className="absolute left-36 top-6 bottom-6 w-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded opacity-60"></div>
                            </div>
                          )}
                          {project.image !== 'premium-foods' && (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-orange-700 font-medium capitalize">{project.title}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextPartnersCarousel}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-primary-900" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {partnerProjects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === partnersCarouselIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                onClick={() => useUIStore.getState().setPartnersCarouselIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
