"use client"

import Image from "next/image"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function normalizeWhatsAppPhone(phone: string) {
  const digits = phone.replace(/[^\d]/g, "")
  if (digits.startsWith("0")) return `62${digits.slice(1)}`
  return digits
}

function buildWhatsAppHref(phone: string, message: string) {
  const base = `https://wa.me/${normalizeWhatsAppPhone(phone)}`
  return `${base}?text=${encodeURIComponent(message)}`
}

export function CareerPageClient() {
  const { messages } = useLanguage()
  const m = messages.careerPage
  const defaultOutlet = siteConfig.whatsapp.outlets[0]
  const applyHref = buildWhatsAppHref(
    defaultOutlet.phone,
    m.whatsappMessage
  )

  return (
    <main className="flex-1 bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4">
            <Image
              src="/logo/logo-kings-royal-spa.jpg"
              alt="King’s Royal Spa logo"
              width={56}
              height={56}
              unoptimized
              className="h-14 w-14 rounded-full ring-1 ring-border/60 object-cover"
            />
            <div>
              <div className="font-heading text-xs tracking-[0.18em] uppercase text-[color:var(--lux-gold-highlight)] opacity-70">
                {m.eyebrow}
              </div>
              <h1 className="mt-1 font-heading text-3xl tracking-tight text-gold-gradient sm:text-4xl">
                {m.title}
              </h1>
            </div>
          </div>

          <p className="mt-5 text-base leading-7 text-muted-foreground">
            {m.description}
          </p>

          <section className="mt-10">
            <h2 className="font-heading text-xl tracking-tight text-foreground">
              {m.whyTitle}
            </h2>
            <ul className="mt-4 grid gap-3">
              {m.whyItems.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border/60 bg-muted/20 px-4 py-3 text-sm leading-6 text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-xl tracking-tight text-foreground">
              {m.positionsTitle}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {m.positions.map((pos) => (
                <Card
                  key={`${pos.title}-${pos.location}`}
                  className="rounded-xl border-border/60 bg-card"
                >
                  <CardHeader className="gap-1">
                    <CardTitle className="font-heading text-lg text-[color:var(--lux-gold-highlight)]">
                      {pos.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{pos.location}</p>
                    <p className="mt-1 text-foreground/80">{pos.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-2xl border border-border/60 bg-muted/20 p-6 sm:p-8">
            <p className="text-sm leading-6 text-muted-foreground">{m.applyNote}</p>
            <a
              href={applyHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                "mt-5 inline-flex h-11 rounded-none bg-gold-gradient px-6 text-primary-foreground hover:opacity-95 ring-gold-glow"
              )}
            >
              {m.applyCta}
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
