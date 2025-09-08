// src/components/about-section.tsx
"use client";

import { useUIStore } from "@/store/ui-store";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { WhoAreWe, WomanSmilingSvg } from "../svg";
import SmallSectionHeader from "../SmallSectionHeader";
// import LeadershipSection from './LeadershipSection'
// import { WhoAreWe, WomanSmilingSvg } from './custom/svg'

const aboutItems = [
  {
    title: "Notre Histoire",
    content:
      "Kaeyros Analytics est née de la conviction que les données sont un levier stratégique, capable de transformer les informations en actions concrètes, guidant les acteurs économiques locaux et internationaux vers des décisions éclairées, une croissance durable et un impact significatif sur leurs...",
    image: "/about_page/second_img1.jpg",
    svgIcon: <WomanSmilingSvg />,
  },
  {
    title: "Mission et Vision",
    content:
      "Simplifier et automatiser l'accès aux données pour gagner en performance, accompagner la croissance des entreprises et transformer les données en leviers stratégiques durables. Devenir le partenaire technologique de référence en Afrique, valorisant les compétences locales...",
    image: "/about_page/second_img2.jpg",
    svgIcon: <WomanSmilingSvg />,
  },
];

export function AboutSectionAbout() {
  const { currentCarouselIndex, setCarouselIndex, nextCarousel, prevCarousel } =
    useUIStore();

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container lg:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:mb-12">
          {/* <span className="text-orange-600 text-sm font-medium">🏠 À propos de nous</span> */}
          <div className="w-full flex justify-start lg:justify-center">
          <SmallSectionHeader label="À propos de nous" />
          </div>
          <h2 className="text-start md:text-center text-[32px] lg:text-[36px] font-bold text-[#0F2A96] lg;mb-4">
            Qui sommes nous
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-transparent rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col max-w-[450px]"
            >
              {/* Header */}
              <div className="bg-[#091C6E] p-5 text-white flex items-center justify-end relative">
                <h3 className="text-xl font-bold text-primary-900">
                  {item.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-[2rem]">
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-5 mb-4">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
