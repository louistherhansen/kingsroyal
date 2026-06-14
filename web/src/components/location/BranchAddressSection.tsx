"use client"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { SectionShell } from "@/components/sections/SectionShell"
import { buttonVariants } from "@/components/ui/button"
import { isBranchSlug } from "@/config/site"
import { getGoogleMapsEmbedUrl } from "@/lib/google-maps"
import { cn } from "@/lib/utils"

export type BranchAddressSectionProps = {
  slug: string
  mapHref: string
  branchLabel: string
}

export function BranchAddressSection({
  slug,
  mapHref,
  branchLabel,
}: BranchAddressSectionProps) {
  const { messages } = useLanguage()
  const a = messages.branch.address
  const address = isBranchSlug(slug) ? a.locations[slug] : undefined
  const embedUrl = getGoogleMapsEmbedUrl(mapHref)

  if (!address) {
    return null
  }

  return (
    <SectionShell
      id="address"
      eyebrow={a.eyebrow}
      title={a.title}
      description={a.description}
      className="bg-muted/15"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="space-y-5">
          <p className="text-base leading-7 text-foreground">{address}</p>
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 rounded-none px-6 text-sm font-semibold"
            )}
          >
            {a.openInMaps}
          </a>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60 bg-muted/40 lg:aspect-video">
          {embedUrl ? (
            <iframe
              className="h-full w-full"
              src={embedUrl}
              title={`${branchLabel} map`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <p className="text-sm text-muted-foreground">{a.mapPlaceholder}</p>
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  )
}
