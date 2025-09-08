// src/components/about-section.tsx
"use client";

import { useUIStore } from "@/store/ui-store";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { WhoAreWe, WomanSmilingSvg } from "../svg";
// import { BookingSvgIcon } from "../SvgLight";
import {
  BookingSvgIcon,
  BookingSvgIcon1,
  BookingSvgIcon2,
  BookingSvgIcon3,
  BookingSvgIcon4,
  CollectAndFeedbackSvgIcon,
  MarkettingFidelisationSvgIcon,
  OperationAndOrganizationSvgIcon,
} from "../ProductSvg";

const aboutItems = [
  {
    title: "Marketing & Fidélisation",
    svgIcon: <MarkettingFidelisationSvgIcon />,
    booletPoint: ["Bulk Messaging", "Tombola", "Loyalty"],
  },
  {
    title: "Collecte & Feedback",
    svgIcon: <CollectAndFeedbackSvgIcon />,
    booletPoint: ["Data collector", "Transaction validation"],
  },
  {
    title: "Opérations & Organisation",
    svgIcon: <OperationAndOrganizationSvgIcon />,
    booletPoint: ["Pointage", "Booking", "Prise de Commande"],
  },
];

export function SemaUseCaseSection() {
  // const { currentCarouselIndex, setCarouselIndex, nextCarousel, prevCarousel } =
  //   useUIStore();

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <span className="text-orange-600 text-sm font-medium">🏠 À propos de nous</span> */}
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
            <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
              {/* Icon here */}
              <WhoAreWe />
              <span className="text-[16px] font-bold text-black font-[yourCustomFont]">
                Cas d'utilisation SEMA
              </span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
            Points forts des cas d'utilisation
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            WhatsApp devient votre levier de croissance, offrant des expériences
            clients fluides et intelligentes
          </p> */}
        </div>

        <div className="flex flex-row mb-[4rem] flex-wrap place-items-center gap-4 justify-center items-center">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl bg-[#4E6290] flex flex-col gap-4"
            >
              {/* Card */}
              <div className="">{item.svgIcon}</div>

              {/* Title */}
              <div
                className="p-4 relative flex rounded-xl 
             w-[300px] sm:h-[100px] md:h-[150px] 
             flex-col
             transition-all ease-out
            group-hover:shadow-xl group-hover:shadow-blue-200/60
            group-hover:scale-105
             group-hover:backdrop-blur-sm bg-white sm:p-6 duration-500 group-hover:translate-y-1"
              >
                <h3
                  className="
              text-[16px] text-gray-900 mb-2 font-semibold 
              transition-colors duration-500 
              group-hover:text-[#0F2A96]
            "
                >
                  {item.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  {item?.booletPoint?.map((bool, i) => (
                    <li key={i}>{bool}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="container flex w-full justify-center items-center">
          <Button className="bg-[#FF5F00] py-[1.5rem] px-[3rem] text-white cursor-pointer">
            Contactez nous
          </Button>
        </div>
      </div>
    </section>
  );
}
