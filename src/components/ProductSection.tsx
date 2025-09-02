// src/components/products-section.tsx
'use client'

import { Button } from '@/components/ui/button'

export function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">📦 Nos Produits</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            L'univers SEMA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SEMA transforme WhatsApp en moteur de croissance avec ses outils intelligents, 
            pour une expérience client fluide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Sema offre un univers digital innovant pour les entreprises africaines, 
              entièrement basé sur WhatsApp. Ses services incluent la gestion client, 
              le ticketing, la tombola, le shop, le pointage, les messages en masse, 
              le booking et le travel. Grâce à son assistant commercial intelligent, 
              Sema centralise vos interactions, automatise la prospection et facilite 
              l'engagement avec vos prospects, permettant ainsi de booster vos ventes 
              facilement. Et ce n'est pas tout...
            </p>
            
            <div className="flex gap-4">
              <Button  >
                Explorez l'univers SEMA
              </Button>
              <Button variant="outline">
                Demander une démo →
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Central SEMA hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">sema</span>
                </div>
              </div>
              
              {/* Surrounding service nodes */}
              {[
                { icon: "💬", angle: 0 },
                { icon: "🎯", angle: 45 },
                { icon: "👥", angle: 90 },
                { icon: "🏪", angle: 135 },
                { icon: "📊", angle: 180 },
                { icon: "✈️", angle: 225 },
                { icon: "📅", angle: 270 },
                { icon: "🎲", angle: 315 }
              ].map((item, index) => {
                const x = Math.cos((item.angle * Math.PI) / 180) * 120
                const y = Math.sin((item.angle * Math.PI) / 180) * 120
                return (
                  <div
                    key={index}
                    className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-100"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                )
              })}
              
              {/* Connection lines */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, index) => {
                  const angle = index * 45
                  return (
                    <div
                      key={index}
                      className="absolute w-px h-24 bg-primary-200 origin-bottom"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle}deg) translateY(-50%)`,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
