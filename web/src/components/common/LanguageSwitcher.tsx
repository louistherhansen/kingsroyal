"use client"

import * as React from "react"

import { localeLabels, locales, type Locale } from "@/i18n/messages"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/providers/LanguageProvider"

export type LanguageSwitcherProps = {
  className?: string
  variant?: "header" | "sheet"
}

export function LanguageSwitcher({
  className,
  variant = "header",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()

  const base =
    variant === "sheet"
      ? "w-full rounded-xl border border-border/60 bg-background px-3 py-3 text-sm"
      : [
          "h-9 rounded-full px-3 text-sm",
          "border border-white/20 bg-white/5 text-white/90",
          "hover:bg-white/10",
          "supports-[backdrop-filter]:backdrop-blur-md",
        ].join(" ")

  return (
    <label className={cn("inline-flex items-center gap-2", className)}>
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className={cn(base, "outline-none")}
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeLabels[l]}
          </option>
        ))}
      </select>
    </label>
  )
}

