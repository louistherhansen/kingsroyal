"use client"

import * as React from "react"
import Image from "next/image"
import type { Metadata } from "next"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type HeroCta = {
  label: string
  href: string
}

export const heroSeoMetadata: Metadata = {
  title: "King’s Royal Spa | Luxury Spa & Wellness",
  description:
    "A luxury spa sanctuary in Indonesia—signature massage rituals, refined ambience, and premium wellness experiences.",
  keywords: [
    "King's Royal Spa",
    "luxury spa",
    "massage",
    "wellness",
    "spa treatments",
    "Indonesia",
  ],
  openGraph: {
    title: "King’s Royal Spa",
    description:
      "A luxury spa sanctuary in Indonesia—signature massage rituals, refined ambience, and premium wellness experiences.",
    type: "website",
    images: [
      {
        url: "/logo/logo-kings-royal-spa.jpg",
        width: 1200,
        height: 630,
        alt: "King’s Royal Spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "King’s Royal Spa",
    description:
      "A luxury spa sanctuary in Indonesia—signature massage rituals, refined ambience, and premium wellness experiences.",
    images: ["/logo/logo-kings-royal-spa.jpg"],
  },
  robots: { index: true, follow: true },
}

export function HeroStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "King’s Royal Spa",
    image: ["/logo/logo-kings-royal-spa.jpg"],
    description:
      "A luxury spa sanctuary in Indonesia—signature massage rituals, refined ambience, and premium wellness experiences.",
    url: "/",
    priceRange: "$$",
    areaServed: "Indonesia",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export type HeroSectionProps = {
  className?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  primaryCta?: HeroCta
  secondaryCta?: HeroCta
  slides?: string[]
  autoPlayMs?: number
  pauseAfterInteractionMs?: number
}

export function HeroSection({
  className,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  slides = ["/slider/slide-1.png", "/slider/slide-2.png", "/slider/slide-3.png"],
  autoPlayMs = 6500,
  pauseAfterInteractionMs = 8000,
}: HeroSectionProps) {
  const { messages } = useLanguage()
  const m = messages.hero
  const resolvedEyebrow = eyebrow ?? m.eyebrow
  const resolvedTitle = title ?? m.title
  const resolvedSubtitle = subtitle ?? m.subtitle
  const resolvedPrimaryCta =
    primaryCta ?? { label: m.primaryCta, href: siteConfig.actions.heroPrimary.href }
  const resolvedSecondaryCta =
    secondaryCta ?? {
      label: m.secondaryCta,
      href: siteConfig.actions.heroSecondary.href,
    }

  const [active, setActive] = React.useState(0)
  const dragStartX = React.useRef<number | null>(null)
  const dragMoved = React.useRef(false)
  const lastInteractionAt = React.useRef(0)
  const lastAutoAt = React.useRef(0)

  React.useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) return
      // When returning to the tab, resume timing cleanly.
      lastAutoAt.current = Date.now()
    }
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  React.useEffect(() => {
    if (slides.length <= 1) return
    if (!autoPlayMs || autoPlayMs <= 0) return

    lastAutoAt.current = Date.now()
    const id = window.setInterval(() => {
      const now = Date.now()
      if (now - lastInteractionAt.current < pauseAfterInteractionMs) return
      if (now - lastAutoAt.current < autoPlayMs) return
      lastAutoAt.current = now
      setActive((v) => (v + 1) % slides.length)
    }, 250)

    return () => window.clearInterval(id)
  }, [autoPlayMs, pauseAfterInteractionMs, slides.length])

  React.useEffect(() => {
    if (active > slides.length - 1) setActive(0)
  }, [active, slides.length])

  const goNext = React.useCallback(() => {
    setActive((v) => (v + 1) % slides.length)
  }, [slides.length])

  const goPrev = React.useCallback(() => {
    setActive((v) => (v - 1 + slides.length) % slides.length)
  }, [slides.length])

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    dragStartX.current = e.clientX
    dragMoved.current = false
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current == null) return
    if (Math.abs(e.clientX - dragStartX.current) > 6) dragMoved.current = true
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current == null) return
    const delta = e.clientX - dragStartX.current
    dragStartX.current = null
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      // ignore
    }

    if (!dragMoved.current) return
    if (Math.abs(delta) < 40) return

    lastInteractionAt.current = Date.now()
    if (delta < 0) goNext()
    else goPrev()
  }

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "bg-background",
        "touch-pan-y",
        "min-h-[100svh]",
        className
      )}
      onPointerDown={slides.length > 1 ? onPointerDown : undefined}
      onPointerMove={slides.length > 1 ? onPointerMove : undefined}
      onPointerUp={slides.length > 1 ? onPointerUp : undefined}
      onPointerCancel={slides.length > 1 ? onPointerUp : undefined}
    >
      <HeroStructuredData />
      <div className="absolute inset-0 -z-10">
        {slides.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={idx === 0}
            unoptimized
            style={{
              opacity: idx === active ? 1 : 0,
              transform: idx === active ? "scale(1.04)" : "scale(1)",
            }}
            className={cn(
              "object-cover object-center transition-[opacity,transform] duration-1000 ease-out will-change-transform transform-gpu",
              "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_520px_at_50%_35%,color-mix(in_oklab,var(--color-primary)_28%,transparent),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.46)_42%,rgba(0,0,0,0.20)_100%)]" />
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-5 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-24">
        <div className="w-full py-14 sm:py-16 lg:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
              <span className="font-heading text-[0.82rem] tracking-[0.14em] uppercase">
                {resolvedEyebrow}
              </span>
              <span className="h-1 w-1 rounded-full bg-primary/90" aria-hidden />
              <span className="text-white/80">{m.chips}</span>
            </div>

            <h1
              className={cn(
                "mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
                "text-gold-gradient text-lux-hero-shadow text-lux-hero-stroke"
              )}
            >
              {resolvedTitle}
            </h1>
            <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              {resolvedSubtitle}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                className={cn(
                  buttonVariants(),
                  "h-11 rounded-none px-7 text-[0.95rem] font-semibold",
                  "bg-gold-gradient text-primary-foreground hover:opacity-95",
                  "shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--color-primary)_70%,transparent)]",
                  "ring-gold-glow",
                  "focus-visible:ring-ring/30"
                )}
                href={resolvedPrimaryCta.href}
              >
                {resolvedPrimaryCta.label}
              </a>

              <a
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 rounded-none px-7 text-[0.95rem] font-semibold",
                  "border-[color:color-mix(in_srgb,var(--lux-gold-highlight)_28%,transparent)] bg-transparent text-[color:var(--lux-gold-highlight)] hover:bg-white/5",
                  "focus-visible:ring-white/25"
                )}
                href={resolvedSecondaryCta.href}
              >
                {resolvedSecondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots like reference: bottom-center of hero */}
      {slides.length > 1 ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur">
            <button
              type="button"
              className="mr-0.5 grid size-6 place-items-center rounded-full bg-black/25 text-[color:var(--lux-gold-highlight)]/80 hover:bg-black/40"
              onClick={() => {
                lastInteractionAt.current = Date.now()
                goPrev()
              }}
              aria-label={m.prevSlide}
            >
              <ChevronLeftIcon className="size-4" />
            </button>
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-opacity",
                  "bg-[color:var(--lux-gold-highlight)]",
                  idx === active ? "opacity-100" : "opacity-35"
                )}
                onClick={() => {
                  lastInteractionAt.current = Date.now()
                  setActive(idx)
                }}
                aria-label={m.slideAria(idx + 1, slides.length)}
                aria-current={idx === active ? "true" : undefined}
              />
            ))}
            <button
              type="button"
              className="ml-0.5 grid size-6 place-items-center rounded-full bg-black/25 text-[color:var(--lux-gold-highlight)]/80 hover:bg-black/40"
              onClick={() => {
                lastInteractionAt.current = Date.now()
                goNext()
              }}
              aria-label={m.nextSlide}
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}

