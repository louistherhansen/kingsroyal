"use client"

import Image from "next/image"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { SectionShell } from "@/components/sections/SectionShell"

export type BranchPhotoSectionProps = {
  photos: readonly string[]
  branchLabel: string
}

export function BranchPhotoSection({
  photos,
  branchLabel,
}: BranchPhotoSectionProps) {
  const { messages } = useLanguage()
  const p = messages.branch.photo

  return (
    <SectionShell
      id="photo"
      eyebrow={p.eyebrow}
      title={p.title}
      description={p.description}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((src, idx) => (
          <div
            key={src}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60 bg-card"
          >
            <Image
              src={src}
              alt={`${branchLabel} photo ${idx + 1}`}
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
