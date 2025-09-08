import ComingSoon from '@/components/custom/ComingSoon'
import { FrequentlyAskedQSection } from '@/components/custom/product/FrequentlyAskedQSection'
import { ParrainageSection } from '@/components/custom/product/ParrainageSection'
import { ProductAboutSection } from '@/components/custom/product/ProductAboutSection'
import { ProductHeroSection } from '@/components/custom/product/ProductHeroSection'
import { SemaUniverseSection } from '@/components/custom/product/SemaUniverseSection'
import { SemaUseCaseSection } from '@/components/custom/product/SemaUseCaseSection'
import React from 'react'

const ProductPage = () => {
  return (
    <>
     <ProductHeroSection />
     <ProductAboutSection />
     <SemaUseCaseSection />
     <SemaUniverseSection />
     <FrequentlyAskedQSection />
     <ParrainageSection actionBtn='Demander une démo' title='Parrainage' description="Gagner 1 mois gratuit d'une solution de SEMA Univers en parrainant un proche." />
    </>
    // <div>
    //   <ComingSoon />
    // </div>
  )
}

export default ProductPage