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

export function StatsSection() {
  return (
    <section className="py-16 bg-[#4E6290]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-[2px] rounded-full bg-[#1E3A8A] mb-4">
            <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-transparent border-4 border-gradient">
              <FeedbackSvgIcon />
              <span className="text-white text-[16px] font-bold tracking-wide uppercase distressed-text">
                Nos Chiffres
              </span>
            </div>
          </div>

          <style jsx>{`
            .border-gradient {
              position: relative;
              z-index: 1;
            }
            .border-gradient::before {
              content: "";
              position: absolute;
              top: -4px;
              left: -4px;
              right: -4px;
              bottom: -4px;
              background: linear-gradient(90deg, #ff4500, #ffa500, #ffd700);
              border-radius: 9999px;
              z-index: -1;
            }
            .border-gradient::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: #1e3a8a;
              border-radius: 9999px;
              z-index: -1;
            }
            .distressed-text {
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2),
                -1px -1px 2px rgba(0, 0, 0, 0.2);
            }
          `}</style>

          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-4">
            Nos Chiffres Clés
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Des données concrètes qui illustrent notre impact, notre croissance
            et la confiance de nos clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 sm:gap-6 md:gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-lg flex flex-col ${
                item.id === 1
                  ? "h-[400px]"
                  : item.id === 2
                  ? "h-[450px]"
                  : "h-[500px]"
              }`}
            >
              {/* Top Image */}
              <div
                className={`relative w-full ${
                  item.id === 1
                    ? "h-1/2"
                    : item.id === 2
                    ? "h-2/3"
                    : "h-3/4"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Content */}
              <div className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                <div className="text-[100px] font-bold text-gray-900 mb-2">
                  {item.number}
                </div>
                <p className="text-lg text-[#4B5EAA] font-medium">{item.label}</p>

                {item.secondImages.length > 0 && (
                  <div className="flex justify-center mt-4 gap-2 flex-wrap">
                    {item.secondImages.map((icon) => (
                      <div key={icon.key} className="w-6 h-6">
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
