import PromoHeader from "@/components/promo-header"
import SpinWheelSection from "@/components/spin-wheel-section"
import OffersSection from "@/components/offers-section"
import TestimonialsSection from "@/components/testimonials-section"
import CountdownSection from "@/components/countdown-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ChildrensDayPromo() {
  return (
    <div className="min-h-screen bg-background text-white">
      <PromoHeader />
      <SpinWheelSection />
      <OffersSection />
      <TestimonialsSection />
      <CountdownSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
