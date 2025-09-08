// src/components/about-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { WhoAreWe } from "../svg";
import {
  Step1SvgIcon,
  Step2SvgIcon,
  Step3SvgIcon,
  Step4SvgIcon,
} from "../ProductSvg";
import SmallSectionHeader from "../SmallSectionHeader";

const aboutItems = [
  {
    title: "Comprendre votre besoin",
    description: "Chaque entreprise est unique. SEMA vous aide à identifier vos véritables priorités commerciales : prospection, gestion de clients ou suivi de performances. Vous gagnez  en clarté et en confiance pour votre croissance.",
    svgIcon: <Step1SvgIcon />,
    image: "/products/prod_img1.jpg"
    // booletPoint: ["Bulk Messaging", "Tombola", "Loyalty"],
  },
  {
    title: " Choisir l'outil SEMA adapté",
    description: "SEMA propose une gamme d'outils intelligents disponible via WhatsApp. Selon vos besoins, sélectionnez la solution qui simplifie vos processus, renforce votre relation client et maximise vos opportunités commerciales.",
    svgIcon: <Step2SvgIcon />,
    image: "/products/prod_img2.png"
  },
  {
    title: "Activer votre abonnement",
    description: "En quelques clics, vous débloquez tout le potentiel de SEMA. L'abonnement est flexible et accessible, garantissant un retour sur investissement immédiat et une prise en main rapide, sans complexité technique.",
    svgIcon: <Step3SvgIcon />,
    image: "/products/prod_img3.jpg"
    // booletPoint: ["Pointage", "Booking", "Prise de Commande"],
  },
  {
    title: "Observer la croissance",
    description: "Avec SEMA, vos chiffres parlent d'eux-mêmes : plus de prospects convertis, une fidélisation accrue et des décisions éclairées. Chaque interaction devient une opportunité mesurable, et votre entreprise grandit durablement.",
    svgIcon: <Step4SvgIcon />,
    image: "/products/prod_img4.jpg"
    // booletPoint: ["Pointage", "Booking", "Prise de Commande"],
  },
];

export function SemaUniverseSection() {
  return (
    <section className="py-8 md:py-16 bg-[#FAFAFA]">
      {/* bg-[#FAFAFA] */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <SmallSectionHeader label="L'univers SEMA" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
            Comment ça fonctionne
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            SEMA transforme WhatsApp en moteur de croissance avec ses outils
            intelligents, pour une expérience client fluide.
          </p>
        </div>

        {/* Mobile Layout (1 per row) */}
        <div className="md:hidden flex flex-col gap-6 mb-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="group p-4 border-1 border-gray-40 rounded-2xl bg-white flex flex-col gap-4 mx-2"
            >
              {/* Image */}
              <div className="w-full h-[200px] rounded-2xl">
                <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              {/* Content */}
              <div
                className="p-4 relative flex rounded-xl 
                 w-full 
                 flex-col
                 transition-all ease-out
                group-hover:shadow-xl group-hover:shadow-blue-200/60
                group-hover:scale-105
                
                  bg-white duration-500 group-hover:translate-y-1"
              >
                <div className="flex flex-row w-full justify-between items-center mb-4">
                    <div className="bg-[#4E66EB] text-white w-8 h-8 flex justify-center items-center rounded-full text-sm font-bold">
                        {index + 1}
                    </div>
                    <div className="scale-75">
                        {item?.svgIcon}
                    </div>
                </div>
                <h3
                  className="
                  text-lg text-gray-900 mb-3 font-bold
                  transition-colors duration-500 
                  group-hover:text-[#0F2A96]
                "
                >
                  {item.title}
                </h3>
                <p className="text-sm text-justify text-[#60667F] leading-relaxed">
                    {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet Layout (original design) */}
        <div className="hidden md:flex flex-row mb-[4rem] flex-wrap place-items-center gap-4 justify-center items-center">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="group p-5 border-2 rounded-2xl bg-white flex flex-row gap-4"
            >
              {/* Card */}
              <div className="w-[200px] hidden md:block h-[300px] rounded-2xl">
                <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              {/* Title */}
              <div
                className="p-4 relative flex rounded-xl 
                 w-[300px] 
                 flex-col
                 transition-all ease-out
                group-hover:shadow-xl group-hover:shadow-blue-200/60
                group-hover:scale-105
                  bg-white sm:p-6 duration-500 group-hover:translate-y-1"
              >
                <div className="flex flex-row w-full justify-between items-center mb-[2rem]">
                    <div className="bg-[#4E66EB] text-white w-10 h-10 flex justify-center items-center rounded-full">
                        {index + 1}
                    </div>
                    <div>
                        {item?.svgIcon}
                    </div>
                </div>
                <h3
                  className="
                  text-[16px] text-gray-900 mb-2 font-bold
                  transition-colors duration-500 
                  group-hover:text-[#0F2A96]
                "
                >
                  {item.title}
                </h3>
                <p className="text-[14px] text-justify text-[#60667F]">
                    {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="container flex w-full justify-start md:justify-center items-center gap-4 flex-col sm:flex-row px-4">
          <Button className="bg-[#FF5F00] py-[1.5rem] px-[2rem] text-white cursor-pointer w-full sm:w-auto">
            Demandez une demo
          </Button>
          <Button
            variant="outline"
            className="text-[#3E52BC] border-2 py-[1.5rem] px-[2rem] border-[#3E52BC] hover:bg-[#3E52BC] hover:text-white cursor-pointer w-full sm:w-auto"
          >
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
}
