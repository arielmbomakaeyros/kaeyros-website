// src/components/solutions-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  BiolabSolutionSvg,
  BookingSvgIcon3,
  DinaSolutionSvg,
  EaseSolutionSvg,
  MedarSolutionSvg,
  MiqSolutionSvg,
  MiraSolutionSvg,
  UcbSolutionSvg,
} from "../SolutionSvg";
import SmallSectionHeader from "../SmallSectionHeader";
// import { BookingSvgIcon3 } from "../ProductSvg";

// Define the solution data structure
interface SolutionData {
  id: string;
  category: string;
  title: string;
  logo: React.ReactNode;
  logoBackground: string;
  description: string;
  features: string[];
  imagePath: string;
  backgroundGradient: string;
  hasMultipleLogos?: boolean;
  additionalLogos?: React.ReactNode[];
  borderRadius?: string;
}

// Sample data for all solutions
const solutionsData: SolutionData[] = [
  {
    id: "biolabs",
    category: "Laboratoire",
    title: "Premium foods",
    logo: <BiolabSolutionSvg />,
    logoBackground: "bg-blue-500",
    description:
      "Nous avons conçu pour Premium Food une application intelligente qui digitalise la gestion des points de vente, optimise le merchandising, simplifie les commandes et sécurise les livraisons pour booster efficacité et croissance des marques agroalimentaires.Nous avons conçu pour  Premium Food une application intelligente qui digitalise la gestion des points de vente, optimise le merchandising, simplifie les commandes et sécurise les livraisons pour booster efficacité et croissance des marques agroalimentaires.",
    features: [
      "Premium Food une application intelligente qui digitalise la gestion des points de vente", 
      "optimise le merchandising", 
      "simplifie les commandes et", 
      "sécurise les livraisons pour booster efficacité et croissance des marques agroalimentaires."
    ],
    imagePath: "/solutions/biolab.png",
    backgroundGradient: "from-blue-50 to-blue-100",
    borderRadius: "rounded-tl-[100px] rounded-br-[100px]",
  },
];

export function ProspectInSolutionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <SmallSectionHeader label="Prospective solutions" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
            Solutions for prospective sectors
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Des entreprises qui innovent et réussissent grâce à notre expertise data et nos solutions digitales
          </p>
        </div>

        {/* Solutions List */}
        <div className="space-y-1 hidden md:block">
          {solutionsData.map((solution) => (
            <div key={solution.id} className="mx-auto ">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="relative h-[700px] z-10 grid lg:grid-cols-2 gap-8 p-2 lg:p-4 items-center">
                  {/* Left Content */}
                  <div className="space-y-6 w-[50%] left-[15%] z-50 absolute bg-white shadow-2xl p-6 rounded-2xl">
                    {/* Category Badge */}

                    <SmallSectionHeader label={solution.category} />

                    {/* Company Name and Logo */}
                    <div className="flex justify-between items-center gap-4 mb-6">
                      <h1 className="text-4xl font-bold text-gray-800">
                        {solution.title}
                      </h1>
                      <div
                        className={` flex items-center justify-center rounded`}
                      >
                        {solution?.hasMultipleLogos &&
                        solution.additionalLogos ? (
                          <div className="flex gap-4 mb-4 flex-wrap">
                            {solution.additionalLogos.map((logo, index) => (
                              <div key={index} className="px-3 py-2 rounded-lg">
                                {logo}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-white">{solution.logo}</div>
                        )}

                      </div>
                    </div>

                    {/* Additional Logos */}
                    {/* {solution.hasMultipleLogos && solution.additionalLogos && (
                      <div className="flex gap-4 mb-4 flex-wrap">
                        {solution.additionalLogos.map((logo, index) => (
                          <div key={index} className="px-3 py-2 rounded-lg">
                            {logo}
                          </div>
                        ))}
                      </div>
                    )} */}

                    {/* Description */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Description
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {solution.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Features
                      </h2>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Content - Device Mockups */}
                  <div
                    className={`h-[90%] absolute right-0 w-[700px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,#3b2c23_40%,#000000_100%)] flex items-center rounded-2xl`}
                  >
                    {/* <BookingSvgIcon3 /> */}
                    <div className="relative flex justify-center items-center">
                      <div className="lg:w-1/3 flex justify-end pr-[3rem] flex-1 h-full rounded-2xl">
                      <div className="lg:w-full ml-[2rem] w-full">
                        
                        <BookingSvgIcon3 />
                      </div>
                        {/* <img
                          src={solution.imagePath}
                          alt={solution.title}
                          className="object-cover w-[70%] h-[70%] rounded-2xl"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solutions List */}
        <div className="space-y-1 md:hidden">
          {solutionsData.map((solution) => (
            <div key={solution.id} className="mx-auto ">
              <div className="relative rounded-3xl">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-2 lg:p-4 items-center">
                  {/* Mobile-first: Image at the top */}
                  <div
                    className={`order-1 lg:order-2 w-full h-[300px] sm:h-[400px] lg:h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,#3b2c23_40%,#000000_100%)] flex items-center justify-center ${
                      solution?.borderRadius
                        ? solution?.borderRadius
                        : "rounded-tr-[100px] rounded-bl-[100px]"
                    }`}
                  >
                    <div className="relative flex justify-center items-center w-full h-full">
                      <div className=" flex justify-center p-4 lg:pr-[3rem]">
                        <BookingSvgIcon3 />
                        {/* <img
                          src={solution.imagePath}
                          alt={solution.title}
                          className="object-cover w-[70%] h-[70%] rounded-2xl"
                        /> */}
                      </div>
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className="order-2 lg:order-1 relative z-50 bg-white shadow-2xl p-6 rounded-2xl w-full lg:w-[50%] lg:absolute lg:left-[15%] space-y-6">
                    {/* Category Badge */}
                    <SmallSectionHeader label={solution.category} />

                    {/* Company Name and Logo */}
                    <div className="flex justify-between items-center gap-4 mb-6">
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        {solution.title}
                      </h1>
                      <div className="flex items-center justify-center rounded">
                        {solution?.hasMultipleLogos &&
                        solution.additionalLogos ? (
                          <div className="flex gap-4 mb-4 flex-wrap">
                            {solution.additionalLogos.map((logo, index) => (
                              <div key={index} className="px-3 py-2 rounded-lg">
                                {logo}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-white">{solution.logo}</div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Description
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {solution.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Features
                      </h2>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
