"use client"

import { useState } from "react"

const features = [
  {
    id: "agente-ia",
    label: "Agente IA",
    badge: "Inteligência Artificial",
    title: "Agente de IA treinado no seu negócio",
    description:
      "Configure um agente de IA que responde clientes, qualifica leads e agenda reuniões — 24h por dia, 7 dias por semana. Sem deixar nenhum cliente sem resposta.",
    keywords: ["chatbot com IA", "agente virtual WhatsApp", "atendimento automático 24 horas"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" /><path d="M3 21a9 9 0 0 1 18 0" />
      </svg>
    ),
    visual: (
      <div className="bg-[#F0F2F5] rounded-xl p-4 flex flex-col gap-2.5">
        <div className="flex justify-start">
          <div className="bg-white text-neutral-800 rounded-2xl rounded-tl-sm px-3 py-2 text-sm shadow-sm max-w-[80%]">
            <span className="block text-[10px] text-violet-500 font-semibold mb-0.5">Yollo IA</span>
            Oi! Como posso te ajudar hoje?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-white rounded-2xl rounded-tr-sm px-3 py-2 text-sm max-w-[80%]" style={{ backgroundColor: "#6C4FE8" }}>
            Qual o valor do plano?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white text-neutral-800 rounded-2xl rounded-tl-sm px-3 py-2 text-sm shadow-sm max-w-[80%]">
            <span className="block text-[10px] text-violet-500 font-semibold mb-0.5">Yollo IA</span>
            Nosso plano começa em R$297/mês. Posso agendar uma demo gratuita para você?
          </div>
        </div>
        <div className="flex items-center gap-1 ml-1 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    ),
  },
  {
    id: "disparos",
    label: "Disparos",
    badge: "Campanhas",
    title: "Disparo em massa de mensagens no WhatsApp",
    description:
      "Envie campanhas personalizadas para toda a sua base com poucos cliques. Segmente por tag ou funil, personalize com o nome do cliente e acompanhe respostas em tempo real.",
    keywords: ["disparo em massa WhatsApp", "campanha de WhatsApp", "marketing pelo WhatsApp"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    visual: (
      <div className="space-y-3">
        <div className="bg-white rounded-xl border border-neutral-100 p-3 shadow-sm">
          <div className="text-[10px] text-neutral-400 mb-0.5 uppercase tracking-widest">Campanha ativa</div>
          <div className="text-sm font-semibold text-neutral-800">Promocao de Lancamento</div>
        </div>
        {/* Segmentacao por tag ou funil */}
        <div className="bg-neutral-50 rounded-xl p-3 space-y-2">
          <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Segmentacao</div>
          <div className="flex flex-wrap gap-1.5">
            {["Lead quente", "Interessado", "Pos-venda", "Inativo"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full border"
                style={{ backgroundColor: "#6C4FE810", borderColor: "#6C4FE830", color: "#6C4FE8" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6C4FE8" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <span className="text-[11px] text-neutral-500">Ou por etapa do funil</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Enviadas", value: "2.840", color: "#6C4FE8" },
            { label: "Respondidas", value: "634", color: "#22c55e" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-neutral-100 p-3 shadow-sm text-center">
              <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[10px] text-neutral-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "follow-up",
    label: "Follow-Up",
    badge: "Automação",
    title: "Follow-up automático para não perder vendas",
    description:
      "Configure sequências automáticas que retomam conversas no momento certo. A IA reativa leads frios, envia lembretes e fecha vendas que você perderia por falta de acompanhamento.",
    keywords: ["follow-up automático WhatsApp", "sequência de mensagens", "recuperar clientes"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    visual: (
      <div className="space-y-2.5">
        {[
          { time: "Imediato", message: "Oi! Vi que você se interessou. Posso te ajudar?" },
          { time: "1 dia depois", message: "Ainda pensando? Separei algo especial para você." },
          { time: "3 dias depois", message: "Última chance! Oferta válida só hoje." },
        ].map((s, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: "#6C4FE8" }}
              >
                {i + 1}
              </div>
              {i < 2 && <div className="w-px h-4 bg-violet-100 mt-1" />}
            </div>
            <div className="bg-white rounded-xl border border-neutral-100 p-3 flex-1 shadow-sm">
              <div className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1">{s.time}</div>
              <div className="text-xs text-neutral-700">{s.message}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "crm",
    label: "CRM",
    badge: "Gestao de Leads",
    title: "CRM integrado ao WhatsApp",
    description:
      "Acompanhe cada lead no funil de vendas, registre interações, adicione tags e nunca perca o histórico de um cliente — tudo dentro do WhatsApp, sem trocar de ferramenta.",
    keywords: ["CRM WhatsApp", "gestão de leads", "funil de vendas WhatsApp"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    visual: (
      <div className="space-y-2">
        {[
          { stage: "Novo lead", count: 48, pct: 100, color: "#6C4FE8" },
          { stage: "Em contato", count: 31, pct: 65, color: "#9879F0" },
          { stage: "Proposta enviada", count: 17, pct: 35, color: "#f59e0b" },
          { stage: "Fechado", count: 9, pct: 19, color: "#22c55e" },
        ].map((p) => (
          <div key={p.stage}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-neutral-600">{p.stage}</span>
              <span className="font-semibold text-neutral-800">{p.count}</span>
            </div>
            <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${p.pct}%`, backgroundColor: p.color }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "acoes",
    label: "Acoes",
    badge: "Produtividade",
    title: "Acoes rapidas para o seu time de vendas",
    description:
      "Envie proposta, transfira atendimento, crie tarefa ou adicione nota com um clique — diretamente na conversa do WhatsApp. Seu time vende mais gastando menos tempo em operacional.",
    keywords: ["acoes rapidas WhatsApp", "produtividade de vendas", "automacao de tarefas"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    visual: (
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Enviar proposta", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg> },
          { label: "Agendar reuniao", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
          { label: "Transferir lead", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg> },
          { label: "Criar tarefa", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg> },
          { label: "Adicionar ao funil", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> },
          { label: "Marcar resolvido", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg> },
        ].map((a) => (
          <button
            key={a.label}
            className="flex items-center gap-2 bg-white border border-neutral-100 rounded-lg px-3 py-2.5 text-xs font-medium text-neutral-700 shadow-sm hover:border-violet-200 hover:bg-violet-50 transition-all text-left"
          >
            <span style={{ color: "#6C4FE8" }}>{a.icon}</span>
            {a.label}
          </button>
        ))}
      </div>
    ),
  },
  {
    id: "anuncios",
    label: "Anuncios",
    badge: "Meta Ads",
    title: "Integração com anuncios do Facebook e Instagram",
    description:
      "Conecte seus anuncios do Meta ao WhatsApp. Quando o lead clica no anuncio, a IA ja inicia a conversa automaticamente — capturando o contato e qualificando em segundos.",
    keywords: ["anuncios WhatsApp", "Click to WhatsApp", "Meta Ads WhatsApp"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
    visual: (
      <div className="space-y-2.5">
        {[
          { name: "Facebook Ads", leads: 142, conv: "28%", color: "#1877F2" },
          { name: "Instagram Ads", leads: 98, conv: "31%", color: "#E1306C" },
          { name: "Google Ads", leads: 67, conv: "22%", color: "#FBBC04" },
        ].map((s) => (
          <div key={s.name} className="flex items-center gap-3 bg-white rounded-xl border border-neutral-100 p-3 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-neutral-800">{s.name}</div>
              <div className="text-xs text-neutral-400">{s.leads} leads captados</div>
            </div>
            <div className="text-sm font-bold" style={{ color: "#6C4FE8" }}>{s.conv}</div>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-neutral-500">IA iniciando conversa automaticamente</span>
        </div>
      </div>
    ),
  },
]

export default function Features() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section
      id="funcionalidades"
      className="pt-12 pb-24 md:pt-20 md:pb-32 bg-neutral-50 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border mb-6"
            style={{ backgroundColor: "#6C4FE812", borderColor: "#6C4FE830", color: "#4F39B0" }}
          >
            Plataforma completa
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 text-balance">
            Tudo que seu time precisa{" "}
            <span className="italic gradient-brand">em um so lugar</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto text-pretty">
            Da captacao ao fechamento — automatize atendimento, dispare campanhas, gerencie leads e escale suas vendas pelo WhatsApp com Inteligencia Artificial.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: "#6C4FE8" }}
                  >
                    {feature.icon}
                  </div>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                    style={{ backgroundColor: "#6C4FE808", borderColor: "#6C4FE825", color: "#6C4FE8" }}
                  >
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 text-balance leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-100 mx-6" />

              {/* Visual panel */}
              <div className="p-6 pt-5 flex-1">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
