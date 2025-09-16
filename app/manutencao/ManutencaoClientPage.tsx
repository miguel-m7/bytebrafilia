"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Wrench, Clock, Shield, CheckCircle, Star, Users, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ManutencaoClientPage() {
  const whatsappMessage =
    "Olá! Preciso de manutenção/conserto para meu equipamento. Gostaria de agendar um diagnóstico gratuito."
  const whatsappUrl = `https://wa.me/556191914506?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Wrench className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">DIAGNÓSTICO GRATUITO</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Manutenção &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Conserto</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
            Especialistas em recuperação de equipamentos com{" "}
            <strong className="text-cyan-400">mais de 10 anos de experiência</strong>. Diagnóstico gratuito e garantia
            de 90 dias em todos os serviços.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <Wrench className="w-5 h-5 mr-2" />
              AGENDAR DIAGNÓSTICO GRATUITO
            </Button>

            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">Atendimento em até 24h</span>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-400 font-semibold">
              ⚡ ATENÇÃO: Problemas não resolvidos podem causar perda total de dados!
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Não deixe para depois - quanto mais tempo passa, maior o risco de danos permanentes.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Equipamentos Consertados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">90</div>
              <div className="text-gray-300 text-sm">Dias de Garantia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Nossos Serviços Especializados
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Manutenção Preventiva",
                description: "Limpeza completa, troca de pasta térmica, otimização do sistema",
                price: "R$ 180",
                service: "manutenção preventiva",
                urgent: false,
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Conserto de Hardware",
                description: "Reparo de placas-mãe, fontes, memórias e componentes",
                price: "Consultar loja",
                service: "conserto de hardware",
                urgent: true,
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Recuperação de Dados",
                description: "Recuperação de arquivos perdidos, HDs danificados",
                price: "Depende do defeito no HD",
                service: "recuperação de dados",
                urgent: true,
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Formatação + Programas",
                description: "Formatação completa com instalação de programas essenciais",
                price: "R$ 130",
                service: "formatação e programas",
                urgent: false,
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Upgrade de Componentes",
                description: "Melhoria de performance com novos componentes",
                price: "Consulte valores",
                service: "upgrade de componentes",
                urgent: false,
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Diagnóstico Completo",
                description: "Análise detalhada de todos os componentes",
                price: "R$ 50",
                service: "diagnóstico completo",
                urgent: false,
              },
            ].map((service, index) => {
              const specificWhatsappMessage = `Olá! Gostaria de solicitar o serviço de ${service.service}. Podem me passar mais informações?`
              const specificWhatsappUrl = `https://wa.me/556191914506?text=${encodeURIComponent(specificWhatsappMessage)}`

              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  {service.urgent && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1 mb-4 inline-block">
                      <span className="text-red-400 text-xs font-semibold">URGENTE</span>
                    </div>
                  )}

                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                      onClick={() => window.open(specificWhatsappUrl, "_blank")}
                    >
                      Solicitar
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Garantia de 90 Dias</h2>
          <p className="text-xl text-gray-300 mb-8">
            Todos os nossos serviços incluem garantia de 90 dias. Se o problema voltar,
            <strong className="text-cyan-400"> consertamos novamente sem custo adicional</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Peças Originais</h3>
              <p className="text-gray-300 text-sm">Utilizamos apenas peças originais e de qualidade</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Técnicos Certificados</h3>
              <p className="text-gray-300 text-sm">Profissionais com mais de 10 anos de experiência</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Atendimento Rápido</h3>
              <p className="text-gray-300 text-sm">Diagnóstico em até 24h, conserto em até 3 dias</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <Shield className="w-5 h-5 mr-2" />
            GARANTIR MEU CONSERTO AGORA
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Não Deixe Seu Equipamento Parado!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Cada dia sem seu computador é produtividade perdida.
            <strong className="text-red-400"> Agende agora</strong> e tenha seu equipamento funcionando em até 3 dias.
          </p>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6 mb-8">
            <p className="text-cyan-400 font-semibold mb-2">🎯 OFERTA ESPECIAL HOJE:</p>
            <p className="text-white text-lg">Diagnóstico GRATUITO + 10% de desconto no conserto</p>
            <p className="text-gray-300 text-sm mt-2">*Válido apenas para agendamentos feitos hoje via WhatsApp</p>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 text-xl font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            AGENDAR AGORA - DIAGNÓSTICO GRATUITO
          </Button>

          <p className="text-gray-400 text-sm mt-4">
            📍 Asa Norte 207/208 Bloco A Loja 12 | ⏰ Seg-Sex 9h-18h, Sáb 9h-13h
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
