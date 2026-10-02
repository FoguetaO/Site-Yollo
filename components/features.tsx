import { Send, Megaphone, BarChart3, Clock, Zap, CalendarDays, UserPlus, CheckSquare, Plus, Check } from "lucide-react"

const BRAND = "#6C4FE8"

function IconRing({ children, size = "size-12" }: { children: React.ReactNode; size?: string }) {
  return (
    <div
      className={`relative flex aspect-square ${size} rounded-full border border-neutral-200 before:absolute before:-inset-2 before:rounded-full before:border before:border-neutral-100`}
    >
      {children}
    </div>
  )
}

function CardShell({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`relative col-span-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  )
}

const followUps = [
  { time: "Imediato", message: "Oi! Posso te ajudar?", side: "left" },
  { time: "1 dia depois", message: "Separei algo para você", side: "right" },
  { time: "3 dias depois", message: "Oferta válida só hoje", side: "left" },
]

const funnel = [
  { stage: "Novo lead", count: 48, pct: 100, color: BRAND },
  { stage: "Em contato", count: 31, pct: 65, color: "#9879F0" },
  { stage: "Proposta enviada", count: 17, pct: 35, color: "#f59e0b" },
  { stage: "Fechado", count: 9, pct: 19, color: "#22c55e" },
]

const actions = [
  { label: "Enviar proposta", icon: Send },
  { label: "Agendar reunião", icon: CalendarDays },
  { label: "Transferir lead", icon: UserPlus },
  { label: "Criar tarefa", icon: CheckSquare },
  { label: "Adicionar ao funil", icon: Plus },
  { label: "Marcar resolvido", icon: Check },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="relative overflow-hidden bg-neutral-50 pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:max-w-5xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
            style={{ backgroundColor: "#6C4FE812", borderColor: "#6C4FE830", color: "#4F39B0" }}
          >
            Plataforma completa
          </div>
          <h2 className="text-balance text-xl font-semibold text-neutral-900 sm:text-2xl md:text-5xl">
            Tudo que seu time precisa <span className="gradient-brand">em um só lugar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-neutral-500 md:text-lg">
            Da captação ao fechamento — automatize atendimento, dispare campanhas, gerencie leads e escale suas vendas
            pelo WhatsApp com Inteligência Artificial.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-3">
          {/* Agente IA */}
          <CardShell className="flex flex-col items-center justify-center text-center lg:col-span-2">
            <div className="relative flex h-24 w-56 items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 -rotate-6 rounded-[50%] border-2"
                style={{ borderColor: "#6C4FE833" }}
              />
              <span className="text-5xl font-semibold" style={{ color: BRAND }}>
                24/7
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-neutral-900">Agente de IA</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Responde clientes, qualifica leads e agenda reuniões sem pausa.
            </p>
          </CardShell>

          {/* Disparos */}
          <CardShell className="sm:col-span-3 lg:col-span-2">
            <IconRing size="size-32 mx-auto">
              <Send className="m-auto size-10" strokeWidth={1.25} style={{ color: BRAND }} />
            </IconRing>
            <div className="relative z-10 mt-6 space-y-2 text-center">
              <h3 className="text-lg font-medium text-neutral-900">Disparo em massa</h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                Campanhas personalizadas para toda a base, segmentadas por tag ou etapa do funil.
              </p>
            </div>
          </CardShell>

          {/* Anúncios */}
          <CardShell className="sm:col-span-3 lg:col-span-2">
            <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                  <Megaphone className="size-3.5" style={{ color: BRAND }} />
                  Meta Ads
                </span>
                <span className="font-semibold" style={{ color: BRAND }}>
                  240 leads
                </span>
              </div>
              <svg className="mt-3 w-full" viewBox="0 0 300 90" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="ads-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={BRAND} stopOpacity="0.25" />
                    <stop offset="1" stopColor={BRAND} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 80 L30 70 L60 74 L90 55 L120 60 L150 40 L180 48 L210 28 L240 34 L270 14 L300 20 L300 90 L0 90 Z"
                  fill="url(#ads-fill)"
                />
                <path
                  d="M0 80 L30 70 L60 74 L90 55 L120 60 L150 40 L180 48 L210 28 L240 34 L270 14 L300 20"
                  stroke={BRAND}
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="relative z-10 mt-8 space-y-2 text-center">
              <h3 className="text-lg font-medium text-neutral-900">Anúncios no WhatsApp</h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                O lead clica no anúncio e a IA já inicia a conversa, qualificando em segundos.
              </p>
            </div>
          </CardShell>

          {/* CRM */}
          <CardShell className="lg:col-span-3">
            <div className="grid h-full sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <IconRing>
                  <BarChart3 className="m-auto size-5" strokeWidth={1.5} style={{ color: BRAND }} />
                </IconRing>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900">CRM integrado</h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    Acompanhe cada lead no funil, com tags e histórico completo, sem trocar de ferramenta.
                  </p>
                </div>
              </div>
              <div className="relative -mb-6 -mr-6 mt-6 rounded-tl-xl border-l border-t border-neutral-200 p-6 pt-8 sm:ml-6">
                <div className="absolute left-3 top-2.5 flex gap-1" aria-hidden="true">
                  <span className="block size-2 rounded-full border border-neutral-200" />
                  <span className="block size-2 rounded-full border border-neutral-200" />
                  <span className="block size-2 rounded-full border border-neutral-200" />
                </div>
                <div className="space-y-3">
                  {funnel.map((p) => (
                    <div key={p.stage}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-neutral-600">{p.stage}</span>
                        <span className="font-semibold text-neutral-800">{p.count}</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
                        <div className="h-full rounded-full" style={{ width: `${p.pct}%`, backgroundColor: p.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardShell>

          {/* Follow-up */}
          <CardShell className="lg:col-span-3">
            <div className="grid h-full sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <IconRing>
                  <Clock className="m-auto size-5" strokeWidth={1.5} style={{ color: BRAND }} />
                </IconRing>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900">Follow-up automático</h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    Sequências que retomam conversas no momento certo e recuperam vendas perdidas.
                  </p>
                </div>
              </div>
              <div className="relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px before:bg-neutral-200 sm:-my-6">
                <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                  {followUps.map((f, i) =>
                    f.side === "left" ? (
                      <div key={f.time} className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                        <span className="block h-fit rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs shadow-sm">
                          <span className="block text-[10px] font-semibold" style={{ color: BRAND }}>
                            {f.time}
                          </span>
                          <span className="text-neutral-700">{f.message}</span>
                        </span>
                        <span
                          className="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ring-4 ring-white"
                          style={{ backgroundColor: BRAND }}
                        >
                          {i + 1}
                        </span>
                      </div>
                    ) : (
                      <div key={f.time} className="relative ml-[calc(50%-0.875rem)] flex items-center gap-2">
                        <span
                          className="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ring-4 ring-white"
                          style={{ backgroundColor: BRAND }}
                        >
                          {i + 1}
                        </span>
                        <span className="block h-fit rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs shadow-sm">
                          <span className="block text-[10px] font-semibold" style={{ color: BRAND }}>
                            {f.time}
                          </span>
                          <span className="text-neutral-700">{f.message}</span>
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </CardShell>

          {/* Ações rápidas */}
          <CardShell>
            <div className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
              <div className="flex items-center gap-5">
                <IconRing>
                  <Zap className="m-auto size-5" strokeWidth={1.5} style={{ color: BRAND }} />
                </IconRing>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-neutral-900">Ações rápidas</h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    Proposta, tarefa ou transferência com um clique, direto na conversa.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {actions.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-white px-3 py-2.5 text-xs font-medium text-neutral-700 shadow-sm"
                  >
                    <Icon className="size-3.5 shrink-0" style={{ color: BRAND }} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </CardShell>
        </div>
      </div>
    </section>
  )
}
