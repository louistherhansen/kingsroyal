"use client"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import { SectionShell } from "./SectionShell"

export type PhilosophySectionProps = {
  className?: string
}

export function PhilosophySection({ className }: PhilosophySectionProps) {
  const { messages } = useLanguage()
  const m = messages.philosophy

  return (
    <SectionShell
      id="philosophy"
      eyebrow={m.eyebrow}
      title={m.quoteEmphasis}
      description={m.quote}
      className={cn("bg-muted/20", className)}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {m.items.map((item) => (
          <Card key={item.title}>
            <CardHeader className="gap-1">
              <CardTitle className="text-[color:var(--lux-gold-highlight)]">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {item.value}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}

