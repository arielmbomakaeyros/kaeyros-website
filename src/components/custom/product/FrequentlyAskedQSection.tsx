"use client";

import { Button } from "@/components/ui/button";
import { WhoAreWe } from "../svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

const qaList = [
  {
    question: "Qu'est-ce que SEMA ?",
    answer:
      "SEMA est une suite d'outils digitaux intégrés à WhatsApp qui facilitent la gestion clients, la prospection et le suivi de performances pour stimuler la croissance de votre entreprise.",
  },
  {
    question: "Pourquoi choisir SEMA plutôt qu'un autre outil ?",
    answer:
      "SEMA fonctionne uniquement sur WhatsApp, sans applications ni matériels supplémentaires. Il rend vos processus plus rapides, simples et accessibles à toutes les entreprises.",
  },
  {
    question: "Quels outils inclut l'univers SEMA ?",
    answer:
      "SEMA propose plusieurs modules : gestion clients, prospection automatisée, statistiques, campagnes marketing, pointage via QR code, chatbot, réservations, ticketing et suivi en temps réel.",
  },
  {
    question: "À qui s'adresse SEMA ?",
    answer:
      "SEMA s'adapte à toutes tailles d'entreprises: TPE, PME, startups, microfinances et grandes entreprises. Sa flexibilité permet de répondre aux besoins de chaque structure.",
  },
  {
    question: "Combien coûte l'abonnement ?",
    answer:
      "Le prix varie selon les modules et l'utilisation. Les formules restent abordables et garantissent un retour sur investissement grâce au gain de temps et à l'automatisation.",
  },
  {
    question: "Comment souscrire ?",
    answer:
      "Choisissez votre module, abonnez-vous en ligne et activez SEMA directement sur WhatsApp. L'installation est rapide et ne demande aucune compétence technique.",
  },
  {
    question: "Est-ce facile à utiliser ?",
    answer:
      "Oui. L'interface WhatsApp rend SEMA intuitif et accessible, même sans expérience digitale. Vous pouvez l'utiliser immédiatement après activation.",
  },
  {
    question: "Quels problèmes SEMA résout-il ?",
    answer:
      "SEMA centralise tout sur WhatsApp : organisation clients, suivi des performances, prospection, réduction des coûts, optimisation du temps et simplification de la digitalisation.",
  },
  {
    question: "Les outils sont-ils personnalisables ?",
    answer:
      "Oui. Chaque entreprise choisit ses modules et peut en ajouter au fur et à mesure de sa croissance. Les solutions SEMA sont flexibles et évolutives.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "La sécurité est une priorité. Vos informations sont protégées, confidentielles et conformes aux normes internationales.",
  },
];

export function FrequentlyAskedQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 mb-4">
            <div className="flex items-center gap-2 px-6 py-1 rounded-full bg-white">
              <WhoAreWe />
              <span className="text-[16px] font-bold text-black font-[yourCustomFont]">
                Questions fréquemment posées
              </span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A96] mb-4">
            Tout ce que vous devez savoir sur SEMA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SEMA transforme WhatsApp en moteur de croissance avec ses outils
            intelligents, pour une expérience client fluide.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* FAQ Accordion */}
          <div className="flex flex-col justify-center items-center w-full flex-1">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {qaList.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white data-[state=open]:bg-gray-100 rounded-lg shadow-sm border border-gray-200 px-4 transition-colors duration-200"
                >
                  <AccordionTrigger className="flex justify-between items-center py-4 text-left hover:no-underline ">
                    {/* [&[data-state=open]>svg]:rotate-90 [&>svg]:hidden */}
                    <span className="font-semibold text-gray-800 pr-4">
                      {item.question}
                    </span>
                    {/* <ChevronRight className="h-5 w-5 transition-transform duration-200 text-gray-500" /> */}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Vous ne trouvez pas ce dont vous avez besoin ?{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Contactez-nous
                </span>
              </p>
            </div>
          </div>

          {/* FAQ Image */}
          <div className="hidden lg:block lg:w-1/3 flex-1 h-full rounded-2xl p-5">
            <img
              src={"/faq/faq1.jpg"}
              alt={""}
              className="object-cover w-full h-[80%] rounded-2xl"
            />
          </div>
        </div>

        {/* Action Buttons */}
      </div>
    </section>
  );
}
