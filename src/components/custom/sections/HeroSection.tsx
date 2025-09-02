'use client';

import { ArrowRight, Play, BarChart3, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-kaeyros-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-kaeyros-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-kaeyros-blue/10 rounded-full text-kaeyros-blue text-sm font-medium">
                <BarChart3 className="w-4 h-4 mr-2" />
                Solutions d'analyse avancées
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformez vos{' '}
                <span className="text-kaeyros-orange">données</span>{' '}
                en{' '}
                <span className="text-kaeyros-blue">insights</span>{' '}
                actionables
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Découvrez la puissance de l'analyse de données avec Kaeyros Analytics.{' '}
                Notre plateforme intelligente vous aide à prendre des décisions éclairées{' '}
                et à optimiser vos performances business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-kaeyros-orange hover:bg-kaeyros-orange/90 text-white px-8 py-4 text-lg group"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-kaeyros-blue text-kaeyros-blue hover:bg-kaeyros-blue hover:text-white px-8 py-4 text-lg group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Voir la démo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-kaeyros-blue">500+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kaeyros-orange">99.9%</div>
                <div className="text-sm text-gray-600">Uptime garanti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kaeyros-blue">24/7</div>
                <div className="text-sm text-gray-600">Support expert</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-kaeyros-blue to-kaeyros-blue/80 rounded-2xl p-8 shadow-2xl">
              {/* Dashboard Mockup */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-kaeyros-gray p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-5 h-5 text-kaeyros-orange" />
                      <span className="text-xs text-gray-500">+12%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">€2.4M</div>
                    <div className="text-xs text-gray-600">Revenus</div>
                  </div>
                  
                  <div className="bg-kaeyros-gray p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-5 h-5 text-kaeyros-blue" />
                      <span className="text-xs text-gray-500">+8%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">15.2K</div>
                    <div className="text-xs text-gray-600">Utilisateurs</div>
                  </div>
                </div>
                
                {/* Chart representation */}
                <div className="h-32 bg-gradient-to-r from-kaeyros-blue/20 to-kaeyros-orange/20 rounded-lg flex items-end justify-center space-x-1 p-4">
                  {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-kaeyros-blue to-kaeyros-orange rounded-sm animate-pulse"
                      style={{
                        height: `${height}%`,
                        width: '12px',
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-kaeyros-orange rounded-full flex items-center justify-center animate-float">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;