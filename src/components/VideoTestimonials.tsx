import { Play } from "lucide-react";

export default function VideoTestimonials() {
  const videos = [
    {
      name: "Jan D.",
      result: "€5.000 omzet in maand 2",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "2:34"
    },
    {
      name: "Lisa M.",
      result: "€12.000 winst in 8 maanden",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
      duration: "3:12"
    },
    {
      name: "Marco V.",
      result: "Voltijd Amazon FBA ondernemer",
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      duration: "4:05"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-adspension-dark">
          Zie Onze Cursisten in Actie
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Luister naar echte succesverhalen van cursisten die hun doelen hebben bereikt
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={video.thumbnail}
                  alt={`${video.name} Amazon FBA succes verhaal`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-adspension-orange ml-1" />
                  </div>
                </div>
                
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                  {video.duration}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <p className="text-white font-bold">{video.name}</p>
                  <p className="text-white/90 text-sm">{video.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            💬 <span className="font-bold">100% authentieke</span> video recensies van echte studenten
          </p>
        </div>
      </div>
    </section>
  );
}
