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

const CRM_COLUMNS = [
  { id: "novo", label: "Novo Lead", color: "#E0E7FF", text: "#4338CA" },
  { id: "qualificado", label: "Qualificado", color: "#DCFCE7", text: "#15803D" },
  { id: "reuniao", label: "Reunião Marcada", color: "#FEF9C3", text: "#A16207" },
  { id: "fechado", label: "Fechado", color: "#D1FAE5", text: "#065F46" },
]

const INITIAL_CARDS = [
  { id: 1, name: "Rafael M.", service: "Abertura CNPJ", column: "novo" },
  { id: 2, name: "Fernanda S.", service: "Migração Simples", column: "qualificado" },
  { id: 3, name: "Carlos P.", service: "Planej. Tributário", column: "reuniao" },
  { id: 4, name: "Ana C.", service: "MEI → ME", column: "fechado" },
]

const MOVE_SEQUENCE = [
  { cardId: 1, toColumn: "qualificado" },
  { cardId: 2, toColumn: "reuniao" },
  { cardId: 3, toColumn: "fechado" },
  { cardId: 1, toColumn: "reuniao" },
  { cardId: 2, toColumn: "fechado" },
]

function CRMAnimation() {
  const [cards, setCards] = useState(INITIAL_CARDS)
  const [movingCard, setMovingCard] = useState<number | null>(null)
  const stepRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const step = MOVE_SEQUENCE[stepRef.current % MOVE_SEQUENCE.length]
      setMovingCard(step.cardId)
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) => (c.id === step.cardId ? { ...c, column: step.toColumn } : c))
        )
        setMovingCard(null)
      }, 400)
      stepRef.current += 1
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-auto bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm min-h-[220px]">
      <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center px-3 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-400/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
        <div className="w-2 h-2 rounded-full bg-green-400/50" />
        <span className="text-[9px] text-neutral-400 ml-2 font-medium">CRM — Pipeline de Leads</span>
      </div>
      <div className="p-3 grid grid-cols-4 gap-1.5 h-full">
        {CRM_COLUMNS.map((col) => (
          <div key={col.id} className="flex flex-col gap-1.5">
            <div
              className="text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-center"
              style={{ backgroundColor: col.color, color: col.text }}
            >
              {col.label}
            </div>
            <div className="flex flex-col gap-1.5 min-h-[140px]">
              {cards
                .filter((c) => c.column === col.id)
                .map((card) => (
                  <div
                    key={card.id}
                    className="rounded-lg px-2 py-2 border shadow-sm text-[9px] leading-tight"
                    style={{
                      borderColor: col.color,
                      backgroundColor: movingCard === card.id ? col.color : "#fff",
                      transition: "background-color 0.4s ease, transform 0.4s ease, opacity 0.4s ease",
                      transform: movingCard === card.id ? "scale(1.04)" : "scale(1)",
                      opacity: movingCard === card.id ? 0.7 : 1,
                    }}
                  >
                    <div className="font-bold text-neutral-800">{card.name}</div>
                    <div className="text-neutral-500 mt-0.5">{card.service}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
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

          {/* Card 4 — Rastreamento de leads */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Rastreamento de leads por anúncio</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Cada lead é vinculado ao anúncio de origem automaticamente. Você sabe exatamente qual campanha gerou cada cliente, sem precisar perguntar.
              </p>
            </div>
            <div className="mt-auto bg-gradient-to-br from-neutral-50 to-white rounded-xl overflow-hidden border border-neutral-100 shadow-inner min-h-[200px] p-4">
              <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Origem dos leads — este mês
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { source: "Meta Ads — Abertura CNPJ", count: 18, pct: 42 },
                  { source: "Google Ads — Simples Nacional", count: 11, pct: 26 },
                  { source: "Meta Ads — MEI Designer", count: 8, pct: 19 },
                  { source: "Orgânico / Indicação", count: 6, pct: 13 },
                ].map((item) => (
                  <div key={item.source} className="flex flex-col gap-0.5">
                    <div className="flex justify-between text-[9px]">
                      <span className="text-neutral-600 font-medium truncate mr-1">{item.source}</span>
                      <span className="text-neutral-400 flex-shrink-0">{item.count} leads</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full"
                        style={{ width: `${item.pct}%`, backgroundColor: "#6C4FE8" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5 — Qualificação automática */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Qualificação automática de leads</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A IA faz perguntas estratégicas, identifica o serviço necessário, o porte da empresa e o perfil do lead — entregando-o pronto para negociação.
              </p>
            </div>
            <div className="mt-auto bg-[#E4DDD6] rounded-xl p-3 min-h-[200px] relative overflow-hidden border border-[#D4CDB6]">
              <div className="flex flex-col gap-2">
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  Quantos funcionários sua empresa tem?
                </div>
                <div className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm text-neutral-800 max-w-[85%]">
                  Somos 12 pessoas no total
                </div>
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  Entendido! Seu perfil se encaixa no nosso plano empresarial. Vou marcar uma reunião com o consultor. Qual horário funciona melhor?
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">✓✓ Lead qualificado</div>
              </div>
            </div>
          </div>

          {/* Card 6 — CRM animado */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">CRM com movimentação automática</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Conforme a conversa avança, o lead é movido automaticamente entre as colunas do pipeline — de novo lead até fechado, sem nenhum clique manual.
              </p>
            </div>
            <CRMAnimation />
          </div>

        </div>
      </div>
    </section>
  )
}
