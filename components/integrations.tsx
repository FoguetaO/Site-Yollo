type Integration = {
  name: string
  description: string
  logo?: string
  monogram?: { label: string; bg: string; fg?: string }
}

const leftIntegrations: Integration[] = [
  { name: "WhatsApp", description: "Conversas com contexto", logo: "/integrations/whatsapp.svg" },
  { name: "Instagram", description: "Direct e comentários", logo: "/integrations/instagram.svg" },
  { name: "Google Agenda", description: "Agendamentos automáticos", logo: "/integrations/google-calendar.svg" },
  { name: "Typeform", description: "Respostas viram leads", logo: "/integrations/typeform.png" },
  { name: "Respondi", description: "Formulários integrados", logo: "/integrations/respondi.png" },
]

const rightIntegrations: Integration[] = [
  { name: "Pipedrive", description: "Negócios no funil", logo: "/integrations/pipedrive.svg" },
  { name: "RD Station CRM", description: "Contatos e oportunidades", logo: "/integrations/rd-station.png" },
  { name: "HubSpot", description: "Histórico e tarefas", logo: "/integrations/hubspot.svg" },
  { name: "ActiveCampaign", description: "Automação de e-mail", logo: "/integrations/activecampaign.png" },
  { name: "Agendor", description: "Vendas e follow-ups", logo: "/integrations/agendor.png" },
]

const CARD_HEIGHT = 88
const CARD_GAP = 16
const COLUMN_HEIGHT = CARD_HEIGHT * 5 + CARD_GAP * 4
const CONNECTOR_WIDTH = 112
const CENTER_Y = COLUMN_HEIGHT / 2

function IntegrationLogo({ item }: { item: Integration }) {
  if (item.logo) {
    return <img src={item.logo} alt="" className="h-9 w-9 rounded-lg object-contain" loading="lazy" />
  }
  const m = item.monogram!
  return (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
      style={{ backgroundColor: m.bg, color: m.fg ?? "#fff" }}
    >
      {m.label}
    </span>
  )
}

function IntegrationCard({ item }: { item: Integration }) {
  return (
    <li
      className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-5 shadow-sm transition-colors hover:border-[#6C4FE8]/40"
      style={{ height: CARD_HEIGHT }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center">
        <IntegrationLogo item={item} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-base font-semibold text-neutral-900">{item.name}</p>
        <p className="truncate text-sm text-neutral-500">{item.description}</p>
      </div>
    </li>
  )
}

function Connectors({ side }: { side: "left" | "right" }) {
  const paths = Array.from({ length: 5 }, (_, i) => {
    const y = i * (CARD_HEIGHT + CARD_GAP) + CARD_HEIGHT / 2
    const w = CONNECTOR_WIDTH
    return side === "left"
      ? `M0 ${y} C${w * 0.6} ${y} ${w * 0.4} ${CENTER_Y} ${w} ${CENTER_Y}`
      : `M${w} ${y} C${w * 0.4} ${y} ${w * 0.6} ${CENTER_Y} 0 ${CENTER_Y}`
  })

  return (
    <svg
      aria-hidden="true"
      width={CONNECTOR_WIDTH}
      height={COLUMN_HEIGHT}
      viewBox={`0 0 ${CONNECTOR_WIDTH} ${COLUMN_HEIGHT}`}
      className="hidden shrink-0 lg:block"
      fill="none"
    >
      {paths.map((d) => (
        <g key={d}>
          <path d={d} stroke="#E5E5E5" strokeWidth="1.5" />
          <path
            d={d}
            stroke="#6C4FE8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="8 40"
            className="integration-flow motion-reduce:[animation:none]"
          />
        </g>
      ))}
    </svg>
  )
}

export default function Integrations() {
  return (
    <section id="integracoes" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#6C4FE8]">Integrações</span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl md:text-5xl text-balance">
            Conecta com as ferramentas que você já usa
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg text-pretty">
            A Yollo IA conversa com seus canais, agenda e CRM para que cada lead chegue no lugar certo, sem trabalho manual.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-0">
          <div className="order-1 flex flex-col items-center gap-3 lg:order-none lg:hidden">
            <CenterHub />
          </div>

          <ul className="grid w-full gap-4 sm:grid-cols-2 lg:flex lg:w-[340px] lg:flex-col" aria-label="Canais e ferramentas">
            {leftIntegrations.map((item) => (
              <IntegrationCard key={item.name} item={item} />
            ))}
          </ul>

          <Connectors side="left" />

          <div className="hidden flex-col items-center gap-3 lg:flex">
            <CenterHub />
          </div>

          <Connectors side="right" />

          <ul className="grid w-full gap-4 sm:grid-cols-2 lg:flex lg:w-[340px] lg:flex-col" aria-label="CRMs e automações">
            {rightIntegrations.map((item) => (
              <IntegrationCard key={item.name} item={item} />
            ))}
          </ul>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-[#6C4FE8]/20 bg-white px-6 py-4 text-center shadow-sm sm:flex-row sm:gap-4 sm:text-left">
            <span className="text-3xl font-bold text-[#6C4FE8] md:text-4xl">+50</span>
            <span className="hidden h-10 w-px bg-neutral-200 sm:block" aria-hidden="true" />
            <p className="text-base text-neutral-700 md:text-lg">
              <span className="font-semibold text-neutral-900">Mais de 50 integrações diretas</span> na Yollo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CenterHub() {
  return (
    <>
      <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-neutral-200 bg-white shadow-lg shadow-[#6C4FE8]/10">
        <img src="/logo-yollo.png" alt="Yollo IA" className="h-10 w-auto" />
      </div>
      <p className="text-xs text-neutral-500">Tudo flui por aqui.</p>
    </>
  )
}
