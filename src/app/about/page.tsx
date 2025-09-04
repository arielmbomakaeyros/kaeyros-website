import { AboutContactUs } from '@/components/AboutContactUs'
import { AboutSectionAbout } from '@/components/custom/about/AboutSectionAbout'
import { HeroSectionAbout } from '@/components/custom/about/HeroSectionAbout'
import OurStory from '@/components/custom/about/OurStory'
import TeamSection from '@/components/custom/about/TeamSection'
import WhatWeDo from '@/components/custom/about/WhatWeDo'
import ComingSoon from '@/components/custom/ComingSoon'
import { PartnersLogosSection } from '@/components/PartnerLogoSection'
import React from 'react'

const AboutPage = () => {

  return (
    <>
      <HeroSectionAbout />
      <AboutSectionAbout />
      <OurStory />
      <WhatWeDo />
      <PartnersLogosSection />
      <TeamSection />
      <AboutContactUs />
    </>
    // <div>
    //   <ComingSoon />
    // </div>
  )
}

export default AboutPage