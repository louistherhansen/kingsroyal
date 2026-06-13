"use client"

import * as React from "react"

import { InstagramIcon } from "@/components/common/BrandSocialIcons"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { getInstagramOutlets, siteConfig } from "@/config/site"
import type { Locale } from "@/i18n/messages"

const whatsAppOutletPickerLabel: Record<Locale, string> = {
  "en-US": "Choose WhatsApp Outlet",
  "id-ID": "Pilih Outlet WhatsApp",
  "zh-CN": "选择 WhatsApp 门店",
  "ko-KR": "WhatsApp 매장 선택",
  "ar-SA": "اختر منفذ واتساب",
}

function normalizeWhatsAppPhone(phone: string) {
  const digits = phone.replace(/[^\d]/g, "")
  if (digits.startsWith("0")) return `62${digits.slice(1)}`
  return digits
}

function buildWhatsAppUrl(phone: string, message?: string) {
  const trimmedPhone = normalizeWhatsAppPhone(phone)
  const base = `https://wa.me/${trimmedPhone}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 3C9.383 3 4 8.383 4 15c0 2.324.668 4.572 1.932 6.514L4 29l7.654-1.877A11.93 11.93 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 21.77c-1.351 0-2.677-.265-3.945-.787l-.283-.116-4.545 1.116 1.19-4.407-.135-.295A9.71 9.71 0 0 1 6.23 15c0-5.389 4.382-9.77 9.77-9.77 5.389 0 9.77 4.381 9.77 9.77 0 5.389-4.381 9.77-9.77 9.77zm5.637-7.294c-.307-.154-1.817-.896-2.098-.998-.281-.102-.486-.154-.691.154-.205.307-.793.998-.973 1.203-.179.205-.359.231-.666.077-.307-.154-1.297-.478-2.47-1.523-.913-.814-1.53-1.819-1.709-2.126-.179-.307-.019-.473.135-.627.138-.137.307-.359.461-.538.154-.179.205-.307.307-.512.102-.205.051-.384-.026-.538-.077-.154-.691-1.664-.947-2.279-.25-.6-.503-.518-.691-.528l-.589-.01c-.205 0-.538.077-.819.384-.281.307-1.077 1.05-1.077 2.561 0 1.51 1.103 2.971 1.256 3.177.154.205 2.172 3.317 5.26 4.651.735.317 1.31.506 1.758.648.739.235 1.412.202 1.944.123.593-.089 1.817-.743 2.073-1.459.256-.717.256-1.331.179-1.459-.077-.128-.281-.205-.589-.359z"
      />
    </svg>
  )
}

export function WhatsAppFloatingButton() {
  const [waOpen, setWaOpen] = React.useState(false)
  const [igOpen, setIgOpen] = React.useState(false)
  const { locale, messages } = useLanguage()
  const social = messages.floatingSocial
  const whatsAppPickerLabel = whatsAppOutletPickerLabel[locale]
  const instagramOutlets = getInstagramOutlets()

  const toggleWa = () => {
    setWaOpen((v) => !v)
    setIgOpen(false)
  }

  const toggleIg = () => {
    setIgOpen((v) => !v)
    setWaOpen(false)
  }

  return (
    <div
      className={[
        "fixed z-50 right-5 sm:right-6",
        "bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]",
        "flex flex-col items-end gap-2",
      ].join(" ")}
    >
      {igOpen ? (
        <div className="w-52 overflow-hidden rounded-xl border border-border/60 bg-background/95 p-2 shadow-xl backdrop-blur">
          <p className="px-2 py-1 text-xs font-semibold text-muted-foreground">
            {social.instagramPicker}
          </p>
          <div className="mt-1 grid gap-1">
            {instagramOutlets.map((outlet) => (
              <a
                key={outlet.slug}
                href={outlet.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-2 py-2 text-sm text-foreground hover:bg-muted"
                onClick={() => setIgOpen(false)}
              >
                {outlet.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {waOpen ? (
        <div className="w-52 overflow-hidden rounded-xl border border-border/60 bg-background/95 p-2 shadow-xl backdrop-blur">
          <p className="px-2 py-1 text-xs font-semibold text-muted-foreground">
            {whatsAppPickerLabel}
          </p>
          <div className="mt-1 grid gap-1">
            {siteConfig.whatsapp.outlets.map((outlet) => (
              <a
                key={outlet.slug}
                href={buildWhatsAppUrl(outlet.phone, siteConfig.whatsapp.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-2 py-2 text-sm text-foreground hover:bg-muted"
                onClick={() => setWaOpen(false)}
              >
                {outlet.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-label={social.instagramAria}
        aria-expanded={igOpen}
        onClick={toggleIg}
        className={[
          "h-12 w-12 sm:h-14 sm:w-14 rounded-full",
          "bg-gold-gradient text-primary-foreground shadow-lg shadow-black/20",
          "ring-1 ring-white/15 hover:ring-white/25 hover:opacity-95",
          "active:translate-y-px transition-opacity",
        ].join(" ")}
      >
        <InstagramIcon className="mx-auto h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      <button
        type="button"
        aria-label={social.whatsappAria}
        aria-expanded={waOpen}
        onClick={toggleWa}
        className={[
          "h-12 w-12 sm:h-14 sm:w-14 rounded-full",
          "bg-emerald-600 text-white shadow-lg shadow-black/20",
          "ring-1 ring-white/15 hover:ring-white/25",
          "hover:bg-emerald-500 active:translate-y-px",
          "transition-colors",
        ].join(" ")}
      >
        <span className="sr-only">WhatsApp</span>
        <WhatsAppIcon className="h-full w-full p-3 sm:p-3.5" />
      </button>
    </div>
  )
}
