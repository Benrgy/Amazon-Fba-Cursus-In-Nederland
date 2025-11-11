import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const features = [
    { feature: "40+ Uitgebreide video's", ours: true, others: false },
    { feature: "70+ pagina eBook", ours: true, others: false },
    { feature: "1-op-1 Persoonlijke begeleiding", ours: true, others: false },
    { feature: "BOL.com bonus modules", ours: true, others: false },
    { feature: "WhatsApp support groep", ours: true, others: false },
    { feature: "Templates & spreadsheets", ours: true, others: true },
    { feature: "Levenslange updates", ours: true, others: false },
    { feature: "30-dagen geld-terug", ours: true, others: true },
    { feature: "Nederlandse leveranciers lijst", ours: true, others: false },
    { feature: "PPC advertising gids", ours: true, others: false }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-adspension-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-adspension-dark">
          Waarom Kies Je Voor Adspension?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Vergelijk onze cursus met andere Amazon FBA cursussen en zie direct het verschil
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-gradient-to-r from-adspension-orange to-adspension-orange/90 text-white p-4">
            <div className="text-left">
              <h3 className="font-bold text-sm md:text-base">Functie</h3>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-sm md:text-base">Adspension</h3>
              <p className="text-xs md:text-sm text-white/90">€497</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-sm md:text-base">Anderen</h3>
              <p className="text-xs md:text-sm text-white/90">€700-€2000</p>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-3 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left text-sm md:text-base text-gray-700 pr-2">
                  {item.feature}
                </div>
                <div className="flex justify-center">
                  {item.ours ? (
                    <div className="w-8 h-8 rounded-full bg-adspension-green/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-adspension-green" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <X className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.others ? (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <Check className="w-5 h-5 text-gray-400" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <X className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-adspension-green/10 to-adspension-green/5 p-6 text-center">
            <p className="text-lg font-bold text-adspension-dark mb-2">
              Meer waarde voor minder geld + Persoonlijke begeleiding
            </p>
            <p className="text-gray-600 text-sm">
              🎯 De enige cursus in Nederland met volledige 1-op-1 support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
