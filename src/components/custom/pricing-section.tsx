"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    credits: "100 créditos iniciais",
    description: "Perfeito para começar e testar a plataforma",
    features: [
      "100 créditos ao criar conta",
      "10 vídeos gratuitos (10 créditos cada)",
      "Importar de YouTube, Instagram, TikTok",
      "Até 3 idiomas disponíveis",
      "Resolução HD (720p)",
      "Marca d'água incluída",
      "Suporte por email"
    ],
    cta: "Começar Grátis",
    highlighted: false
  },
  {
    name: "Profissional",
    price: "R$ 39,90",
    period: "/mês",
    credits: "500 créditos/mês",
    description: "Ideal para criadores de conteúdo e freelancers",
    features: [
      "500 créditos mensais (50 vídeos)",
      "Créditos não expiram",
      "Importar de qualquer plataforma",
      "Todos os 50+ idiomas",
      "Resolução 4K",
      "Sem marca d'água",
      "Cortes ilimitados por vídeo",
      "Suporte prioritário 24/7",
      "Todos os templates premium",
      "Exportação em múltiplos formatos"
    ],
    cta: "Começar Agora",
    highlighted: true
  },
  {
    name: "Empresarial",
    price: "R$ 139,90",
    period: "/mês",
    credits: "2000 créditos/mês",
    description: "Para equipes e agências que precisam de escala",
    features: [
      "2000 créditos mensais (200 vídeos)",
      "Tudo do Profissional",
      "5 usuários incluídos",
      "Renderização prioritária",
      "Gerente de conta dedicado",
      "Treinamento personalizado",
      "SLA de 99.9% uptime",
      "White label disponível",
      "API de integração",
      "Suporte técnico dedicado"
    ],
    cta: "Falar com Vendas",
    highlighted: false
  }
]

const creditPackages = [
  {
    credits: 100,
    price: "R$ 9,90",
    videos: "10 vídeos",
    savings: null
  },
  {
    credits: 300,
    price: "R$ 24,90",
    videos: "30 vídeos",
    savings: "Economize 17%"
  },
  {
    credits: 500,
    price: "R$ 39,90",
    videos: "50 vídeos",
    savings: "Economize 20%"
  },
  {
    credits: 1000,
    price: "R$ 79,90",
    videos: "100 vídeos",
    savings: "Economize 20%"
  }
]

export function PricingSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Planos e Preços
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Escolha o plano ideal para{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              seu negócio
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Sistema de créditos flexível. Sem contratos de longo prazo. Cancele quando quiser.
          </p>
        </div>

        {/* Grid de Planos Mensais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl scale-105 border-4 border-blue-400"
                  : "bg-white border-2 border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MAIS POPULAR
                </div>
              )}

              {/* Header do Plano */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-blue-100" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? "text-blue-200" : "text-slate-600"}`}>
                    {plan.period}
                  </span>
                </div>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
                  plan.highlighted ? "bg-white/20" : "bg-blue-50"
                }`}>
                  <Zap className={`w-4 h-4 ${plan.highlighted ? "text-yellow-300" : "text-blue-600"}`} />
                  <span className={`text-sm font-semibold ${plan.highlighted ? "text-white" : "text-blue-700"}`}>
                    {plan.credits}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-blue-300" : "text-blue-600"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-white" : "text-slate-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full py-6 text-base font-semibold rounded-lg transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Seção de Créditos Avulsos */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ou compre créditos avulsos
            </h3>
            <p className="text-lg text-slate-600">
              Pague apenas pelo que usar. Créditos nunca expiram.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditPackages.map((pkg, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                {pkg.savings && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {pkg.savings}
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    {pkg.credits}
                  </div>
                  <div className="text-sm text-slate-600 mb-3">
                    créditos
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-slate-500">
                    {pkg.videos}
                  </div>
                </div>

                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                  Comprar Agora
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600">
              💡 <span className="font-semibold">Cada vídeo custa 10 créditos</span> • Créditos nunca expiram
            </p>
          </div>
        </div>

        {/* Garantia */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 text-lg">
            🛡️ <span className="font-semibold">Garantia de 30 dias</span> - Não gostou? Devolvemos seu dinheiro, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  )
}
