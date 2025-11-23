"use client"

import { Button } from "@/components/ui/button"
import { Play, Sparkles, Globe, Link2, Scissors } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      
      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-white">
              100 Créditos Grátis ao Criar sua Conta
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Crie e Corte Vídeos{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              em Qualquer Idioma
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Transforme suas ideias em vídeos profissionais ou importe de YouTube, Instagram e outras redes para criar cortes virais com IA.
          </p>
          
          {/* Destaque dos diferenciais */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <p className="text-lg text-blue-400 font-semibold">
                +50 idiomas disponíveis
              </p>
            </div>
            <div className="hidden sm:block text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <Link2 className="w-5 h-5 text-cyan-400" />
              <p className="text-lg text-cyan-400 font-semibold">
                Importe de qualquer rede social
              </p>
            </div>
            <div className="hidden sm:block text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <Scissors className="w-5 h-5 text-indigo-400" />
              <p className="text-lg text-indigo-400 font-semibold">
                Cortes automáticos com IA
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 rounded-lg shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Ganhar 100 Créditos Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6 rounded-lg backdrop-blur-sm transition-all duration-300 font-semibold"
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Informação de créditos */}
          <div className="mt-8 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
            <span className="text-sm text-blue-200">
              💎 Cada vídeo custa apenas <span className="font-bold text-white">10 créditos</span> • Sem compromisso
            </span>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[
                  { flag: "🇧🇷", name: "Brasil" },
                  { flag: "🇺🇸", name: "EUA" },
                  { flag: "🇪🇸", name: "Espanha" },
                  { flag: "🇫🇷", name: "França" }
                ].map((country, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-3 border-slate-900 flex items-center justify-center text-2xl"
                    title={country.name}
                  >
                    {country.flag}
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold">+50.000 criadores globais</span>
            </div>
            <div className="text-sm font-semibold">
              ⭐⭐⭐⭐⭐ <span className="text-white">4.9/5</span> (2.500+ avaliações)
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
