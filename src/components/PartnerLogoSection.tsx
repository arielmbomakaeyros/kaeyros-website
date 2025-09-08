import SmallSectionHeader from "./custom/SmallSectionHeader";
import { WhoAreWe } from "./custom/svg"
import { CarimoSvgIcon, EaseLogoGreySvgIcon, GroupeSABCSvgIcon, ItemsLogoSvgIcon, JCPrestigeSvgIcon, KeturaSvgIcon, PremiumFoodSarlSvgIcon, SofitoulSASvgIcon, SwinkelsSvgIcon, UCBSvgIcon } from "./custom/SvgForPartners";

// src/components/partners-logos-section.tsx
export function PartnersLogosSection() {
  const partnerLogos = [
    <UCBSvgIcon key="ub" />,
    <PremiumFoodSarlSvgIcon key="fmcg" />,
    <SwinkelsSvgIcon key="swinkels" />,
    <GroupeSABCSvgIcon key="global-sarl" />,
    <EaseLogoGreySvgIcon key="ease" />,
    <KeturaSvgIcon key="scef" />,
    <CarimoSvgIcon key="cardio" />,
    <JCPrestigeSvgIcon key="prestige-hotel" />,
    <ItemsLogoSvgIcon key="td" />,
    <SofitoulSASvgIcon key="energy" />,
  ];

  return (
    <section className="lg:py-[6rem] py-[2rem] bg-white">
      <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center mb-[4rem]">
          {/* <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
            <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
              <WhoAreWe />
              <span className="text-2xl font-bold text-black font-[yourCustomFont]">
                Nos Partenaires
              </span>
            </div>
          </div> */}
          <SmallSectionHeader label="Nos Partenaires" />
          <h2 className="text-3xl lg:text-4xl text-[#0F2A96] font-bold text-primary-900 mb-2">
            Partenaires pour un impact durable
          </h2>
          <p className="text-gray-600 text-center  max-w-[700px]">
            Nos partenaires, piliers de l'innovation, nous accompagnent pour transformer vos 
            data en opportunités concrètes et créer un impact durable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 max-w-6xl">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}