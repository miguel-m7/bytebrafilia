import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Entre em Contato</h3>
          <p className="text-gray-400 text-lg">Estamos prontos para atender você</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Endereço</h4>
                <p className="text-gray-300">
                  Asa Norte 207/208, Bloco A, Loja 12
                  <br />
                  Brasília - DF
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Telefone</h4>
                <p className="text-gray-300">
                  (61) 3032-1487
                  <br />
                  (61) 9191-4506
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">E-mail</h4>
                <p className="text-gray-300">
                  contato@bytebrasilia.com.br
                  <br />
                  suporte@bytebrasilia.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Horário de Funcionamento</h4>
                <p className="text-gray-300">
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-[#1a1a1a] border-cyan-900/20">
            <CardHeader>
              <CardTitle className="text-white">Solicite um Orçamento</CardTitle>
              <CardDescription className="text-gray-400">Preencha o formulário e entraremos em contato</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Nome</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-600 rounded-md text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-600 rounded-md text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="(61) 99999-9999"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Serviço</label>
                <select className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-600 rounded-md text-white focus:border-cyan-500 focus:outline-none">
                  <option>Manutenção/Conserto</option>
                  <option>Compra de Equipamento</option>
                  <option>Consultoria</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-600 rounded-md text-white focus:border-cyan-500 focus:outline-none resize-none"
                  placeholder="Descreva seu problema ou necessidade..."
                />
              </div>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Enviar Solicitação</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
