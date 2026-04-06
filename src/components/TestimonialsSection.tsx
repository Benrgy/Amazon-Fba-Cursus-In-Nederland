import { Star, ExternalLink, MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      initials: "J.D.",
      location: "Amsterdam",
      quote: "De stap-voor-stap aanpak werkt echt. Ik had geen ervaring met e-commerce maar kon snel mijn eerste producten verkopen op Amazon."
    },
    {
      initials: "L.M.",
      location: "Rotterdam",
      quote: "De combinatie van Amazon en BOL.com strategie was perfect voor mij. Tijn's begeleiding was onmisbaar bij elke stap."
    },
    {
      initials: "M.V.",
      location: "Utrecht",
      quote: "Na het volgen van de cursus heb ik een winstgevend Amazon FBA bedrijf opgezet. Beste investering in mezelf ooit!"
    },
    {
      initials: "E.K.",
      location: "Eindhoven",
      quote: "Als starter zocht ik een duidelijke cursus. Dankzij de persoonlijke begeleiding kon ik snel resultaten boeken."
    }
  ];

  return (
    <section className="py-16 bg-adspension-orange" id="reviews" aria-label="Ervaringen van Amazon FBA cursisten">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Wat Cursisten Zeggen
          </h2>
          <p className="text-xl text-white/90">
            Ervaringen van ondernemers uit heel Nederland
          </p>
          <p className="text-sm text-white/70 mt-2">
            * Namen zijn geanonimiseerd ter bescherming van de privacy van onze cursisten
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-adspension-green/20 flex items-center justify-center">
                    <span className="font-bold text-adspension-green text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <span className="font-bold text-adspension-dark">{testimonial.initials}</span>
                    <span className="text-gray-500 text-sm ml-2">uit {testimonial.location}</span>
                  </div>
                </div>
                <div className="flex text-adspension-orange" aria-label="5 van 5 sterren">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">300+</div>
              <div className="text-white/80">Studenten in NL & BE</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-white/80">Gemiddelde Rating</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-white">1-op-1</div>
              <div className="text-white/80">Persoonlijke Begeleiding</div>
            </div>
          </div>

          {/* Trustpilot CTA */}
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
              <span className="text-xl font-bold text-adspension-dark">Deel jouw ervaring</span>
              <Star className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
            </div>
            <p className="text-gray-600 mb-5">
              Heb je de Amazon FBA cursus gevolgd? We horen graag over jouw ervaring. 
              Laat een review achter op Trustpilot en help andere ondernemers bij hun keuze.
            </p>
            <a
              href="https://www.trustpilot.com/review/amazonfbacursusnederland.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00b67a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#00a06a] transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Review achterlaten op Trustpilot
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-xs text-gray-400 mt-3">
              Trustpilot is een onafhankelijk reviewplatform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
