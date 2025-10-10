import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import MetaPixel from "@/components/MetaPixel"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Dia das Crianças Gamer - Gire e Ganhe Descontos | PC Gamer",
  description:
    "Promoção especial de Dia das Crianças! Gire a roleta e ganhe descontos incríveis em PCs Gamer, periféricos e muito mais. Monte o setup dos sonhos!",
  keywords: "pc gamer, dia das crianças, promoção gamer, setup gamer, desconto pc gamer, periféricos gamer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${orbitron.variable} antialiased`}>
      <body className="font-sans">
        <MetaPixel pixelId="774472648895114" />
        {children}
      </body>
    </html>
  )
}
