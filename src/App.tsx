import { TrustSection } from "@/pages/sections/TrustSection";
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
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      
      {/* GLOBAL NOISE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[url('/noise.png')] opacity-[0.025] mix-blend-soft-light" />

      {/* MAIN CONTENT */}
      <div className="relative z-[2]">
        <Navbar />

        <main>
          <HeroSection />
          <FeatureStrip />
          <GallerySection />
          <CommissionsSection />
          <PricingSection />
          <ProcessSection />
          <TrustSection />
          <WhyChooseSection />
          <PaymentTrustSection />
          <FAQSection />
          <FinalCTASection />
          <ContactFooter />
        </main>
      </div>

    </div>
  );
}