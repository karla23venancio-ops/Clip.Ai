import { HeroSection } from "@/components/custom/hero-section"
import { FeaturesSection } from "@/components/custom/features-section"
import { PricingSection } from "@/components/custom/pricing-section"
import { CtaSection } from "@/components/custom/cta-section"
import { Footer } from "@/components/custom/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
