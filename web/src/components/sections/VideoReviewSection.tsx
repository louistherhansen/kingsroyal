"use client"

import * as React from "react"

import { SectionShell } from "@/components/sections/SectionShell"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { cn } from "@/lib/utils"
import { getYouTubeEmbedUrl } from "@/lib/youtube"

export type VideoReviewSectionProps = {
  className?: string
  src?: string
  title?: string
  description?: string
}

export function VideoReviewSection({
  className,
  src = "/video/video1.mp4",
  title,
  description,
}: VideoReviewSectionProps) {
  const { messages } = useLanguage()
  const m = messages.video
  const resolvedTitle = title ?? m.title
  const resolvedDescription = description ?? m.description
  const embedUrl = src ? getYouTubeEmbedUrl(src) : null
  const isYouTube = Boolean(embedUrl)

  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = React.useState(true)
  const [autoplayBlocked, setAutoplayBlocked] = React.useState(false)
  const [shouldPlay, setShouldPlay] = React.useState(false)

  React.useEffect(() => {
    if (isYouTube) return
    const el = videoRef.current
    if (!el) return

    // iOS/Safari: `defaultMuted` helps autoplay eligibility.
    el.muted = true
    el.defaultMuted = true
    el.playsInline = true

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setShouldPlay(true)
        } else {
          setShouldPlay(false)
          el.pause()
        }
      },
      { threshold: 0.35 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [isYouTube])

  React.useEffect(() => {
    if (isYouTube) return
    const el = videoRef.current
    if (!el) return
    if (!shouldPlay) return

    // Retry autoplay a few times: some browsers need a tick after layout/metadata.
    let cancelled = false

    const attempt = async () => {
      try {
        el.muted = true
        el.defaultMuted = true
        await el.play()
        if (!cancelled) setAutoplayBlocked(false)
      } catch {
        if (!cancelled) setAutoplayBlocked(true)
      }
    }

    const raf = requestAnimationFrame(() => void attempt())
    const t1 = window.setTimeout(() => void attempt(), 250)
    const t2 = window.setTimeout(() => void attempt(), 900)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [isYouTube, shouldPlay])

  React.useEffect(() => {
    if (isYouTube) return
    const el = videoRef.current
    if (!el) return
    el.muted = isMuted
  }, [isMuted, isYouTube])

  return (
    <SectionShell
      id="video"
      eyebrow={m.eyebrow}
      title={resolvedTitle}
      description={resolvedDescription}
      className={cn("bg-background", className)}
    >
      <div className="ring-gold-glow overflow-hidden rounded-2xl border border-border/60 bg-card">
        <div className="relative aspect-video w-full bg-black">
          {isYouTube && embedUrl ? (
            <iframe
              className="h-full w-full"
              src={embedUrl}
              title={resolvedTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          )}

          {/* Fallback overlay if autoplay is blocked */}
          {!isYouTube && autoplayBlocked ? (
            <div className="absolute inset-0 grid place-items-center bg-black/35 backdrop-blur-[2px]">
              <button
                type="button"
                className="bg-gold-gradient ring-gold-glow h-11 rounded-none px-7 text-sm font-semibold text-primary-foreground"
                onClick={() => {
                  const el = videoRef.current
                  if (!el) return
                  el.muted = true
                  el.defaultMuted = true
                  void el.play().catch(() => {})
                }}
              >
                {m.play}
              </button>
            </div>
          ) : null}

          {/* Mute toggle (autoplay-friendly) */}
          {!isYouTube ? (
            <div className="absolute right-3 top-3">
              <button
                type="button"
                className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-white/85 backdrop-blur hover:bg-black/45"
                onClick={() => setIsMuted((v) => !v)}
                aria-label={isMuted ? m.unmuteAria : m.muteAria}
              >
                {isMuted ? m.muted : m.soundOn}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </SectionShell>
  )
}

