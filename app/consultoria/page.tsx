import type { Metadata } from "next"
import ConsultoriaClientPage from "./ConsultoriaClientPage"

export const metadata: Metadata = {
  title: "Consultoria em TI - ByteBrasília",
  description:
    "Consultoria especializada em tecnologia para empresas. Otimização de infraestrutura, segurança digital e soluções personalizadas.",
}

export default function ConsultoriaPage() {
  return <ConsultoriaClientPage />
}
