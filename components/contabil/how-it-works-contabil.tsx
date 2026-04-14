"use client"

import { useEffect, useRef, useState } from "react"

const CHAT_MESSAGES = [
  { type: "user", text: "Vocês atendem abertura de empresa para MEI?", time: "19:14" },
  { type: "bot", text: "Sim! Trabalhamos com abertura de MEI, ME e LTDA. Qual o seu ramo de atividade? Assim consigo te passar os detalhes certos.", time: "19:14 ✓✓" },
  { type: "user", text: "Sou designer freelancer", time: "" },
  { type: "bot", text: "Perfeito! Para designers, o MEI costuma ser a melhor opção. Posso agendar uma conversa com o contador para te explicar tudo?", time: "" },
]

function AnimatedChatSimulation() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < CHAT_MESSAGES.length) {
          return prev + 1
        }
        return 0
      })
    }, 1800)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleMessages])

  return (
    <div className="bg-[#E4DDD6] rounded-xl border border-[#D4CDB6] overflow-hidden flex flex-col" style={{ height: "280px" }}>
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto flex flex-col gap-2 p-3"
        style={{ scrollBehavior: "smooth" }}
      >
        {CHAT_MESSAGES.slice(0, visibleMessages).map((msg, idx) => (
          <div key={idx} className={msg.type === "user" ? "flex justify-start" : "flex justify-end"}>
            <div
              className={`rounded-2xl px-4 py-2.5 shadow-sm text-sm max-w-[90%] ${
                msg.type === "user"
                  ? "bg-white text-neutral-800 rounded-tl-sm"
                  : "text-white rounded-tr-sm"
              }`}
              style={msg.type === "user" ? {} : { backgroundColor: "#6C4FE8" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {visibleMessages > 0 && visibleMessages < CHAT_MESSAGES.length && (
          <div className="flex justify-end">
            <div
              className="rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white opacity-50 animate-pulse"
              style={{ backgroundColor: "#6C4FE8" }}
            >
              Digitando...
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default function HowItWorksContabil() {
  return (
    <section id="como-funciona" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden">
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
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            Como a{" "}
            <span className="italic gradient-brand">Yollo IA</span>{" "}
            funciona
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Do primeiro contato ao lead pronto para fechar — tudo automático, sem o contador precisar intervir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Card 1 — Agenda reuniões */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Agenda reuniões automaticamente</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Verifica a disponibilidade do contador, confirma o horário e envia lembretes automáticos ao lead — sem nenhuma intervenção da equipe.
              </p>
            </div>
            <div className="mt-auto bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm min-h-[200px]">
              <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                <div className="w-2 h-2 rounded-full bg-green-400/50" />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-semibold text-neutral-500 mb-3 uppercase tracking-wider">Agenda de hoje</div>
                <div className="flex flex-col gap-2">
                  {[
                    { time: "09:00", name: "Abertura CNPJ — Rafael M." },
                    { time: "10:30", name: "Migração Simples — Fernanda S." },
                    { time: "14:00", name: "Consultoria MEI — Ana C." },
                    { time: "16:00", name: "Planej. tributário — Carlos P." },
                  ].map((slot) => (
                    <div key={slot.time} className="flex items-center gap-2 text-[10px]">
                      <span className="text-neutral-400 w-10 flex-shrink-0">{slot.time}</span>
                      <div
                        className="flex-1 rounded px-2 py-1 text-white font-medium"
                        style={{ backgroundColor: "#6C4FE8CC" }}
                      >
                        {slot.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Atendimento automático */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Atendimento automático por IA</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A IA atende qualquer lead 24h por dia no WhatsApp: responde dúvidas, apresenta serviços e conduz a conversa até a qualificação.
              </p>
            </div>
            <div className="mt-auto w-full">
              <AnimatedChatSimulation />
            </div>
          </div>

          {/* Card 3 — Distribuição por departamento */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Distribuição por departamento</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A IA identifica o assunto da conversa e encaminha automaticamente ao departamento correto: pessoal, fiscal, societário ou comercial.
              </p>
            </div>
            <div className="mt-auto bg-gradient-to-br from-neutral-50 to-white rounded-xl overflow-hidden border border-neutral-100 shadow-inner min-h-[200px] p-4">
              <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Roteamento automático de conversa
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { dept: "Departamento Fiscal", topic: "IRPJ, SPED, obrigações acessórias", color: "#6C4FE8" },
                  { dept: "Depto. Pessoal", topic: "Folha, e-Social, FGTS, férias", color: "#059669" },
                  { dept: "Societário", topic: "Abertura, alteração, encerramento", color: "#D97706" },
                  { dept: "Comercial", topic: "Novos clientes e proposta", color: "#2563EB" },
                ].map((item) => (
                  <div key={item.dept} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-neutral-100 shadow-sm">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-neutral-800">{item.dept}</div>
                      <div className="text-[9px] text-neutral-400 truncate">{item.topic}</div>
                    </div>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
