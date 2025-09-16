import type { Metadata } from "next"
import ManutencaoClientPage from "./ManutencaoClientPage"

export const metadata: Metadata = {
  title: "Manutenção & Conserto - ByteBrasília",
  description:
    "Serviços especializados de manutenção e conserto de computadores, notebooks e periféricos. Diagnóstico gratuito e garantia de 90 dias.",
}

export default function ManutencaoPage() {
  return <ManutencaoClientPage />
}
