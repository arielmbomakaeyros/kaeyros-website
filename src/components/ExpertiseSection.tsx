// src/components/expertise-section.tsx
'use client'

import { useUIStore } from '@/store/ui-store'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const expertiseItems = [
  {
    title: "Big Data",
    description: "Kaeyros Analytics transforme de vastes volumes de données en informations exploitables pour guider vos décisions stratégiques. Nos solutions Big Data permettent d'identifier les tendances, les comportements et les opportunités cachées, optimisant ainsi la performance de votre entreprise. Ne laissez pas vos données inexploitées.",
    image: "data-center"
  },
  {
    title: "Intelligence Artificielle",
    description: "Exploitez la puissance de l'IA pour automatiser vos processus, prédire les tendances et optimiser vos opérations. Nos solutions d'intelligence artificielle transforment vos données en avantages concurrentiels durables.",
    image: "ai-tech"
  },
  {
    title: "Analytics Avancées",
    description: "Transformez vos données brutes en insights actionnables grâce à nos solutions d'analytics avancées. Visualisation, prédiction et analyse en temps réel pour une prise de décision éclairée.",
    image: "analytics"
  },
  {
    title: "Consultation Stratégique",
    description: "Accompagnement personnalisé pour définir votre stratégie data et maximiser le retour sur investissement de vos initiatives de transformation digitale.",
    image: "consulting"
  }
]

export function ExpertiseSection() {
  const { expertiseCarouselIndex, nextExpertiseCarousel, prevExpertiseCarousel } = useUIStore()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">🎯 Nos Expertises</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Nos Expertises
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex items-center">
            {/* Previous Button */}
            <button 
              onClick={prevExpertiseCarousel}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-primary-900" />
            </button>

            {/* Carousel Content */}
            <div className="w-full overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${expertiseCarouselIndex * 100}%)` }}
              >
                {expertiseItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-primary-900">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        <div className="flex gap-4">
                          <Button  >
                            Demander une démo
                          </Button>
                          <Button variant="outline">
                            Engagez une discussion →
                          </Button>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="h-80 bg-gradient-to-br from-primary-100 to-blue-200 rounded-2xl flex items-center justify-center">
                          {item.image === 'data-center' && (
                            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
                              <div className="grid grid-cols-8 gap-1 opacity-30">
                                {[...Array(64)].map((_, i) => (
                                  <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                                ))}
                              </div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-medium">Data Center</span>
                              </div>
                            </div>
                          )}
                          {item.image !== 'data-center' && (
                            <span className="text-primary-700 font-medium capitalize">{item.title}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={nextExpertiseCarousel}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-primary-900" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {expertiseItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === expertiseCarouselIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                onClick={() => useUIStore.getState().setExpertiseCarouselIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
