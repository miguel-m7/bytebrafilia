import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Wrench, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Nossos Serviços</h3>
          <p className="text-gray-400 text-lg">Soluções completas em informática para você</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#1a1a1a] border-cyan-900/20 hover:border-cyan-500/50 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-cyan-400" />
              </div>
              <CardTitle className="text-white">Manutenção & Conserto</CardTitle>
              <CardDescription className="text-gray-400">
                Diagnóstico completo e reparo de computadores, notebooks e periféricos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Limpeza e manutenção preventiva</li>
                <li>• Troca de peças e componentes</li>
                <li>• Recuperação de dados</li>
                <li>• Formatação e instalação de sistemas</li>
              </ul>
              <Link href="/manutencao">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Saiba Mais</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-cyan-900/20 hover:border-cyan-500/50 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-cyan-400" />
              </div>
              <CardTitle className="text-white">Vendas</CardTitle>
              <CardDescription className="text-gray-400">
                Computadores, notebooks e periféricos das melhores marcas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Computadores desktop e notebooks</li>
                <li>• Periféricos e acessórios</li>
                <li>• Peças e componentes</li>
                <li>• Garantia e suporte técnico</li>
              </ul>
              <Link href="/produtos">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Ver Produtos</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-cyan-900/20 hover:border-cyan-500/50 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-cyan-400" />
              </div>
              <CardTitle className="text-white">Consultoria</CardTitle>
              <CardDescription className="text-gray-400">
                Orientação especializada para suas necessidades tecnológicas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Configuração de redes</li>
                <li>• Instalação de softwares</li>
                <li>• Suporte técnico remoto</li>
                <li>• Consultoria em TI</li>
              </ul>
              <Link href="/consultoria">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Solicitar Consultoria</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
