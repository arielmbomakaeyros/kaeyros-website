import React from "react";
import { WhoAreWe } from "../svg";

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-[#FAFAFAD9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
            <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
              <WhoAreWe />
              <span className="text-2xl font-bold text-black font-[yourCustomFont]">
                Nos solutions
              </span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
            Ce que nous faisons
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Text Section (narrower) */}
          <div className="md:flex-[4] w-full text-gray-700 leading-relaxed">
            <p>
              Nous développons des solutions digitales de nouvelle génération
              qui automatisent la collecte, l&apos;analyse et la valorisation des
              données. Forts de notre expertise en big data, intelligence
              artificielle et digitalisation, nous aidons les entreprises à
              optimiser leurs processus, à anticiper les tendances de leurs
              marchés et à prendre des décisions plus rapides, fiables et
              pertinentes.
            </p>
            <br />
            <p>
              Qu&apos;il s&apos;agisse de plateformes de gestion client, d&apos;outils de suivi
              terrain, de systèmes de pointage digitalisé ou de solutions
              conçues sur mesure, chaque produit que nous créons combine
              simplicité d&apos;usage, efficacité opérationnelle et impact durable.
               Nous sommes convaincus que la donnée est le moteur essentiel de
              la croissance des entreprises modernes. 
            </p>
          </div>
          {/* Image Section (wider) */}
          <div className="md:flex-[5] w-full">
            <div className="relative rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-lg h-[500px]">
              <img
                // src="/about_page/hero_image.png"
                src="/about_page/second_img4.jpg"
                alt="Notre histoire"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

// import React from 'react'
// import { WhoAreWe } from '../svg'

// const OurStory = () => {
//   return (
//      <section className="py-16 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">

//                 {/* <span className="text-orange-600 text-sm font-medium">🏠 À propos de nous</span> */}
//                 <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
//                     <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
//                         {/* Icon here */}
//                         <WhoAreWe />
//                         <span className="text-2xl font-bold text-black font-[yourCustomFont]">Nos produits</span>
//                     </div>
//                 </div>
//                 <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
//                     Notre histoire
//                 </h2>
//                 {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                     Nous transformons la data en croissance durable pour les entreprises,
//                     en Afrique et à l'international.
//                 </p> */}
//             </div>

//             <div className='flex flex-row '>
//                 <div className="relative">
//                 <div className="relative rounded-tl-[100px] rounded-br-[100px] bg-white rounded-2xl p-8 h-[500px] flex items-center justify-center">
//                     <div

//                         className={`rounded-tl-[100px] bg-black rounded-br-[100px] overflow-hidden shadow-lg flex flex-col`}
//                     >
//                         <img
//                             src={"/about_page/hero_image.png"}
//                             alt={""}
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <p>
//                     Kaeyros est née d&apos;une idée simple : les entreprises africaines ne disposent pas et n'exploitent pas leurs données.Dans une ambiance bonne enfance à Yaoundé, une équipe passionnée de jeunes talents en technologie, digitalisation et data science a décidé de relever un défi audacieux : rendre la puissance de l’analyse et de l’automatisation accessible à toutes les entreprises, des plus petites aux plus grandes. Kaeyros a transformé des conversations entre amis en un projet concret : bâtir une datatech africaine capable de rivaliser avec les standards internationaux tout en restant profondément ancrée dans la réalité locale.
// Aujourd’hui, Kaeyros incarne l’alliance entre innovation et proximité. Chaque solution que nous créons répond à un besoin réel du marché et aide nos partenaires à transformer leurs données en opportunités stratégiques, mesurables et durables.
//                 </p>
//             </div>
//             </div>
//           </div>
//         </section>
//   )
// }

// export default OurStory
