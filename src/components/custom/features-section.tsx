"use client"

import { Video, Wand2, Link2, Globe, Languages, Coins } from "lucide-react"

const features = [
  {
    icon: Link2,
    title: "Importe de Qualquer Rede Social",
    description: "Cole o link de vídeos do YouTube, Instagram, TikTok, Facebook e outras plataformas. Nossa IA identifica automaticamente os melhores momentos para cortes virais.",
    gradient: "from-cyan-600 to-blue-600"
  },
  {
    icon: Wand2,
    title: "Cortes Inteligentes com IA",
    description: "Tecnologia avançada analisa seu vídeo e cria cortes profissionais automaticamente. Identifica momentos-chave, falas importantes e cenas de maior engajamento.",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    icon: Languages,
    title: "Criação Multilíngue",
    description: "Crie vídeos em mais de 50 idiomas diferentes. Alcance audiências globais e monetize em diversos países com um único clique.",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    icon: Video,
    title: "Edição Profissional Automática",
    description: "Cortes precisos, transições suaves e efeitos profissionais aplicados automaticamente. Economize horas de trabalho manual de edição.",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: Coins,
    title: "Sistema de Créditos Flexível",
    description: "Comece com 100 créditos grátis. Cada vídeo custa apenas 10 créditos. Compre créditos avulsos ou assine um plano mensal com 500 créditos inclusos.",
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    icon: Globe,
    title: "Legendas Inteligentes",
    description: "Legendas automáticas com precisão de 98% em todos os idiomas. Otimizado para redes sociais e acessibilidade, aumentando seu alcance.",
    gradient: "from-slate-600 to-slate-800"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Recursos Profissionais
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Tudo que você precisa para{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              conquistar o mundo
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ferramentas de nível empresarial que permitem criar conteúdo profissional e monetizar globalmente
          </p>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Ícone */}
                <div className={`relative w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Destaque de importação de vídeos */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-10 text-center shadow-2xl mb-12">
          <Link2 className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Importe Vídeos de Qualquer Plataforma
          </h3>
          <p className="text-xl text-cyan-100 mb-6 max-w-2xl mx-auto">
            Cole o link do seu vídeo do YouTube, Instagram, TikTok, Facebook ou qualquer outra rede social. 
            Nossa IA analisa e cria cortes profissionais automaticamente.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["📺 YouTube", "📸 Instagram", "🎵 TikTok", "👥 Facebook", "🐦 Twitter", "🎬 Vimeo", "+10 plataformas"].map((platform) => (
              <span key={platform} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm">
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* Destaque do diferencial multilíngue */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-10 text-center shadow-2xl">
          <Globe className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Expanda Seus Ganhos Globalmente
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Crie vídeos em inglês, espanhol, francês, alemão, japonês e mais de 45 outros idiomas. 
            Monetize seu conteúdo em diferentes países e multiplique seus resultados.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["🇧🇷 Português", "🇺🇸 Inglês", "🇪🇸 Espanhol", "🇫🇷 Francês", "🇩🇪 Alemão", "🇯🇵 Japonês", "+44 idiomas"].map((lang) => (
              <span key={lang} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
