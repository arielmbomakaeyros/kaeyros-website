// src/components/hero-section.tsx
'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ChartSvgIcon, DoubleGearSvgIcon, HeadSetsSvgIcon, HeroSectionSVG, MessageSvgIcon, RocketSvgIcon, TwentyFourSvgIcon } from './custom/svg'
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const router = useRouter ()
  return (
    <section className="bg-gradient-to-br mt-[2rem] bg-white pt-20 pb-5 md:py-20 lg:py-24 lg:pt-[150px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-[70px] font-bold text-[#162E66] leading-tight">
                Nous transformons vos données en croissance durable
              </h1>
              <p className="text-lg text-[#515A82] leading-relaxed">
                De l'information brute à la décision stratégique, nos produits et solutions
                innovantes transforment vos données en opportunités durables.
              </p>
            </div>
            
            <div className="flex flex-row justify-center sm:justify-start sm:flex-row gap-4">
              <Button onClick={() => router.push('/solutions')} className='bg-[#FF5F00] w-1/2 md:w-auto py-[1.5rem] border-[#FF5F00] border-2 px-[2rem] text-white cursor-pointer'>
                Nos solutions
              </Button>
              <Button onClick={() => router.push('/products')} variant="outline" className='text-[#3E52BC] w-1/2 md:w-auto border-2 py-[1.5rem] px-[2rem] border-[#3E52BC] hover:bg-[#3E52BC] hover:text-white cursor-pointer'>
                Nos produits
              </Button>
            </div>
          </div>

          {/* Right Content - Image with overlays */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white rounded-2xl p-8 h-[500px] flex items-center justify-center">
              <HeroSectionSVG />
              {/* Data Overlays */}
              <div className="absolute top-[40%] left-[-10%] max-w-[300] rounded-2xl shadow-md p-3 bg-white/40 backdrop-blur-sm border border-white/40">
                  <div className="flex items-center gap-3 mb-3">
                      {/* Icon placeholder (you can replace with lucide-react icon) */}
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#E8EEFF]">
                          <span className="text-primary-600 text-xl">%</span>
                      </div>
                      <div>
                          <p className="text-xl font-bold text-gray-900">43.98%</p>
                          <p className="text-gray-600 text-sm">Croissance des affaires</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="text-green-600 text-[10px] inline-block">
                          <span>
                          ↑ 
                          </span>
                          <span>
                          32.8%
                          </span>
                      </div>
                      <span className="text-gray-500 text-[9px]">
                          Avec les entreprises utilisant les solutions de Kaeyros
                      </span>
                  </div>
              </div>

              <div className="absolute top-8 left-8 backdrop-blur-2xl bg-transparent rounded-lg  p-4 max-w-xs">
              <DoubleGearSvgIcon />
              </div>

              <div className="absolute bottom-12 bg-white/40 backdrop-blur-sm right-[20%] rounded-lg shadow-lg p-3 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  {/* <span className="text-green-600 font-bold text-sm">24</span> */}
                  <TwentyFourSvgIcon />
                </div>
                <span className="text-sm font-medium text-gray-800">Service client</span>
                <div className="flex space-x-1">
                    <HeadSetsSvgIcon />
                  {/* <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div> */}
                </div>
              </div>

              <div className="absolute bottom-[-10%] right-8 rounded-lg p-3 flex items-center space-x-3">
                <MessageSvgIcon />
              </div>

              {/* Chart overlay */}
              <div className="absolute bottom-0 left-[-15%] bg-transparent backdrop-blur-2xl rounded-lg p-4 w-32">
                <ChartSvgIcon />
              </div>

              {/* Rocket icon */}
              <div className="absolute top-16 right-16 w-12 h-12  rounded-full flex items-center justify-center">
                <RocketSvgIcon />
                {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}