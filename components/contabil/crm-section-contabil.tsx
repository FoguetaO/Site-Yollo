"use client"

import { useEffect, useRef, useState } from "react"

// ─── Data ────────────────────────────────────────────────────────────────────

const COLUMNS = [
  {
    id: "novo",
    label: "Novo Lead",
    sublabel: "Lead entra pelo WhatsApp",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "qualificado",
    label: "Qualificado",
    sublabel: "IA qualifica automaticamente",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "reuniao",
    label: "Reunião Marcada",
    sublabel: "Agendamento automático",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "fechado",
    label: "Fechado",
    sublabel: "Negócio fechado",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

const COL_INDEX: Record<string, number> = { novo: 0, qualificado: 1, reuniao: 2, fechado: 3 }

const INITIAL_CARDS = [
  { id: 1, name: "Rafael M.", phone: "(11) 98765-4321", service: "Abertura de CNPJ", tag: "MEI", column: "novo" },
  { id: 2, name: "Fernanda S.", phone: "(21) 99123-4567", service: "Migração Simples Nacional", tag: "Fiscal", column: "novo" },
  { id: 3, name: "Carlos P.", phone: "(31) 97654-3210", service: "Planejamento Tributário", tag: "Fiscal", column: "qualificado" },
  { id: 4, name: "Ana C.", phone: "(41) 98888-1122", service: "MEI → Microempresa", tag: "Societário", column: "qualificado" },
  { id: 5, name: "Bruno L.", phone: "(51) 99000-5566", service: "Abertura de LTDA", tag: "Societário", column: "reuniao" },
  { id: 6, name: "Mariana T.", phone: "(61) 97777-8899", service: "Regularização MEI", tag: "MEI", column: "fechado" },
]

const MOVE_SEQUENCE = [
  { cardId: 1, toColumn: "qualificado", reason: "Lead qualificado pela conversa" },
  { cardId: 3, toColumn: "reuniao",     reason: "Reunião agendada automaticamente" },
  { cardId: 5, toColumn: "fechado",     reason: "Negócio fechado pelo contador" },
  { cardId: 2, toColumn: "qualificado", reason: "Lead qualificado pela conversa" },
  { cardId: 4, toColumn: "reuniao",     reason: "Reunião agendada automaticamente" },
  { cardId: 1, toColumn: "novo",        reason: "Novo lead pelo WhatsApp" },
  { cardId: 3, toColumn: "qualificado", reason: "Lead qualificado pela conversa" },
  { cardId: 2, toColumn: "novo",        reason: "Novo lead pelo WhatsApp" },
  { cardId: 4, toColumn: "qualificado", reason: "Lead qualificado pela conversa" },
  { cardId: 5, toColumn: "reuniao",     reason: "Reunião agendada automaticamente" },
]

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  MEI:        { bg: "#EEF2FF", text: "#4338CA" },
  Fiscal:     { bg: "#F5F3FF", text: "#6C4FE8" },
  Societário: { bg: "#FEF3C7", text: "#92400E" },
}

const AVATAR_COLORS = ["#6C4FE8", "#4F39B0", "#9879F0", "#7C65EC", "#5B43C4", "#8B71EE"]

// ─── Lead Card ───────────────────────────────────────────────────────────────

function LeadCard({
  card,
  isMoving,
  colorIdx,
}: {
  card: (typeof INITIAL_CARDS)[0]
  isMoving: boolean
  colorIdx: number
}) {
  const initials = card.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
  const tag = TAG_COLORS[card.tag] ?? { bg: "#F3F4F6", text: "#374151" }

  return (
    <div
      className="rounded-xl p-3 flex flex-col gap-2 bg-white transition-all duration-500"
      style={{
        border: isMoving ? "1.5px solid #6C4FE8" : "1.5px solid #E5E7EB",
        boxShadow: isMoving
          ? "0 0 0 3px rgba(108,79,232,0.12), 0 4px 16px rgba(108,79,232,0.12)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        transform: isMoving ? "scale(1.025) translateY(-2px)" : "scale(1) translateY(0)",
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
          style={{ backgroundColor: AVATAR_COLORS[colorIdx % AVATAR_COLORS.length] }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] font-semibold text-neutral-800 truncate">{card.name}</span>
            {isMoving && (
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: "#6C4FE815", color: "#6C4FE8" }}
              >
                IA
              </span>
            )}
          </div>
          <span className="text-[10px] text-neutral-400">{card.phone}</span>
        </div>
      </div>

      <span
        className="self-start text-[9px] font-semibold px-2 py-0.5 rounded-full"
        style={{ backgroundColor: tag.bg, color: tag.text }}
      >
        {card.tag}
      </span>

      <span className="text-[10px] text-neutral-500 leading-tight">{card.service}</span>

      <div className="h-0.5 rounded-full bg-neutral-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: isMoving ? "100%" : "55%",
            backgroundColor: "#6C4FE8",
          }}
        />
      </div>
    </div>
  )
}

// ─── Drop Zone ───────────────────────────────────────────────────────────────

function DropZone() {
  return (
    <div
      className="rounded-xl p-3 flex items-center justify-center min-h-[80px] transition-all duration-300"
      style={{
        border: "1.5px dashed #6C4FE855",
        backgroundColor: "#6C4FE806",
      }}
    >
      <span className="text-[10px] font-medium" style={{ color: "#9879F0" }}>
        Solte aqui
      </span>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function CRMSectionContabil() {
  const [cards, setCards] = useState(INITIAL_CARDS)
  const [movingCardId, setMovingCardId] = useState<number | null>(null)
  const [destColumn, setDestColumn] = useState<string | null>(null)
  const [currentReason, setCurrentReason] = useState("Lead qualificado pela conversa")
  const [activeColIndex, setActiveColIndex] = useState(1)
  const stepRef = useRef(0)

  useEffect(() => {
    const run = () => {
      const step = MOVE_SEQUENCE[stepRef.current % MOVE_SEQUENCE.length]
      setMovingCardId(step.cardId)
      setDestColumn(step.toColumn)
      setCurrentReason(step.reason)
      setActiveColIndex(COL_INDEX[step.toColumn])

      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) => (c.id === step.cardId ? { ...c, column: step.toColumn } : c))
        )
        setTimeout(() => {
          setMovingCardId(null)
          setDestColumn(null)
        }, 350)
      }, 650)

      stepRef.current += 1
    }

    const interval = setInterval(run, 2800)
    return () => clearInterval(interval)
  }, [])

  const countByCol = (colId: string) => cards.filter((c) => c.column === colId).length

  return (
    <section className="pt-12 pb-24 md:pt-20 md:pb-32 relative overflow-hidden" style={{ backgroundColor: "#F5F3FF" }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(108,79,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,79,232,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-10">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border mb-6"
            style={{ backgroundColor: "#6C4FE812", borderColor: "#6C4FE830", color: "#4F39B0" }}
          >
            CRM com movimentação automática
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-900 text-balance leading-tight">
            A IA move seus contatos pelo funil{" "}
            <span className="italic gradient-brand">conforme a conversa evolui</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto text-pretty">
            Sem cliques manuais. Conforme o lead responde, é qualificado e agenda — o card avança sozinho no pipeline.
          </p>
        </div>

        {/* ── Status badge ── */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
          style={{ backgroundColor: "#6C4FE808", borderColor: "#6C4FE825", color: "#6C4FE8" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C4FE8] animate-pulse flex-shrink-0" />
          IA movendo: {currentReason}
        </div>

        {/* ── Progress bar ── */}
        <div className="w-full grid grid-cols-4 gap-3">
          {COLUMNS.map((col, i) => {
            const isActive = i === activeColIndex
            const isCompleted = i < activeColIndex
            return (
              <div key={col.id} className="flex flex-col gap-1.5">
                <div className="h-0.5 rounded-full bg-neutral-200 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: isCompleted ? "100%" : isActive ? "62%" : "0%",
                      backgroundColor: "#6C4FE8",
                    }}
                  />
                </div>
                <span
                  className={`text-[11px] font-medium transition-colors duration-300 ${
                    isActive ? "text-neutral-800 font-semibold" : isCompleted ? "text-neutral-400" : "text-neutral-300"
                  }`}
                >
                  {col.label}
                  {isActive && (
                    <svg className="inline-block ml-1 -mt-0.5" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#6C4FE8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
              </div>
            )
          })}
        </div>

        {/* ── Kanban board ── */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
          {COLUMNS.map((col) => {
            const colCards = cards.filter((c) => c.column === col.id)
            const isDestCol = destColumn === col.id && movingCardId !== null
            return (
              <div
                key={col.id}
                className="rounded-2xl flex flex-col gap-3 p-3 transition-all duration-400"
                style={{
                  background: "#FFFFFF",
                  border: isDestCol ? "1.5px solid #6C4FE855" : "1.5px solid #E5E7EB",
                  boxShadow: isDestCol ? "0 0 0 3px rgba(108,79,232,0.06)" : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {/* Column header */}
                <div className="flex items-center justify-between px-1 pt-1">
                  <div className="flex items-center gap-1.5" style={{ color: "#6C4FE8" }}>
                    {col.icon}
                    <span className="text-[11px] font-semibold text-neutral-700">{col.label}</span>
                  </div>
                  <span
                    className="text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#6C4FE812", color: "#6C4FE8" }}
                  >
                    {countByCol(col.id)}
                  </span>
                </div>

                {/* Cards list */}
                <div className="flex flex-col gap-2 flex-1 min-h-[240px]">
                  {colCards.map((card, idx) => (
                    <LeadCard
                      key={card.id}
                      card={card}
                      isMoving={movingCardId === card.id}
                      colorIdx={card.id - 1}
                    />
                  ))}

                  {isDestCol && <DropZone />}

                  {colCards.length === 0 && !isDestCol && (
                    <div className="flex-1 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Sublabel */}
                <p className="text-[10px] text-neutral-400 text-center pb-1">{col.sublabel}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
