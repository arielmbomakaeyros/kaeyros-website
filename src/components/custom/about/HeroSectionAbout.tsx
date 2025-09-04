// src/components/hero-section.tsx
'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
// import { ChartSvgIcon, DoubleGearSvgIcon, HeadSetsSvgIcon, HeroSectionSVG, MessageSvgIcon, RocketSvgIcon, TwentyFourSvgIcon } from './custom/svg'

export function HeroSectionAbout() {
  return (
    <section className="bg-gradient-to-br mt-[2rem] bg-white py-20 lg:py-24 lg:pt-[150px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-[60px] font-bold text-[#162E66] leading-tight">
                De la donnée à la croissance
              </h1>
              <p className="text-lg text-[#515A82] leading-relaxed">
                Nous transformons les données en leviers stratégiques et de croissance, grâce à des solutions intelligentes , simples, innovants avec un impact durable.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className='bg-[#FF5F00] py-[1.5rem] px-[2rem] text-white cursor-pointer'>
                Nos solutions
              </Button>
              <Button variant="outline" className='text-[#3E52BC] border-1 py-[1.5rem] px-[2rem] border-[#3E52BC] hover:bg-[#3E52BC] hover:text-white cursor-pointer'>
                Nos produits
              </Button>
            </div>
          </div>

          {/* Right Content - Image with overlays */}
            <div className="relative">
                <div className="relative rounded-tl-[100px] rounded-br-[100px] bg-white rounded-2xl p-8 h-[500px] flex items-center justify-center">
                    <div
                        
                        className={`rounded-tl-[100px] bg-black rounded-br-[100px] overflow-hidden shadow-lg flex flex-col`}
                    >
                        <img
                            src={"/about_page/hero_image.png"}
                            alt={""}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}