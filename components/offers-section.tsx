"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Cpu, Zap, Star } from "lucide-react"

const offers = [
  {
    id: 1,
    name: "PC Gamer Starter",
    price: "R$ 2.999",
    originalPrice: "R$ 3.499",
    specs: ["Intel i5", "GTX 1650", "16GB RAM", "SSD 512GB"],
    category: "entry",
    image: "/gaming-pc-with-rgb-lights-blue-purple.jpg",
  },
  {
    id: 2,
    name: "PC Gamer Pro",
    price: "R$ 4.999",
    originalPrice: "R$ 5.999",
    specs: ["Intel i7", "RTX 3060", "32GB RAM", "SSD 1TB"],
    category: "mid",
    image: "/high-end-gaming-pc-with-rgb-purple-lights.jpg",
  },
  {
    id: 3,
    name: "PC Gamer Ultimate",
    price: "R$ 7.999",
    originalPrice: "R$ 9.499",
    specs: ["Intel i9", "RTX 4070", "64GB RAM", "SSD 2TB"],
    category: "high",
    image: "/ultimate-gaming-pc-setup-with-neon-lights.jpg",
  },
  {
    id: 4,
    name: "Setup Completo Kids",
    price: "R$ 3.499",
    originalPrice: "R$ 4.299",
    specs: ["PC + Monitor", "Teclado RGB", "Mouse Gamer", "Headset"],
    category: "bundle",
    image: "/complete-gaming-setup-for-kids-colorful.jpg",
  },
  {
    id: 5,
    name: "PC Gamer Streaming",
    price: "R$ 5.499",
    originalPrice: "R$ 6.799",
    specs: ["Ryzen 7", "RTX 3070", "32GB RAM", "Captura 4K"],
    category: "mid",
    image: "/streaming-gaming-pc-with-rgb.jpg",
  },
  {
    id: 6,
    name: "PC Gamer Compact",
    price: "R$ 3.799",
    originalPrice: "R$ 4.499",
    specs: ["Ryzen 5", "RX 6600", "16GB RAM", "Mini Tower"],
    category: "entry",
    image: "/compact-gaming-pc-with-led-lights.jpg",
  },
]

const categories = [
  { id: "all", label: "Todos" },
  { id: "entry", label: "Iniciante" },
  { id: "mid", label: "Intermediário" },
  { id: "high", label: "Avançado" },
  { id: "bundle", label: "Kits Completos" },
]

export default function OffersSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredOffers =
    selectedCategory === "all" ? offers : offers.filter((offer) => offer.category === selectedCategory)

  return (
    <section id="ofertas" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">
            <Zap className="h-4 w-4 mr-1" />
            Ofertas Especiais
          </Badge>
          <h3 className="text-4xl md:text-5xl font-bold font-mono mb-4 neon-glow-blue">Setups Gamer em Promoção</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Monte o PC dos sonhos com descontos incríveis de Dia das Crianças!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-secondary text-secondary-foreground font-bold"
                  : "border-border text-gray-300 hover:text-white hover:border-secondary"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <Card
              key={offer.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group card-glow-purple"
            >
              <div className="relative overflow-hidden">
                <img
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground font-bold">Promoção</Badge>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Monitor className="h-6 w-6 text-primary" />
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-300">4.8</span>
                  </div>
                </div>
                <CardTitle className="text-white font-mono">{offer.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  <span className="line-through text-sm">{offer.originalPrice}</span>
                  <span className="text-2xl font-bold text-secondary ml-2">{offer.price}</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {offer.specs.map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <Cpu className="h-4 w-4 text-accent mr-2" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">Ver Detalhes</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
    