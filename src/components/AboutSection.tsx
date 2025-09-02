// src/components/about-section.tsx
'use client'

import { useUIStore } from '@/store/ui-store'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import LeadershipSection from './LeadershipSection'
import { WhoAreWe } from './custom/svg'

const aboutItems = [
  {
    title: "Notre Histoire",
    content: "Kaeyros Analytics est née de la conviction que les données sont un levier stratégique, capable de transformer les informations en actions concrètes, guidant les acteurs économiques locaux et internationaux vers des décisions éclairées, une croissance durable et un impact significatif sur leurs...",
    image: "/about/first_image.jpg",
  },
  {
    title: "Mission et Vision", 
    content: "Simplifier et automatiser l'accès aux données pour gagner en performance, accompagner la croissance des entreprises et transformer les données en leviers stratégiques durables. Devenir le partenaire technologique de référence en Afrique, valorisant les compétences locales...",
    image: "/about/second_image.jpg",
  },
  {
    title: "Notre Culture & ADN",
    content: "Au cœur de notre ADN, combinent bienveillance et exigence, innovation intuitive, collaboration responsable, performance avec humilité, confiance transparente et ambition réaliste, guidant nos actions pour transformer les idées en résultats concrets et durables, tout en renfor...",
    image: "/about/third_image.jpg",
  }
]

export function AboutSection() {
  const { currentCarouselIndex, setCarouselIndex, nextCarousel, prevCarousel } = useUIStore()

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium flex items-center gap-2">
                <WhoAreWe />
                <span>
                 À propos de nous
                </span>
            </span>
            {/* <span className="text-orange-600 text-sm font-medium">🏠 À propos de nous</span> */}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
            Qui sommes nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous transformons la data en croissance durable pour les entreprises, 
            en Afrique et à l'international.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {aboutItems.map((item, index) => (
            <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div className="bg-[#091C6E] p-5 text-white flex items-center justify-end relative">
                <h3 className="text-xl font-bold text-primary-900">{item.title}</h3>
              </div>

                {/* Image */}
                <div className="relative w-full h-[300px]">
                    <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    />
                </div>

                


                {/* Content */}
                <div className="p-[2rem]">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-5 mb-4">
                        {item.content}
                    </p>
                    <Button
                        variant="link"
                        className="p-0 h-auto font-medium text-[16px] text-[#3772FF] underline underline-offset-10 cursor-pointer hover:underline"
                    >
                        Voir plus <ArrowRight className="w-4 h-4 inline-block ml-1" />
                    </Button>
                </div>
            </div>

          ))}
        </div>

        {/* <div className="text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-8 pt-5">Notre leadership</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-bold text-primary-900 mb-1">Thierry Monthé</h4>
              <p className="text-primary-600 mb-2">Founder / CEO</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>+20 years expérience in Data sciences,</p>
                <p>software engineering and team management</p>
                <p className="font-medium">Data Tech Entrepreneur</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-bold text-primary-900 mb-1">Axel Djouonang</h4>
              <p className="text-primary-600 mb-2">Chief Business Officer</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>+20 years expérience in Finance, project</p>
                <p>management and business development</p>
                <p className="font-medium">Entrepreneur</p>
              </div>
            </div>
          </div>

          <Button   className="mt-8">
            En savoir plus sur nous
          </Button>
        </div> */}
        <LeadershipSection />
      </div>
    </section>
  )
}
