import { HealthBenefitsSection } from "@/components/sections/HealthBenefitsSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServiceSection } from "@/components/sections/ServiceSection"
import { TestimonialSection } from "@/components/sections/TestimonialSection"
import { VideoReviewSection } from "@/components/sections/VideoReviewSection"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection
        slides={[
          "/slider/_MG_5663.JPG",
          "/slider/hero-branch-01.png",
          "/slider/hero-branch-02.png",
          "/slider/hero-branch-03.png",
          "/slider/hero-branch-04.png",
        ]}
        autoPlayMs={4500}
        pauseAfterInteractionMs={6000}
      />
      <VideoReviewSection src="https://www.youtube.com/watch?v=cJUze_WRzTU" />
      <ServiceSection />
      <HealthBenefitsSection />
      <TestimonialSection videoSrc="https://www.youtube.com/watch?v=cqWCx__Ox9M" />
    </main>
  )
}
