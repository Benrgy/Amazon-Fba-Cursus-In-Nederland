import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-adspension-yellow/20 to-adspension-orange/20 border-2 border-adspension-orange rounded-lg p-4 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Clock className="w-5 h-5 text-adspension-orange animate-pulse" />
        <p className="font-bold text-adspension-dark">
          🔥 Beperkte Aanbieding Eindigt Over:
        </p>
      </div>
      
      <div className="flex items-center justify-center gap-3">
        <div className="text-center">
          <div className="bg-white rounded-lg px-3 py-2 shadow-md min-w-[60px]">
            <p className="text-2xl font-bold text-adspension-orange">
              {String(timeLeft.hours).padStart(2, '0')}
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-1">Uren</p>
        </div>
        
        <span className="text-2xl font-bold text-adspension-orange">:</span>
        
        <div className="text-center">
          <div className="bg-white rounded-lg px-3 py-2 shadow-md min-w-[60px]">
            <p className="text-2xl font-bold text-adspension-orange">
              {String(timeLeft.minutes).padStart(2, '0')}
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-1">Minuten</p>
        </div>
        
        <span className="text-2xl font-bold text-adspension-orange">:</span>
        
        <div className="text-center">
          <div className="bg-white rounded-lg px-3 py-2 shadow-md min-w-[60px]">
            <p className="text-2xl font-bold text-adspension-orange">
              {String(timeLeft.seconds).padStart(2, '0')}
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-1">Seconden</p>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-600 mt-3">
        ⚡ Nog maar <span className="font-bold text-adspension-orange">3 plekken</span> beschikbaar voor 1-op-1 begeleiding
      </p>
    </div>
  );
}
