"use client";

import { useUIStore } from "@/store/ui-store";
import { EaseSVGIcon, BiolabSvgIcon,LeftArrowSvgIcon, PremiumFoodLogoSvg, RightArrowSvgIcon, WhoAreWe } from "./custom/svg";

const partners = [
  {
    name: "FMCG",
    category: "enterprise",
    logo: <EaseSVGIcon />,
  },
  {
    name: "Voyage",
    category: "travel",
    logo: <EaseSVGIcon />,
  },
  {
    name: "Laboratoire",
    category: "lab",
    logo: <EaseSVGIcon />,
  },
  {
    name: "ONG",
    category: "ngo",
    logo: <EaseSVGIcon />,
  },
];

const partnerProjects = [
  {
    title: "Premium foods",
    description:
      "Nous avons conçu pour Premium Food une application intelligente qui digitalise la gestion des points de vente, optimise le merchandising, simplifie les commandes et sécurise les livraisons pour booster efficacité et croissance des marques agroalimentaires.",
    image: "/about/our_solutions/solution1.jpg",
    company: "Premium Foods",
    logo: <PremiumFoodLogoSvg />,
  },
  {
    title: "Ease Travel",
    description:
      "Plateforme digitale complète pour la gestion des voyages et réservations, optimisant l'expérience client et les opérations.",
    image: "/about/our_solutions/solution2.jpg",
    company: "Ease Travel",
    logo: <EaseSVGIcon />,
  },
  {
    title: "Bio Labs",
    description:
      "Solutions d'analyse de données pour laboratoires, automatisant les processus et améliorant la précision des résultats.",
    image: "/about/our_solutions/solution3.jpg",
    company: "Bio Labs",
    logo: <BiolabSvgIcon />,
  },
  {
    title: "Anti D",
    description:
      "Solutions d'analyse de données pour laboratoires, automatisant les processus et améliorant la précision des résultats.",
    image: "/about/our_solutions/solution4.jpg",
    company: "Anti D",
    logo: <EaseSVGIcon />,
  },
];

export default function SolutionsSection() {
  const { partnersCarouselIndex, nextPartnersCarousel, prevPartnersCarousel } =
    useUIStore();

  return (
    <section id="solutions" className="py-16 bg-[#FAFAFA] md:p-[6rem]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[6rem]">
          {/* <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">🤝 Nos Solutions</span>
          </div> */}
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
            <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
              {/* Icon here */}
              <WhoAreWe />
              <span className="text-2xl font-bold text-black font-[yourCustomFont]">
                Nos Solutions
              </span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl text-[#0F2A96] font-bold text-primary-900 mb-4">
            Nos Partenaires de Croissance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des entreprises qui innovent et réussissent grâce à notre expertise
            data et nos solutions digitales
          </p>
        </div>

        {/* Partners Filter */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevPartnersCarousel}
            className="absolute cursor-pointer left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <LeftArrowSvgIcon />
          </button>


          <div className="relative bg-white rounded-tl-[100px] rounded-br-[100px] md:p-[6rem]">

            <div className="absolute z-50 top-[-5%] left-1/2 transform -translate-x-1/2 flex justify-center mb-12">
              <div className="flex space-x-4 bg-transparent rounded-full p-2">
                {partners.map((partner, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      useUIStore.getState().setPartnersCarouselIndex(index)
                    }
                    className={`px-6 cursor-pointer py-3 border-4 border-transparent rounded-full font-medium transition-all ${
                      index === partnersCarouselIndex
                        ? "bg-[#0F2A96] border-4 border-white shadow-xl text-white"
                        : "text-[#0F2A96] bg-[#E3E5EA] hover:text-primary-900"
                    }`}
                  >
                    {partner.name}
                  </button>
                ))}
              </div>
            </div>
            {/* Partner Showcase Carousel */}
            <div className="relative">
              <div className="w-full overflow-hidden mx-12">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${partnersCarouselIndex * 100}%)`,
                  }}
                >
                  {partnerProjects.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 border-2 p-4 rounded-sm">
                          <div className="flex items-center space-x-4 mb-4">
                            { project.logo }
                          </div>
                          <h3 className="text-3xl font-bold text-[#162E66]">
                            {project.title}
                          </h3>
                          <p className="text-[#5D699D] leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="relative">
                          <div className="h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden">
                            {project.image === "premium-foods" && (
                              <div className="w-full h-full flex items-center justify-center relative">
                                <div className="w-48 h-64 bg-gradient-to-b from-blue-900 to-blue-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                  <span className="text-white font-medium text-center px-4">
                                    Store Manager with Mobile Device
                                  </span>
                                </div>
                                {/* Colorful product shelves background */}
                                <div className="absolute left-4 top-4 bottom-4 w-12 bg-gradient-to-b from-red-400 to-red-600 rounded opacity-60"></div>
                                <div className="absolute left-20 top-8 bottom-8 w-12 bg-gradient-to-b from-green-400 to-green-600 rounded opacity-60"></div>
                                <div className="absolute left-36 top-6 bottom-6 w-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded opacity-60"></div>
                              </div>
                            )}
                            {project.image !== "premium-foods" && (
                              <div className="w-full h-full flex items-center justify-center">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="object-cover w-full h-full"
                                />
                                {/* <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                              /> */}
                                {/* <span className="text-orange-700 font-medium capitalize">{project.title}</span> */}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={nextPartnersCarousel}
            className="absolute cursor-pointer right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <RightArrowSvgIcon />
          </button>
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {partnerProjects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === partnersCarouselIndex
                  ? "bg-orange-500"
                  : "bg-gray-300"
              }`}
              onClick={() =>
                useUIStore.getState().setPartnersCarouselIndex(index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Mock WhoAreWe icon component
// const WhoAreWe = () => (
//   <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
//     <span className="text-white text-xs font-bold">S</span>
//   </div>
// );

// const SolutionsSection = () => {
//   const [partnersCarouselIndex, setPartnersCarouselIndex] = useState(0);
//   const [activeFilter, setActiveFilter] = useState(0);

//   const partners = [
//     {
//       name: "FMCG",
//       category: "enterprise",
//       logo: "FMCG"
//     },
//     {
//       name: "Voyage",
//       category: "travel",
//       logo: "Voyage"
//     },
//     {
//       name: "Laboratoire",
//       category: "lab",
//       logo: "Lab"
//     },
//     {
//       name: "ONG",
//       category: "ngo",
//       logo: "ONG"
//     }
//   ];

//   const partnerProjects = [
//     {
//       title: "Premium foods",
//       description: "Nous avons conçu pour Premium Food une application intelligente qui digitalise la gestion des points de vente, optimise le merchandising, simplifie les commandes et sécurise les livraisons pour booster efficacité et croissance des marques agroalimentaires.",
//       image: "premium-foods",
//       company: "Premium Foods",
//       category: "enterprise",
//       logos: ["MIE", "MIRA", "RI", "MEDAR"]
//     },
//     {
//       title: "Voyage Solutions",
//       description: "Plateforme digitale complète pour la gestion des voyages et réservations, optimisant l'expérience client et les opérations.",
//       image: "voyage",
//       company: "Voyage Partners",
//       category: "travel",
//       logos: ["VOYAGE", "TRAVEL"]
//     },
//     {
//       title: "Lab Analytics",
//       description: "Solutions d'analyse de données pour laboratoires, automatisant les processus et améliorant la précision des résultats.",
//       image: "laboratory",
//       company: "Science Lab",
//       category: "lab",
//       logos: ["LAB", "ANALYTICS"]
//     },
//     {
//       title: "Anti D",
//       description: "Kaeyros a développé pour ANTi D une application innovante offrant un espace sécurisé et confidentiel aux communautés LGBTQ+. Elle facilite l'accès à des informations fiables, services d'assistance et ressources adaptées, tout en renforçant la communication et la visibilité des actions menées.",
//       image: "anti-d",
//       company: "ANTi D",
//       category: "ngo",
//       logos: ["MIE", "MIRA", "RI", "MEDAR"]
//     }
//   ];

//   // Filter projects based on selected category
//   const getFilteredProjects = () => {
//     if (activeFilter === 0) {
//       return partnerProjects.filter(p => p.category === 'enterprise');
//     }
//     return partnerProjects.filter(p => p.category === partners[activeFilter].category);
//   };

//   const filteredProjects = getFilteredProjects();
//   const currentProject = filteredProjects[partnersCarouselIndex] || partnerProjects[0];

//   const handleFilterClick = (filterIndex: number) => {
//     setActiveFilter(filterIndex);
//     setPartnersCarouselIndex(0); // Reset to first slide when changing filter
//   };

//   const nextPartnersCarousel = () => {
//     setPartnersCarouselIndex((prev) =>
//       prev >= filteredProjects.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevPartnersCarousel = () => {
//     setPartnersCarouselIndex((prev) =>
//       prev <= 0 ? filteredProjects.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section id="solutions" className="py-16 bg-[#FAFAFA]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
//             <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
//               <WhoAreWe />
//               <span className="text-2xl font-bold text-black">Nos Solutions</span>
//             </div>
//           </div>
//           <h2 className="text-3xl lg:text-4xl text-[#0F2A96] font-bold mb-4">
//             Nos Partenaires de Croissance
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Des entreprises qui innovent et réussissent grâce à notre expertise data et nos solutions digitales
//           </p>
//         </div>

//         {/* Partners Filter */}
//         <div className="flex justify-center mb-12">
//           <div className="flex space-x-4 bg-transparent rounded-full p-2">
//             {partners.map((partner, index) => {
//               const isActive = index === activeFilter;
//               const hasContent = partnerProjects.some(p => p.category === partner.category);

//               return (
//                 <button
//                   key={index}
//                   onClick={() => handleFilterClick(index)}
//                   className={`px-6 py-3 rounded-full font-medium transition-all relative ${
//                     isActive
//                       ? 'bg-[#0F2A96] text-white'
//                       : 'text-gray-600 hover:text-[#0F2A96] hover:bg-gray-200'
//                   }`}
//                 >
//                   {partner.name}
//                   {hasContent && !isActive && (
//                     <span className="ml-2 w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Partner Showcase Carousel */}
//         <div className="relative">
//           <div className="flex items-center">
//             {filteredProjects.length > 1 && (
//               <button
//                 onClick={prevPartnersCarousel}
//                 className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <ChevronLeft className="w-6 h-6 text-[#0F2A96]" />
//               </button>
//             )}

//             <div className="w-full overflow-hidden mx-12">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${partnersCarouselIndex * 100}%)` }}
//               >
//                 {filteredProjects.map((project, index) => (
//                   <div key={index} className="w-full flex-shrink-0 px-4">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                       <div className="space-y-6">
//                         <div className="flex items-center space-x-4 mb-4">
//                           {project.logos && project.logos.map((logo, logoIndex) => (
//                             <div key={logoIndex} className="h-8 px-3 bg-gray-100 rounded flex items-center justify-center">
//                               <span className="text-xs font-bold text-[#0F2A96]">{logo}</span>
//                             </div>
//                           ))}
//                         </div>
//                         <h3 className="text-3xl font-bold text-[#0F2A96]">{project.title}</h3>
//                         <p className="text-gray-600 leading-relaxed">{project.description}</p>
//                       </div>

//                       <div className="relative">
//                         <div className="h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden">
//                           {project.image === 'premium-foods' && (
//                             <div className="w-full h-full flex items-center justify-center relative">
//                               <div className="w-48 h-64 bg-gradient-to-b from-blue-900 to-blue-700 rounded-lg flex items-center justify-center relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                                 <span className="text-white font-medium text-center px-4">Store Manager with Mobile Device</span>
//                               </div>
//                               <div className="absolute left-4 top-4 bottom-4 w-12 bg-gradient-to-b from-red-400 to-red-600 rounded opacity-60"></div>
//                               <div className="absolute left-20 top-8 bottom-8 w-12 bg-gradient-to-b from-green-400 to-green-600 rounded opacity-60"></div>
//                               <div className="absolute left-36 top-6 bottom-6 w-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded opacity-60"></div>
//                             </div>
//                           )}
//                           {project.image === 'anti-d' && (
//                             <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-purple-100 to-pink-100">
//                               <div className="w-full h-full flex items-center justify-center relative">
//                                 <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-lg flex items-center justify-center">
//                                   <span className="text-purple-700 font-medium text-center px-4">LGBTQ+ Safe Space Platform</span>
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                           {!['premium-foods', 'anti-d'].includes(project.image) && (
//                             <div className="w-full h-full flex items-center justify-center">
//                               <span className="text-orange-700 font-medium capitalize">{project.title}</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {filteredProjects.length > 1 && (
//               <button
//                 onClick={nextPartnersCarousel}
//                 className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <ChevronRight className="w-6 h-6 text-[#0F2A96]" />
//               </button>
//             )}
//           </div>

//           {/* Dots Indicator */}
//           {filteredProjects.length > 1 && (
//             <div className="flex justify-center mt-8 space-x-2">
//               {filteredProjects.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full transition-colors ${
//                     index === partnersCarouselIndex ? 'bg-orange-500' : 'bg-gray-300'
//                   }`}
//                   onClick={() => setPartnersCarouselIndex(index)}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Filter Status */}
//         <div className="text-center mt-8">
//           <p className="text-sm text-gray-500">
//             Affichage: {partners[activeFilter].name} ({filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''})
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolutionsSection;

// src/components/solutions-section.tsx
