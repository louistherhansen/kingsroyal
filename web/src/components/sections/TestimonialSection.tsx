"use client"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { cn } from "@/lib/utils"
import { getYouTubeEmbedUrl } from "@/lib/youtube"

import { SectionShell } from "./SectionShell"

export type TestimonialSectionProps = {
  className?: string
  videoSrc?: string
}

export function TestimonialSection({
  className,
  videoSrc = "https://www.youtube.com/watch?v=cqWCx__Ox9M",
}: TestimonialSectionProps) {
  const { messages } = useLanguage()
  const m = messages.testimonials
  const embedUrl = videoSrc ? getYouTubeEmbedUrl(videoSrc) : null

  return (
    <SectionShell
      id="testimoni"
      eyebrow={m.eyebrow}
      title={m.title}
      description={m.description}
      className={cn("bg-background", className)}
    >
      <div className="ring-gold-glow overflow-hidden rounded-2xl border border-border/60 bg-card">
        <div className="relative aspect-video w-full bg-black">
          {embedUrl ? (
            <iframe
              className="h-full w-full"
              src={embedUrl}
              title={m.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : null}
        </div>
      </div>
    </SectionShell>
  )
}
