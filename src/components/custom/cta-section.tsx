"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-white">
              Alcance Global Garantido
            </span>
          </div>

          {/* Título */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para criar vídeos que{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              conquistam o mundo?
            </span>
          </h2>

          {/* Descrição */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de criadores que já estão monetizando conteúdo em múltiplos idiomas e países. 
            Comece gratuitamente hoje mesmo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 rounded-lg shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6 rounded-lg backdrop-blur-sm transition-all duration-300 font-semibold"
            >
              Ver Casos de Sucesso
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-300 font-semibold">Idiomas Disponíveis</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-300 font-semibold">Países Alcançados</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-blue-300 font-semibold">Vídeos Criados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
