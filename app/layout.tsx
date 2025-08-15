import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { AgeGateModal } from "@/components/ui/age-gate-modal"
import { CookieNotice } from "@/components/ui/cookie-notice"
import { StickyCTA } from "@/components/ui/sticky-cta"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Boozy Shots - Sipping and Vibing",
  description:
    "Experience the perfect blend of sophisticated cocktails, exquisite cuisine, and elegant atmosphere in our premium bar and restaurant.",
  generator: "v0.app",
  keywords: ["cocktails", "fine dining", "bar", "restaurant", "premium", "elegant", "sophisticated"],
  authors: [{ name: "Boozy Shots" }],
  openGraph: {
    title: "Boozy Shots - Sipping and Vibing",
    description:
      "Experience the perfect blend of sophisticated cocktails, exquisite cuisine, and elegant atmosphere in our premium bar and restaurant.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boozy Shots - Sipping and Vibing",
    description:
      "Experience the perfect blend of sophisticated cocktails, exquisite cuisine, and elegant atmosphere in our premium bar and restaurant.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans">
        <AgeGateModal />
        {children}
        <CookieNotice />
        <StickyCTA />
      </body>
    </html>
  )
}
