import { FacilitiesSection } from "@/components/sections/FacilitiesSection"
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
          "/slider/_MG_5674.JPG",
          "/slider/SLIDE-1.jpeg",
          "/slider/_MG_5715.JPG",
        ]}
        autoPlayMs={4500}
        pauseAfterInteractionMs={6000}
      />
      <VideoReviewSection src="https://www.youtube.com/watch?v=cJUze_WRzTU" />
      <ServiceSection />
      <HealthBenefitsSection />
      <FacilitiesSection />
      <TestimonialSection videoSrc="https://www.youtube.com/watch?v=cqWCx__Ox9M" />
    </main>
  )
}
