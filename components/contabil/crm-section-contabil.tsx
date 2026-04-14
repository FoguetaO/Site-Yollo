"use client"

import { useEffect, useRef, useState } from "react"

const CRM_COLUMNS = [
  {
    id: "novo",
    label: "Novo Lead",
    badge: "bg-[#EEF2FF] text-[#4338CA]",
    bar: "bg-[#6C4FE8]",
  },
  {
    id: "qualificado",
    label: "Qualificado",
    badge: "bg-[#ECFDF5] text-[#065F46]",
    bar: "bg-emerald-500",
  },
  {
    id: "reuniao",
    label: "Reunião Marcada",
    badge: "bg-[#FFF7ED] text-[#92400E]",
    bar: "bg-orange-400",
  },
  {
    id: "fechado",
    label: "Fechado",
    badge: "bg-[#F0FDF4] text-[#14532D]",
    bar: "bg-green-500",
  },
]

const ALL_LEADS = [
  { id: 1, name: "Rafael M.", service: "Abertura de CNPJ", origin: "Meta Ads", column: "novo" },
  { id: 2, name: "Fernanda S.", service: "Migração Simples Nacional", origin: "Google Ads", column: "novo" },
  { id: 3, name: "Carlos P.", service: "Planejamento Tributário", origin: "Meta Ads", column: "qualificado" },
  { id: 4, name: "Ana C.", service: "MEI → Microempresa", origin: "Indicação", column: "qualificado" },
  { id: 5, name: "Bruno L.", service: "Abertura LTDA", origin: "Meta Ads", column: "reuniao" },
  { id: 6, name: "Mariana T.", service: "Regularização MEI", origin: "Google Ads", column: "reuniao" },
  { id: 7, name: "Gustavo R.", service: "Consultoria Tributária", origin: "Meta Ads", column: "fechado" },
  { id: 8, name: "Julia N.", service: "Abertura de CNPJ", origin: "Orgânico", column: "fechado" },
]

const MOVE_SEQUENCE: { cardId: number; toColumn: string }[] = [
  { cardId: 1, toColumn: "qualificado" },
  { cardId: 2, toColumn: "qualificado" },
  { cardId: 3, toColumn: "reuniao" },
  { cardId: 4, toColumn: "reuniao" },
  { cardId: 5, toColumn: "fechado" },
  { cardId: 6, toColumn: "fechado" },
  // reset cycle
  { cardId: 7, toColumn: "reuniao" },
  { cardId: 8, toColumn: "reuniao" },
  { cardId: 7, toColumn: "qualificado" },
  { cardId: 8, toColumn: "qualificado" },
  { cardId: 7, toColumn: "novo" },
  { cardId: 8, toColumn: "novo" },
]

const COLUMN_BAR_COLORS: Record<string, string> = {
  novo: "#6C4FE8",
  qualificado: "#10B981",
  reuniao: "#F97316",
  fechado: "#22C55E",
}

const COLUMN_DOT_COLORS: Record<string, string> = {
  novo: "bg-[#6C4FE8]",
  qualificado: "bg-emerald-500",
  reuniao: "bg-orange-400",
  fechado: "bg-green-500",
}

function LeadCard({
  card,
  colId,
  isMoving,
}: {
  card: (typeof ALL_LEADS)[0]
  colId: string
  isMoving: boolean
}) {
  return (
    <div
      className="rounded-xl border bg-white px-3 py-2.5 shadow-sm flex flex-col gap-1"
      style={{
        borderColor: isMoving ? COLUMN_BAR_COLORS[colId] : "#E5E7EB",
        boxShadow: isMoving
          ? `0 0 0 2px ${COLUMN_BAR_COLORS[colId]}33, 0 4px 12px ${COLUMN_BAR_COLORS[colId]}22`
          : undefined,
        transition: "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
        transform: isMoving ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
      }}
    >
      <div className="flex items-center gap-1.5">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: COLUMN_BAR_COLORS[colId] }}
        />
        <span className="text-[11px] font-semibold text-neutral-800 truncate">{card.name}</span>
      </div>
      <span className="text-[10px] text-neutral-500 leading-tight">{card.service}</span>
      <span className="text-[9px] text-neutral-400 mt-0.5">{card.origin}</span>
    </div>
  )
}

function CRMBoard() {
  const [cards, setCards] = useState(ALL_LEADS)
  const [movingCardId, setMovingCardId] = useState<number | null>(null)
  const stepRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const step = MOVE_SEQUENCE[stepRef.current % MOVE_SEQUENCE.length]
      setMovingCardId(step.cardId)

      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) => (c.id === step.cardId ? { ...c, column: step.toColumn } : c))
        )
        setTimeout(() => setMovingCardId(null), 300)
      }, 350)

      stepRef.current += 1
    }, 2200)

    return () => clearInterval(interval)
  }, [])

  const countByCol = (colId: string) => cards.filter((c) => c.column === colId).length

  return (
    <div className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden shadow-xl">
      {/* Browser chrome */}
      <div className="h-9 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <div className="flex-1 mx-4">
          <div className="bg-white rounded-md h-5 max-w-[200px] mx-auto flex items-center justify-center">
            <span className="text-[9px] text-neutral-400 font-medium">crm.yolloia.com.br</span>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="px-5 py-3 bg-white border-b border-neutral-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-700">Pipeline de Leads</span>
        <div className="flex items-center gap-2">
          {CRM_COLUMNS.map((col) => (
            <span key={col.id} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${col.badge}`}>
              {countByCol(col.id)} {col.label}
            </span>
          ))}
        </div>
      </div>

      {/* Kanban columns */}
      <div className="p-4 grid grid-cols-4 gap-3 min-h-[380px]">
        {CRM_COLUMNS.map((col) => {
          const colCards = cards.filter((c) => c.column === col.id)
          return (
            <div key={col.id} className="flex flex-col gap-2">
              {/* Column header */}
              <div className="flex items-center gap-1.5 mb-1">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLUMN_BAR_COLORS[col.id] }}
                />
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider leading-none">
                  {col.label}
                </span>
              </div>

              {/* Drop zone */}
              <div className="flex flex-col gap-2 flex-1 min-h-[300px] rounded-xl bg-white border border-dashed border-neutral-200 p-2">
                {colCards.map((card) => (
                  <LeadCard
                    key={card.id}
                    card={card}
                    colId={col.id}
                    isMoving={movingCardId === card.id}
                  />
                ))}
                {colCards.length === 0 && (
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-[9px] text-neutral-300">Sem leads</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom bar — IA badge */}
      <div className="px-5 py-2.5 bg-white border-t border-neutral-100 flex items-center gap-2">
        <span
          className="flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "#EEF2FF", color: "#6C4FE8" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C4FE8] animate-pulse" />
          Yollo IA movendo leads automaticamente
        </span>
        <span className="text-[9px] text-neutral-400">Nenhuma ação manual necessária</span>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    title: "Movimentação automática",
    desc: "Conforme o lead avança na conversa, o card é movido de coluna sem nenhum clique manual.",
  },
  {
    title: "Pipeline em tempo real",
    desc: "Visualize onde cada lead está no processo: novo, qualificado, com reunião marcada ou fechado.",
  },
  {
    title: "Zero trabalho operacional",
    desc: "A IA cuida de toda a triagem e atualização. O contador só entra em cena para fechar o contrato.",
  },
]

export default function CRMSectionContabil() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14 md:mb-16 max-w-3xl">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: "#6C4FE820", color: "#9B87F5" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B87F5] animate-pulse" />
            CRM com IA
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
            O pipeline se move{" "}
            <span style={{ color: "#9B87F5" }} className="italic">sozinho.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-400 mt-5 leading-relaxed max-w-xl">
            Cada interação do lead com a IA atualiza o CRM em tempo real — de novo lead até fechado, sem
            que ninguém precise tocar no sistema.
          </p>
        </div>

        {/* Content: features left + board right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

          {/* Left: feature list */}
          <div className="flex flex-col gap-8 lg:pt-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex flex-col gap-2 border-l-2 pl-5" style={{ borderColor: "#6C4FE8" }}>
                <span className="text-base font-semibold text-white">{f.title}</span>
                <span className="text-sm text-neutral-400 leading-relaxed">{f.desc}</span>
              </div>
            ))}

            <div className="mt-4">
              <a
                href="#contratar"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: "#6C4FE8" }}
              >
                Ver o CRM em ação
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: animated CRM board */}
          <div className="w-full">
            <CRMBoard />
          </div>
        </div>
      </div>
    </section>
  )
}
