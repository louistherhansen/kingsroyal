"use client"

import * as React from "react"
import { MenuIcon } from "lucide-react"
import Image from "next/image"

import { LanguageSwitcher } from "@/components/common/LanguageSwitcher"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { getMainNavItems, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/providers/LanguageProvider"

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)
  const { t } = useLanguage()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-200",
          scrolled
            ? "border-b border-border/60 bg-background/90 supports-backdrop-filter:backdrop-blur-md"
            : "border-b border-white/10 bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5 sm:px-6 lg:px-8">
          <a
            href="/"
            className="group flex items-center gap-3 whitespace-nowrap"
            aria-label={t("site.name")}
          >
            <Image
              src="/logo/logo-kings-royal-spa.jpg"
              alt="King’s Royal Spa logo"
              width={44}
              height={44}
              priority
              unoptimized
              className={cn(
                "h-10 w-10 rounded-full ring-1 ring-white/10 object-cover",
                scrolled ? "ring-border/60" : "ring-white/15"
              )}
            />
            <span
              className={cn(
                "font-heading text-lg tracking-tight sm:text-xl",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              King’s
            </span>
            <span className="font-heading text-lg tracking-tight sm:text-xl text-gold-gradient">
              Royal
            </span>
            <span
              className={cn(
                "font-heading text-lg tracking-tight sm:text-xl",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              Spa
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-end gap-7 md:flex">
            {getMainNavItems().map((item) => (
              <a
                key={
                  item.type === "home"
                    ? "home"
                    : item.type === "career"
                      ? "career"
                      : item.slug
                }
                href={item.href}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.type === "home"
                  ? t("nav.home")
                  : item.type === "career"
                    ? t("nav.career")
                    : item.label}
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-2 left-0 h-px w-0 bg-[color:var(--lux-gold-highlight)] opacity-70 transition-all duration-200 group-hover:w-full"
                  )}
                  aria-hidden
                />
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <LanguageSwitcher
              className={cn(scrolled ? "[&_select]:border-border/70 [&_select]:bg-transparent [&_select]:text-foreground/80 [&_select]:hover:bg-muted" : "")}
            />
            <a
              href={siteConfig.actions.headerCta.href}
              className={cn(
                buttonVariants(),
                "h-9 rounded-none px-4",
                "bg-gold-gradient text-primary-foreground hover:opacity-95",
                "ring-gold-glow"
              )}
            >
              {t(`header.cta`)}
            </a>
          </div>

          <div className="ml-auto md:hidden">
            <Sheet>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  scrolled
                    ? "rounded-full border-border/70 bg-transparent text-foreground hover:bg-muted"
                    : "rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
                )}
                aria-label={t("header.openMenu")}
              >
                <MenuIcon />
              </SheetTrigger>

              <SheetContent side="right" className="w-[86vw] max-w-sm">
                <SheetHeader className="pb-2">
                  <SheetTitle className="font-heading text-lg">
                    {t("site.name")}
                  </SheetTitle>
                  <p className="text-sm text-muted-foreground">
                    {t("site.tagline")}
                  </p>
                </SheetHeader>

                <div className="px-4">
                  <div className="mt-2">
                    <LanguageSwitcher variant="sheet" />
                  </div>
                  <div className="mt-2 grid gap-1">
                    {getMainNavItems().map((item) => (
                      <SheetClose
                        key={
                          item.type === "home"
                            ? "home"
                            : item.type === "career"
                              ? "career"
                              : item.slug
                        }
                        nativeButton={false}
                        render={
                          <a
                            href={item.href}
                            className="rounded-xl px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                          />
                        }
                      >
                        {item.type === "home"
                          ? t("nav.home")
                          : item.type === "career"
                            ? t("nav.career")
                            : item.label}
                      </SheetClose>
                    ))}
                  </div>
                </div>

                <div className="mt-auto grid gap-2 p-4">
                  <SheetClose
                    nativeButton={false}
                    render={
                      <a
                        href={siteConfig.actions.headerCta.href}
                        className={cn(
                          buttonVariants(),
                          "w-full rounded-none bg-gold-gradient text-primary-foreground hover:opacity-95 ring-gold-glow"
                        )}
                      />
                    }
                  >
                    {t("header.cta")}
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

