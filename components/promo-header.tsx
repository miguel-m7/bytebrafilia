"use client"

import { Button } from "@/components/ui/button"
import { Gamepad2, Menu, X, Cpu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function PromoHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-primary/20 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Cpu className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white leading-tight">
                Byte <span className="text-cyan-500">Brasília</span>
              </h1>
              <span className="text-xs font-mono text-primary flex items-center gap-1">
                <Gamepad2 className="h-3 w-3" />
                Campanha GamerKids
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-8">
            <a href="#roleta" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Girar Roleta
            </a>
            <a href="#ofertas" className="text-gray-300 hover:text-secondary transition-colors font-medium">
              Ofertas
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-accent transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Contato
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold card-glow-purple">
              Quero Girar!
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#roleta" className="text-gray-300 hover:text-primary transition-colors font-medium">
                Girar Roleta
              </a>
              <a href="#ofertas" className="text-gray-300 hover:text-secondary transition-colors font-medium">
                Ofertas
              </a>
              <a href="#depoimentos" className="text-gray-300 hover:text-accent transition-colors font-medium">
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-300 hover:text-primary transition-colors font-medium">
                Contato
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full font-bold">Quero Girar!</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
