import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function SocialProof() {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");

  const names = [
    "Peter uit Amsterdam",
    "Lisa uit Rotterdam", 
    "Marco uit Utrecht",
    "Emma uit Den Haag",
    "David uit Eindhoven",
    "Sophie uit Groningen"
  ];

  useEffect(() => {
    const showNotification = () => {
      setCurrentName(names[Math.floor(Math.random() * names.length)]);
      setVisible(true);
      
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    };

    const interval = setInterval(() => {
      showNotification();
    }, 8000);

    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 animate-slide-in">
      <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs border-l-4 border-adspension-green">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-adspension-green/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-adspension-green" />
          </div>
          <div>
            <p className="font-bold text-adspension-dark text-sm">
              {currentName}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              heeft zojuist de cursus gekocht! 🎉
            </p>
            <p className="text-xs text-gray-500 mt-2">
              2 minuten geleden
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
