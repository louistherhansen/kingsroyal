import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppFloatingButton } from "@/components/common/WhatsAppFloatingButton"
import { LanguageProvider } from "@/components/providers/LanguageProvider"

export const metadata: Metadata = {
  title: "King's Royal Spa",
  description: "Luxury spa treatments designed for calm, care, and renewal.",
  icons: {
    icon: [{ url: "/logo/logo-kings-royal-spa.jpg", type: "image/jpeg" }],
    shortcut: [{ url: "/logo/logo-kings-royal-spa.jpg", type: "image/jpeg" }],
    apple: [{ url: "/logo/logo-kings-royal-spa.jpg", type: "image/jpeg" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth scroll-pt-20"
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          {children}
          <WhatsAppFloatingButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
