'use client';

import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Database, Brain, LineChart, Shield, Zap, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSliderStore } from '@/store/slider';

const expertises = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Architecture et intégration de données complexes pour une vision unifiée de votre business.',
    features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Real-time Processing'],
  },
  {
    icon: Brain,
    title: 'Intelligence Artificielle',
    description: 'Algorithmes de machine learning et IA pour automatiser vos processus décisionnels.',
    features: ['Machine Learning', 'Deep Learning', 'NLP & Computer Vision'],
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    description: 'Tableaux de bord interactifs et rapports personnalisés pour piloter votre activité.',
    features: ['Dashboards Interactifs', 'Reporting Automatisé', 'KPI Monitoring'],
  },
  {
    icon: Shield,
    title: 'Data Governance',
    description: 'Sécurisation et conformité de vos données selon les standards les plus exigeants.',
    features: ['RGPD Compliance', 'Data Security', 'Quality Management'],
  },
  {
    icon: Zap,
    title: 'Analytics en Temps Réel',
    description: 'Analyse instantanée de vos flux de données pour des décisions rapides et précises.',
    features: ['Stream Processing', 'Real-time Alerts', 'Live Dashboards'],
  },
  {
    icon: Globe,
    title: 'Cloud Solutions',
    description: 'Déploiement et optimisation de vos solutions analytics dans le cloud.',
    features: ['Multi-Cloud', 'Scalabilité', 'Cost Optimization'],
  },
];

const ExpertiseSection = () => {
  const { currentSlide, totalSlides, isAutoPlaying, setCurrentSlide, nextSlide, prevSlide, setTotalSlides } = useSliderStore();

  useEffect(() => {
    setTotalSlides(expertises.length);
  }, [setTotalSlides]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % totalSlides;
      slides.push(expertises[index]);
    }
    return slides;
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-kaeyros-orange">Expertises</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services en analytics et intelligence artificielle, 
            conçus pour transformer votre approche des données.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Slides Container */}
          <div className="overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8">
              {getVisibleSlides().map((expertise, index) => {
                // const IconComponent = expertise?.icon;
                return (
                  <div
                    key={`${currentSlide}-${index}`}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-kaeyros-blue to-kaeyros-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {/* <IconComponent className="w-8 h-8 text-white" /> */}
                        {/* { expertise?.icon } */}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {expertise?.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {expertise?.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {expertise?.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-kaeyros-orange rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="mt-6 text-kaeyros-blue hover:text-kaeyros-orange group/btn"
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-kaeyros-blue text-kaeyros-blue hover:bg-kaeyros-blue hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-kaeyros-orange scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-kaeyros-blue text-kaeyros-blue hover:bg-kaeyros-blue hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;