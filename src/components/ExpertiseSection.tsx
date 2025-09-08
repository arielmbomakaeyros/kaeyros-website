// src/components/expertise-section.tsx
'use client'

import { useUIStore } from '@/store/ui-store'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { LeftArrowSvgIcon, RightArrowSlimSvgIcon, RightArrowSvgIcon } from './custom/svg'
import Link from 'next/link'
import Image from 'next/image'

const expertiseItems = [
  {
    title: "Big Data",
    description: "Kaeyros Analytics transforme de vastes volumes de données en informations exploitables pour guider vos décisions stratégiques. Nos solutions Big Data permettent d'identifier les tendances, les comportements et les opportunités cachées, optimisant ainsi la performance de votre entreprise. Ne laissez pas vos données inexploitées.",
    image: "/about/our_expertise/pic1.jpg"
  },
  {
    title: "Cloud Analytics",
    description: "Kaeyros Analytics exploite le Cloud Analytics pour rendre vos données accessibles, sécurisées et analysables en temps réel. Nos solutions cloud vous permettent de visualiser vos performances, collaborer efficacement et prendre des décisions rapides et éclairées. Libérez le potentiel de vos données dès maintenant.",
    image: "/about/our_expertise/pic2.jpg"
  },
  {
    title: "Machine Learning",
    description: "Le Machine Learning chez Kaeyros Analytics apprend de vos données pour générer des prédictions fiables et améliorer vos performances. Nos modèles adaptatifs anticipent tendances et comportements pour renforcer votre compétitivité et votre prise de décision. Profitez de la puissance du Machine Learning.",
    image: "/about/our_expertise/pic3.jpg"
  },
  {
    title: "Data Science",
    description: "SEMA is an all-in-one WhatsApp-based business tool that helps small businesses automate customer interactions, send promotions, manage bookings, validate transactions, and more—directly through WhatsApp. Each module (Bulk Messages, Booking, Tombola, etc.) is plug-and-play, and works with a chatbot interface you configure once, then run automatically.",
    image: "/about/our_expertise/pic4.jpg"
  }, 
{
    title: "Intelligence artificielle",
    description: "Kaeyros Analytics utilise l’Intelligence Artificielle pour automatiser, prédire et améliorer vos processus métiers. Nos solutions IA permettent d’optimiser la relation client, de personnaliser vos services et de gagner en efficacité opérationnelle.",
    image: "/about/our_expertise/pic5.jpg"
  }
]

export function ExpertiseSection() {
  const { expertiseCarouselIndex, nextExpertiseCarousel, prevExpertiseCarousel } = useUIStore()

  return (
    <section className="py-[40px] bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">🎯 Nos Expertises</span>
          </div> */}
          <h2 className="text-3xl lg:text-4xl tracking-tighter font-bold text-[#0F2A96] mb-4">
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
                <LeftArrowSvgIcon />
              {/* <ChevronLeft className="w-6 h-6 text-primary-900" /> */}
            </button>

            {/* Carousel Content */}
            <div className="w-full overflow-hidden mx-0 md:mx-12">
              <div 
                className="flex  transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${expertiseCarouselIndex * 100}%)` }}
              >
                {expertiseItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      
                      
                      <div className="relative">
                        <div className="h-80 bg-gradient-to-br rounded-tr-[150px] rounded-bl-[150px] from-primary-100 to-blue-200 rounded-2xl flex items-center justify-center">
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
                            <div className='overflow-hidden border-6 border-blue-200 rounded-tr-[150px] rounded-bl-[150px] w-full h-80 relative'>
                                {/* <span className="text-primary-700 font-medium capitalize">{item.title}</span> */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />

                            </div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-[20px] md:text-[32px] font-bold text-[#1C1C1C] tracking-tighter">{item.title}</h3>
                        <p className="text-[#515A82] text-[14px] font-light md:text-[20px] leading-relaxed">{item.description}</p>
                        <div className="flex flex-col md:flex-row gap-4">
                          <Button className="bg-[#FF5F00] text-white cursor-pointer md:py-[1.5rem] md:px-[2rem]">
                            Demander une démo
                          </Button>
                          <Link href="/contact" className="text-[#3772FF] flex items-center cursor-pointer underline underline-offset-10 truncate">
                            Engagez une discussion <RightArrowSlimSvgIcon />
                          </Link>
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
              <RightArrowSvgIcon />
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
