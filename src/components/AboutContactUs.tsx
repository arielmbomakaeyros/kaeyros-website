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
} from "./custom/CountrySvg";
import { FeedbackSvgIcon } from "./custom/SvgLight";
import { Button } from "./ui/button";

const data = [
  {
    id: 1,
    number: "20",
    label: "Entreprises partenaires",
    image: "/about/key_numbers/key_numbers1.jpg",
    secondImages: [],
  },
  {
    id: 2,
    number: "10+",
    label: "Solutions digitales",
    image: "/about/key_numbers/key_numbers2.jpg",
    secondImages: [],
  },
  {
    id: 3,
    number: "7",
    label: "Pays couverts",
    image: "/about/key_numbers/key_numbers3.jpg",
    secondImages: [
      <CamerounvgIcon key="cm" />,
      <Country2vgIcon key="c2" />,
      <Country3vgIcon key="c3" />,
      <RDCvgIcon key="rdc" />,
      <GermanySvgIcon key="de" />,
      <SouthAfricaSvgIcon key="za" />,
      <Country7SvgIcon key="c7" />,
    ],
  },
];

export function AboutContactUs() {
  return (
    <section className="py-16 bg-[#4E6290]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-white max-w-2xl mx-auto mb">
            Prêt à transformer vos données en leviers stratégiques puissants? 
          </p>
          <Button className='bg-[#FF5F00] py-[1.5rem] px-[2rem] text-white cursor-pointer'>
                Contact us
              </Button>
        </div>

      </div>
    </section>
  );
}
