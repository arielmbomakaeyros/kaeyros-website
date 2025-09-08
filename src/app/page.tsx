// src/app/page.tsx

import { AboutSection } from "@/components/AboutSection";
import ActuallitySection from "@/components/ActuallitySection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { HeroSection } from "@/components/HeroSection";
import { PartnersLogosSection } from "@/components/PartnerLogoSection";
import { ProductsSection } from "@/components/ProductSection";
import SolutionsSection from "@/components/SoultionSection";
// import { SolutionsSection } from "@/components/SoultionSection";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProductsSection />
      <SolutionsSection />
      <PartnersLogosSection />
      <StatsSection />
      <ActuallitySection />
    </>
  )
}
