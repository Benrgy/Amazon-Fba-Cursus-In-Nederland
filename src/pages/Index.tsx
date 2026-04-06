import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import WhatIsAmazonFBA from "@/components/WhatIsAmazonFBA";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import FounderBio from "@/components/FounderBio";
import CourseContents from "@/components/CourseContents";
import ComparisonSection from "@/components/ComparisonSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustBadges />
      <WhatIsAmazonFBA />
      <WhatYouWillLearn />
      <FounderBio />
      <CourseContents />
      <ComparisonSection />
      <VideoTestimonials />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyBar />
      
    </div>
  );
};

export default Index;
