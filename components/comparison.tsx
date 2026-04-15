"use client"

import { useState } from "react"

const withoutItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Cliente manda mensagem",
    sub: "20h, fora do horário da clínica",
    color: "bg-gray-50 border-gray-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Fica sem resposta até manhã",
    sub: "Mais de 10h esperando",
    color: "bg-amber-50 border-amber-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    title: "Cliente já agendou na concorrência",
    sub: "Perdeu o cliente para sempre",
    color: "bg-red-50 border-red-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
        <path d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823M7.362 7.561A2 2 0 0012 12" />
      </svg>
    ),
    title: "Agenda com horários vagos",
    sub: "Receita perdida todo mês",
    color: "bg-red-50 border-red-200",
  },
]

const withItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Cliente manda mensagem",
    sub: "20h, fora do horário da clínica",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Yollo IA responde em 8 segundos",
    sub: "Apresenta tratamentos, tira dúvidas",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Agenda o procedimento automaticamente",
    sub: "Cliente confirma o horário no chat",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
      </svg>
    ),
    title: "Você acorda com a agenda cheia",
    sub: "Clínica crescendo no piloto automático",
    color: "bg-green-50 border-green-200",
  },
]

export default function Comparison() {
  const [activeTab, setActiveTab] = useState<"without" | "with">("without")

  return (
    <section id="comparacao" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            O que muda{" "}
            <span className="md:hidden">
              <br />
            </span>
            <span className="italic gradient-brand">
              com a Yollo IA?
            </span>
          </h2>
        </div>

        {/* Mobile toggle */}
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* SEM */}
          <div
            className={`rounded-2xl p-6 md:p-8 border border-red-100/60 shadow-sm bg-[#fffbfb] ${activeTab === "with" ? "hidden md:block" : "block"}`}
          >
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
                100 clientes/mês × seu ticket médio ={" "}
                <strong>isso é o que você perde.</strong>
              </p>
            </div>
          </div>

          {/* COM */}
          <div
            className={`rounded-2xl p-6 md:p-8 border border-green-100/60 shadow-sm bg-[#f8fdf9] ${activeTab === "without" ? "hidden md:block" : "block"}`}
          >
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
                Dona cuida dos clientes. <strong>Clínica cresce sem contratar mais recepcionistas.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
