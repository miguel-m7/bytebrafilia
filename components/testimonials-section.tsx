import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Lucas Silva",
    age: 12,
    avatar: "/young-boy-gamer-smiling.jpg",
    rating: 5,
    text: "Meu PC novo é incrível! Consigo jogar todos os meus jogos favoritos com gráficos no máximo. Obrigado mamãe!",
    parent: "Maria Silva",
  },
  {
    id: 2,
    name: "Ana Costa",
    age: 10,
    avatar: "/young-girl-gamer-happy.jpg",
    rating: 5,
    text: "Adorei meu setup novo! As luzes RGB são lindas e o teclado é super confortável. Agora posso jogar com meus amigos!",
    parent: "João Costa",
  },
  {
    id: 3,
    name: "Pedro Santos",
    age: 14,
    avatar: "/teenage-boy-gamer.jpg",
    rating: 5,
    text: "Setup perfeito para streaming! A qualidade é excelente e o atendimento foi muito bom. Recomendo!",
    parent: "Carla Santos",
  },
  {
    id: 4,
    name: "Julia Oliveira",
    age: 11,
    avatar: "/young-girl-with-headset.jpg",
    rating: 5,
    text: "Meu sonho realizado! Agora tenho um PC gamer de verdade. Os jogos rodam super rápido!",
    parent: "Roberto Oliveira",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold font-mono mb-4 neon-glow-green">Gamers Felizes</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Veja o que nossos jovens gamers e seus pais estão dizendo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 card-glow-green"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-accent mb-4 opacity-50" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{testimonial.text}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-white">{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-white">
                      {testimonial.name}, {testimonial.age} anos
                    </p>
                    <p className="text-xs text-gray-400">Comprado por {testimonial.parent}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
