"use client";
import Image from "next/image";
import {
  CamerounvgIcon,
  Country2vgIcon,
  Country3vgIcon,
  Country7SvgIcon,
  GermanySvgIcon,
  RDCvgIcon,
  SouthAfricaSvgIcon,
} from "../CountrySvg";
import { FeedbackSvgIcon } from "../SvgLight";
import { Button } from "../../ui/button";


export function ParrainageSection({ title, description, actionBtn}: {title: string, description: string, actionBtn: string,}) {
  return (
    <section className="py-4 lg:py-16 bg-[#4E6290]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center lg:mb-12">
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto mb-4">
            {description}
          </p>
          <Button className='bg-[#FF5F00] py-[1.5rem] px-[2rem] text-white cursor-pointer'>
            {actionBtn}
          </Button>
        </div>

      </div>
    </section>
  );
}
