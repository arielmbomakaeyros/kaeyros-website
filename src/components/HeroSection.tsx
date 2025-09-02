// src/components/hero-section.tsx
'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br mt-[2rem] bg-white py-20 lg:py-24 lg:pt-[150px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-[60px] font-bold text-[#162E66] leading-tight">
                Nous transformons vos données en croissance durable
              </h1>
              <p className="text-lg text-[#515A82] leading-relaxed">
                De l'information brute à la décision stratégique, nos produits et solutions
                innovantes transforment vos données en opportunités durables.
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
            <div className="relative bg-gradient-to-br from-orange-100 to-primary-50 rounded-2xl p-8 h-[500px] flex items-center justify-center">
              {/* Placeholder for the woman image */}
              <div className="w-64 h-80 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <span className="text-white font-medium">Professional Image</span>
              </div>
              
              {/* Data Overlays */}
              <div className="absolute top-8 left-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-primary-900">43.98%</span>
                  <div className="text-green-500 text-sm flex items-center">
                    <span>↑ 32.8%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Croissance des affaires</p>
              </div>

              <div className="absolute bottom-12 right-8 bg-white rounded-lg shadow-lg p-3 flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">24</span>
                </div>
                <span className="text-sm font-medium text-gray-800">Service client</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Chart overlay */}
              <div className="absolute bottom-20 left-12 bg-white rounded-lg shadow-lg p-4 w-32">
                <div className="flex items-end space-x-1 h-12">
                  <div className="w-2 bg-orange-300 h-6"></div>
                  <div className="w-2 bg-orange-400 h-8"></div>
                  <div className="w-2 bg-orange-500 h-10"></div>
                  <div className="w-2 bg-orange-600 h-12"></div>
                  <div className="w-2 bg-orange-500 h-7"></div>
                </div>
              </div>

              {/* Rocket icon */}
              <div className="absolute top-16 right-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}