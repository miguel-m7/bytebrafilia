import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Asa Informática - Manutenção, Conserto e Vendas | Asa Norte",
  description:
    "Especialistas em manutenção, conserto e venda de computadores e periféricos na Asa Norte. Mais de 10 anos de experiência. Asa Norte 207/208, Bloco A, Loja 12.",
  keywords: "informática, manutenção computador, conserto notebook, asa norte, brasília, periféricos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
