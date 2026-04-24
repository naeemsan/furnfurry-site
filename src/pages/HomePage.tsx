import HeroSection from "./sections/HeroSection"
import GallerySection from "./sections/GallerySection"
import ProcessSection from "./sections/ProcessSection"
import PricingSection from "./sections/PricingSection"
import WhyChooseSection from "./sections/WhyChooseSection"
import FinalCTASection from "./sections/FinalCTASection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ProcessSection />
      <PricingSection />
      <WhyChooseSection />
      <FinalCTASection />
    </>
  )
}