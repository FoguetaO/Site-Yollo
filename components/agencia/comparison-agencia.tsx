"use client"

import { useState } from "react"

const withoutItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Prospecção 100% manual",
    sub: "Equipe gasta horas pesquisando empresas uma a uma no Google",
    color: "bg-gray-50 border-gray-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Abordagem genérica e fria",
    sub: "Mensagens sem personalização que são ignoradas pelos prospects",
    color: "bg-amber-50 border-amber-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    title: "Baixíssima taxa de resposta",
    sub: "Poucos prospects respondem, esforço alto e retorno baixo",
    color: "bg-red-50 border-red-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: "Perda de oportunidades todos os dias",
    sub: "Concorrentes chegam primeiro porque prospectam em escala",
    color: "bg-red-50 border-red-200",
  },
]

const withItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Prospecção automática por segmento e cidade",
    sub: "IA mapeia empresas do nicho-alvo na cidade desejada em segundos",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Disparo em massa personalizado",
    sub: "Mensagens adaptadas ao segmento do cliente chegam pelo WhatsApp",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Nurturing automático dos leads",
    sub: "IA faz follow-up, responde dúvidas e aquece o contato até a reunião",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
      </svg>
    ),
    title: "Time foca só em fechar contratos",
    sub: "Reunião marcada, prospect qualificado: equipe comercial no que importa",
    color: "bg-green-50 border-green-200",
  },
]

export default function ComparisonAgencia() {
  const [activeTab, setActiveTab] = useState<"without" | "with">("without")

  return (
    <section id="comparacao" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            O que muda{" "}
            <span className="md:hidden"><br /></span>
            <span className="italic gradient-brand">
              com a Yollo IA?
            </span>
          </h2>
        </div>

        <div className="flex md:hidden justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("without")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === "without" ? "bg-white shadow text-neutral-900" : "text-neutral-500"}`}
            >
              Sem a Yollo IA
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("with")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === "with" ? "bg-white shadow text-neutral-900" : "text-neutral-500"}`}
            >
              Com a Yollo IA
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          <div className={`rounded-2xl p-6 md:p-8 border border-red-100/60 shadow-sm bg-[#fffbfb] ${activeTab === "with" ? "hidden md:block" : "block"}`}>
            <div className="hidden md:flex items-center gap-2 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Sem a Yollo IA</span>
            </div>
            <div className="space-y-0">
              {withoutItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 relative">
                  {i < withoutItems.length - 1 && (
                    <div className="absolute left-5 top-11 w-px h-[calc(100%-0.75rem)] bg-red-100" />
                  )}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="pb-7">
                    <p className="font-semibold text-[15px] leading-tight text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-100">
              <p className="text-sm text-red-700 leading-relaxed">
                Prospecção lenta e cara = <strong>concorrentes fecham os contratos antes de você.</strong>
              </p>
            </div>
          </div>

          <div className={`rounded-2xl p-6 md:p-8 border border-green-100/60 shadow-sm bg-[#f8fdf9] ${activeTab === "without" ? "hidden md:block" : "block"}`}>
            <div className="hidden md:flex items-center gap-2 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">Com a Yollo IA</span>
            </div>
            <div className="space-y-0">
              {withItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 relative">
                  {i < withItems.length - 1 && (
                    <div className="absolute left-5 top-11 w-px h-[calc(100%-0.75rem)] bg-green-100" />
                  )}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="pb-7">
                    <p className="font-semibold text-[15px] leading-tight text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-100">
              <p className="text-sm text-green-700 leading-relaxed">
                Pipeline sempre cheio. <strong>Sua agência escala sem aumentar a equipe comercial.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
