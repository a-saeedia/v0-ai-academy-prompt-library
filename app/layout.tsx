import type React from "react"
import type { Metadata } from "next"
import { Outfit, Vazirmatn } from "next/font/google"
import "./globals.css"

// Tethera brand fonts - Updated 2025-01-11
const englishFont = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "600", "800"],
})

const persianFont = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["300", "400", "600", "800"],
})

export const metadata: Metadata = {
  title: "Tethera AI Academy - Prompt Library",
  description: "A comprehensive bilingual (Farsi/English) prompt library for AI applications by Tethera",
  keywords: ["AI", "prompts", "Tethera", "prompt library", "artificial intelligence"],
  authors: [{ name: "A corp", url: "https://a-corp.space" }],
  openGraph: {
    title: "Tethera AI Academy",
    description: "Professional prompt library for AI applications",
    url: "https://tethera.io",
    siteName: "Tethera AI Academy",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontClasses = `${englishFont.variable} ${persianFont.variable}`

  return (
    <html lang="en" suppressHydrationWarning className={fontClasses}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
