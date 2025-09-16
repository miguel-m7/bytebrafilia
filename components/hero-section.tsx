import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-20 px-4 hero-gradient relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-cyan-300 to-slate-300 bg-clip-text text-transparent text-glow">
            Tecnologia e Confiança
          </h2>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            Especialistas em manutenção, conserto e venda de computadores e periféricos. Atendemos a Asa Norte com
            qualidade e agilidade há mais de 10 anos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 bg-transparent border-glow hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            >
              <a
                href="https://www.google.com/maps/place/Asa+Inform%C3%A1tica+e+Tecnologia/data=!4m2!3m1!1s0x0:0xdd4e623237005d20?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Como Chegar
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"></div>
    </section>
  )
}
