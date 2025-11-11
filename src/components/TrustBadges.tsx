import { Shield, Award, Users, Clock } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "30-Dagen Garantie",
      description: "100% Geld terug als je niet tevreden bent"
    },
    {
      icon: Award,
      title: "#1 Amazon Cursus NL",
      description: "Hoogst gewaardeerde cursus in Nederland"
    },
    {
      icon: Users,
      title: "300+ Succesvolle Studenten",
      description: "Al 300+ ondernemers zijn je voorgegaan"
    },
    {
      icon: Clock,
      title: "Levenslange Toegang",
      description: "Altijd toegang tot updates en nieuwe content"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-adspension-light to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-adspension-orange/10 flex items-center justify-center mb-3">
                <badge.icon className="w-6 h-6 text-adspension-orange" />
              </div>
              <h3 className="font-bold text-sm text-adspension-dark mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
