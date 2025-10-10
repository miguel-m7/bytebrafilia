"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Zap } from "lucide-react"

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date (October 12, 2025 - Children's Day in Brazil)
    const targetDate = new Date("2025-10-12T23:59:59").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto bg-card border-glow-purple card-glow-purple p-8 md:p-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-destructive/20 px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5 text-destructive" />
              <span className="text-destructive font-bold font-mono">Tempo Limitado!</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
              A Promoção Gamer Kids Termina Em:
            </h3>

            <div className="grid grid-cols-4 gap-4 md:gap-8 mb-8">
              <div className="bg-muted rounded-lg p-4 border-glow-blue">
                <div className="text-3xl md:text-5xl font-bold font-mono text-secondary mb-2">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 font-medium">Dias</div>
              </div>
              <div className="bg-muted rounded-lg p-4 border-glow-purple">
                <div className="text-3xl md:text-5xl font-bold font-mono text-primary mb-2">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 font-medium">Horas</div>
              </div>
              <div className="bg-muted rounded-lg p-4 border-glow-green">
                <div className="text-3xl md:text-5xl font-bold font-mono text-accent mb-2">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 font-medium">Min</div>
              </div>
              <div className="bg-muted rounded-lg p-4 border-glow-blue">
                <div className="text-3xl md:text-5xl font-bold font-mono text-secondary mb-2">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 font-medium">Seg</div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-lg">
              Não perca essa chance única de montar o setup gamer dos sonhos com descontos incríveis!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 card-glow-purple"
              >
                <Clock className="mr-2 h-5 w-5" />
                Girar Roleta Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold text-lg px-8 bg-transparent"
              >
                Ver Todas as Ofertas
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
