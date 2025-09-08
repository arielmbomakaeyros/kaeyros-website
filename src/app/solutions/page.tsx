import ComingSoon from '@/components/custom/ComingSoon';
import { ParrainageSection } from '@/components/custom/product/ParrainageSection';
import { ProspectInSolutionSection } from '@/components/custom/solutions/ProspectInSolutionSection';
import { SolutionHeroSection } from '@/components/custom/solutions/SolutionHeroSection';
import { SolutionsInSolutionSection } from '@/components/custom/solutions/SolutionsInSolutionSection';
// import SolutionsInSolutionSection from '@/components/custom/solutions/SolutionsInSolutionSection';
// import { SolutionsInSolutionSection } from '@/components/custom/solutions/SolutionsInSolutionSection';
import React from 'react'

const SolutionsPage = () => {
  return (
        <>
         <SolutionHeroSection />
         <SolutionsInSolutionSection />
         <ProspectInSolutionSection />
         <ParrainageSection actionBtn='Demander une démo' title='Referral Highlight' description="🎉 Parrainez un client, recevez jusqu'à 1 000 messages gratuits ou 1 mois offert !" />
        </>
    // <div>
    //   <ComingSoon />
    // </div>
  )
}

export default SolutionsPage;