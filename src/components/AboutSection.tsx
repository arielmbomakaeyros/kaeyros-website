// src/components/about-section.tsx
'use client'

import { useUIStore } from '@/store/ui-store'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import LeadershipSection from './LeadershipSection'
import { WhoAreWe, WomanSmilingSvg } from './custom/svg'
import SmallSectionHeader from './custom/SmallSectionHeader'

const aboutItems = [
  {
    title: "Notre Histoire",
    content: "Kaeyros Analytics est née de la conviction que les données sont un levier stratégique, capable de transformer les informations en actions concrètes, guidant les acteurs économiques locaux et internationaux vers des décisions éclairées, une croissance durable et un impact significatif sur leurs...",
    image: "/about/first_image.jpg",
    svgIcon: <WomanSmilingSvg />
  },
  {
    title: "Mission et Vision", 
    content: "Simplifier et automatiser l'accès aux données pour gagner en performance, accompagner la croissance des entreprises et transformer les données en leviers stratégiques durables. Devenir le partenaire technologique de référence en Afrique, valorisant les compétences locales...",
    image: "/about/second_image.jpg",
    svgIcon: <WomanSmilingSvg />
  },
  {
    title: "Notre Culture & ADN",
    content: "Au cœur de notre ADN, combinent bienveillance et exigence, innovation intuitive, collaboration responsable, performance avec humilité, confiance transparente et ambition réaliste, guidant nos actions pour transformer les idées en résultats concrets et durables, tout en renfor...",
    image: "/about/fourth_image.png",
    svgIcon: <WomanSmilingSvg />
  }
]

export function AboutSection() {
  const { currentCarouselIndex, setCarouselIndex, nextCarousel, prevCarousel } = useUIStore()

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">

            {/* <span className="text-orange-600 text-sm font-medium">🏠 À propos de nous</span> */}
            {/* <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
                <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
                    <WhoAreWe />
                    <span className="text-2xl font-bold text-black font-[yourCustomFont]">À propos de nous</span>
                </div>
            </div> */}
            <SmallSectionHeader label='À propos de nous' />
            <h2 className="text-3xl lg:text-4xl tracking-tighter lg:tracking-tight font-bold text-[#0F2A96] mb-4">
                Qui sommes nous
            </h2>
            <p className="text-lg text-gray-600 tracking-tighter lg:tracking-tight max-w-2xl mx-auto">
              Nous transformons la data en croissance durable pour les entreprises, 
              en Afrique et à l'international.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {aboutItems.map((item, index) => (
            <div
                key={index}
                className="bg-white rounded-xl border border-gray-900 shadow-sm overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div className="bg-[#091C6E] p-5 text-white flex items-center justify-end relative">
                <h3 className="text-[18px] font-bold text-[#FFFFFF] tracking-tighter lg:tracking-tight">{item.title}</h3>
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
                    <p className="text-[#242424] text-sm font-normal leading-relaxed line-clamp-5 mb-4">
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
        <LeadershipSection />
      </div>
    </section>
  )
}
