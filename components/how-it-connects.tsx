"use client"

import { useEffect, useState } from "react"

const chatMessages = [
  { role: "ia", text: "Ola! Vou te ajudar a configurar seu assistente para sua clinica." },
  { role: "user", text: "Estetica Bella" },
  { role: "ia", text: "Perfeito! Quais procedimentos voce oferece? Limpeza de pele, botox, outros?" },
  { role: "user", text: "Limpeza, botox e peeling" },
]

export default function HowItConnects() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [analyzing, setAnalyzing] = useState(false)

  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((v) => v + 1)
      }, 1100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setAnalyzing(true)
        setTimeout(() => {
          setVisibleMessages(0)
          setAnalyzing(false)
        }, 2500)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [visibleMessages])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Comece em{" "}
            <span className="gradient-brand italic">3 passos simples</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Do zero ao seu assistente funcionando no WhatsApp em menos de 10 minutos.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 — QR Code */}
          <div className="bg-[#F8F8FA] rounded-3xl p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-bold text-[#6C4FE8] uppercase tracking-widest">Passo 01</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3 leading-snug">
              Conecte seu WhatsApp de forma segura
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-8">
              Usamos a API oficial da Meta. Chega de banimentos e leads esperando atendimento.
            </p>

            {/* QR visual */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top-left corner block */}
                  <rect x="10" y="10" width="46" height="46" rx="6" stroke="#1A1A1A" strokeWidth="6" fill="none" />
                  <rect x="22" y="22" width="22" height="22" rx="3" fill="#1A1A1A" />
                  {/* Top-right corner block */}
                  <rect x="84" y="10" width="46" height="46" rx="6" stroke="#1A1A1A" strokeWidth="6" fill="none" />
                  <rect x="96" y="22" width="22" height="22" rx="3" fill="#1A1A1A" />
                  {/* Bottom-left corner block */}
                  <rect x="10" y="84" width="46" height="46" rx="6" stroke="#1A1A1A" strokeWidth="6" fill="none" />
                  <rect x="22" y="96" width="22" height="22" rx="3" fill="#1A1A1A" />
                  {/* Data dots */}
                  <rect x="68" y="68" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="84" y="68" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="100" y="68" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="116" y="68" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="68" y="84" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="100" y="84" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="68" y="100" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="84" y="100" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="116" y="100" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="68" y="116" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="100" y="116" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="116" y="116" width="8" height="8" rx="2" fill="#1A1A1A" />
                  {/* Scan line */}
                  <line x1="10" y1="70" x2="130" y2="70" stroke="#22C55E" strokeWidth="2.5" strokeDasharray="4 3" />
                  {/* Phone icon center */}
                  <circle cx="70" cy="70" r="12" fill="#22C55E" />
                  <text x="70" y="75" textAnchor="middle" fontSize="13" fill="white">&#128222;</text>
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-50">
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Conexao Segura</span>
              </div>
            </div>
          </div>

          {/* Card 2 — Chat de configuração */}
          <div className="bg-[#F8F8FA] rounded-3xl p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-bold text-[#6C4FE8] uppercase tracking-widest">Passo 02</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3 leading-snug">
              Configure conversando com a IA
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Nosso Agente de configuracao ajuda voce a configurar a sua IA do jeito que voce precisa.
            </p>

            {/* Mini chat */}
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 flex flex-col">
              {/* Header */}
              <div
                className="px-4 py-3 flex items-center gap-2"
                style={{ background: "linear-gradient(to right, #6C4FE8, #9879F0)" }}
              >
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <span className="text-white text-xs font-semibold">Assistente de Configuracao</span>
              </div>
              {/* Messages */}
              <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden" style={{ minHeight: 180 }}>
                {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                  >
                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "text-white"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                      style={msg.role === "user" ? { backgroundColor: "#6C4FE8" } : {}}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 — IA aprende */}
          <div className="bg-[#F8F8FA] rounded-3xl p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-bold text-[#6C4FE8] uppercase tracking-widest">Passo 03</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3 leading-snug">
              A IA aprende automaticamente
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-8">
              Analisa todas as suas conversas anteriores e aprende seu tom de voz, suas perguntas e seu processo de atendimento.
            </p>

            {/* Brain visual */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5">
              <div className="relative flex items-center justify-center">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#6C4FE810" }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#6C4FE818" }}
                  >
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#6C4FE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.26Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.26Z" />
                    </svg>
                  </div>
                </div>
                {/* Pulsing ring */}
                {analyzing && (
                  <div className="absolute inset-0 rounded-full border-2 border-[#6C4FE8] animate-ping opacity-30" />
                )}
              </div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{
                  backgroundColor: "#6C4FE810",
                  borderColor: "#6C4FE830",
                }}
              >
                <svg
                  className="w-3.5 h-3.5"
                  style={{ color: "#6C4FE8" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                </svg>
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#6C4FE8" }}
                >
                  {analyzing ? "Aprendendo..." : "Analisando"}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
