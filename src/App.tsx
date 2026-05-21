import { Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/layout/Navbar";
import { CustomFursuitPage } from "@/pages/CustomFursuitPage";
import QuotePage from "./pages/QuotePage";


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
import WhatIsFurryFandom from "./pages/info/WhatIsFurryFandom";
import WhyCustomFursuitsExpensive from "./pages/info/WhyCustomFursuitsExpensive";
import PartialFursuitVsFullFursuit from "./pages/info/PartialFursuitVsFullFursuit";
import FirstCustomFursuitGuide from "./pages/info/FirstCustomFursuitGuide";

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
      <section className="px-4 py-20 sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-white/10 bg-card p-6 shadow-elevated md:grid-cols-2 md:p-8">
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <img
        src="/gallery/head-wolf-brown.jpg"
        alt="Aurelian Wolf handmade fursuit head"
        className="h-full w-full object-cover"
      />
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Recent Handmade Build
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        Aurelian Wolf Head
      </h2>

      <p className="mt-4 text-muted-foreground">
        A warm cream and brown canine fursuit head with expressive follow-me
        eyes, layered facial markings, soft cheek shaping, and a friendly
        open-mouth expression.
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-background/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Materials
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Luxury faux fur, soft foam base, follow-me mesh eyes, fleece
          detailing, sculpted nose, and lined interior.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href="/gallery"
          className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:scale-[1.02]"
        >
          View Gallery
        </a>

        <a
          href="#quote-form"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-5 py-3 text-sm font-bold transition hover:border-primary/40 hover:text-primary"
        >
          Request Similar Build
        </a>
      </div>
    </div>
  </div>
</section>
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

          <Route path="/quote" element={<QuotePage />} />

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
          <Route
           path="/blog/what-is-the-furry-fandom"
           element={<WhatIsFurryFandom />}
          />
          
          <Route
           path="/blog/why-are-custom-fursuits-so-expensive"
           element={<WhyCustomFursuitsExpensive />}
           />
           
          <Route
          path="/blog/partial-fursuit-vs-full-fursuit"
          element={<PartialFursuitVsFullFursuit />}
           />

          <Route
  path="/blog/how-to-commission-your-first-custom-fursuit"
  element={<FirstCustomFursuitGuide />}
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