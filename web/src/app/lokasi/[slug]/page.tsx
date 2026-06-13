import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LocationBranchView } from "@/components/location/LocationBranchView"
import { getLocationBySlug, siteConfig } from "@/config/site"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return siteConfig.locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocationBySlug(slug)
  if (!loc) {
    return { title: "Branch | King’s Royal Spa" }
  }
  return {
    title: `${loc.label} | King’s Royal Spa`,
    description: `King’s Royal Spa — ${loc.label}.`,
  }
}

export default async function LokasiPage({ params }: Props) {
  const { slug } = await params
  const loc = getLocationBySlug(slug)
  if (!loc) {
    notFound()
  }
  return <LocationBranchView label={loc.label} videoSrc={loc.videoSrc} />
}
