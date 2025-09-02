// src/app/page.tsx
// import { Header } from '@/components/header'
// import { HeroSection } from '@/components/hero-section'
// import { AboutSection } from '@/components/about-section'
// import { ExpertiseSection } from '@/components/expertise-section'
// import { ProductsSection } from '@/components/products-section'
// import { SolutionsSection } from '@/components/solutions-section'
// import { PartnersLogosSection } from '@/components/partners-logos-section'
// import { StatsSection } from '@/components/stats-section'
// import { Footer } from '@/components/footer'

import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PartnersLogosSection } from "@/components/PartnerLogoSection";
import { ProductsSection } from "@/components/ProductSection";
import { SolutionsSection } from "@/components/SoultionSection";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProductsSection />
      <SolutionsSection />
      <PartnersLogosSection />
      <StatsSection />
      <Footer />
    </>
  )
}
// import Footer from '@/components/custom/layout/Footer';
// import Header from '@/components/custom/layout/Header';
// import ExpertiseSection from '@/components/custom/sections/ExpertiseSection';
// import HeroSection from '@/components/custom/sections/HeroSection';

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Header />
//       <HeroSection />
//       <ExpertiseSection />
//       <Footer />
//     </main>
//   );
// }