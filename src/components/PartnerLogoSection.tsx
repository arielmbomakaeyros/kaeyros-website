// src/components/partners-logos-section.tsx
export function PartnersLogosSection() {
  const partnerLogos = [
    "UB", "FMCG", "Swinkels", "Global SARL", "EASE",
    "SCEF", "CARDIO", "PRESTIGE HOTEL", "TD", "ENERGY"
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">🤝 Nos Partenaires</span>
          </div>
          <h2 className="text-2xl font-bold text-primary-900 mb-2">
            Partenaires pour un impact durable
          </h2>
          <p className="text-gray-600">
            Nos partenaires, piliers de l'innovation, nous accompagnent pour transformer vos 
            data en opportunités concrètes et créer un impact durable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <span className="text-gray-400 font-medium text-sm">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}