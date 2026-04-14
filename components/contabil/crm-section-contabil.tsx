"use client"

import { useEffect, useRef, useState } from "react"

// ─── Data ────────────────────────────────────────────────────────────────────

const COLUMNS = [
  {
    id: "novo",
    label: "Novo Lead",
    sublabel: "Lead entra pelo WhatsApp",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    count_color: "bg-neutral-700 text-neutral-300",
  },
  {
    id: "qualificado",
    label: "Qualificado",
    sublabel: "IA qualifica automaticamente",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    count_color: "bg-neutral-700 text-neutral-300",
  },
  {
    id: "reuniao",
    label: "Reunião Marcada",
    sublabel: "Agendamento automático",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    count_color: "bg-neutral-700 text-neutral-300",
  },
  {
    id: "fechado",
    label: "Fechado",
    sublabel: "Negócio fechado!",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    count_color: "bg-green-900 text-green-400",
  },
]

// colIndex of each columnId
const COL_INDEX: Record<string, number> = { novo: 0, qualificado: 1, reuniao: 2, fechado: 3 }

const INITIAL_CARDS = [
  { id: 1, name: "Rafael M.", phone: "(11) 98765-4321", service: "Abertura de CNPJ", tag: "MEI", column: "novo" },
  { id: 2, name: "Fernanda S.", phone: "(21) 99123-4567", service: "Migração Simples Nacional", tag: "Fiscal", column: "novo" },
  { id: 3, name: "Carlos P.", phone: "(31) 97654-3210", service: "Planejamento Tributário", tag: "Fiscal", column: "qualificado" },
  { id: 4, name: "Ana C.", phone: "(41) 98888-1122", service: "MEI → Microempresa", tag: "Societário", column: "qualificado" },
  { id: 5, name: "Bruno L.", phone: "(51) 99000-5566", service: "Abertura de LTDA", tag: "Societário", column: "reuniao" },
  { id: 6, name: "Mariana T.", phone: "(61) 97777-8899", service: "Regularização MEI", tag: "MEI", column: "fechado" },
]

// Each step: which card moves and where, plus the "reason" shown in the status badge
const MOVE_SEQUENCE = [
  { cardId: 1, toColumn: "qualificado", reason: "Lead qualificado pela conversa" },
  { cardId: 3, toColumn: "reuniao",     reason: "Reunião agendada automaticamente" },
  { cardId: 5, toColumn: "fechado",     reason: "Negócio fechado pelo contador" },
  { cardId: 2, toColumn: "qualificado", reason: "Lead qualificado pela conversa" },
  { cardId: 4, toColumn: "reuniao",     reason: "Reunião agendada automaticamente" },
  // reset cards back so loop is continuous
  { cardId: 1, toColumn: "novo",        reason: "Novo lead pelo WhatsApp" },
  { cardId: 3, toColumn: "qualificado", reason: "Lead qualificado pela conversa" },
  { cardId: 2, toColumn: "novo",        reason: "Novo lead pelo WhatsApp" },
  { cardId: 4, toColumn: "qualificado", reason: "Lead qualificado pela conversa" },
  { cardId: 5, toColumn: "reuniao",     reason: "Reunião agendada automaticamente" },
]

const TAG_COLORS: Record<string, string> = {
  MEI: "bg-blue-900/60 text-blue-300",
  Fiscal: "bg-purple-900/60 text-purple-300",
  Societário: "bg-amber-900/60 text-amber-300",
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function LeadCard({
  card,
  isMoving,
  isDest,
}: {
  card: (typeof INITIAL_CARDS)[0]
  isMoving: boolean
  isDest: boolean
}) {
  return (
    <div
      className="rounded-xl p-3 flex flex-col gap-2 transition-all duration-500"
      style={{
        background: isMoving ? "#2A2420" : "#1E1E1E",
        border: isMoving
          ? "1.5px solid #C9A84C"
          : isDest
          ? "1.5px dashed #555"
          : "1.5px solid #2E2E2E",
        boxShadow: isMoving ? "0 0 0 3px rgba(201,168,76,0.18), 0 8px 24px rgba(201,168,76,0.10)" : "none",
        transform: isMoving ? "scale(1.03) translateY(-2px)" : "scale(1) translateY(0)",
        opacity: isMoving ? 0.92 : 1,
      }}
    >
      {/* Avatar row */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
          {card.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] font-semibold text-white truncate">{card.name}</span>
            {isMoving && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#C9A84C]/20 text-[#C9A84C]">IA</span>
            )}
          </div>
          <span className="text-[10px] text-neutral-500">{card.phone}</span>
        </div>
      </div>

      {/* Tag */}
      <span className={`self-start text-[9px] font-semibold px-2 py-0.5 rounded-full ${TAG_COLORS[card.tag] ?? "bg-neutral-700 text-neutral-300"}`}>
        {card.tag}
      </span>

      {/* Service */}
      <span className="text-[10px] text-neutral-400 leading-tight">{card.service}</span>

      {/* Progress bar */}
      <div className="h-0.5 rounded-full bg-neutral-700 overflow-hidden mt-0.5">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: isMoving ? "100%" : "60%",
            backgroundColor: isMoving ? "#C9A84C" : "#6C4FE8",
          }}
        />
      </div>
    </div>
  )
}

function DropZone() {
  return (
    <div
      className="rounded-xl p-3 flex flex-col items-center justify-center gap-2 min-h-[90px]"
      style={{ border: "1.5px dashed #C9A84C33", background: "#1A1A14" }}
    >
      <span className="text-[10px] text-[#C9A84C]/60 font-medium">Solte aqui</span>
    </div>
  )
}

// ─── Main board ──────────────────────────────────────────────────────────────

export default function CRMSectionContabil() {
  const [cards, setCards] = useState(INITIAL_CARDS)
  const [movingCardId, setMovingCardId] = useState<number | null>(null)
  const [destColumn, setDestColumn] = useState<string | null>(null)
  const [currentReason, setCurrentReason] = useState<string>("IA movendo: Lead qualificado pela conversa")
  const [activeColIndex, setActiveColIndex] = useState(1)
  const stepRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const step = MOVE_SEQUENCE[stepRef.current % MOVE_SEQUENCE.length]

      setMovingCardId(step.cardId)
      setDestColumn(step.toColumn)
      setCurrentReason(`IA movendo: ${step.reason}`)
      setActiveColIndex(COL_INDEX[step.toColumn])

      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) => (c.id === step.cardId ? { ...c, column: step.toColumn } : c))
        )
        setTimeout(() => {
          setMovingCardId(null)
          setDestColumn(null)
        }, 400)
      }, 700)

      stepRef.current += 1
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  const countByCol = (colId: string) => cards.filter((c) => c.column === colId).length

  // Progress bar: fill up to and including the active column
  const progressPercent = ((activeColIndex) / (COLUMNS.length - 1)) * 100

  return (
    <section className="py-24 md:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-12">

        {/* ── Headline ── */}
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
            A IA move seus contatos automaticamente pelo funil conforme a conversa evolui
          </h2>
        </div>

        {/* ── Status badge ── */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium"
          style={{ background: "#1E1A10", border: "1px solid #C9A84C55", color: "#C9A84C" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          {currentReason}
        </div>

        {/* ── Full-width board wrapper ── */}
        <div className="w-full flex flex-col gap-0">

          {/* Progress bar + column labels row */}
          <div className="grid grid-cols-4 gap-3 mb-1">
            {COLUMNS.map((col, i) => {
              const isCompleted = i < activeColIndex
              const isActive = i === activeColIndex
              return (
                <div key={col.id} className="flex flex-col gap-1.5">
                  {/* bar segment */}
                  <div className="h-0.5 rounded-full bg-neutral-700 overflow-hidden relative">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full transition-all duration-700"
                      style={{
                        width: isCompleted ? "100%" : isActive ? "65%" : "0%",
                        backgroundColor: "#C9A84C",
                      }}
                    />
                  </div>
                  {/* column name */}
                  <span className={`text-[11px] font-medium transition-colors duration-300 ${isActive ? "text-white font-bold" : isCompleted ? "text-neutral-400" : "text-neutral-600"}`}>
                    {col.label}
                    {isActive && (
                      <span className="ml-1.5 text-[#C9A84C]">
                        <svg className="inline-block" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    )}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Kanban columns */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {COLUMNS.map((col) => {
              const colCards = cards.filter((c) => c.column === col.id)
              const hasMovingCardInDest = destColumn === col.id && movingCardId !== null
              return (
                <div
                  key={col.id}
                  className="rounded-2xl flex flex-col gap-3 p-3"
                  style={{
                    background: "#151515",
                    border: hasMovingCardInDest ? "1.5px solid #C9A84C55" : "1.5px solid #222",
                    transition: "border-color 0.4s ease",
                  }}
                >
                  {/* Column header */}
                  <div className="flex items-center justify-between px-1 pt-1">
                    <div className="flex items-center gap-2 text-neutral-400">
                      {col.icon}
                      <span className="text-[12px] font-semibold text-neutral-200">{col.label}</span>
                    </div>
                    <span className={`text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ${col.count_color}`}>
                      {countByCol(col.id)}
                    </span>
                  </div>

                  {/* Cards */}
                  <div className="flex flex-col gap-2 flex-1 min-h-[260px]">
                    {colCards.map((card) => (
                      <LeadCard
                        key={card.id}
                        card={card}
                        isMoving={movingCardId === card.id}
                        isDest={false}
                      />
                    ))}

                    {/* Drop zone placeholder when card is heading here */}
                    {hasMovingCardInDest && <DropZone />}

                    {colCards.length === 0 && !hasMovingCardInDest && (
                      <div className="flex-1 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Sublabel */}
                  <p className="text-[10px] text-neutral-600 text-center pb-1">{col.sublabel}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
