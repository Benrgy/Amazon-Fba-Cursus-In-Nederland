import { Search, Settings, TrendingUp } from "lucide-react";

export default function WhatYouWillLearn() {
  const features = [
    {
      icon: Search,
      title: "Product Research & Inkopen",
      items: [
        "Winstgevende producten vinden met bewezen software tools",
        "Succesvolle product selectie strategieën voor de Europese markt",
        "Betrouwbare leveranciers vinden en onderhandelen in China",
        "Margeberekening en winstgevendheid analyseren"
      ]
    },
    {
      icon: Settings,
      title: "Amazon Account & FBA Setup",
      items: [
        "Amazon Seller Central account opzetten vanuit Nederland",
        "Brand Registry aanvragen voor merkbescherming",
        "FBA shipment planning en inventory management",
        "BOL.com account opzetten voor de Nederlandse markt"
      ]
    },
    {
      icon: TrendingUp,
      title: "Listings, PPC & Schalen",
      items: [
        "Converterende Amazon productlistings schrijven",
        "Amazon PPC campagnes opzetten voor maximale ROI",
        "Keyword research en listing optimalisatie",
        "Schaalstrategieën voor €10.000+ omzet per maand"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white" id="wat-leer-je" aria-label="Wat leer je in de Amazon FBA cursus">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-adspension-dark">
          Wat Leer Je in Deze Amazon FBA Cursus?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Van product research tot schalen — alles wat je nodig hebt om succesvol te verkopen op Amazon vanuit Nederland
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-adspension-orange rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-adspension-dark">
                {feature.title}
              </h3>
              
              <ul className="space-y-2 text-left">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-adspension-green mr-2 font-bold">✅</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}