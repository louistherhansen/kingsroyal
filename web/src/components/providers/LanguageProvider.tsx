"use client"

import * as React from "react"

import type { Locale, Messages } from "@/i18n/messages"
import { getMessages, isLocale } from "@/i18n/messages"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Messages
  t: (path: string) => string
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "krspa_locale"

function getByPath(obj: unknown, path: string): unknown {
  const parts = path.split(".").filter(Boolean)
  let cur: any = obj
  for (const key of parts) {
    if (cur == null) return undefined
    cur = cur[key]
  }
  return cur
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>("en-US")

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored && isLocale(stored)) setLocale(stored)
    } catch {
      // ignore
    }
  }, [])

  React.useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignore
    }

    // Keep <html lang="..."> and text direction aligned for a11y.
    const lang =
      locale === "id-ID"
        ? "id"
        : locale === "zh-CN"
          ? "zh-Hans"
          : locale === "ko-KR"
            ? "ko"
            : locale === "ar-SA"
              ? "ar"
              : "en"
    document.documentElement.lang = lang
    document.documentElement.dir = locale === "ar-SA" ? "rtl" : "ltr"
  }, [locale])

  const value = React.useMemo<LanguageContextValue>(() => {
    const messages = getMessages(locale)
    const t = (path: string) => {
      const v = getByPath(messages, path)
      return typeof v === "string" ? v : path
    }

    return { locale, setLocale, messages, t }
  }, [locale])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

