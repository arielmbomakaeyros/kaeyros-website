// src/components/hero-section.tsx
'use client'

import SEMAEcosystem from '@/components/SEMAEcosystem'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
// import { ChartSvgIcon, DoubleGearSvgIcon, HeadSetsSvgIcon, HeroSectionSVG, MessageSvgIcon, RocketSvgIcon, TwentyFourSvgIcon } from './custom/svg'

export function ProductHeroSection() {
  return (
    <section className="bg-gradient-to-br pt-[130px] lg:pt-18 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:flex lg:flex-row items-center">
          {/* Left Content */}
          <div className="space-y-8 flex-5">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-[80px] font-bold text-[#162E66] leading-tight">
                Découvrez l'univers SEMA
              </h1>
              <p className="text-lg lg:text-[24px] max-w-[700px] text-[#515A82] leading-relaxed">
                Transformer la donnée et l’innovation digitale en leviers de croissance durable.
              </p>
            </div>

            <div className="flex flex-row justify-center sm:justify-start sm:flex-row gap-4">
              <Button className='bg-[#FF5F00] w-1/2 md:w-auto py-[1.5rem] border-[#FF5F00] border-2 md:px-[2rem] text-white cursor-pointer'>
                Request a demo
              </Button>
              <Button variant="outline" className='text-[#3E52BC] w-1/2 md:w-auto border-2 py-[1.5rem] md:px-[2rem] border-[#3E52BC] hover:bg-[#3E52BC] hover:text-white cursor-pointer'>
                Contactez nous
              </Button>
            </div>
          </div>

          {/* Right Content - Image with overlays */}
            <div className=" lg:items-center hidden flex-3 lg:flex lg:justify-end items-end lg:ml-auto">
            <SEMAEcosystem />  
          </div>
        </div>
      </div>
    </section>
  )
}