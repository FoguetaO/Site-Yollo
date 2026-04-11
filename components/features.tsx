"use client"

import { useState } from "react"

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Dashboard completo em tempo real",
    description: "Visualize todas as métricas do seu atendimento em um só lugar. Acompanhe conversas ativas, taxa de conversão, tempo médio de resposta e performance dos seus agentes de IA — tudo atualizado em tempo real.",
    keywords: ["automação de WhatsApp", "dashboard de atendimento", "métricas em tempo real"],
    visual: {
      type: "dashboard",
      stats: [
        { label: "Conversas hoje", value: "1.248", delta: "+12%" },
        { label: "Taxa de conversão", value: "34%", delta: "+5%" },
        { label: "Tempo de resposta", value: "8s", delta: "-60%" },
        { label: "Leads gerados", value: "312", delta: "+28%" },
      ],
    },
  },
  {
    id: "conversas",
    label: "Conversas",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Caixa de entrada unificada para WhatsApp",
    description: "Gerencie todas as conversas do WhatsApp em uma caixa de entrada centralizada. Sua equipe e a IA trabalham juntos: a IA atende primeiro e escala para um humano quando necessário.",
    keywords: ["caixa de entrada WhatsApp", "atendimento humano + IA", "gestão de conversas"],
    visual: {
      type: "chat",
      messages: [
        { from: "client", text: "Oi, qual o preço do serviço?" },
        { from: "ai", text: "Olá! Nosso plano começa em R$297/mês. Posso te enviar mais detalhes?" },
        { from: "client", text: "Sim, pode mandar!" },
        { from: "ai", text: "Perfeito! Vou te passar o link com todos os planos agora." },
      ],
    },
  },
  {
    id: "agente-ia",
    label: "Agente IA",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" /><path d="M3 21a9 9 0 0 1 18 0" />
      </svg>
    ),
    title: "Agente de IA treinado no seu negócio",
    description: "Configure um agente de IA personalizado com as informações, tom de voz e regras do seu negócio. Ele responde perguntas, qualifica leads, agenda reuniões e nunca deixa um cliente sem resposta.",
    keywords: ["chatbot com IA", "agente virtual WhatsApp", "atendimento automático 24 horas"],
    visual: {
      type: "agent",
      config: [
        { label: "Nome", value: "Assistente Virtual" },
        { label: "Tom", value: "Profissional e acolhedor" },
        { label: "Idioma", value: "Português" },
        { label: "Horário", value: "24h / 7 dias" },
      ],
    },
  },
  {
    id: "follow-up",
    label: "Follow-Up",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Follow-up automático para não perder vendas",
    description: "Configure sequências de follow-up automático para clientes que não responderam. A IA retoma a conversa no momento certo, com a mensagem certa — aumentando sua taxa de conversão sem esforço manual.",
    keywords: ["follow-up automático WhatsApp", "sequência de mensagens", "recuperar clientes"],
    visual: {
      type: "followup",
      steps: [
        { time: "Imediato", message: "Oi! Vi que você se interessou. Posso ajudar?" },
        { time: "1 dia depois", message: "Ainda pensando? Separei algo especial para você." },
        { time: "3 dias depois", message: "Última chance! Oferta válida só hoje." },
      ],
    },
  },
  {
    id: "ligacoes",
    label: "Ligações",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Gestão de ligações integrada ao WhatsApp",
    description: "Registre e gerencie ligações diretamente pela plataforma. Histórico completo de contatos, gravações e anotações — tudo vinculado ao perfil do cliente para um atendimento mais humanizado.",
    keywords: ["gestão de ligações", "CRM telefone", "histórico de atendimento"],
    visual: {
      type: "calls",
      calls: [
        { name: "Ana Souza", time: "14:32", duration: "4min 12s", status: "done" },
        { name: "Carlos Lima", time: "11:05", duration: "2min 48s", status: "done" },
        { name: "Marina Costa", time: "09:17", duration: "6min 33s", status: "missed" },
      ],
    },
  },
  {
    id: "disparos",
    label: "Disparos",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    title: "Disparo em massa de mensagens no WhatsApp",
    description: "Envie campanhas de mensagens para toda a sua base de contatos com poucos cliques. Personalize cada mensagem com o nome do cliente, segmente por perfil e acompanhe as taxas de abertura e resposta.",
    keywords: ["disparo em massa WhatsApp", "campanha de WhatsApp", "marketing pelo WhatsApp"],
    visual: {
      type: "blast",
      campaign: { name: "Promoção de Lançamento", sent: 2840, opened: 2491, replied: 634 },
    },
  },
  {
    id: "automacoes",
    label: "Automações",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Automações de WhatsApp sem código",
    description: "Crie fluxos de automação completos sem precisar programar. Defina gatilhos, condições e ações para que sua IA execute tarefas repetitivas — como boas-vindas, confirmações de pedido e pós-venda — de forma totalmente automática.",
    keywords: ["automação de WhatsApp", "fluxo de atendimento", "chatbot sem código"],
    visual: {
      type: "automation",
      flow: [
        { label: "Gatilho: nova mensagem", color: "#6C4FE8" },
        { label: "Condição: é lead novo?", color: "#9879F0" },
        { label: "Ação: enviar boas-vindas", color: "#22c55e" },
        { label: "Ação: adicionar ao CRM", color: "#22c55e" },
      ],
    },
  },
  {
    id: "crm",
    label: "CRM",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "CRM integrado ao WhatsApp",
    description: "Tenha um CRM completo dentro do WhatsApp. Acompanhe cada lead pelo funil de vendas, registre interações, adicione tags e nunca perca o histórico de um cliente — tudo sem sair da plataforma.",
    keywords: ["CRM WhatsApp", "gestão de leads", "funil de vendas WhatsApp"],
    visual: {
      type: "crm",
      pipeline: [
        { stage: "Novo lead", count: 48, color: "#6C4FE8" },
        { stage: "Em contato", count: 31, color: "#9879F0" },
        { stage: "Proposta enviada", count: 17, color: "#f59e0b" },
        { stage: "Fechado", count: 9, color: "#22c55e" },
      ],
    },
  },
  {
    id: "acoes",
    label: "Ações",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    title: "Ações rápidas para seu time de vendas",
    description: "Acelere o trabalho do time com ações pré-configuradas: enviar proposta, transferir atendimento, criar tarefa, adicionar nota. Tudo com um clique, diretamente na conversa do WhatsApp.",
    keywords: ["ações rápidas WhatsApp", "produtividade de vendas", "automação de tarefas"],
    visual: {
      type: "actions",
      actions: [
        { label: "Enviar proposta", icon: "send" },
        { label: "Agendar reunião", icon: "calendar" },
        { label: "Transferir para humano", icon: "user" },
        { label: "Adicionar ao funil", icon: "bar" },
        { label: "Criar tarefa", icon: "check" },
        { label: "Marcar como resolvido", icon: "done" },
      ],
    },
  },
  {
    id: "agenda",
    label: "Agenda",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Agendamento automático pelo WhatsApp",
    description: "Deixe a IA agendar reuniões e compromissos diretamente no chat. O cliente escolhe o horário disponível, confirma pelo WhatsApp e o evento é adicionado automaticamente na agenda — sem nenhuma intervenção manual.",
    keywords: ["agendamento automático WhatsApp", "agenda online", "marcar reunião pelo WhatsApp"],
    visual: {
      type: "calendar",
      slots: [
        { time: "09:00", label: "Ana Souza — Consultoria", taken: true },
        { time: "10:00", label: "Disponível", taken: false },
        { time: "11:00", label: "Carlos Lima — Demo", taken: true },
        { time: "14:00", label: "Disponível", taken: false },
        { time: "15:00", label: "Marina Costa — Reunião", taken: true },
      ],
    },
  },
  {
    id: "contatos",
    label: "Contatos",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Gestão de contatos e segmentação de leads",
    description: "Organize toda a sua base de contatos com tags, segmentos e histórico completo de interações. Importe contatos, crie listas segmentadas e dispare campanhas personalizadas para cada perfil de cliente.",
    keywords: ["gestão de contatos", "segmentação de leads", "base de contatos WhatsApp"],
    visual: {
      type: "contacts",
      contacts: [
        { name: "Ana Souza", tag: "Cliente VIP", status: "ativo" },
        { name: "Bruno Alves", tag: "Lead quente", status: "novo" },
        { name: "Carla Melo", tag: "Pós-venda", status: "ativo" },
        { name: "Diego Rocha", tag: "Inativo", status: "inativo" },
      ],
    },
  },
  {
    id: "anuncios",
    label: "Anúncios",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
    title: "Integração com anúncios do Facebook e Instagram",
    description: "Conecte seus anúncios do Meta diretamente ao WhatsApp. Quando um lead clica no anúncio, a IA já inicia a conversa automaticamente — capturando o contato e iniciando a qualificação em segundos.",
    keywords: ["anúncios WhatsApp", "Click to WhatsApp", "Meta Ads WhatsApp"],
    visual: {
      type: "ads",
      sources: [
        { name: "Facebook Ads", leads: 142, conv: "28%" },
        { name: "Instagram Ads", leads: 98, conv: "31%" },
        { name: "Google Ads", leads: 67, conv: "22%" },
      ],
    },
  },
]

function VisualPanel({ tab }: { tab: typeof tabs[0] }) {
  const v = tab.visual

  if (v.type === "dashboard") {
    return (
      <div className="grid grid-cols-2 gap-3">
        {v.stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-neutral-100 p-4 shadow-sm">
            <div className="text-xs text-neutral-500 mb-1">{s.label}</div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-neutral-900">{s.value}</span>
              <span className="text-xs font-semibold text-green-600 mb-0.5">{s.delta}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "chat") {
    return (
      <div className="bg-[#F0F2F5] rounded-xl p-4 flex flex-col gap-2">
        {v.messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "client" ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                m.from === "client"
                  ? "bg-white text-neutral-800 rounded-tl-sm shadow-sm"
                  : "text-white rounded-tr-sm"
              }`}
              style={m.from === "ai" ? { backgroundColor: "#6C4FE8" } : {}}
            >
              {m.from === "ai" && (
                <span className="block text-[10px] text-white/60 mb-0.5">Yollo IA</span>
              )}
              {m.text}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "agent") {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-violet-50 rounded-xl border border-violet-100">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#6C4FE8" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="8" r="5" /><path d="M3 21a9 9 0 0 1 18 0" /></svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-800">Agente Ativo</div>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /><span className="text-xs text-green-600">Online agora</span></div>
          </div>
        </div>
        {v.config.map((c) => (
          <div key={c.label} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
            <span className="text-sm text-neutral-500">{c.label}</span>
            <span className="text-sm font-medium text-neutral-800">{c.value}</span>
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "followup") {
    return (
      <div className="space-y-3">
        {v.steps.map((s, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#6C4FE8" }}>{i + 1}</div>
              {i < v.steps.length - 1 && <div className="w-px flex-1 bg-violet-100 mt-1 h-6" />}
            </div>
            <div className="bg-white rounded-xl border border-neutral-100 p-3 flex-1 shadow-sm">
              <div className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1">{s.time}</div>
              <div className="text-sm text-neutral-700">{s.message}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "calls") {
    return (
      <div className="space-y-2">
        {v.calls.map((c, i) => (
          <div key={i} className="flex items-center gap-3 bg-white rounded-xl border border-neutral-100 p-3 shadow-sm">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${c.status === "missed" ? "bg-red-100" : "bg-green-100"}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.status === "missed" ? "#ef4444" : "#22c55e"} strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-800">{c.name}</div>
              <div className="text-xs text-neutral-500">{c.time} · {c.duration}</div>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.status === "missed" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
              {c.status === "missed" ? "Perdida" : "Concluída"}
            </span>
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "blast") {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-xl border border-neutral-100 p-4 shadow-sm">
          <div className="text-xs text-neutral-500 mb-1">Campanha</div>
          <div className="text-sm font-semibold text-neutral-800">{v.campaign.name}</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Enviadas", value: v.campaign.sent, color: "#6C4FE8" },
            { label: "Abertas", value: v.campaign.opened, color: "#9879F0" },
            { label: "Respondidas", value: v.campaign.replied, color: "#22c55e" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-neutral-100 p-3 shadow-sm text-center">
              <div className="text-xl font-bold" style={{ color: s.color }}>{s.value.toLocaleString("pt-BR")}</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-neutral-50 rounded-xl p-3">
          <div className="flex justify-between text-xs text-neutral-500 mb-1">
            <span>Taxa de abertura</span>
            <span className="font-semibold text-neutral-700">{Math.round((v.campaign.opened / v.campaign.sent) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${Math.round((v.campaign.opened / v.campaign.sent) * 100)}%`, backgroundColor: "#6C4FE8" }} />
          </div>
        </div>
      </div>
    )
  }

  if (v.type === "automation") {
    return (
      <div className="space-y-2">
        {v.flow.map((step, i) => (
          <div key={i} className="flex gap-3 items-center">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: step.color }} />
              {i < v.flow.length - 1 && <div className="w-px h-6 bg-neutral-200" />}
            </div>
            <div className="flex-1 bg-white rounded-lg border border-neutral-100 px-3 py-2.5 text-sm text-neutral-800 shadow-sm">
              {step.label}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "crm") {
    return (
      <div className="flex gap-2 h-40 items-end">
        {v.pipeline.map((p) => (
          <div key={p.stage} className="flex-1 flex flex-col items-center gap-2">
            <span className="text-sm font-bold text-neutral-800">{p.count}</span>
            <div
              className="w-full rounded-t-lg"
              style={{
                height: `${(p.count / 48) * 100}%`,
                backgroundColor: p.color,
                opacity: 0.85,
              }}
            />
            <span className="text-[10px] text-neutral-500 text-center leading-tight">{p.stage}</span>
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "actions") {
    return (
      <div className="grid grid-cols-2 gap-2">
        {v.actions.map((a) => (
          <button key={a.label} className="bg-white border border-neutral-100 rounded-xl px-3 py-3 text-sm font-medium text-neutral-700 hover:border-violet-200 hover:bg-violet-50 transition-all text-left shadow-sm">
            {a.label}
          </button>
        ))}
      </div>
    )
  }

  if (v.type === "calendar") {
    return (
      <div className="space-y-2">
        {v.slots.map((s, i) => (
          <div key={i} className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${s.taken ? "bg-violet-50 border-violet-200" : "bg-white border-dashed border-neutral-200"}`}>
            <span className="text-xs font-bold text-neutral-500 w-10 flex-shrink-0">{s.time}</span>
            <span className={`text-sm flex-1 ${s.taken ? "font-medium text-violet-900" : "text-neutral-400"}`}>{s.label}</span>
            {s.taken && <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#6C4FE8" }} />}
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "contacts") {
    return (
      <div className="space-y-2">
        {v.contacts.map((c, i) => (
          <div key={i} className="flex items-center gap-3 bg-white rounded-xl border border-neutral-100 p-3 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-sm font-bold text-violet-700 flex-shrink-0">
              {c.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-800">{c.name}</div>
              <div className="text-xs text-neutral-500">{c.tag}</div>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              c.status === "ativo" ? "bg-green-50 text-green-600" :
              c.status === "novo" ? "bg-violet-50 text-violet-600" :
              "bg-neutral-100 text-neutral-500"
            }`}>
              {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
    )
  }

  if (v.type === "ads") {
    return (
      <div className="space-y-3">
        {v.sources.map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-neutral-100 p-4 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-neutral-800">{s.name}</div>
              <div className="text-xs text-neutral-500 mt-0.5">{s.leads} leads gerados</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold" style={{ color: "#6C4FE8" }}>{s.conv}</div>
              <div className="text-[10px] text-neutral-400">conversao</div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default function Features() {
  const [active, setActive] = useState("dashboard")
  const current = tabs.find((t) => t.id === active)!

  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 hidden md:block">
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight text-balance">
            Tudo que você precisa para{" "}
            <span className="italic gradient-brand">automatizar seu atendimento</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed">
            Uma plataforma completa com IA, CRM, automações, disparos e muito mais — integrada ao WhatsApp.
          </p>
        </div>

        {/* Tab bar */}
        <div className="overflow-x-auto pb-2 mb-10">
          <div className="flex gap-1 bg-neutral-100 rounded-2xl p-1.5 min-w-max mx-auto w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  active === tab.id
                    ? "bg-neutral-900 text-white shadow-md"
                    : "text-neutral-500 hover:text-neutral-800 hover:bg-white/60"
                }`}
              >
                <span className={active === tab.id ? "text-white" : "text-neutral-400"}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4 leading-snug">
              {current.title}
            </h3>
            <p className="text-base text-neutral-500 leading-relaxed mb-6">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {current.keywords.map((kw) => (
                <span key={kw} className="text-xs font-medium px-3 py-1 rounded-full border" style={{ borderColor: "#6C4FE830", backgroundColor: "#6C4FE810", color: "#4F39B0" }}>
                  {kw}
                </span>
              ))}
            </div>
            <a
              href="#contratar"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: "#6C4FE8", boxShadow: "0 4px 14px #6C4FE855" }}
            >
              Quero essa funcionalidade
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Right: visual */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6 shadow-sm min-h-[280px] flex flex-col justify-center">
            <VisualPanel tab={current} />
          </div>
        </div>
      </div>
    </section>
  )
}
