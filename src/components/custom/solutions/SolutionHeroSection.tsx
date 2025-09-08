// src/components/hero-section.tsx
"use client";

import SEMAEcosystem from "@/components/SEMAEcosystem";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { ChartSvgIcon, DoubleGearSvgIcon, HeadSetsSvgIcon, HeroSectionSVG, MessageSvgIcon, RocketSvgIcon, TwentyFourSvgIcon } from './custom/svg'

export function SolutionHeroSection() {
  return (
    <section className="bg-gradient-to-br mt-[2rem] pt-20 lg:pt-[10rem] lg:pb-[5rem]">
        <div className="flex justify-center w-full flex-col gap-3 items-center md:gap-[2rem]">
          <h1 className="text-4xl text-center lg:text-[70px] w-full lg:max-w-[50vw] font-bold text-[#162E66] leading-tight">
            Transforming needs into data driven solutions
          </h1>
          <p className="text-[16px] lg:text-[24px] text-center text-[#515A82] max-w-[500px] leading-relaxed">
            Nous mettons la puissance des données et de la digitalisation au
            service de la croissance de entreprises.
          </p>
          <div className="flex flex-col justify-center sm:flex-row gap-4">
            <Button className="bg-[#FF5F00] py-[1.5rem] px-[2rem] text-white cursor-pointer">
              Contact us
            </Button>
          </div>
        </div>
    </section>
  );
}
