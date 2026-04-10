"use client"

import { useEffect, useRef, useState } from "react"

const messages = [
  { role: "bot", text: "Olá! Vou te ajudar a configurar sua assistente. Como se chama sua clínica?", delay: 0 },
  { role: "user", text: "Clínica Bella Pele", delay: 1200 },
  { role: "bot", text: "Perfeito! E quais procedimentos vocês oferecem?", delay: 2400 },
  { role: "user", text: "Limpeza de pele, botox, preenchimento e peeling", delay: 3600 },
  { role: "bot", text: "Ótimo! Já configurei sua IA. Ela já pode atender seus clientes!", delay: 4800 },
]

export default function ConfigureIA() {
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
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none hidden md:block opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            Configuração{" "}
            <span className="italic gradient-brand">
              simples com IA
            </span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Sem fluxos complexos, sem planilhas. Basta gerar um prompt e conversar com nossa IA — ela aprende tudo sobre sua clínica.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Gerar Prompt */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Gere um prompt</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Nossas IA não é treinada em conversa. Comece gerando um prompt base com suas principais informações.
              </p>
            </div>
            {/* Visual: Prompt generation demo */}
            <div className="mt-auto bg-gradient-to-br from-neutral-50 to-white rounded-xl overflow-hidden border border-neutral-100 shadow-inner min-h-[200px] p-4">
              <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Seu prompt base
              </div>
              <div className="bg-white rounded-lg border border-neutral-100 p-3 text-[11px] text-neutral-700 leading-relaxed font-mono space-y-2">
                <div>📍 Clínica: Bella Pele</div>
                <div>💅 Procedimentos:</div>
                <div className="ml-4">• Limpeza de pele - R$180</div>
                <div className="ml-4">• Botox - R$350</div>
                <div className="ml-4">• Preenchimento - R$400</div>
                <div>⏰ Horários: 9h às 18h</div>
                <div>🎯 Público: Mulheres 25-55 anos</div>
              </div>
            </div>
          </div>

          {/* Card 2: Configure Conversando */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Configure conversando</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Use o prompt para conversar com nosso agente e ele aprende o tom, valores e detalhes da sua clínica.
              </p>
            </div>
            {/* Visual: Chat demo */}
            <div className="mt-auto bg-[#F5F5F5] rounded-xl p-3 min-h-[200px] relative overflow-hidden border border-neutral-200 flex flex-col">
              <div
                className="rounded-lg px-3 py-2 text-xs text-white mb-2 w-fit max-w-[85%]"
                style={{ backgroundColor: "#6C4FE8" }}
              >
                Qual é o tom que vocês usam com clientes?
              </div>
              <div className="self-end bg-white rounded-lg px-3 py-2 text-xs text-neutral-700 mb-3 w-fit max-w-[85%] border border-neutral-200">
                Acolhedor e profissional, sempre com emojis e muito carinho
              </div>
              <div className="mt-auto">
                <div className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Pronto para Atender */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Pronto para atender</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Sua IA já conhece tudo sobre a clínica e está preparada para atender seus clientes com perfeição.
              </p>
            </div>
            {/* Visual: Ready state demo */}
            <div className="mt-auto bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm min-h-[200px]">
              <div className="bg-green-50 border-b border-green-200 px-4 py-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-green-700">Configuração completa</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] text-green-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Informações da clínica
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-green-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Procedimentos e preços
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-green-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Tom de voz personalizado
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-green-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Pronto para atender
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
