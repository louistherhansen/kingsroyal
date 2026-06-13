# King’s Royal Spa (Static-Ready Next.js)

Situs **King’s Royal Spa** (palet luxury cream / gold), dioptimalkan untuk **Static Export** agar aman di-deploy ke **shared hosting** (tanpa Node runtime).

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** + komponen bergaya **shadcn/ui**
- **i18n**: salinan teks per locale di `src/i18n/messages.ts` (`en-US`, `id-ID`, `zh-CN`)
- **Static Export**: `output: "export"` + `trailingSlash: true` (lihat `next.config.ts`)
- **Gambar**: `next/image` dengan `unoptimized: true` (sesuai static export)

## Struktur halaman (routing)

| Rute | Keterangan |
|------|------------|
| `/` | **Home** — hero slider, video review, layanan, filosofi, testimoni |
| `/login/` | UI login (demo, tanpa server auth) |
| `/lokasi/cempaka/` | Cabang Cempaka — section **Layanan**, **Video**, **Fasilitas** |
| `/lokasi/kebon-jeruk/` | Cabang Kebon Jeruk — sama |
| `/lokasi/bekasi/` | Cabang Bekasi — sama |
| `/lokasi/manado/` | Cabang Manado — sama |

Konten placeholder cabang bisa diganti lewat blok `branch` di `src/i18n/messages.ts` atau nanti lewat sumber data terpisah.

Menu utama (header & *Quick Links* di footer) memakai `getMainNavItems()` di `src/config/site.ts` (Home + empat cabang, selaras dengan entri `locations` + `slug`).

## File penting

| Area | Path |
|------|------|
| Konfigurasi situs, lokasi, peta, sosial, WhatsApp, CTA | `src/config/site.ts` |
| Teks & dummy cabang | `src/i18n/messages.ts` |
| Halaman cabang (App Router) | `src/app/lokasi/[slug]/page.tsx` |
| Tampilan section cabang | `src/components/location/LocationBranchView.tsx` |
| Header & footer | `src/components/layout/Header.tsx`, `Footer.tsx` |
| Home | `src/app/page.tsx` |

## Menjalankan di lokal

```bash
cd web
npm install
npm run dev
```

Buka `http://localhost:3000` (dengan `trailingSlash`, URL resmi memakai `/` di akhir path).

**LAN** (akses dari perangkat lain di jaringan yang sama):

```bash
cd web
npm run dev:lan
```

## Preview multi-perangkat (BrowserSync)

Scroll/klik bisa disinkronkan antar perangkat lewat `dev:sync` (lihat `bs-config.cjs`).

```bash
cd web
npm run dev:sync
```

Ikuti port yang ditampilkan di terminal (Next + proxy BrowserSync).

## Build (static export)

```bash
cd web
npm run build
```

Hasil build statis berada di folder **`out/`** — unggah isi `out/` ke document root hosting statis (atau subfolder, sesuai aturan host).

## Aset ( `public/` )

Path di bawah tersedia sebagai URL `/<path>` (pastikan file memang ada di `public/`):

- **Logo**: `public/logo/logo-kings-royal-spa.jpg`
- **Slider hero** (contoh di `page.tsx`): `public/slider/…` (mis. `_MG_5663.JPG`, …)
- **Video**: `public/video/video1.mp4`
- **Layanan / testimoni** (contoh di `messages.ts` / `page.tsx`): `public/service/…`, `public/testimuni/…`

## Batasan (shared hosting / static)

- **Tanpa SSR** dan **tanpa API Routes** yang membutuhkan Node saat request — cocok dengan static hosting.
- **Konten dinamis berat** (auth server, database) perlu BaaS / API eksternal + fetch di sisi klien jika tetap static-only.

## Lint

```bash
cd web
npm run lint
```
