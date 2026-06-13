"use client"

import Image from "next/image"

import { useLanguage } from "@/components/providers/LanguageProvider"

import { SectionShell } from "./SectionShell"

export function HealthBenefitsSection() {
  const { messages } = useLanguage()
  const section = messages.ourFacilities
  const items = [
    {
      title: "🔥 Sauna benefits",
      imageSrc: "/Health-Benefits/Sauna%20benefits.jpeg",
      temp: "🌡️Sauna : 95-98°C",
      points: [
        "✨️Improved circulation",
        "✨️Muscle relaxation & recovery",
        "✨️ Pain relief",
        "✨️ Skin cleansing",
      ],
    },
    {
      title: "🌫️ Steam Benefits",
      imageSrc: "/Health-Benefits/steam.jpeg",
      temp: "🌡️Steam : 45-48°C",
      points: [
        "✨️Cleanse your skin",
        "✨️Deep hydration",
        "✨️Relax your body",
        "✨️Calm your mind",
        "✨️Easier breathing",
        "✨️Better circulation",
      ],
    },
    {
      title: "🔥 Hot Pool Benefits",
      imageSrc: "/Health-Benefits/hot-pool.jpeg",
      temp: "🌡️Hot Pool : 39-41°C",
      points: [
        "💧Deep relaxation",
        "💧Muscle relief",
        "💧Improve circulation",
        "💧Better sleep",
        "💧Joint comfort",
        "💧 Mental reset",
      ],
    },
    {
      title: "❄️ Cold Pool Benefits",
      imageSrc: "/Health-Benefits/cild-pool.jpeg",
      temp: "🌡️Cold Pool : 7-9°C",
      points: [
        "💧 Reduce inflammation",
        "💧Muscle recovery",
        "💧 Boost circulation",
        "💧 Increase energy",
        "💧 Tighten skin & pores",
        "💧 Mental resilience",
      ],
    },
  ]

  return (
    <SectionShell
      id="our-facilities"
      eyebrow={section.eyebrow}
      title={section.title}
      className="bg-background"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl border border-border/60 bg-card"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="font-heading text-xl text-[color:var(--lux-gold-highlight)]">
                {item.title}
              </p>
              <p className="mt-3 text-base text-foreground">{item.temp}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
