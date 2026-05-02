import { useEffect } from "react"

import { HeroSection } from "@/pages/sections/HeroSection"
import { GallerySection } from "@/pages/sections/GallerySection"
import { ProcessSection } from "@/pages/sections/ProcessSection"
import { PricingSection } from "@/pages/sections/PricingSection"
import { WhyChooseSection } from "@/pages/sections/WhyChooseSection"
import { FinalCTASection } from "@/pages/sections/FinalCTASection"
import { ContactFooter } from "@/pages/sections/ContactFooter"

export default function HomePage() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget")

    if (target) {
      sessionStorage.removeItem("scrollTarget")

      setTimeout(() => {
        const el = document.getElementById(target)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }
  }, [])

  return (
    <>
      <HeroSection />
      <GallerySection />
      <ProcessSection />
      <PricingSection />
      <WhyChooseSection />
      <FinalCTASection />
      <ContactFooter />
    </>
  )
}