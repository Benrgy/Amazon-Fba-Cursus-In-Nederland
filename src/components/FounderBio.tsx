import tijnImg from "@/assets/tijn-strikker.webp";

export default function FounderBio() {
  return (
    <section className="py-16 bg-gray-50" id="over-tijn" aria-label="Over Tijn Strikker" itemScope itemType="https://schema.org/Person">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-adspension-dark">
          Jouw Amazon FBA Coach: Tijn Strikker
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={tijnImg} 
              alt="Tijn Strikker - Amazon FBA coach en oprichter van Adspension in Nederland"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
              itemProp="image"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed" data-speakable="true">
              <strong itemProp="name">Tijn Strikker</strong> heeft een <strong>Master in Digital Business</strong> van de 
              <span itemProp="alumniOf"> Universiteit van Amsterdam</span> en is de oprichter van Adspension — 
              de meest complete Amazon FBA cursus in Nederland.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Met ruime ervaring in e-commerce heeft Tijn <strong>meer dan 300 studenten begeleid</strong> in heel Nederland 
              en België bij het opzetten van hun Amazon FBA business. Van ondernemers in Amsterdam en Rotterdam tot 
              starters in Eindhoven, Utrecht en Groningen.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Tijn is gespecialiseerd in <span itemProp="knowsAbout">Amazon PPC Advertising</span>, 
              <span itemProp="knowsAbout"> Brand Registry</span>, <span itemProp="knowsAbout"> product research</span> en 
              <span itemProp="knowsAbout"> BOL.com strategie</span>. Zijn praktische, no-nonsense aanpak heeft 
              talloze ondernemers geholpen om hun eerste €1.000, €5.000 en zelfs €10.000+ per maand te verdienen.
            </p>
            
            <div className="pt-4">
              <div className="inline-flex items-center bg-adspension-green text-white px-4 py-2 rounded-lg">
                <span className="font-semibold">🏆 95% van studenten behaalt winst binnen 6 maanden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}