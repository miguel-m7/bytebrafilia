"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Monitor, Cpu, HardDrive, Clapperboard as Motherboard, Laptop, Search } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProdutosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedCondition, setSelectedCondition] = useState("todos")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const allProducts = [
    // Produtos Novos - Notebooks
    {
      id: 1,
      nome: "Dell Inspiron 15 3000",
      categoria: "notebooks",
      condicao: "novo",
      preco: 2499.99,
      imagem: "/dell-inspiron-laptop.png",
      descricao: "Notebook Dell com processador Intel Core i5, 8GB RAM, SSD 256GB",
      garantia: "12 meses",
    },
    {
      id: 2,
      nome: "Lenovo IdeaPad 3",
      categoria: "notebooks",
      condicao: "novo",
      preco: 2199.99,
      imagem: "/lenovo-ideapad.png",
      descricao: "Notebook Lenovo AMD Ryzen 5, 8GB RAM, SSD 512GB",
      garantia: "12 meses",
    },
    {
      id: 3,
      nome: "Acer Aspire 5",
      categoria: "notebooks",
      condicao: "novo",
      preco: 2799.99,
      imagem: "/acer-aspire-laptop.png",
      descricao: "Notebook Acer Intel Core i7, 16GB RAM, SSD 512GB",
      garantia: "12 meses",
    },
    // Produtos Novos - PCs
    {
      id: 4,
      nome: "PC Gamer Completo",
      categoria: "pcs",
      condicao: "novo",
      preco: 4999.99,
      imagem: "/gaming-pc-setup.png",
      descricao: "PC Gamer AMD Ryzen 7, RTX 4060, 16GB RAM, SSD 1TB",
      garantia: "12 meses",
    },
    {
      id: 5,
      nome: "PC Office Básico",
      categoria: "pcs",
      condicao: "novo",
      preco: 1899.99,
      imagem: "/office-desktop-computer.png",
      descricao: "PC para escritório Intel Core i3, 8GB RAM, SSD 256GB",
      garantia: "12 meses",
    },
    // Produtos Novos - Placas de Vídeo
    {
      id: 6,
      nome: "NVIDIA RTX 4060",
      categoria: "placas-video",
      condicao: "novo",
      preco: 1899.99,
      imagem: "/nvidia-rtx-4060-graphics-card.png",
      descricao: "Placa de vídeo NVIDIA RTX 4060 8GB GDDR6",
      garantia: "24 meses",
    },
    {
      id: 7,
      nome: "AMD RX 7600",
      categoria: "placas-video",
      condicao: "novo",
      preco: 1699.99,
      imagem: "/amd-rx-7600-graphics-card.png",
      descricao: "Placa de vídeo AMD RX 7600 8GB GDDR6",
      garantia: "24 meses",
    },
    // Produtos Novos - Placas Mães
    {
      id: 8,
      nome: "ASUS Prime B450M",
      categoria: "placas-mae",
      condicao: "novo",
      preco: 399.99,
      imagem: "/asus-motherboard.png",
      descricao: "Placa mãe ASUS Prime B450M-A, Socket AM4, DDR4",
      garantia: "36 meses",
    },
    // Produtos Semi-novos
    {
      id: 9,
      nome: "Dell Latitude 5520",
      categoria: "notebooks",
      condicao: "seminovo",
      preco: 1799.99,
      imagem: "/dell-latitude-business-laptop.png",
      descricao: "Notebook Dell seminovo, Intel Core i5, 8GB RAM, SSD 256GB",
      garantia: "3 meses",
    },
    {
      id: 10,
      nome: "PC Gamer Usado",
      categoria: "pcs",
      condicao: "seminovo",
      preco: 2999.99,
      imagem: "/used-gaming-computer.png",
      descricao: "PC Gamer seminovo, AMD Ryzen 5, GTX 1660, 16GB RAM",
      garantia: "3 meses",
    },
    {
      id: 11,
      nome: "GTX 1660 Super",
      categoria: "placas-video",
      condicao: "seminovo",
      preco: 899.99,
      imagem: "/gtx-1660-super-graphics-card.png",
      descricao: "Placa de vídeo NVIDIA GTX 1660 Super 6GB seminova",
      garantia: "3 meses",
    },
    {
      id: 12,
      nome: "MSI B450M Pro",
      categoria: "placas-mae",
      condicao: "seminovo",
      preco: 249.99,
      imagem: "/msi-motherboard.png",
      descricao: "Placa mãe MSI B450M Pro seminova, Socket AM4",
      garantia: "3 meses",
    },
  ]

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "todos" || product.categoria === selectedCategory
    const matchesCondition = selectedCondition === "todos" || product.condicao === selectedCondition

    return matchesSearch && matchesCategory && matchesCondition
  })

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  const getCategoryIcon = (categoria: string) => {
    switch (categoria) {
      case "notebooks":
        return <Laptop className="h-6 w-6 text-cyan-400" />
      case "pcs":
        return <Monitor className="h-6 w-6 text-cyan-400" />
      case "placas-video":
        return <HardDrive className="h-6 w-6 text-cyan-400" />
      case "placas-mae":
        return <Motherboard className="h-6 w-6 text-cyan-400" />
      default:
        return <Cpu className="h-6 w-6 text-cyan-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#181818] to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-cyan-400">Produtos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Equipamentos de alta qualidade para todas as suas necessidades tecnológicas
          </p>
        </div>

        <div className="mb-8 bg-slate-800/50 rounded-lg p-6 border border-cyan-900/30">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todas Categorias</SelectItem>
                <SelectItem value="notebooks">Notebooks</SelectItem>
                <SelectItem value="pcs">PC's</SelectItem>
                <SelectItem value="placas-video">Placas de Vídeo</SelectItem>
                <SelectItem value="placas-mae">Placas Mães</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger className="w-full md:w-48 bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Condição" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todas Condições</SelectItem>
                <SelectItem value="novo">Novos</SelectItem>
                <SelectItem value="seminovo">Semi-novos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {paginatedProducts.map((produto) => (
            <Link key={produto.id} href={`/produtos/${produto.id}`}>
              <Card className="bg-slate-800/50 border-cyan-900/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer h-full">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={produto.imagem || "/placeholder.svg"}
                      alt={produto.nome}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        produto.condicao === "novo" ? "bg-cyan-600 text-white" : "bg-slate-600 text-white"
                      }`}
                    >
                      {produto.condicao === "novo" ? "Novo" : "Semi-novo"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    {getCategoryIcon(produto.categoria)}
                    <h3 className="text-lg font-semibold text-white ml-2 truncate">{produto.nome}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{produto.descricao}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-400">
                      R$ {produto.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs text-gray-500">Garantia: {produto.garantia}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
            >
              Anterior
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "bg-cyan-600 text-white hover:bg-cyan-700"
                    : "bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                }
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
            >
              Próxima
            </Button>
          </div>
        )}

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Interessado em algum produto?</h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco para mais informações e orçamentos personalizados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/556191914506?text=Gostaria%20de%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="#contato"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
