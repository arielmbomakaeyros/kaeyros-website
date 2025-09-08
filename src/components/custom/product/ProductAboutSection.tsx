// src/components/about-section.tsx
"use client";

import { WhoAreWe } from "../svg";
import {
  BookingSvgIcon,
  BookingSvgIcon1,
  BookingSvgIcon2,
  BookingSvgIcon3,
  BookingSvgIcon4,
} from "../ProductSvg";

const aboutItems = [
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon1 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon2 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon3 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon4 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon1 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon2 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon3 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon4 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon2 />,
  },
  {
    title: "Booking",
    svgIcon: <BookingSvgIcon1 />,
  },
];

export function ProductAboutSection() {
  return (
    <section className="md:py-16 pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <span className="text-orange-600 text-sm font-medium">🏠 À propos de nous</span> */}
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
            <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
              {/* Icon here */}
              <WhoAreWe />
              <span className="text-[16px] font-bold text-black font-[yourCustomFont]">
                L'univers SEMA
              </span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
            Au cœur de l'univers SEMA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            WhatsApp devient votre levier de croissance, offrant des expériences
            clients fluides et intelligentes
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#F2F4FC] max-w-[1204px] rounded-[50px]">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 md:gap-6 lg:gap-8 mb-[4rem] justify-center">
            {aboutItems.map((item, index) => (
              <div key={index} className="group bg-transparent w-full max-w-[160px] flex flex-col">
                {/* Card */}
                <div
                  className="
                    relative flex rounded-xl justify-center items-center 
                    bg-white w-full h-[80px] sm:h-[90px] lg:h-[100px]
                    transition-all duration-500 ease-out
                    group-hover:shadow-xl group-hover:shadow-blue-200/60
                    group-hover:scale-105 group-hover:-translate-y-1
                    group-hover:bg-white/90 group-hover:backdrop-blur-sm
                  "
                >
                  <div className="scale-65 sm:scale-80 md:scale-90">
                    {item.svgIcon}
                  </div>
                </div>

                {/* Title */}
                <div className="p-2 sm:p-4 md:p-6 text-center transition-all duration-500 group-hover:translate-y-1">
                  <h3
                    className="
                      text-sm sm:text-[16px] text-gray-900 mb-2 font-semibold 
                      transition-colors duration-500 
                      group-hover:text-[#0F2A96]
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

