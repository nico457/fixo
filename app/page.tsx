import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { FeaturedProfessionals } from "@/components/featured-professionals"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { CommonProblems } from "@/components/common-problems"
import { GuaranteeBanner } from "@/components/guarantee-banner"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <GuaranteeBanner />
      <ServicesGrid />
      <FeaturedProfessionals />
      <CommonProblems />
      <HowItWorks />
      <Testimonials />
    </main>
  )
}
