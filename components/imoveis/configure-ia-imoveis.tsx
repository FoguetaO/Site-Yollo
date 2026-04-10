"use client"

import { useEffect, useRef, useState } from "react"

const messages = [
  { role: "bot", text: "Olá! Vou te ajudar a configurar seu assistente imobiliário. Como se chama sua imobiliária?", delay: 0 },
  { role: "user", text: "Imobiliária Central Prime", delay: 1200 },
  { role: "bot", text: "Perfeito! Quais tipos de imóveis você trabalha? Venda, locação ou ambos?", delay: 2400 },
  { role: "user", text: "Ambos — residencial e comercial", delay: 3600 },
  { role: "bot", text: "Pronto! Configurei a IA com sua carteira de imóveis e perfil de atendimento. Ela já pode qualificar e agendar visitas!", delay: 4800 },
]

export default function ConfigureIAImoveis() {
  const [visibleCount, setVisibleCount] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0
            intervalRef.current = setInterval(() => {
              count++
              setVisibleCount(count)
              if (count >= messages.length) {
                clearInterval(intervalRef.current!)
              }
            }, 1200)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      observer.disconnect()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="configure-sua-ia"
      className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hidden md:block absolute -top-[30%] -left-[15%] w-[80%] h-[80%] rounded-full blur-[180px] opacity-30"
          style={{ background: "radial-gradient(circle, #2563EB33, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="mb-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                style={{ backgroundColor: "#2563EB12", borderColor: "#2563EB30", color: "#1D4ED8" }}
              >
                Configuração simples
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-normal text-neutral-900 mb-6">
              Configure conversando{" "}
              <span className="italic gradient-brand">
                com a IA
              </span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
              Sem fluxos complexos, sem planilhas. Basta conversar com nosso agente de configuração e ele aprende tudo
              sobre a sua imobiliária: carteira de imóveis, perfil de cliente ideal, horários e muito mais.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Aprende o tom de voz da sua imobiliária",
                "Conhece toda a sua carteira de imóveis",
                "Integra com sua agenda de visitas",
                "Pronto para qualificar leads em minutos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#2563EB" }}
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
                  </svg>
                  <span className="text-sm text-neutral-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100 w-fit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">Conexão Segura — API Oficial WhatsApp</span>
            </div>
          </div>

          {/* Right: chat demo */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 h-[520px] flex flex-col">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Assistente de Configuração</h3>
              <p className="text-sm text-neutral-500">Configure sua IA conversando</p>
            </div>
            <div
              className="rounded-2xl rounded-b-none px-5 py-3 flex items-center gap-3"
              style={{ background: "linear-gradient(to right, #2563EB, #3B82F6)" }}
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                B
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Yollo IA</div>
                <div className="text-white/70 text-xs">Agente de Configuração</div>
              </div>
            </div>
            <div className="flex-1 bg-neutral-50 rounded-b-2xl p-4 space-y-3 overflow-y-auto">
              {messages.slice(0, visibleCount).map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[90%] rounded-2xl px-4 py-2.5 shadow-sm text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "text-white rounded-tr-sm"
                        : "bg-white text-neutral-800 border border-neutral-100 rounded-tl-sm"
                    }`}
                    style={msg.role === "user" ? { backgroundColor: "#2563EB" } : {}}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {visibleCount > 0 && visibleCount < messages.length && (
                <div className="flex justify-start">
                  <div className="bg-white border border-neutral-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#contratar"
            className="text-white text-lg font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: "#2563EB", boxShadow: "0 8px 24px #2563EB44" }}
          >
            Contratar agora →
          </a>
        </div>
      </div>
    </section>
  )
}
