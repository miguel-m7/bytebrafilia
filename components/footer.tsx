import { Monitor } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-cyan-900/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold text-white">
                Byte<span className="text-cyan-400">Brasília</span>
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-left text-sm">Sua loja de confiança em informática</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3">Informações</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p>CNPJ: 50.476.726/0001-73</p>
              <p>Asa Norte 207/208, Bloco A, Loja 12</p>
              <p>Brasília/DF</p>
              <p className="mt-3 font-medium text-cyan-400">Horário de Funcionamento:</p>
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-4">© 2024 ByteBrasília. Todos os direitos reservados.</p>
            <div className="text-gray-500 text-xs">
              <p className="mb-1">Site desenvolvido por:</p>
              <p className="text-cyan-400 font-medium">Social Manage</p>
              <p>CNPJ: 57.890.395/0001-62</p>
              <p>Tel: (61) 99448-7140</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
