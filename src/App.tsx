import { Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/layout/Navbar";
import { CustomFursuitPage } from "@/pages/CustomFursuitPage";

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
import { TrustSection } from "@/pages/sections/TrustSection";
import { WhyChooseSection } from "@/pages/sections/WhyChooseSection";

import CareGuide from "@/pages/info/CareGuide";
import CommissionTerms from "@/pages/info/CommissionTerms";
import MeasureGuide from "@/pages/info/MeasureGuide";
import PrivacyPolicy from "@/pages/info/PrivacyPolicy";
import RefundPolicy from "@/pages/info/RefundPolicy";
import ShippingPolicy from "@/pages/info/ShippingPolicy";

function HomePage() {
  return (
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
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Subtle global noise texture */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[url('/noise.png')] opacity-[0.025] mix-blend-soft-light" />

      <div className="relative z-[2]">
        <Navbar />

        {/* 🔥 WhatsApp Floating Button */}
        <WhatsAppButton />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/custom-fursuit" element={<CustomFursuitPage />} />

          <Route path="/terms" element={<CommissionTerms />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/measure" element={<MeasureGuide />} />
          <Route path="/care" element={<CareGuide />} />
        </Routes>
      </div>
    </div>
  );
}