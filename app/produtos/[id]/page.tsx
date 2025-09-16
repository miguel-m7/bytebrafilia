import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Shield, Truck, CreditCard, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {allProducts} from "@/data/products"

export default function ProdutoDetalhePage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)



  const produto = allProducts.find((p) => p.id === productId)

  if (!produto) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#181818] to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/produtos"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos produtos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative">
              <img
                src={produto.imagem || "/placeholder.svg"}
                alt={produto.nome}
                className="w-full h-96 object-cover rounded-lg border border-cyan-900/30"
              />
              <Badge
                className={`absolute top-4 right-4 text-lg px-3 py-1 ${
                  produto.condicao === "novo" ? "bg-cyan-600 text-white" : "bg-slate-600 text-white"
                }`}
              >
                {produto.condicao === "novo" ? "Novo" : "Semi-novo"}
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{produto.nome}</h1>
              <p className="text-xl text-gray-300 mb-6">{produto.descricao}</p>
              <div className="text-4xl font-bold text-cyan-400 mb-6">
                R$ {produto.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </div>
            </div>

            <Card className="bg-slate-800/50 border-cyan-900/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Garantia</h3>
                </div>
                <p className="text-gray-300 mb-2">
                  <strong>{produto.garantia}</strong> de garantia
                </p>
                {produto.condicao === "seminovo" && (
                  <p className="text-cyan-400 text-sm">
                    ⭐ Produtos semi-novos incluem 3 meses de garantia da ByteBrasília
                  </p>
                )}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <a
                href={`https://wa.me/556191914506?text=Olá! Tenho interesse no produto: ${produto.nome} - R$ ${produto.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Comprar via WhatsApp
              </a>
              <Button variant="outline" className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                <CreditCard className="h-5 w-5 mr-2" />
                Solicitar Orçamento
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700">
              <div className="text-center">
                <Shield className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Garantia</p>
                <p className="text-xs text-gray-400">{produto.garantia}</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Entrega</p>
                <p className="text-xs text-gray-400">Brasília/DF</p>
              </div>
              <div className="text-center">
                <CreditCard className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Pagamento</p>
                <p className="text-xs text-gray-400">À vista/Parcelado</p>
              </div>
            </div>
          </div>
        </div>

        {produto.especificacoes && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Especificações Técnicas</h2>
            <Card className="bg-slate-800/50 border-cyan-900/30">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(produto.especificacoes).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-slate-700 last:border-b-0">
                      <span className="text-gray-400">{key}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
