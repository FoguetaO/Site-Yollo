"use client"

import { useEffect, useRef, useState } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const COLUMNS = [
  {
    id: "novo",
    label: "Novo Lead",
    sublabel: "Lead entra pelo WhatsApp",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "qualificado",
    label: "Qualificado",
    sublabel: "IA qualifica automaticamente",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "reuniao",
    label: "Reunião Marcada",
    sublabel: "Agendamento automático",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "fechado",
    label: "Fechado",
    sublabel: "Negócio fechado",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

type Card = {
  id: number
  name: string
  phone: string
  service: string
  tag: string
  column: string
}

const INITIAL_CARDS: Card[] = [
  { id: 1, name: "Rafael M.",   phone: "(11) 98765-4321", service: "Abertura de CNPJ",           tag: "MEI",        column: "novo" },
  { id: 2, name: "Fernanda S.", phone: "(21) 99123-4567", service: "Migração Simples Nacional",   tag: "Fiscal",     column: "novo" },
  { id: 3, name: "Carlos P.",   phone: "(31) 97654-3210", service: "Planejamento Tributário",     tag: "Fiscal",     column: "qualificado" },
  { id: 4, name: "Ana C.",      phone: "(41) 98888-1122", service: "MEI → Microempresa",          tag: "Societário", column: "qualificado" },
  { id: 5, name: "Bruno L.",    phone: "(51) 99000-5566", service: "Abertura de LTDA",            tag: "Societário", column: "reuniao" },
  { id: 6, name: "Mariana T.",  phone: "(61) 97777-8899", service: "Regularização MEI",           tag: "MEI",        column: "fechado" },
]

// Sequência roda UMA VEZ — sem loop
const MOVE_SEQUENCE = [
  { cardId: 1, toColumn: "qualificado", reason: "Lead qualificado pela IA" },
  { cardId: 3, toColumn: "reuniao",     reason: "Reunião agendada automaticamente" },
  { cardId: 5, toColumn: "fechado",     reason: "Negócio fechado pelo contador" },
]

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  MEI:        { bg: "#EEF2FF", text: "#4338CA" },
  Fiscal:     { bg: "#F5F3FF", text: "#6C4FE8" },
  Societário: { bg: "#FEF3C7", text: "#92400E" },
}

const AVATAR_COLORS = ["#6C4FE8", "#4F39B0", "#9879F0", "#7C65EC", "#5B43C4", "#8B71EE"]

// ─── Lead Card ────────────────────────────────────────────────────────────────

function LeadCard({
  card,
  isMoving,
  isDragging,
  dragOffset,
}: {
  card: Card
  isMoving: boolean
  isDragging: boolean
  dragOffset: { x: number; y: number }
}) {
  const initials = card.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
  const tag = TAG_COLORS[card.tag] ?? { bg: "#F3F4F6", text: "#374151" }
  const avatarColor = AVATAR_COLORS[(card.id - 1) % AVATAR_COLORS.length]

  return (
    <div
      className="rounded-xl p-3 flex flex-col gap-2 bg-white"
      style={{
        border: isMoving ? "1.5px solid #6C4FE8" : "1.5px solid #E5E7EB",
        boxShadow: isDragging
          ? "0 12px 32px rgba(108,79,232,0.22), 0 0 0 3px rgba(108,79,232,0.12)"
          : isMoving
          ? "0 4px 16px rgba(108,79,232,0.12)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        transform: isDragging
          ? `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(1.04) rotate(1.5deg)`
          : isMoving
          ? "scale(1.02) translateY(-2px)"
          : "none",
        transition: isDragging ? "box-shadow 0.2s" : "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        position: isDragging ? "relative" : "relative",
        zIndex: isDragging ? 50 : "auto",
        opacity: isDragging ? 0.95 : 1,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] font-semibold text-neutral-800 truncate">{card.name}</span>
            {isMoving && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "#6C4FE815", color: "#6C4FE8" }}>
                IA
              </span>
            )}
          </div>
          <span className="text-[10px] text-neutral-400">{card.phone}</span>
        </div>
      </div>

      <span className="self-start text-[9px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: tag.bg, color: tag.text }}>
        {card.tag}
      </span>

      <span className="text-[10px] text-neutral-500 leading-tight">{card.service}</span>

      <div className="h-0.5 rounded-full bg-neutral-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: isDragging ? "100%" : isMoving ? "80%" : "55%",
            backgroundColor: "#6C4FE8",
            transition: "width 0.6s ease",
          }}
        />
      </div>
    </div>
  )
}

// ─── Drop Zone ────────────────────────────────────────────────────────────────

function DropZone({ active }: { active: boolean }) {
  return (
    <div
      className="rounded-xl p-3 flex items-center justify-center min-h-[80px] transition-all duration-300"
      style={{
        border: active ? "1.5px dashed #6C4FE8" : "1.5px dashed #6C4FE840",
        backgroundColor: active ? "#6C4FE810" : "#6C4FE805",
      }}
    >
      <span className="text-[10px] font-semibold" style={{ color: active ? "#6C4FE8" : "#9879F0" }}>
        {active ? "Soltando aqui..." : "Solte aqui"}
      </span>
    </div>
  )
}

// ─── Cursor SVG ───────────────────────────────────────────────────────────────

function AnimatedCursor({ x, y, visible, clicking }: { x: number; y: number; visible: boolean; clicking: boolean }) {
  return (
    <div
      className="pointer-events-none fixed z-[100]"
      style={{
        left: x,
        top: y,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        transform: "translate(-4px, -4px)",
      }}
    >
      <svg
        width={clicking ? 22 : 24}
        height={clicking ? 22 : 24}
        viewBox="0 0 24 24"
        fill="none"
        style={{ transition: "width 0.15s, height 0.15s, filter 0.2s", filter: clicking ? "drop-shadow(0 2px 6px rgba(108,79,232,0.5))" : "drop-shadow(0 1px 3px rgba(0,0,0,0.3))" }}
      >
        <path d="M4 2L20 10L12 12L8 20L4 2Z" fill="white" stroke="#6C4FE8" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function CRMSectionContabil() {
  const [cards, setCards] = useState<Card[]>(INITIAL_CARDS)
  const [phase, setPhase] = useState<"idle" | "hovering" | "dragging" | "dropping" | "done">("idle")
  const [stepIndex, setStepIndex] = useState(0)
  const [activeCardId, setActiveCardId] = useState<number | null>(null)
  const [destCol, setDestCol] = useState<string | null>(null)
  const [reason, setReason] = useState("IA movendo leads automaticamente")

  // Cursor position (viewport-relative px)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const boardRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({})
  const colRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const animating = useRef(false)
  const done = useRef(false)

  const getCenter = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
  }

  const animateCursorTo = (
    fromX: number, fromY: number,
    toX: number, toY: number,
    durationMs: number,
    onUpdate: (x: number, y: number) => void,
    onDone: () => void
  ) => {
    const startTime = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / durationMs, 1)
      // ease-in-out cubic
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      const x = fromX + (toX - fromX) * ease
      const y = fromY + (toY - fromY) * ease
      onUpdate(x, y)
      if (t < 1) requestAnimationFrame(tick)
      else onDone()
    }
    requestAnimationFrame(tick)
  }

  const runStep = (idx: number) => {
    if (idx >= MOVE_SEQUENCE.length || animating.current) return
    animating.current = true

    const step = MOVE_SEQUENCE[idx]
    const cardEl = cardRefs.current[step.cardId]
    const destColEl = colRefs.current[step.toColumn]

    if (!cardEl || !destColEl) {
      animating.current = false
      return
    }

    setActiveCardId(step.cardId)
    setDestCol(step.toColumn)
    setReason(step.reason)

    const cardCenter = getCenter(cardEl)
    const destCenter = getCenter(destColEl)

    // Phase 1: move cursor to card (400ms)
    setPhase("hovering")
    animateCursorTo(
      destCenter.x + 120, destCenter.y - 60,
      cardCenter.x, cardCenter.y,
      500,
      (x, y) => setCursor({ x, y }),
      () => {
        // Phase 2: click-down on card (200ms pause)
        setTimeout(() => {
          setPhase("dragging")

          // Phase 3: drag cursor to destination column (700ms)
          const startCardCenter = getCenter(cardEl)
          animateCursorTo(
            startCardCenter.x, startCardCenter.y,
            destCenter.x, destCenter.y,
            800,
            (x, y) => {
              setCursor({ x, y })
              setDragOffset({
                x: x - startCardCenter.x,
                y: y - startCardCenter.y,
              })
            },
            () => {
              // Phase 4: drop (release)
              setPhase("dropping")
              setTimeout(() => {
                setCards((prev) =>
                  prev.map((c) => (c.id === step.cardId ? { ...c, column: step.toColumn } : c))
                )
                setDragOffset({ x: 0, y: 0 })

                setTimeout(() => {
                  setPhase("idle")
                  setActiveCardId(null)
                  setDestCol(null)
                  animating.current = false

                  const nextIdx = idx + 1
                  if (nextIdx < MOVE_SEQUENCE.length) {
                    setStepIndex(nextIdx)
                    setTimeout(() => runStep(nextIdx), 1200)
                  } else {
                    done.current = true
                    setPhase("done")
                    setReason("Todos os leads movidos pela IA")
                  }
                }, 400)
              }, 300)
            }
          )
        }, 250)
      }
    )
  }

  useEffect(() => {
    // Start after 1.5s delay so the section is visible
    const timeout = setTimeout(() => {
      if (!done.current) runStep(0)
    }, 1500)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const countByCol = (colId: string) => cards.filter((c) => c.column === colId).length

  const isCursorVisible = phase === "hovering" || phase === "dragging" || phase === "dropping"
  const isClicking = phase === "dragging" || phase === "dropping"

  return (
    <section className="pt-12 pb-24 md:pt-20 md:pb-32 relative overflow-hidden" style={{ backgroundColor: "#F5F3FF" }}>
      {/* Animated cursor */}
      <AnimatedCursor x={cursor.x} y={cursor.y} visible={isCursorVisible} clicking={isClicking} />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,79,232,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,79,232,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-8 md:gap-10">

        {/* Header */}
        <div className="text-center max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border mb-6"
            style={{ backgroundColor: "#6C4FE812", borderColor: "#6C4FE830", color: "#4F39B0" }}
          >
            CRM com movimentação automática
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-900 text-balance leading-tight">
            A IA move seus contatos pelo funil{" "}
            <em className="gradient-brand not-italic">conforme a conversa evolui</em>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto text-pretty">
            Sem cliques manuais. Conforme o lead responde e é qualificado, o card avança sozinho no pipeline.
          </p>
        </div>

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
          style={{ backgroundColor: "#6C4FE808", borderColor: "#6C4FE825", color: "#6C4FE8" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              backgroundColor: "#6C4FE8",
              animation: phase !== "done" && phase !== "idle" ? "pulse 1s infinite" : "none",
            }}
          />
          IA movendo: {reason}
        </div>

        {/* Progress bar */}
        <div className="w-full grid grid-cols-4 gap-2 sm:gap-3">
          {COLUMNS.map((col, i) => {
            const activeStep = MOVE_SEQUENCE[stepIndex]
            const destColIndex = COLUMNS.findIndex((c) => c.id === activeStep?.toColumn)
            const isActive = i === destColIndex && phase !== "done"
            const isCompleted = i < destColIndex || phase === "done"
            return (
              <div key={col.id} className="flex flex-col gap-1.5">
                <div className="h-0.5 rounded-full bg-neutral-200 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: isCompleted ? "100%" : isActive ? "60%" : "0%",
                      backgroundColor: "#6C4FE8",
                    }}
                  />
                </div>
                <span className={`text-[10px] sm:text-[11px] font-medium transition-colors duration-300 ${isActive ? "text-neutral-800 font-semibold" : isCompleted ? "text-neutral-500" : "text-neutral-300"}`}>
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

        {/* Kanban board */}
        <div ref={boardRef} className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {COLUMNS.map((col) => {
            const colCards = cards.filter((c) => c.column === col.id)
            const isDestCol = destCol === col.id && activeCardId !== null && phase === "dragging"
            const isDroppingHere = destCol === col.id && phase === "dropping"

            return (
              <div
                key={col.id}
                ref={(el) => { colRefs.current[col.id] = el }}
                className="rounded-2xl flex flex-col gap-2 p-2.5 sm:p-3 transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: isDestCol || isDroppingHere ? "1.5px solid #6C4FE855" : "1.5px solid #E5E7EB",
                  boxShadow: isDestCol || isDroppingHere ? "0 0 0 3px rgba(108,79,232,0.06)" : "0 1px 4px rgba(0,0,0,0.04)",
                  minHeight: 260,
                }}
              >
                {/* Column header */}
                <div className="flex items-center justify-between px-1 pt-1">
                  <div className="flex items-center gap-1.5 text-[#6C4FE8]">
                    {col.icon}
                    <span className="text-[11px] font-semibold text-neutral-700 leading-none">{col.label}</span>
                  </div>
                  <span
                    className="text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#6C4FE812", color: "#6C4FE8" }}
                  >
                    {countByCol(col.id)}
                  </span>
                </div>

                {/* Cards list */}
                <div className="flex flex-col gap-2 flex-1">
                  {colCards.map((card) => (
                    <div
                      key={card.id}
                      ref={(el) => { cardRefs.current[card.id] = el }}
                    >
                      <LeadCard
                        card={card}
                        isMoving={activeCardId === card.id && phase === "hovering"}
                        isDragging={activeCardId === card.id && (phase === "dragging" || phase === "dropping")}
                        dragOffset={activeCardId === card.id ? dragOffset : { x: 0, y: 0 }}
                      />
                    </div>
                  ))}

                  {(isDestCol || isDroppingHere) && (
                    <DropZone active={isDroppingHere} />
                  )}

                  {colCards.length === 0 && !isDestCol && !isDroppingHere && (
                    <div className="flex-1 flex items-center justify-center opacity-30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Sublabel */}
                <p className="text-[9px] sm:text-[10px] text-neutral-400 text-center pb-1">{col.sublabel}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
