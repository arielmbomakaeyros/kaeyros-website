// src/components/stats-section.tsx
export function StatsSection() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">📊 Nos Chiffres</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Nos Chiffres Clés
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des données concrètes qui illustrent notre impact, notre croissance et la 
            confiance de nos clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
              <span className="text-gray-600 font-medium">Office Team</span>
            </div>
            <div className="text-4xl font-bold text-primary-900 mb-2">20</div>
            <p className="text-gray-600 font-medium">Entreprises partenaires</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl mb-6 flex items-center justify-center">
              <span className="text-yellow-700 font-medium">Happy Team</span>
            </div>
            <div className="text-4xl font-bold text-primary-900 mb-2">10+</div>
            <p className="text-gray-600 font-medium">Solutions digitales</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-200 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-80"></div>
              <div className="relative z-10 text-white font-medium">Global Network</div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full opacity-70"></div>
            </div>
            <div className="text-4xl font-bold text-primary-900 mb-2">7</div>
            <p className="text-gray-600 font-medium">Pays couverts</p>
            <div className="flex justify-center mt-2 space-x-1">
              {['🇨🇲', '🇨🇮', '🇸🇳', '🇲🇦', '🇩🇪', '🇳🇱', '🇿🇦'].map((flag, index) => (
                <span key={index} className="text-sm">{flag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}