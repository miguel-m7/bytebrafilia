"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Brain, Target, Zap, Users, Star, Award, TrendingUp, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConsultoriaClientPage() {
  const whatsappMessage =
    "Olá! Tenho interesse na consultoria em TI. Gostaria de agendar uma análise gratuita para minha empresa."
  const whatsappUrl = `https://wa.me/556191914506?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">ANÁLISE GRATUITA</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Consultoria em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tecnologia</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
            Olá! Somos especialistas em{" "}
            <strong className="text-cyan-400">transformar empresas através da tecnologia</strong>. Oferecemos
            consultoria personalizada para otimizar seus sistemas, aumentar a segurança digital e melhorar a
            produtividade da sua equipe. Começamos sempre com uma{" "}
            <strong className="text-green-400">análise gratuita</strong> da sua infraestrutura atual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <Brain className="w-5 h-5 mr-2" />
              SOLICITAR ANÁLISE GRATUITA
            </Button>

            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">Resposta em até 2h</span>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-orange-400 font-semibold">
              ⚠️ ATENÇÃO: Empresas sem consultoria em TI perdem até 40% em produtividade!
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Não deixe sua concorrência sair na frente - invista em tecnologia agora.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Aumento Médio de Produtividade</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Nossos Serviços de Consultoria</h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para empresas de todos os tamanhos. Cada serviço é personalizado
            para atender às necessidades específicas do seu negócio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Análise de Infraestrutura",
                description:
                  "Avaliamos completamente seus sistemas, identificamos problemas e sugerimos melhorias para otimizar o desempenho",
                benefit: "Até 60% mais velocidade",
                urgent: true,
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Segurança Digital",
                description:
                  "Implementamos proteções contra vírus, ransomware e vazamentos de dados, mantendo sua empresa segura",
                benefit: "100% de proteção",
                urgent: true,
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Otimização de Processos",
                description:
                  "Automatizamos tarefas repetitivas e melhoramos workflows para aumentar a eficiência operacional",
                benefit: "40% menos tempo gasto",
                urgent: false,
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Treinamento de Equipe",
                description: "Capacitamos sua equipe nas melhores práticas de tecnologia e uso de novos sistemas",
                benefit: "Equipe 3x mais produtiva",
                urgent: false,
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Migração para Nuvem",
                description: "Realizamos a transição segura dos seus dados e sistemas para soluções em nuvem modernas",
                benefit: "50% redução de custos",
                urgent: false,
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Suporte Técnico Contínuo",
                description:
                  "Oferecemos suporte técnico especializado para manter todos os seus sistemas funcionando perfeitamente",
                benefit: "Zero tempo de inatividade",
                urgent: false,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {service.urgent && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1 mb-4 inline-block">
                    <span className="text-red-400 text-xs font-semibold">CRÍTICO</span>
                  </div>
                )}

                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                  <p className="text-green-400 font-semibold text-sm">✅ {service.benefit}</p>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 w-full bg-transparent"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  Quero Esta Solução
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Investimento com Retorno Garantido</h2>
          <p className="text-xl text-gray-300 mb-8">
            Nossos clientes veem resultados imediatos com
            <strong className="text-green-400"> aumento significativo de produtividade</strong> e redução de custos
            operacionais.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <h3 className="font-semibold text-white mb-2">ROI Médio</h3>
              <p className="text-gray-300 text-sm">Retorno sobre investimento em 12 meses</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">R$ 50k</div>
              <h3 className="font-semibold text-white mb-2">Economia Média</h3>
              <p className="text-gray-300 text-sm">Redução de custos operacionais por ano</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Rápido</div>
              <h3 className="font-semibold text-white mb-2">Resultados</h3>
              <p className="text-gray-300 text-sm">Melhorias visíveis desde o primeiro mês</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            CALCULAR MEU ROI AGORA
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">O Que Nossos Clientes Dizem</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Carlos Silva",
                company: "Advocacia Silva & Associados",
                text: "Aumentamos nossa produtividade em 50% após a consultoria. Excelente investimento!",
                rating: 5,
              },
              {
                name: "Ana Costa",
                company: "Clínica Médica Vida",
                text: "Sistema mais rápido, seguro e confiável. Recomendo para qualquer empresa.",
                rating: 5,
              },
              {
                name: "João Santos",
                company: "Contabilidade Santos",
                text: "Suporte excepcional e soluções que realmente funcionam. Muito satisfeito!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Sua Empresa Merece o Melhor em Tecnologia</h2>
          <p className="text-xl text-gray-300 mb-8">
            Não perca mais tempo com sistemas lentos e inseguros.
            <strong className="text-cyan-400"> Transforme sua empresa hoje</strong> com nossa consultoria especializada.
          </p>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6 mb-8">
            <p className="text-cyan-400 font-semibold mb-2">🚀 OFERTA LIMITADA:</p>
            <p className="text-white text-lg">
              Análise GRATUITA + Plano de ação personalizado + 1ª hora de consultoria GRÁTIS
            </p>
            <p className="text-gray-300 text-sm mt-2">
              *Válido apenas para os próximos 10 clientes que entrarem em contato hoje
            </p>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 text-xl font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            QUERO TRANSFORMAR MINHA EMPRESA AGORA
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
