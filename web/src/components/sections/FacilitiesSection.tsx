"use client"

import Image from "next/image"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { SectionShell } from "./SectionShell"

const facilityImages = [
  "/Fasilitas/Fasiltas2.jpeg",
  "/Fasilitas/Fasiltas3.jpeg",
  "/Fasilitas/Fasiltas4.jpeg",
  "/Fasilitas/Fasiltas5.jpeg",
  "/Fasilitas/Fasiltas6.jpeg",
  "/Fasilitas/Fasiltas7.jpeg",
  "/Fasilitas/Fasiltas8.jpeg",
  "/Fasilitas/Fasiltas9.jpeg",
  "/Fasilitas/Fasiltas10.jpeg",
  "/Fasilitas/Fasiltas11.jpeg",
  "/Fasilitas/Fasiltas12.jpeg",
  "/Fasilitas/Fasiltas13.jpeg",
]

export function FacilitiesSection() {
  const { messages, locale } = useLanguage()
  const descriptionByLocale = {
    "en-US": "Enjoy a premium ambience with thoughtfully designed facilities.",
    "id-ID": "Nikmati suasana premium dengan fasilitas terbaik kami.",
    "zh-CN": "尽享高端氛围与精心打造的设施体验。",
    "ko-KR": "세심하게 설계된 시설과 함께하는 프리미엄 분위기를 만끽하세요.",
    "ar-SA": "استمتع بأجواء راقية ومرافق مصممة بعناية.",
  } as const

  return (
    <SectionShell
      id="facilities"
      eyebrow={messages.nav.facilities}
      title={messages.nav.facilities}
      description={descriptionByLocale[locale]}
      className="bg-muted/15"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facilityImages.map((src, idx) => (
          <div
            key={src}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60 bg-card"
          >
            <Image
              src={src}
              alt={`Fasilitas ${idx + 1}`}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
