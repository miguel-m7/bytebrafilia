"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Trophy } from "lucide-react"

const prizes = [
  { id: 1, text: "R$200 OFF", code: "GAMER200", color: "oklch(0.65 0.25 280)" },
  { id: 2, text: "Mouse Gamer", code: "MOUSEGAMER", color: "oklch(0.7 0.2 190)" },
  { id: 3, text: "R$100 OFF", code: "GAMER100", color: "oklch(0.75 0.18 140)" },
  { id: 4, text: "Frete Grátis", code: "FRETEGRATIS", color: "oklch(0.8 0.15 320)" },
  { id: 5, text: "R$50 OFF", code: "GAMER50", color: "oklch(0.65 0.25 280)" },
  { id: 6, text: "Headset Gamer", code: "HEADSETGAMER", color: "oklch(0.7 0.2 190)" },
  { id: 7, text: "R$150 OFF", code: "GAMER150", color: "oklch(0.75 0.18 140)" },
  { id: 8, text: "Teclado RGB", code: "TECLADORGB", color: "oklch(0.8 0.15 320)" },
  { id: 9, text: "30% OFF", code: "DIADASCRIANCAS30", color: "oklch(0.2 0.1 320)" },
]

export default function SpinWheelSection() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [hasSpun, setHasSpun] = useState(false)
  const [wonPrize, setWonPrize] = useState<{ text: string; code: string } | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Check if user has already spun (anti-fraud)
    const hasSpunBefore = localStorage.getItem("hasSpun")
    if (hasSpunBefore) {
      setHasSpun(true)
    }
  }, [])

  useEffect(() => {
    drawWheel()
  }, [rotation])

  const drawWheel = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((rotation * Math.PI) / 180)

    const sliceAngle = (2 * Math.PI) / prizes.length

    prizes.forEach((prize, index) => {
      const startAngle = index * sliceAngle
      const endAngle = startAngle + sliceAngle

      // Draw slice
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.arc(0, 0, radius, startAngle, endAngle)
      ctx.closePath()
      ctx.fillStyle = prize.color
      ctx.fill()
      ctx.strokeStyle = "oklch(0.12 0.02 260)"
      ctx.lineWidth = 3
      ctx.stroke()

      // Draw text
      ctx.save()
      ctx.rotate(startAngle + sliceAngle / 2)
      ctx.textAlign = "center"
      ctx.fillStyle = "white"
      ctx.font = "bold 14px Orbitron, sans-serif"
      ctx.fillText(prize.text, radius * 0.65, 0)
      ctx.restore()
    })

    ctx.restore()

    // Draw center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI)
    ctx.fillStyle = "oklch(0.65 0.25 280)"
    ctx.fill()
    ctx.strokeStyle = "white"
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw pointer
    ctx.beginPath()
    ctx.moveTo(centerX, centerY - radius - 20)
    ctx.lineTo(centerX - 15, centerY - radius - 5)
    ctx.lineTo(centerX + 15, centerY - radius - 5)
    ctx.closePath()
    ctx.fillStyle = "oklch(0.75 0.18 140)"
    ctx.fill()
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2
    ctx.stroke()
  }

  const handleSpin = () => {
    if (hasSpun) {
      alert("Você já girou a roleta! Apenas uma tentativa por pessoa.")
      return
    }

    setIsSpinning(true)

    // Random prize selection
    const randomPrizeIndex = Math.floor(Math.random() * prizes.length)
    const targetRotation = 360 * 5 + (360 / prizes.length) * randomPrizeIndex

    setRotation(targetRotation)

    setTimeout(() => {
      setIsSpinning(false)
      const prize = prizes[randomPrizeIndex]
      setWonPrize({ text: prize.text, code: prize.code })
      setHasSpun(true)
      localStorage.setItem("hasSpun", "true")

      setTimeout(() => {
        const phoneNumber = "556191914506"
        const message = encodeURIComponent(
          `Olá! Acabei de girar a roleta da Campanha GamerKids e ganhei: 30% OFF !\n\nMeu cupom é: DIADASCRIANCAS30 \n\nGostaria de usar meu desconto!`,
        )
        setTimeout(() => {
          // Altere para a URL desejada após o tempo de espera
          window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
        }, 10000); // 10 segundos para o usuário ver a mensagem antes de redirecionar
        // window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
      }, 2000)
    }, 4000)
  }

  return (
    <section id="roleta" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4 border-glow-purple">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold font-mono">Promoção Especial</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-4 neon-glow-purple">Dia das Crianças Gamer</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Gire a roleta e ganhe descontos incríveis para montar o setup dos sonhos!
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          {/* Wheel */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <canvas
                ref={canvasRef}
                width={400}
                height={400}
                className={`transition-transform duration-[4000ms] ease-out ${isSpinning ? "animate-spin" : ""}`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              />
            </div>

            <Button
              onClick={handleSpin}
              className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xl py-8 px-12 card-glow-blue text-balance"
              disabled={isSpinning || hasSpun}
              size="lg"
            >
              {isSpinning ? "Girando..." : hasSpun ? "Você já girou!" : "🎮 Girar a Roleta Agora! 🎮"}
            </Button>

            {wonPrize && (
              <Card className="mt-6 p-6 bg-card border-glow-green text-center card-glow-green">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-3" />
                <h3 className="text-2xl font-bold font-mono text-accent mb-2">Parabéns!</h3>
                <p className="text-lg text-white mb-2">
                  Você ganhou: <span className="font-bold text-accent">30% OFF</span>
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  Cupom: <span className="font-mono font-bold text-accent">DIADASCRIANCAS30%</span>
                </p>
                <p className="text-sm text-gray-400">Redirecionando para o WhatsApp...</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
