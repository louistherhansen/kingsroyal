export const siteConfig = {
  name: "King’s Royal Spa",
  tagline: "The most luxurious spa sanctuary in Indonesia.",
  operatingHours: {
    daysLabel: "Monday - Sunday",
    timeLabel: "11:00 AM - 11:00 PM",
  },
  locations: [
    {
      slug: "cempaka",
      label: "Cempaka",
      href: "https://www.google.com/maps/place/King's+Royal+Spa/@-6.1469951,106.8876097,13.21z/data=!4m6!3m5!1s0x2e69f52d6c5a2b65:0xa54c9b5371493652!8m2!3d-6.1636825!4d106.8750129!16s%2Fg%2F11k3rkrj77?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
      videoSrc: "https://www.youtube.com/watch?v=4HjFSbgsQMc",
      photos: [
        "/lokasi/cempaka/photos/photo-01.png",
        "/lokasi/cempaka/photos/photo-02.png",
        "/lokasi/cempaka/photos/photo-03.png",
        "/lokasi/cempaka/photos/photo-04.png",
        "/lokasi/cempaka/photos/photo-05.png",
        "/lokasi/cempaka/photos/photo-06.png",
        "/lokasi/cempaka/photos/photo-07.png",
        "/lokasi/cempaka/photos/photo-08.png",
        "/lokasi/cempaka/photos/photo-09.png",
        "/lokasi/cempaka/photos/photo-10.png",
        "/lokasi/cempaka/photos/photo-11.png",
        "/lokasi/cempaka/photos/photo-12.png",
      ],
      social: {
        instagram: "https://www.instagram.com/kingsroyalspacempaka/",
        tiktok: "https://www.tiktok.com/@kings.royal.cempakamas",
      },
    },
    {
      slug: "kebon-jeruk",
      label: "Kebon Jeruk",
      href: "https://www.google.com/maps/place/King%E2%80%99s+Royal+Man+%26+Health+Club/@-6.1912166,106.7564709,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f781a5e1f78b:0x59625250e33405e7!8m2!3d-6.1912166!4d106.7590512!16s%2Fg%2F11l5f89x4c?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
      videoSrc: "https://www.youtube.com/watch?v=wQwxHNoy1KY",
      photos: [
        "/lokasi/kebon-jeruk/photos/photo-01.png",
        "/lokasi/kebon-jeruk/photos/photo-02.png",
        "/lokasi/kebon-jeruk/photos/photo-03.png",
        "/lokasi/kebon-jeruk/photos/photo-04.png",
        "/lokasi/kebon-jeruk/photos/photo-05.png",
        "/lokasi/kebon-jeruk/photos/photo-06.png",
        "/lokasi/kebon-jeruk/photos/photo-07.png",
        "/lokasi/kebon-jeruk/photos/photo-08.png",
        "/lokasi/kebon-jeruk/photos/photo-09.png",
        "/lokasi/kebon-jeruk/photos/photo-10.png",
        "/lokasi/kebon-jeruk/photos/photo-11.png",
        "/lokasi/kebon-jeruk/photos/photo-12.png",
      ],
      social: {
        instagram: "https://www.instagram.com/kingsroyalkj",
        tiktok: "https://www.tiktok.com/@kingsroyalkebonje",
      },
    },
    {
      slug: "bekasi",
      label: "Bekasi",
      href: "https://www.google.com/maps/place/King's+Royal+Spa+Bekasi/@-6.242947,106.9837323,15z/data=!3m1!4b1!4m6!3m5!1s0x2e698d001328885f:0xda23c7c6bca9cd81!8m2!3d-6.2429471!4d106.9940106!16s%2Fg%2F11wxbp251y?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
      videoSrc: "https://youtu.be/dWV4xxDR-DA?si=EzsPoGjWfcVwoG9N",
      social: {
        instagram: "https://www.instagram.com/kingsroyal_bekasi",
        tiktok: "https://www.tiktok.com/@kingsroyalbekasi",
      },
    },
    {
      slug: "manado",
      label: "Manado",
      href: "https://www.google.com/maps/place/ROYAL+MAN+%26+HEALTH+CLUB+SPA/@1.462625,124.8237211,15z/data=!3m1!4b1!4m6!3m5!1s0x3287753b60a9603d:0x2fc93a7561bbeea1!8m2!3d1.462625!4d124.8339994!16s%2Fg%2F11shsb7brw?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
      videoSrc: "https://www.youtube.com/watch?v=CtvhJOoJiUw",
      social: {
        instagram: "https://www.instagram.com/royalmanandhealthmanado/",
        tiktok: "https://www.tiktok.com/@royalspa_manado",
      },
    },
  ],
  whatsapp: {
    /**
     * Format: digits only (no +, no spaces).
     * Example Indonesia: 62812xxxxxxx
     */
    message: "Halo King's Royal Spa, saya mau tanya layanan & booking.",
    outlets: [
      { slug: "cempaka", label: "Cempaka", phone: "082210827760" },
      { slug: "kebon-jeruk", label: "Kebon Jeruk", phone: "082210388233" },
      { slug: "bekasi", label: "Bekasi", phone: "08131852099" },
      { slug: "manado", label: "Manado", phone: "08134113791" },
    ],
  },
  actions: {
    heroPrimary: { href: "#services" },
    heroSecondary: { href: "#video" },
    headerCta: { href: "/login/" },
  },
} as const

export function getLocationBySlug(slug: string) {
  return siteConfig.locations.find((l) => l.slug === slug)
}

/** Instagram accounts per outlet (aligned with `locations` slugs). */
export function getInstagramOutlets() {
  return siteConfig.locations.map((loc) => ({
    slug: loc.slug,
    label: loc.label,
    href: loc.social.instagram,
  }))
}

export type MainNavItem =
  | { type: "home"; href: "/" }
  | { type: "career"; href: "/karir/" }
  | {
      type: "branch"
      slug: string
      label: string
      href: string
    }

export function getMainNavItems(): MainNavItem[] {
  return [
    { type: "home", href: "/" },
    ...siteConfig.locations.map((l) => ({
      type: "branch" as const,
      slug: l.slug,
      label: l.label,
      href: `/lokasi/${l.slug}/`,
    })),
    { type: "career", href: "/karir/" },
  ]
}

