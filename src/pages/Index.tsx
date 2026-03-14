import StickyHeader from "@/components/StickyHeader";
import ReadingProgress from "@/components/ReadingProgress";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import BrutalTruthSection from "@/components/BrutalTruthSection";
import WhatYouGetFree from "@/components/WhatYouGetFree";
import DeepFeatures from "@/components/DeepFeatures";
import FreeValueComparison from "@/components/FreeValueComparison";
import FOMOSection from "@/components/FOMOSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingMobileCTA from "@/components/FloatingMobileCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SocialProofToast from "@/components/SocialProofToast";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <StickyHeader />
      <HeroSection />
      <SocialProofBar />
      <div className="lotus-divider">​</div>
      <BrutalTruthSection />
      <div className="lotus-divider border-0">​</div>
      <WhatYouGetFree />
      <DeepFeatures />
      <div className="lotus-divider">​</div>
      <FreeValueComparison />
      <FOMOSection />
      <div className="lotus-divider">​</div>
      <Testimonials />
      <FAQSection />
      <div className="lotus-divider">​</div>
      <FinalCTA />
      <Footer />
      <FloatingMobileCTA />
      <ExitIntentPopup />
      <SocialProofToast />
    </div>);

};

export default Index;