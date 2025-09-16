"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function VendasPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to produtos page
    router.replace("/produtos")
  }, [router])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-white">Redirecionando para produtos...</p>
      </div>
    </div>
  )
}
