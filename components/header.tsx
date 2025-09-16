"use client"

import { Button } from "@/components/ui/button"
import { Monitor, Menu, X, Phone } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-cyan-900/20 bg-[#181818]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Monitor className="h-8 w-8 text-cyan-400" />
            <h1 className="text-2xl font-bold text-white">
              Byte<span className="text-cyan-400">Brasília</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-8">
            <a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Início
            </a>
            <a href="/produtos" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Produtos
            </a>
            <div className="relative group">
              <span className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">Serviços</span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-cyan-900/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="/manutencao"
                  className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                >
                  Manutenção & Conserto
                </a>
                <a
                  href="/vendas"
                  className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                >
                  Vendas
                </a>
                <a
                  href="/consultoria"
                  className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                >
                  Consultoria
                </a>
              </div>
            </div>
            <a href="/#sobre" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Sobre
            </a>
            <a href="/#contato" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contato
            </a>
            <a
              href="https://wa.me/556191914506?text=Gostaria%20de%20falar%20com%20voc%C3%AAs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Como Ligar</span>
            </a>
            <a href="/#contato">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Orçamento</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cyan-900/20 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Início
              </a>
              <a href="/produtos" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Produtos
              </a>
              <div className="border-l-2 border-cyan-500/30 pl-4">
                <p className="text-cyan-400 text-sm font-semibold mb-2">Serviços</p>
                <a href="/manutencao" className="block text-gray-300 hover:text-cyan-400 transition-colors mb-2">
                  Manutenção & Conserto
                </a>
                <a href="/vendas" className="block text-gray-300 hover:text-cyan-400 transition-colors mb-2">
                  Vendas
                </a>
                <a href="/consultoria" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  Consultoria
                </a>
              </div>
              <a href="/#sobre" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Sobre
              </a>
              <a href="/#contato" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contato
              </a>
              <a
                href="https://wa.me/556191914506?text=Gostaria%20de%20falar%20com%20voc%C3%AAs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Como Ligar</span>
              </a>
              <a href="/#contato">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">Orçamento</Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
