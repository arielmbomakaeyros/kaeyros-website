// src/components/products-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RightArrowSlimSvgIcon, WhoAreWe } from "./custom/svg";
import SEMAEcosystem from "./SEMAEcosystem";
import SmallSectionHeader from "./custom/SmallSectionHeader";

export function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center text-start ">
          {/* <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">📦 Nos Produits</span>
          </div> */}

          <SmallSectionHeader label="Nos Produits" />
          <h2 className="text-[32px] text-[#0F2A96] lg:text-[36px] font-bold text-primary-900 mb-4">
            L'univers SEMA
          </h2>
          <p style={{}} className="md:text-[16px] lg:text-[18px] mb-[1rem] tracking-[-1px] lg:text-center text-start text-[#515A82] max-w-2xl lg:mx-auto">
            SEMA transforme WhatsApp en moteur de croissance avec ses outils
            intelligents, pour une expérience client fluide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-[#515A82] font-light text-[14px] lg:text-[20px] leading-relaxed">
              Sema offre un univers digital innovant pour les entreprises
              africaines, entièrement basé sur WhatsApp. Ses services incluent
              la gestion client, le ticketing, la tombola, le shop, le pointage,
              les messages en masse, le booking et le travel. Grâce à son
              assistant commercial intelligent, Sema centralise vos
              interactions, automatise la prospection et facilite l'engagement
              avec vos prospects, permettant ainsi de booster vos ventes
              facilement. Et ce n'est pas tout...
            </p>

            <div className="flex gap-[2rem] flex-col sm:flex-row ">
              <Button className="bg-[#FF5F00] text- text-white cursor-pointer font-bold py-[1.5rem] px-[2rem]">
                Explorez l'univers SEMA
              </Button>
              <Link
                href="/contact"
                className="text-[#3E52BC] flex items-center cursor-pointer underline underline-offset-10"
              >
                Demander une démo <RightArrowSlimSvgIcon />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex md:items-center justify-center">
            <SEMAEcosystem />
          </div>
        </div>
      </div>
    </section>
  );
}
