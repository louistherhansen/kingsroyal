"use client"

import * as React from "react"
import Image from "next/image"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function LoginPageClient() {
  const { messages } = useLanguage()
  const m = messages.loginPage

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main className="flex-1 bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2 lg:items-start">
          <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
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
                <h1 className="mt-1 font-heading text-3xl tracking-tight text-gold-gradient">
                  {m.title}
                </h1>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {m.description}
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-medium">{m.identityLabel}</span>
                <input
                  className={cn(
                    "h-11 rounded-xl border border-border/60 bg-background px-3 text-sm outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_oklab,var(--color-primary)_35%,transparent)]"
                  )}
                  placeholder={m.identityPlaceholder}
                  inputMode="email"
                  autoComplete="username"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium">{m.passwordLabel}</span>
                <input
                  type="password"
                  className={cn(
                    "h-11 rounded-xl border border-border/60 bg-background px-3 text-sm outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_oklab,var(--color-primary)_35%,transparent)]"
                  )}
                  placeholder={m.passwordPlaceholder}
                  autoComplete="current-password"
                />
              </label>

              <div className="flex items-center justify-between gap-3">
                <a
                  href="#"
                  className="text-xs text-[color:var(--lux-gold-highlight)] underline-offset-4 hover:underline"
                >
                  {m.forgot}
                </a>
              </div>

              <button
                type="submit"
                className={cn(
                  buttonVariants(),
                  "h-11 rounded-none bg-gold-gradient text-primary-foreground hover:opacity-95 ring-gold-glow"
                )}
              >
                {m.signIn}
              </button>

              <a
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 rounded-none"
                )}
              >
                {m.signUp}
              </a>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-3 text-xs text-muted-foreground">
                {m.note}
              </div>
            </form>
          </section>

          <aside className="rounded-2xl border border-border/60 bg-muted/20 p-6 sm:p-8">
            <div className="font-heading text-xl tracking-tight text-foreground">
              King’s Royal Spa
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {messages.site.tagline}
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border/60 bg-card p-4">
                {m.languageTip}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

