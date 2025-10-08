import { Button } from "@/components/ui/button";
export default function Header() {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-adspension-dark">Amazon FBA Cursus in Nederland</div>
        </div>
        
        <Button variant="cta" size="lg" className="hidden md:inline-flex">
          PLAN JOUW GRATIS CALL IN!
        </Button>
      </div>
    </header>;
}