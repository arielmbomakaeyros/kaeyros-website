"use client";

import { useUIStore } from "@/store/ui-store";
import { EaseSVGIcon, BiolabSvgIcon, LeftArrowSvgIcon, PremiumFoodLogoSvg, RightArrowSvgIcon, WhoAreWe } from "./custom/svg";
import { useState } from "react";
import SmallSectionHeader from "./custom/SmallSectionHeader";

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
    // logo: <PremiumFoodLogoSvg />,
    logo: '/about/our_solutions/solution5.jpg'
  },
  {
    title: "Ease Travel",
    description:
      "Plateforme digitale complète pour la gestion des voyages et réservations, optimisant l'expérience client et les opérations.",
    image: "/about/our_solutions/solution2.jpg",
    company: "Ease Travel",
    // logo: <EaseSVGIcon />,
    logo: '/about/our_solutions/solution6.jpg'
  },
  {
    title: "Bio Labs",
    description:
      "Solutions d'analyse de données pour laboratoires, automatisant les processus et améliorant la précision des résultats.",
    image: "/about/our_solutions/solution3.jpg",
    company: "Bio Labs",
    // logo: <BiolabSvgIcon />,
    logo: '/about/our_solutions/solution6.png'
  },
  {
    title: "Anti D",
    description:
      "Solutions d'analyse de données pour laboratoires, automatisant les processus et améliorant la précision des résultats.",
    image: "/about/our_solutions/solution4.jpg",
    company: "Anti D",
    // logo: <EaseSVGIcon />,
    logo: '/about/our_solutions/solution7.png'
  },
];

export default function SolutionsSection() {
  const { partnersCarouselIndex, nextPartnersCarousel, prevPartnersCarousel } =
    useUIStore();
  const [showFull, setShowFull] = useState(false);

  return (
    <section id="solutions" className="py-8 md:py-16 bg-[#FAFAFA] md:p-[6rem]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-[6rem]">
          
          <SmallSectionHeader label="Nos Solutions" />
          <h2 className="text-3xl lg:text-4xl tracking-tighter lg:tracking-tight font-bold text-[#0F2A96] mb-4">
            Nos Partenaires de Croissance
          </h2>
          <p className="text-lg text-gray-600 tracking-tighter lg:tracking-tight max-w-2xl mx-auto">
            Des entreprises qui innovent et réussissent grâce à notre expertise
            data et nos solutions digitales
          </p>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {/* Partners Filter - Mobile */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap justify-center gap-2 bg-white rounded-full p-2">
              {partners.map((partner, index) => (
                <button
                  key={index}
                  onClick={() =>
                    useUIStore.getState().setPartnersCarouselIndex(index)
                  }
                  className={`px-3 py-2 text-sm cursor-pointer rounded-full font-medium transition-all ${
                    index === partnersCarouselIndex
                      ? "bg-[#0F2A96] text-white shadow-md"
                      : "text-[#0F2A96] bg-[#E3E5EA] hover:text-primary-900"
                  }`}
                >
                  {partner.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Project Card */}
          <div className="bg-white rounded-2xl p-6 mx-4">
            {/* <div className="flex items-center space-x-4 mb-4">
              {partnerProjects[partnersCarouselIndex].logo}
            </div> */}
            <h3 className="flex items-center space-x-4 mb-4 font-bold text-[#162E66]">
              {partnerProjects[partnersCarouselIndex].logo}
            </h3>
            <h3 className="text-xl font-bold text-[#162E66] mb-4">
              {partnerProjects[partnersCarouselIndex].title}
            </h3>
            
            <div className="mb-4">
              <img
                src={partnerProjects[partnersCarouselIndex].image}
                alt={partnerProjects[partnersCarouselIndex].title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            
            <p className={`text-[#5D699D] leading-relaxed mb-4 ${
              showFull ? '' : 'line-clamp-3'
            }`}>
              {partnerProjects[partnersCarouselIndex].description}
            </p>
            
            {partnerProjects[partnersCarouselIndex].description?.length > 80 && (
              <button
                type="button"
                onClick={() => setShowFull((prev) => !prev)}
                className="text-sm font-medium text-blue-600 hover:underline focus:outline-none"
              >
                {showFull ? 'View less' : 'View more'}
              </button>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevPartnersCarousel}
              className="cursor-pointer p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <LeftArrowSvgIcon />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {partnerProjects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
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
            
            <button
              onClick={nextPartnersCarousel}
              className="cursor-pointer p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <RightArrowSvgIcon />
            </button>
          </div>
        </div>

        {/* Desktop View (unchanged design for large screens) */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center">
            <div>
              <button
                onClick={prevPartnersCarousel}
                className="cursor-pointer z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <LeftArrowSvgIcon />
              </button>
            </div>

            <div className="relative bg-white rounded-tl-[100px] rounded-br-[100px] w-full md:w-[60vw] lg:w-[50vw] md:p-8 lg:p-12 xl:p-[6rem]">

              <div className="absolute z-50 top-[-5%] left-1/2 transform -translate-x-1/2 flex justify-center mb-12">
                <div className="flex space-x-2 md:space-x-4 bg-transparent rounded-full p-2">
                  {partners.map((partner, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        useUIStore.getState().setPartnersCarouselIndex(index)
                      }
                      className={`px-3 md:px-4 lg:px-6 cursor-pointer py-2 md:py-3 border-4 border-transparent rounded-full font-medium text-sm md:text-base transition-all ${
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
                <div className="w-full overflow-hidden mx-4 md:mx-8 lg:mx-12">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${partnersCarouselIndex * 100}%)`,
                    }}
                  >
                    {partnerProjects.map((project, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                        <div className="flex gap-4 md:gap-8 lg:gap-12 items-center justify-end relative">
                          <div className="absolute bg-white z-50 left-[5%] md:left-[8%] lg:left-[10%] w-[250px] md:w-[300px] lg:w-[400px] space-y-3 md:space-y-4 lg:space-y-6 border-2 border-gray-500/10 p-3 md:p-4 rounded-xl">
                            <div className="z-50 w-[100px] flex items-center mb-1">
                              <img src={project.logo} className="w-full" alt="" />
                              {/* {project.logo} */}
                            </div>
                            <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-[#162E66]">
                              {project.title}
                            </h3>
                            <p className={`text-sm md:text-base font-light text-[#5D699D] `
                            }>
                              {/* ${ showFull ? '' : 'line-clamp-2' } */}
                              {/* leading-relaxed */}
                              {/* md:text-base */}
                              {project.description}
                            </p>
                            {/* View more / less */}
                            {/* {project.description?.length > 80 && (
                              <button
                                type="button"
                                onClick={() => setShowFull((prev) => !prev)}
                                className="text-sm font-medium text-blue-600 hover:underline focus:outline-none"
                              >
                                {showFull ? 'View less' : 'View more'}
                              </button>
                            )} */}
                          </div>

                          <div className="relative">
                            <div className="h-48 md:h-60 lg:w-[370px] lg:h-[370px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden">
                              
                              {project.image !== "premium-foods" && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                  />
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

            <div>
              <button
                onClick={nextPartnersCarousel}
                className="cursor-pointer z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <RightArrowSvgIcon />
              </button>
            </div>

          </div>
          
          {/* Dots Indicator - Desktop */}
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
      </div>
    </section>
  );
}

// "use client";

// import { useUIStore } from "@/store/ui-store";
// import { EaseSVGIcon, BiolabSvgIcon,LeftArrowSvgIcon, PremiumFoodLogoSvg, RightArrowSvgIcon, WhoAreWe } from "./custom/svg";
// import { useState } from "react";
// import SmallSectionHeader from "./custom/SmallSectionHeader";

// const partners = [
//   {
//     name: "FMCG",
//     category: "enterprise",
//     logo: <EaseSVGIcon />,
//   },
//   {
//     name: "Voyage",
//     category: "travel",
//     logo: <EaseSVGIcon />,
//   },
//   {
//     name: "Laboratoire",
//     category: "lab",
//     logo: <EaseSVGIcon />,
//   },
//   {
//     name: "ONG",
//     category: "ngo",
//     logo: <EaseSVGIcon />,
//   },
// ];

// const partnerProjects = [
//   {
//     title: "Premium foods",
//     description:
//       "Nous avons conçu pour Premium Food une application intelligente qui digitalise la gestion des points de vente, optimise le merchandising, simplifie les commandes et sécurise les livraisons pour booster efficacité et croissance des marques agroalimentaires.",
//     image: "/about/our_solutions/solution1.jpg",
//     company: "Premium Foods",
//     logo: <PremiumFoodLogoSvg />,
//   },
//   {
//     title: "Ease Travel",
//     description:
//       "Plateforme digitale complète pour la gestion des voyages et réservations, optimisant l'expérience client et les opérations.",
//     image: "/about/our_solutions/solution2.jpg",
//     company: "Ease Travel",
//     logo: <EaseSVGIcon />,
//   },
//   {
//     title: "Bio Labs",
//     description:
//       "Solutions d'analyse de données pour laboratoires, automatisant les processus et améliorant la précision des résultats.",
//     image: "/about/our_solutions/solution3.jpg",
//     company: "Bio Labs",
//     logo: <BiolabSvgIcon />,
//   },
//   {
//     title: "Anti D",
//     description:
//       "Solutions d'analyse de données pour laboratoires, automatisant les processus et améliorant la précision des résultats.",
//     image: "/about/our_solutions/solution4.jpg",
//     company: "Anti D",
//     logo: <EaseSVGIcon />,
//   },
// ];

// export default function SolutionsSection() {
//   const { partnersCarouselIndex, nextPartnersCarousel, prevPartnersCarousel } =
//     useUIStore();
//   const [showFull, setShowFull] = useState(false);

//   return (
//     <section id="solutions" className="py-16 bg-[#FAFAFA] md:p-[6rem]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-[6rem]">
          
//           <SmallSectionHeader label="Nos Solutions" />
//           <h2 className="text-3xl lg:text-4xl text-[#0F2A96] font-bold text-primary-900 mb-4">
//             Nos Partenaires de Croissance
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Des entreprises qui innovent et réussissent grâce à notre expertise
//             data et nos solutions digitales
//           </p>
//         </div>

//         {/* Partners Filter */}
//         <div className="flex justify-between items-center">
//           <div>
//             <button
//               onClick={prevPartnersCarousel}
//               className=" cursor-pointer z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <LeftArrowSvgIcon />
//             </button>
//           </div>

//           <div className="relative bg-white rounded-tl-[100px] rounded-br-[100px] w-full md:w-[60vw] md:p-[6rem]">

//             <div className="absolute z-50 top-[-5%] left-1/2 transform -translate-x-1/2 flex justify-center mb-12">
//               <div className="flex space-x-4 bg-transparent rounded-full p-2">
//                 {partners.map((partner, index) => (
//                   <button
//                     key={index}
//                     onClick={() =>
//                       useUIStore.getState().setPartnersCarouselIndex(index)
//                     }
//                     className={`px-6 cursor-pointer py-3 border-4 border-transparent rounded-full font-medium transition-all ${
//                       index === partnersCarouselIndex
//                         ? "bg-[#0F2A96] border-4 border-white shadow-xl text-white"
//                         : "text-[#0F2A96] bg-[#E3E5EA] hover:text-primary-900"
//                     }`}
//                   >
//                     {partner.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Partner Showcase Carousel */}
//             <div className="relative">
//               <div className="w-full overflow-hidden mx-12">
//                 <div
//                   className="flex transition-transform duration-500 ease-in-out"
//                   style={{
//                     transform: `translateX(-${partnersCarouselIndex * 100}%)`,
//                   }}
//                 >
//                   {partnerProjects.map((project, index) => (
//                     <div key={index} className="w-full flex-shrink-0 px-4">
//                       <div className="flex gap-12 items-center justify-end relative">
//                         <div className="absolute bg-white z-50 left-[10%] w-[400px] space-y-6 border-2 p-4 rounded-xl">
//                           <div className="flex items-center space-x-4 mb-4">
//                             { project.logo }
//                           </div>
//                           <h3 className="text-3xl font-bold text-[#162E66]">
//                             {project.title}
//                           </h3>
//                           <p  className={`text-[#5D699D] leading-relaxed ${
//                             showFull ? '' : 'line-clamp-2'
//                           }`}>
//                             {project.description}
//                           </p>
//                           {/* View more / less */}
//                           {project.description?.length > 80 && (
//                             <button
//                               type="button"
//                               onClick={() => setShowFull((prev) => !prev)}
//                               className="text-sm font-medium text-blue-600 hover:underline focus:outline-none"
//                             >
//                               {showFull ? 'View less' : 'View more'}
//                             </button>
//                           )}
//                         </div>

//                         <div className="relative">
//                           <div className="h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden">
                            
//                             {project.image !== "premium-foods" && (
//                               <div className="w-full h-full flex items-center justify-center">
//                                 <img
//                                   src={project.image}
//                                   alt={project.title}
//                                   className="object-cover w-full h-full"
//                                 />
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <button
//               onClick={nextPartnersCarousel}
//               className="cursor-pointer z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <RightArrowSvgIcon />
//             </button>
//           </div>

//         </div>
//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {partnerProjects.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === partnersCarouselIndex
//                   ? "bg-orange-500"
//                   : "bg-gray-300"
//               }`}
//               onClick={() =>
//                 useUIStore.getState().setPartnersCarouselIndex(index)
//               }
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
