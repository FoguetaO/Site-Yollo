"use client"

import { useState } from "react"

type SubItem = { label: string; href: string; count?: number; endpoints?: { method: string; path: string }[] }
type Section = { label: string; href: string; items: SubItem[] }

const METHOD_COLORS: Record<string, string> = {
  GET:    "text-blue-500",
  POST:   "text-green-500",
  PUT:    "text-amber-500",
  DELETE: "text-red-500",
}

const NAV: Section[] = [
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
      { label: "Relatórios Gerais", href: "#relatorio-crm", count: 2, endpoints: [
        { method: "GET", path: "/relatorio/crm" },
        { method: "GET", path: "/relatorio/gerais" },
      ]},
      { label: "Relatório de Ações", href: "#relatorio-acoes", count: 2, endpoints: [
        { method: "GET", path: "/relatorio/acoes" },
        { method: "GET", path: "/relatorio/acoes/stats" },
      ]},
      { label: "Follow-ups", href: "#relatorio-followups", count: 7, endpoints: [
        { method: "GET", path: "/relatorio/followup" },
        { method: "GET", path: "/relatorio/followup/stats" },
        { method: "GET", path: "/relatorio/followup/historico" },
        { method: "GET", path: "/relatorio/followup/negociacao/:id" },
        { method: "POST", path: "/relatorio/followup" },
        { method: "PUT", path: "/relatorio/followup/:id" },
        { method: "DELETE", path: "/relatorio/followup/:id" },
      ]},
      { label: "Notificações", href: "#relatorio-notificacoes", count: 2, endpoints: [
        { method: "GET", path: "/relatorio/notificacoes" },
        { method: "GET", path: "/relatorio/notificacoes/stats" },
      ]},
      { label: "Facebook CAPI", href: "#relatorio-facebook", count: 2, endpoints: [
        { method: "GET", path: "/relatorio/facebook-capi" },
        { method: "GET", path: "/relatorio/facebook-capi/stats" },
      ]},
    ],
  },
  {
    label: "Chat",
    href: "#chat",
    items: [
      { label: "Conversas", href: "#chat-conversas", count: 3, endpoints: [
        { method: "GET", path: "/chat/list" },
        { method: "GET", path: "/chat/contato/:id_contato" },
        { method: "GET", path: "/chat/contato/:id_contato/mensagens" },
      ]},
      { label: "Mensagens", href: "#chat-mensagens", count: 1, endpoints: [
        { method: "GET", path: "/chat/mensagens" },
      ]},
      { label: "Contexto", href: "#chat-contexto", count: 1, endpoints: [
        { method: "GET", path: "/chat/context/v2" },
      ]},
      { label: "Configurações", href: "#chat-config", count: 2, endpoints: [
        { method: "GET", path: "/chat/config/conversas" },
        { method: "PUT", path: "/chat/config/conversas" },
      ]},
      { label: "Envio de Mensagens", href: "#chat-envio", count: 2, endpoints: [
        { method: "POST", path: "/whatsapp/mensagem/texto" },
        { method: "POST", path: "/whatsapp/mensagem/midia" },
      ]},
    ],
  },
  {
    label: "Agente",
    href: "#agente",
    items: [
      { label: "Agentes", href: "#agente-lista", count: 1, endpoints: [
        { method: "GET", path: "/multi-agente/agentes" },
      ]},
      { label: "Regras", href: "#agente-regras", count: 3, endpoints: [
        { method: "GET", path: "/multi-agente/agentes/:id/regras" },
        { method: "PUT", path: "/multi-agente/agentes/:id/regras" },
        { method: "DELETE", path: "/multi-agente/agentes/:id/regras" },
      ]},
      { label: "Etapas", href: "#agente-etapas", count: 4, endpoints: [
        { method: "GET", path: "/multi-agente/agentes/:id/etapas" },
        { method: "POST", path: "/multi-agente/agentes/:id/etapas" },
        { method: "PUT", path: "/multi-agente/etapas/:id" },
        { method: "DELETE", path: "/multi-agente/etapas/:id" },
      ]},
      { label: "FAQ", href: "#agente-faq", count: 4, endpoints: [
        { method: "GET", path: "/multi-agente/agentes/:id/faq" },
        { method: "POST", path: "/multi-agente/agentes/:id/faq" },
        { method: "PUT", path: "/multi-agente/faq/:id" },
        { method: "DELETE", path: "/multi-agente/faq/:id" },
      ]},
      { label: "Funcionamento", href: "#agente-funcionamento", count: 3, endpoints: [
        { method: "GET", path: "/multi-agente/agentes/:id/funcionamento" },
        { method: "PUT", path: "/multi-agente/agentes/:id/funcionamento" },
        { method: "DELETE", path: "/multi-agente/agentes/:id/funcionamento" },
      ]},
      { label: "Agendamento", href: "#agente-agendamento", count: 3, endpoints: [
        { method: "GET", path: "/multi-agente/agentes/:id/agendamento" },
        { method: "PUT", path: "/multi-agente/agentes/:id/agendamento" },
        { method: "DELETE", path: "/multi-agente/agentes/:id/agendamento" },
      ]},
      { label: "Funções", href: "#agente-funcoes", count: 4, endpoints: [
        { method: "GET", path: "/multi-agente/agentes/:id/funcoes" },
        { method: "POST", path: "/multi-agente/agentes/:id/funcoes" },
        { method: "PUT", path: "/multi-agente/funcoes/:id" },
        { method: "DELETE", path: "/multi-agente/funcoes/:id" },
      ]},
      { label: "Gatilhos", href: "#agente-gatilhos", count: 6, endpoints: [
        { method: "GET", path: "/multi-agente/agentes/:id/gatilhos" },
        { method: "POST", path: "/multi-agente/agentes/:id/gatilhos" },
        { method: "PUT", path: "/multi-agente/agentes/:id/gatilhos/save" },
        { method: "PUT", path: "/multi-agente/agentes/:id/gatilhos/toggle" },
        { method: "PUT", path: "/multi-agente/gatilhos/:id" },
        { method: "DELETE", path: "/multi-agente/gatilhos/:id" },
      ]},
    ],
  },
  {
    label: "CRM",
    href: "#crm",
    items: [
      { label: "Funil", href: "#crm-funil", count: 5, endpoints: [
        { method: "GET", path: "/crm/funil" },
        { method: "GET", path: "/crm/funil/:id" },
        { method: "POST", path: "/crm/funil" },
        { method: "PUT", path: "/crm/funil/:id" },
        { method: "GET", path: "/crm/estagios/:id" },
      ]},
      { label: "Negociações", href: "#crm-negociacoes", count: 15, endpoints: [
        { method: "GET", path: "/crm/negociacoes" },
        { method: "GET", path: "/crm/negociacoes/orfas" },
        { method: "GET", path: "/crm/negociacoes/proxima-acao" },
        { method: "GET", path: "/crm/negociacoes/:id" },
        { method: "POST", path: "/crm/negociacoes" },
        { method: "PUT", path: "/crm/negociacoes/:id" },
        { method: "DELETE", path: "/crm/negociacoes/:id" },
        { method: "PUT", path: "/crm/negociacoes/estagio" },
        { method: "PUT", path: "/crm/negociacoes/funil-estagio" },
        { method: "PUT", path: "/crm/negociacoes/score" },
        { method: "PUT", path: "/crm/negociacoes/proxima-acao" },
        { method: "PUT", path: "/crm/negociacoes/valores" },
        { method: "PUT", path: "/crm/negociacoes/extras" },
        { method: "PUT", path: "/crm/negociacoes/departamento" },
        { method: "GET", path: "/crm/deal-context" },
      ]},
      { label: "Contatos", href: "#crm-contatos", count: 10, endpoints: [
        { method: "GET", path: "/crm/contatos" },
        { method: "POST", path: "/crm/contatos" },
        { method: "GET", path: "/crm/contatos/by-remote-jid" },
        { method: "GET", path: "/crm/contatos/by-usuario/:id" },
        { method: "GET", path: "/crm/contatos/by-departamento/:id" },
        { method: "GET", path: "/crm/contatos/usuarios-com-contatos" },
        { method: "GET", path: "/crm/contatos/departamentos-com-contatos" },
        { method: "GET", path: "/crm/contatos/:id" },
        { method: "PUT", path: "/crm/contatos/:id" },
        { method: "POST", path: "/crm/contatos/find-deals" },
      ]},
      { label: "Fontes e Anúncios", href: "#crm-fontes", count: 2, endpoints: [
        { method: "GET", path: "/crm/fontes" },
        { method: "GET", path: "/crm/anuncios" },
      ]},
      { label: "Tags", href: "#crm-tags", count: 4, endpoints: [
        { method: "GET", path: "/crm/tags" },
        { method: "GET", path: "/crm/tags/by-negociacao" },
        { method: "POST", path: "/crm/tags" },
        { method: "DELETE", path: "/crm/tags" },
      ]},
      { label: "Ações", href: "#crm-acoes", count: 9, endpoints: [
        { method: "GET", path: "/crm/acoes/modelos" },
        { method: "GET", path: "/crm/acoes/modelos/:id" },
        { method: "POST", path: "/crm/acoes/modelos" },
        { method: "PUT", path: "/crm/acoes/modelos/:id" },
        { method: "DELETE", path: "/crm/acoes/modelos/:id" },
        { method: "GET", path: "/crm/acoes" },
        { method: "GET", path: "/crm/acoes/negociacao/:id" },
        { method: "POST", path: "/crm/acoes" },
        { method: "PUT", path: "/crm/acoes/:id" },
      ]},
      { label: "Conversão", href: "#crm-conversao", count: 12, endpoints: [
        { method: "GET", path: "/crm/conversao/marcadores" },
        { method: "GET", path: "/crm/conversao/marcadores/:id" },
        { method: "POST", path: "/crm/conversao/marcadores" },
        { method: "PUT", path: "/crm/conversao/marcadores/:id" },
        { method: "PUT", path: "/crm/conversao/marcadores/:id/toggle" },
        { method: "DELETE", path: "/crm/conversao/marcadores/:id" },
        { method: "GET", path: "/crm/conversao/regras" },
        { method: "GET", path: "/crm/conversao/regras/:id" },
        { method: "POST", path: "/crm/conversao/regras" },
        { method: "PUT", path: "/crm/conversao/regras/:id" },
        { method: "PUT", path: "/crm/conversao/regras/:id/toggle" },
        { method: "DELETE", path: "/crm/conversao/regras/:id" },
      ]},
      { label: "Automações", href: "#crm-automacoes", count: 6, endpoints: [
        { method: "GET", path: "/crm/automacoes" },
        { method: "GET", path: "/crm/automacoes/:id" },
        { method: "POST", path: "/crm/automacoes" },
        { method: "PUT", path: "/crm/automacoes/:id" },
        { method: "PUT", path: "/crm/automacoes/:id/toggle" },
        { method: "DELETE", path: "/crm/automacoes/:id" },
      ]},
      { label: "Mensagens Agendadas", href: "#crm-mensagens", count: 10, endpoints: [
        { method: "GET", path: "/crm/mensagens-agendadas/modelos" },
        { method: "GET", path: "/crm/mensagens-agendadas/modelos/:id" },
        { method: "POST", path: "/crm/mensagens-agendadas/modelos" },
        { method: "PUT", path: "/crm/mensagens-agendadas/modelos/:id" },
        { method: "DELETE", path: "/crm/mensagens-agendadas/modelos/:id" },
        { method: "GET", path: "/crm/mensagens-agendadas" },
        { method: "GET", path: "/crm/mensagens-agendadas/:id" },
        { method: "POST", path: "/crm/mensagens-agendadas" },
        { method: "PUT", path: "/crm/mensagens-agendadas/:id" },
        { method: "DELETE", path: "/crm/mensagens-agendadas/:id" },
      ]},
    ],
  },
  {
    label: "Usuários",
    href: "#usuarios",
    items: [
      { label: "Listar usuários", href: "#usuarios", count: 1, endpoints: [
        { method: "GET", path: "/usuarios" },
      ]},
    ],
  },
  {
    label: "WhatsApp",
    href: "#whatsapp",
    items: [
      { label: "Conexões", href: "#whatsapp-conexoes", count: 2, endpoints: [
        { method: "GET", path: "/whatsapp/conexoes" },
        { method: "GET", path: "/whatsapp/conexoes/:id" },
      ]},
    ],
  },
  {
    label: "Departamentos",
    href: "#departamentos",
    items: [
      { label: "Departamentos", href: "#departamentos-crud", count: 5, endpoints: [
        { method: "GET", path: "/departamentos" },
        { method: "GET", path: "/departamentos/:id" },
        { method: "POST", path: "/departamentos" },
        { method: "PUT", path: "/departamentos/:id" },
        { method: "DELETE", path: "/departamentos/:id" },
      ]},
      { label: "Usuários do Departamento", href: "#departamentos-usuarios", count: 4, endpoints: [
        { method: "GET", path: "/departamentos/:id/usuarios/disponiveis" },
        { method: "POST", path: "/departamentos/:id/usuarios" },
        { method: "PUT", path: "/departamentos/:id/usuarios/:id_usuario" },
        { method: "DELETE", path: "/departamentos/:id/usuarios/:id_usuario" },
      ]},
    ],
  },
  {
    label: "Sessões de IA",
    href: "#sessoes",
    items: [
      { label: "Consulta", href: "#sessoes-consulta", count: 7, endpoints: [
        { method: "GET", path: "/sessoes" },
        { method: "GET", path: "/sessoes/exclusoes" },
        { method: "GET", path: "/sessoes/exclusoes-permanentes" },
        { method: "GET", path: "/sessoes/all" },
        { method: "GET", path: "/sessoes/by-remote-jid" },
        { method: "GET", path: "/sessoes/exclusoes/by-remote-jid" },
        { method: "GET", path: "/sessoes/exclusoes-permanentes/by-remote-jid" },
      ]},
      { label: "Gerenciamento", href: "#sessoes-gerenciamento", count: 7, endpoints: [
        { method: "POST", path: "/sessoes/by-contact" },
        { method: "DELETE", path: "/sessoes/:id" },
        { method: "DELETE", path: "/sessoes/exclusoes/:id" },
        { method: "DELETE", path: "/sessoes/exclusoes-permanentes/:id" },
        { method: "POST", path: "/sessoes/delete-by-remote-jid" },
        { method: "POST", path: "/sessoes/exclusoes-permanentes/import" },
        { method: "POST", path: "/sessoes/bulk-delete" },
      ]},
    ],
  },
  {
    label: "Config. do Agente",
    href: "#agent-config",
    items: [
      { label: "Configuração Geral", href: "#config-geral", count: 3, endpoints: [
        { method: "GET", path: "/agent-config" },
        { method: "PUT", path: "/agent-config" },
        { method: "GET", path: "/agent-config/negociacao" },
      ]},
      { label: "Chaves de API", href: "#config-chaves", count: 4, endpoints: [
        { method: "DELETE", path: "/agent-config/openai-key" },
        { method: "DELETE", path: "/agent-config/elevenlabs-key" },
        { method: "POST", path: "/agent-config/openai-key/validate" },
        { method: "POST", path: "/agent-config/elevenlabs-key/validate" },
      ]},
      { label: "Vozes ElevenLabs", href: "#config-vozes", count: 2, endpoints: [
        { method: "GET", path: "/agent-config/elevenlabs/voices" },
        { method: "POST", path: "/agent-config/elevenlabs/voices/:voice_id/preview" },
      ]},
    ],
  },
]

export default function DocsSidebar() {
  const [openSection, setOpenSection] = useState<string | null>("Introdução")
  const [openSub, setOpenSub] = useState<string | null>(null)

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-72 xl:w-80 flex-shrink-0 border-r border-neutral-100 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-3 font-sans">
        <nav className="flex flex-col gap-0.5">
          {NAV.map((section) => (
            <div key={section.label}>
              {/* Section toggle */}
              <button
                onClick={() => setOpenSection(openSection === section.label ? null : section.label)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                {section.label}
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="text-neutral-400 transition-transform duration-200"
                  style={{ transform: openSection === section.label ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {openSection === section.label && (
                <div className="ml-2 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-neutral-100 pl-3">
                  {section.items.map((item) => (
                    <div key={item.href}>
                      {/* Sub-item — if it has endpoints, make it expandable */}
                      {item.endpoints ? (
                        <>
                          <button
                            onClick={() => setOpenSub(openSub === item.href ? null : item.href)}
                            className="w-full flex items-center justify-between py-1.5 px-2 rounded-md text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                          >
                            <span>{item.label}</span>
                            <span className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-neutral-400">{item.count}</span>
                              <svg
                                width="11" height="11" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                className="text-neutral-300 transition-transform duration-200"
                                style={{ transform: openSub === item.href ? "rotate(180deg)" : "rotate(0deg)" }}
                              >
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </span>
                          </button>

                          {openSub === item.href && (
                            <div className="ml-2 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-neutral-100 pl-3">
                              {item.endpoints.map((ep, i) => (
                                <a
                                  key={i}
                                  href={item.href}
                                  className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-neutral-50 transition-colors group"
                                >
                                  <span className={`text-[10px] font-bold w-10 shrink-0 ${METHOD_COLORS[ep.method]}`}>
                                    {ep.method}
                                  </span>
                                  <span className="text-xs text-neutral-500 group-hover:text-neutral-800 font-mono truncate transition-colors">
                                    {ep.path}
                                  </span>
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="block py-1.5 px-2 rounded-md text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
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
