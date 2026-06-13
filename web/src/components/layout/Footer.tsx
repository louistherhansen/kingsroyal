"use client"

import Image from "next/image"

import {
  GoogleMapsIcon,
  InstagramIcon,
  TiktokIcon,
} from "@/components/common/BrandSocialIcons"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { getMainNavItems, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const { messages, t } = useLanguage()
  const m = messages.footer

  const quickLinks = [
    ...getMainNavItems().map((n) => ({
      href: n.href,
      label:
        n.type === "home"
          ? t("nav.home")
          : n.type === "career"
            ? t("nav.career")
            : n.label,
    })),
    { href: siteConfig.actions.headerCta.href, label: t("nav.login") },
  ]

  return (
    <footer className={cn("mt-auto border-t border-border/60", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/logo-kings-royal-spa.jpg"
                alt="King’s Royal Spa logo"
                width={52}
                height={52}
                unoptimized
                className="h-12 w-12 rounded-full ring-1 ring-border/60 object-cover"
              />
              <div>
                <div className="font-heading text-lg tracking-tight text-foreground">
                  {messages.site.name}
                </div>
                <div className="text-xs text-muted-foreground">{m.motto}</div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              {messages.site.tagline}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-foreground">
                {m.quickLinksTitle}
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="hover:text-foreground underline-offset-4 hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-foreground">
                {m.hoursTitle}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <div>{m.operatingDays}</div>
                <div className="mt-1 text-foreground/80">{m.operatingTime}</div>
              </div>

              <div className="mt-7 text-sm font-semibold text-foreground">
                {m.followTitle}
              </div>
              <ul className="mt-3 grid gap-2.5 text-sm">
                {siteConfig.locations.map((loc) => (
                  <li key={loc.label}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="min-w-0 shrink text-muted-foreground">
                        {loc.label}
                      </span>
                      <div className="flex shrink-0 items-center gap-0.5">
                        {loc.social.instagram ? (
                          <a
                            href={loc.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[color:var(--lux-gold-highlight)] transition-colors hover:bg-foreground/5 hover:text-foreground"
                            aria-label={`Instagram — ${loc.label}`}
                            title="Instagram"
                          >
                            <InstagramIcon className="h-[18px] w-[18px]" />
                          </a>
                        ) : (
                          <span
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground/35"
                            aria-label={`Instagram — ${loc.label} (${m.followSocialPending})`}
                            title={m.followSocialPending}
                          >
                            <InstagramIcon className="h-[18px] w-[18px]" />
                          </span>
                        )}
                        {loc.social.tiktok ? (
                          <a
                            href={loc.social.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[color:var(--lux-gold-highlight)] transition-colors hover:bg-foreground/5 hover:text-foreground"
                            aria-label={`TikTok — ${loc.label}`}
                            title="TikTok"
                          >
                            <TiktokIcon className="h-[18px] w-[18px]" />
                          </a>
                        ) : (
                          <span
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground/35"
                            aria-label={`TikTok — ${loc.label} (${m.followSocialPending})`}
                            title={m.followSocialPending}
                          >
                            <TiktokIcon className="h-[18px] w-[18px]" />
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-foreground">
                {m.locationsTitle}
              </div>
              <ul className="mt-4 grid gap-2.5 text-sm">
                {siteConfig.locations.map((loc) => (
                  <li key={loc.label}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="min-w-0 shrink text-muted-foreground">
                        {loc.label}
                      </span>
                      <a
                        href={loc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[color:var(--lux-gold-highlight)] transition-colors hover:bg-foreground/5 hover:text-foreground"
                        aria-label={`Google Maps — ${loc.label}`}
                        title="Google Maps"
                      >
                        <GoogleMapsIcon className="h-[18px] w-[18px]" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>{m.copyrightLine}</div>
        </div>
      </div>
    </footer>
  )
}

