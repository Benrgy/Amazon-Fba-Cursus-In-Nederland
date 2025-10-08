export default function Footer() {
  return <footer className="bg-adspension-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Adspension</h3>
            <p className="text-gray-300">
              Dé #1 Amazon FBA cursus voor Nederlandse en Belgische entrepreneurs. 
              Van beginner naar succesvol Amazon verkoper.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Cursus</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Amazon FBA Training</li>
              <li>BOL.com Modules</li>
              <li>1-op-1 Begeleiding</li>
              <li>Levenslange Toegang</li>
            </ul>
          </div>
          
          
          
          
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2025 Adspension. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Algemene Voorwaarden</a>
            <a href="#" className="text-gray-300 hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>;
}