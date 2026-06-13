"use client"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { BranchPhotoSection } from "@/components/location/BranchPhotoSection"
import { FacilitiesSection } from "@/components/sections/FacilitiesSection"
import { HealthBenefitsSection } from "@/components/sections/HealthBenefitsSection"
import { ServiceSection } from "@/components/sections/ServiceSection"
import { SectionShell } from "@/components/sections/SectionShell"
import { cn } from "@/lib/utils"
import { getYouTubeEmbedUrl } from "@/lib/youtube"

export type LocationBranchViewProps = {
  label: string
  videoSrc?: string
  photos?: readonly string[]
  className?: string
}

export function LocationBranchView({
  label,
  videoSrc,
  photos,
  className,
}: LocationBranchViewProps) {
  const { messages } = useLanguage()
  const b = messages.branch
  const embedUrl = videoSrc ? getYouTubeEmbedUrl(videoSrc) : null

  return (
    <main className={cn("flex-1", className)}>
      <section className="border-b border-border/60 bg-muted/10 pt-20">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-[color:var(--lux-gold-highlight)] opacity-80">
            King&apos;s Royal Spa
          </p>
          <h1 className="mt-3 font-heading text-4xl tracking-tight text-gold-gradient sm:text-5xl">
            {label}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {b.intro}
          </p>
        </div>
      </section>

      <SectionShell
        id="video"
        eyebrow={b.video.eyebrow}
        title={b.video.title}
        description={b.video.description}
        className="bg-muted/15"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/60 bg-muted/40">
          {videoSrc ? (
            embedUrl ? (
              <iframe
                className="h-full w-full"
                src={embedUrl}
                title={`${label} video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                src={videoSrc}
                controls
                playsInline
                preload="metadata"
              />
            )
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <p className="text-sm text-muted-foreground">{b.video.placeholder}</p>
            </div>
          )}
        </div>
      </SectionShell>

      {photos && photos.length > 0 ? (
        <BranchPhotoSection photos={photos} branchLabel={label} />
      ) : null}

      <ServiceSection />
      <HealthBenefitsSection />
      <FacilitiesSection />
    </main>
  )
}
