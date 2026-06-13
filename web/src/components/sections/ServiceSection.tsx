"use client"

import Image from "next/image"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import { SectionShell } from "./SectionShell"

export function ServiceSection() {
  const { messages } = useLanguage()
  const m = messages.services

  return (
    <SectionShell
      id="services"
      eyebrow={m.eyebrow}
      title={m.title}
      description={m.description}
      className="bg-background"
    >
      <div
        className={cn(
          "grid gap-4 sm:grid-cols-2",
          m.items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        )}
      >
        {m.items.map((s) => (
          <Card key={s.title} className="overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={s.imageSrc}
                alt={s.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.70)_100%)]" />
            </div>

            <CardHeader className={cn("gap-1")}>
              <CardTitle className="text-[color:var(--lux-gold-highlight)]">
                {s.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {s.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}

