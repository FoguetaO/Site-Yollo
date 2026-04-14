"use client"

import { useState } from "react"

const NAV = [
  {
    label: "Introdução",
    href: "#introducao",
    items: [
      { label: "Base URL", href: "#base-url" },
      { label: "Autenticação", href: "#autenticacao" },
      { label: "Rate Limits", href: "#rate-limits" },
      { label: "Respostas", href: "#respostas" },
      { label: "Códigos de Erro", href: "#erros" },
      { label: "Segurança", href: "#seguranca" },
    ],
  },
  {
    label: "Relatórios",
    href: "#relatorios",
    items: [
      { label: "CRM", href: "#relatorio-crm" },
      { label: "Ações", href: "#relatorio-acoes" },
      { label: "Follow-ups", href: "#relatorio-followups" },
      { label: "Notificações", href: "#relatorio-notificacoes" },
      { label: "Facebook CAPI", href: "#relatorio-facebook" },
    ],
  },
  {
    label: "Chat",
    href: "#chat",
    items: [
      { label: "Conversas", href: "#chat-conversas" },
      { label: "Mensagens", href: "#chat-mensagens" },
      { label: "Envio de Mensagens", href: "#chat-envio" },
    ],
  },
  {
    label: "Agente",
    href: "#agente",
    items: [
      { label: "Agentes", href: "#agente-lista" },
      { label: "Regras", href: "#agente-regras" },
      { label: "Etapas", href: "#agente-etapas" },
      { label: "FAQ", href: "#agente-faq" },
      { label: "Funcionamento", href: "#agente-funcionamento" },
      { label: "Agendamento", href: "#agente-agendamento" },
      { label: "Funções", href: "#agente-funcoes" },
      { label: "Gatilhos", href: "#agente-gatilhos" },
    ],
  },
  {
    label: "CRM",
    href: "#crm",
    items: [
      { label: "Funil", href: "#crm-funil" },
      { label: "Negociações", href: "#crm-negociacoes" },
      { label: "Contatos", href: "#crm-contatos" },
      { label: "Fontes e Anúncios", href: "#crm-fontes" },
      { label: "Tags", href: "#crm-tags" },
      { label: "Ações", href: "#crm-acoes" },
      { label: "Conversão", href: "#crm-conversao" },
      { label: "Automações", href: "#crm-automacoes" },
      { label: "Mensagens Agendadas", href: "#crm-mensagens" },
    ],
  },
  {
    label: "Usuários",
    href: "#usuarios",
    items: [],
  },
  {
    label: "WhatsApp",
    href: "#whatsapp",
    items: [
      { label: "Conexões", href: "#whatsapp-conexoes" },
      { label: "Enviar Mensagem Texto", href: "#whatsapp-texto" },
      { label: "Enviar Mídia", href: "#whatsapp-midia" },
    ],
  },
  {
    label: "Departamentos",
    href: "#departamentos",
    items: [
      { label: "CRUD", href: "#departamentos-crud" },
      { label: "Usuários do Departamento", href: "#departamentos-usuarios" },
    ],
  },
  {
    label: "Sessões de IA",
    href: "#sessoes",
    items: [
      { label: "Consulta", href: "#sessoes-consulta" },
      { label: "Gerenciamento", href: "#sessoes-gerenciamento" },
    ],
  },
  {
    label: "Config. do Agente",
    href: "#agent-config",
    items: [
      { label: "Configuração Geral", href: "#config-geral" },
      { label: "Chaves de API", href: "#config-chaves" },
      { label: "Vozes ElevenLabs", href: "#config-vozes" },
    ],
  },
]

export default function DocsSidebar() {
  const [open, setOpen] = useState<string | null>("Introdução")

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 flex-shrink-0 border-r border-neutral-100 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 px-4">
        <nav className="flex flex-col gap-1">
          {NAV.map((section) => (
            <div key={section.label}>
              <button
                onClick={() => setOpen(open === section.label ? null : section.label)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                {section.label}
                {section.items.length > 0 && (
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-neutral-400 transition-transform"
                    style={{ transform: open === section.label ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </button>
              {open === section.label && section.items.length > 0 && (
                <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-neutral-100 pl-3">
                  {section.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm text-neutral-500 hover:text-neutral-900 py-1.5 px-2 rounded-md hover:bg-neutral-50 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile: top scrollable nav */}
      <div className="lg:hidden w-full border-b border-neutral-100 bg-white overflow-x-auto">
        <div className="flex gap-1 px-4 py-3 min-w-max">
          {NAV.map((section) => (
            <a
              key={section.label}
              href={section.href}
              className="text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
