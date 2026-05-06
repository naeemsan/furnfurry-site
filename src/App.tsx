import { Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/layout/Navbar";
import { CustomFursuitPage } from "@/pages/CustomFursuitPage";

/* HOME SECTIONS */
import { CommissionsSection } from "@/pages/sections/CommissionsSection";
import { ContactFooter } from "@/pages/sections/ContactFooter";
import { FAQSection } from "@/pages/sections/FAQSection";
import { FeatureStrip } from "@/pages/sections/FeatureStrip";
import { FinalCTASection } from "@/pages/sections/FinalCTASection";
// ❌ REMOVE OLD GALLERY FROM HOME
// import { GallerySection } from "@/pages/sections/GallerySection";
import { HeroSection } from "@/pages/sections/HeroSection";
import { PaymentTrustSection } from "@/pages/sections/PaymentTrustSection";
import { PricingSection } from "@/pages/sections/PricingSection";
import { ProcessSection } from "@/pages/sections/ProcessSection";
import { TrustSection } from "@/pages/sections/TrustSection";
import { WhyChooseSection } from "@/pages/sections/WhyChooseSection";

/* INFO PAGES */
import CareGuide from "./pages/info/CareGuide";
import CommissionTerms from "./pages/info/CommissionTerms";
import MeasureGuide from "./pages/info/MeasureGuide";
import PrivacyPolicy from "./pages/info/PrivacyPolicy";
import RefundPolicy from "./pages/info/RefundPolicy";
import ShippingPolicy from "./pages/info/ShippingPolicy";

/* BLOG PAGES */
import Blog from "./pages/info/Blog";
import CustomFursuitPriceGuide from "./pages/info/CustomFursuitPriceGuide";

/* ✅ NEW GALLERY PAGE */
import GalleryPage from "./pages/GalleryPage";
import FursonaFinderPage from "./pages/FursonaFinderPage";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureStrip />

      {/* ❌ REMOVED OLD GALLERY */}
      {/* <GallerySection /> */}

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
      
      {/* Background noise */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[url('/noise.png')] opacity-[0.025] mix-blend-soft-light" />

      <div className="relative z-[2]">
        <Navbar />
        <WhatsAppButton />

        <Routes>
          {/* MAIN */}
          <Route path="/" element={<HomePage />} />
          <Route path="/custom-fursuit" element={<CustomFursuitPage />} />

          {/* ✅ GALLERY (NEW MAIN PAGE) */}
          <Route path="/gallery" element={<GalleryPage />} />
          
           {/* ✅ FURSONA FINDER */}
          <Route path="/fursona-finder" element={<FursonaFinderPage />} />

          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/custom-fursuit-price-guide"
            element={<CustomFursuitPriceGuide />}
          />

          {/* INFO */}
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