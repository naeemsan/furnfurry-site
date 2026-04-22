import { CustomFursuitPage } from "@/pages/CustomFursuitPage";
import { Navbar } from "@/components/layout/Navbar";
import { CommissionsSection } from "@/pages/sections/CommissionsSection";
import { ContactFooter } from "@/pages/sections/ContactFooter";
import { FAQSection } from "@/pages/sections/FAQSection";
import { FeatureStrip } from "@/pages/sections/FeatureStrip";
import { FinalCTASection } from "@/pages/sections/FinalCTASection";
import { GallerySection } from "@/pages/sections/GallerySection";
import { HeroSection } from "@/pages/sections/HeroSection";
import { PaymentTrustSection } from "@/pages/sections/PaymentTrustSection";
import { PricingSection } from "@/pages/sections/PricingSection";
import { ProcessSection } from "@/pages/sections/ProcessSection";
import { WhyChooseSection } from "@/pages/sections/WhyChooseSection";

export default function App() {
  const pathname = window.location.pathname;

  if (pathname === "/custom-fursuit") {
    return <CustomFursuitPage />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureStrip />
        <CommissionsSection />
        <PricingSection />
        <ProcessSection />
        <GallerySection />
        <WhyChooseSection />
        <PaymentTrustSection />
        <FAQSection />
        <FinalCTASection />
        <ContactFooter />
      </main>
    </div>
  );
}