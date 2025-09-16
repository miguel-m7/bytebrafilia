import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Clock } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">Por que escolher a ByteBrasília?</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Com mais de uma década de experiência no mercado, somos referência em serviços de informática na Asa
              Norte. Nossa equipe especializada oferece soluções personalizadas com agilidade e qualidade garantida.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-cyan-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Experiência</h4>
                  <p className="text-gray-400 text-sm">Mais de 10 anos no mercado</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-cyan-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Agilidade</h4>
                  <p className="text-gray-400 text-sm">Diagnóstico rápido e preciso</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/10 to-transparent p-8 rounded-2xl border border-cyan-900/20">
            <div className="space-y-6">
              <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-600/30">Localização Privilegiada</Badge>
              <h4 className="text-2xl font-bold text-white">Asa Norte 207/208</h4>
              <p className="text-gray-300">
                Estamos estrategicamente localizados no coração da Asa Norte, facilitando o acesso para todos os
                moradores da região.
              </p>
              <div className="pt-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver no Mapa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
