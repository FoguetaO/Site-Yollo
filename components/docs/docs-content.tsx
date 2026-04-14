"use client"

import { useState } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// ─── Types ─────────────────────────────────────────────────────────────────────
type Method = "GET" | "POST" | "PUT" | "DELETE"

interface Param {
  name: string
  type: string
  required: boolean
  description: string
}

interface Endpoint {
  method: Method
  path: string
  title: string
  description?: string
  warning?: string
  queryParams?: Param[]
  bodyParams?: Param[]
  requestExample?: string
  responseExample?: string
}

interface SubSection {
  title: string
  endpoints: Endpoint[]
}

interface Section {
  id: string
  title: string
  prefix: string
  count: number
  description: string
  subsections: SubSection[]
}

// ─── Method styles ─────────────────────────────────────────────────────────────
const METHOD_STYLE: Record<Method, { bg: string; text: string; border: string }> = {
  GET:    { bg: "#DCFCE7", text: "#166534", border: "#86EFAC" },
  POST:   { bg: "#DBEAFE", text: "#1E40AF", border: "#93C5FD" },
  PUT:    { bg: "#FEF9C3", text: "#854D0E", border: "#FDE047" },
  DELETE: { bg: "#FEE2E2", text: "#991B1B", border: "#FCA5A5" },
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const SECTIONS: Section[] = [
  {
    id: "relatorios", title: "Relatórios", prefix: "/relatorio", count: 15,
    description: "Relatórios de CRM, ações, follow-ups, notificações e Facebook CAPI com filtros por período.",
    subsections: [
      {
        title: "Relatórios Gerais", endpoints: [
          {
            method: "GET", path: "/relatorio/crm", title: "Relatório geral do CRM",
            description: "Retorna métricas completas do CRM incluindo conversões, gráficos e top usuários.",
            queryParams: [
              { name: "dataInicio", type: "string", required: true,  description: "Data início (YYYY-MM-DD)" },
              { name: "dataFinal",  type: "string", required: true,  description: "Data final (YYYY-MM-DD)" },
            ],
            responseExample: `{\n  "status": "success",\n  "data": {\n    "total_negociacoes": 142,\n    "conversoes": 38,\n    "taxa_conversao": "26.76%"\n  },\n  "meta": { "request_id": "uuid" }\n}`,
          },
          {
            method: "GET", path: "/relatorio/gerais", title: "Relatórios gerais por funil",
            description: "Retorna dados gerais agrupados por funil de vendas.",
            queryParams: [
              { name: "dataInicio", type: "string", required: true,  description: "Data início (YYYY-MM-DD)" },
              { name: "dataFinal",  type: "string", required: true,  description: "Data final (YYYY-MM-DD)" },
              { name: "id_funil",   type: "number", required: false, description: "Filtrar por funil específico" },
            ],
          },
        ],
      },
      {
        title: "Relatório de Ações", endpoints: [
          {
            method: "GET", path: "/relatorio/acoes", title: "Relatório de ações",
            description: "Lista todas as ações realizadas no período com status e responsável.",
            queryParams: [
              { name: "dataInicio", type: "string", required: true, description: "Data início (YYYY-MM-DD)" },
              { name: "dataFinal",  type: "string", required: true, description: "Data final (YYYY-MM-DD)" },
            ],
          },
          {
            method: "GET", path: "/relatorio/acoes/stats", title: "Estatísticas de ações",
            description: "Retorna totais e médias de ações por tipo e período.",
          },
        ],
      },
      {
        title: "Follow-ups", endpoints: [
          { method: "GET",    path: "/relatorio/followup",                title: "Relatório de follow-ups",      description: "Lista follow-ups no período com filtros por status e usuário." },
          { method: "GET",    path: "/relatorio/followup/stats",          title: "Estatísticas de follow-ups",   description: "Totais de follow-ups realizados, pendentes e atrasados." },
          { method: "GET",    path: "/relatorio/followup/historico",      title: "Histórico de follow-ups",      description: "Histórico completo paginado de todos os follow-ups." },
          { method: "GET",    path: "/relatorio/followup/negociacao/:id", title: "Follow-ups de uma negociação", description: "Lista todos os follow-ups vinculados a uma negociação específica." },
          {
            method: "POST", path: "/relatorio/followup", title: "Criar follow-up",
            description: "Cria um novo follow-up para uma negociação.",
            bodyParams: [
              { name: "id_negociacao", type: "number", required: true,  description: "ID da negociação" },
              { name: "data",          type: "string", required: true,  description: "Data do follow-up (YYYY-MM-DD HH:mm)" },
              { name: "descricao",     type: "string", required: false, description: "Descrição do follow-up" },
            ],
            requestExample:  `{\n  "id_negociacao": 123,\n  "data": "2025-02-10 10:00",\n  "descricao": "Ligar para confirmar proposta"\n}`,
            responseExample: `{\n  "status": "success",\n  "data": { "id": 55, "id_negociacao": 123 },\n  "meta": { "request_id": "uuid" }\n}`,
          },
          {
            method: "PUT", path: "/relatorio/followup/:id", title: "Atualizar follow-up",
            description: "Atualiza data ou descrição de um follow-up existente.",
            bodyParams: [
              { name: "data",      type: "string", required: false, description: "Nova data (YYYY-MM-DD HH:mm)" },
              { name: "descricao", type: "string", required: false, description: "Nova descrição" },
            ],
          },
          { method: "DELETE", path: "/relatorio/followup/:id", title: "Excluir follow-up", description: "Remove permanentemente um follow-up pelo ID." },
        ],
      },
      {
        title: "Notificações", endpoints: [
          { method: "GET", path: "/relatorio/notificacoes",       title: "Relatório de notificações",    description: "Lista notificações enviadas no período com status de entrega." },
          { method: "GET", path: "/relatorio/notificacoes/stats", title: "Estatísticas de notificações", description: "Totais de notificações por tipo e status no período." },
        ],
      },
      {
        title: "Facebook CAPI", endpoints: [
          { method: "GET", path: "/relatorio/facebook-capi",       title: "Relatório Facebook CAPI",    description: "Eventos enviados ao Facebook Conversions API com resultados." },
          { method: "GET", path: "/relatorio/facebook-capi/stats", title: "Estatísticas Facebook CAPI", description: "Métricas agregadas dos eventos CAPI enviados." },
        ],
      },
    ],
  },
  {
    id: "chat", title: "Chat", prefix: "/chat", count: 9,
    description: "Inbox de conversas, mensagens, contexto de chat, envio de mensagens de texto e mídia (conexão v2) e configurações de conversas.",
    subsections: [
      {
        title: "Conversas", endpoints: [
          { method: "GET", path: "/chat/list",                           title: "Listar conversas (Inbox)",   description: "Retorna todas as conversas ativas paginadas no inbox." },
          { method: "GET", path: "/chat/contato/:id_contato",           title: "Obter chat por contato",     description: "Retorna o chat vinculado a um contato específico." },
          { method: "GET", path: "/chat/contato/:id_contato/mensagens", title: "Mensagens de um contato",    description: "Lista todas as mensagens trocadas com um contato." },
        ],
      },
      {
        title: "Mensagens", endpoints: [
          { method: "GET", path: "/chat/mensagens", title: "Buscar mensagens (read-only)", description: "Busca mensagens com filtros por data, contato e status. Endpoint somente leitura." },
        ],
      },
      {
        title: "Contexto", endpoints: [
          { method: "GET", path: "/chat/context/v2", title: "Obter contexto do chat V2", description: "Retorna contexto completo da conversa para uso pelo agente de IA." },
        ],
      },
      {
        title: "Configurações", endpoints: [
          { method: "GET", path: "/chat/config/conversas", title: "Obter config de conversas",     description: "Retorna as configurações atuais de distribuição de conversas." },
          {
            method: "PUT", path: "/chat/config/conversas", title: "Atualizar config de conversas",
            description: "Atualiza regras de distribuição e roteamento de conversas.",
            bodyParams: [
              { name: "distribuicao",  type: "string",  required: false, description: "Modo: 'round_robin' | 'manual'" },
              { name: "auto_resposta", type: "boolean", required: false, description: "Ativar resposta automática fora do horário" },
            ],
          },
        ],
      },
      {
        title: "Envio de Mensagens (v2)", endpoints: [
          {
            method: "POST", path: "/whatsapp/mensagem/texto", title: "Enviar mensagem de texto",
            description: "Envia uma mensagem de texto via WhatsApp para o número especificado. A API detecta automaticamente o tipo da conexão (v2, v1 ou API-OFICIAL) a partir do id_whatsapp e roteia internamente para o provider correto.",
            warning: "Limitação API-OFICIAL: mensagens fora da janela de 24h só podem ser enviadas como template pré-aprovado pela Meta — esta versão da API ainda não suporta envio de templates.",
            bodyParams: [
              { name: "id_whatsapp", type: "number", required: true,  description: "ID da conexão WhatsApp (v2, v1 ou API-OFICIAL)" },
              { name: "number",      type: "string", required: true,  description: "Número do destinatário (ex: 5511999999999)" },
              { name: "text",        type: "string", required: true,  description: "Texto da mensagem" },
              { name: "replyId",     type: "string", required: false, description: "ID da mensagem para responder (reply) — suporte varia por provider" },
            ],
            requestExample:  `{\n  "id_whatsapp": 16279,\n  "number": "5511999999999",\n  "text": "Olá! Sua proposta foi aprovada."\n}`,
            responseExample: `{\n  "status": "success",\n  "data": {\n    "messageId": "BAE5F2C3A4B6D8E0",\n    "sent": true\n  },\n  "meta": { "request_id": "550e8400-e29b-41d4-a716-446655440000" }\n}`,
          },
          {
            method: "POST", path: "/whatsapp/mensagem/midia", title: "Enviar mídia via URL",
            description: "Envia imagem, vídeo, documento ou áudio via URL pública.",
            bodyParams: [
              { name: "id_whatsapp", type: "number", required: true,  description: "ID da conexão WhatsApp" },
              { name: "number",      type: "string", required: true,  description: "Número do destinatário" },
              { name: "mediaUrl",    type: "string", required: true,  description: "URL pública da mídia" },
              { name: "mediaType",   type: "string", required: true,  description: "Tipo: 'image' | 'video' | 'document' | 'audio'" },
              { name: "caption",     type: "string", required: false, description: "Legenda da mídia" },
            ],
            requestExample: `{\n  "id_whatsapp": 16279,\n  "number": "5511999999999",\n  "mediaUrl": "https://exemplo.com/proposta.pdf",\n  "mediaType": "document",\n  "caption": "Proposta comercial"\n}`,
          },
        ],
      },
    ],
  },
  {
    id: "agente", title: "Agente", prefix: "/multi-agente", count: 28,
    description: "Gerenciamento de agentes de IA, suas configurações, etapas, FAQ, funcionamento, agendamento, funções e gatilhos.",
    subsections: [
      {
        title: "Agentes", endpoints: [
          { method: "GET", path: "/multi-agente/agentes", title: "Listar agentes", description: "Retorna todos os agentes de IA configurados na conta." },
        ],
      },
      {
        title: "Regras", endpoints: [
          { method: "GET",    path: "/multi-agente/agentes/:id_agente/regras", title: "Obter regras do agente",  description: "Retorna as regras de comportamento configuradas para o agente." },
          { method: "PUT",    path: "/multi-agente/agentes/:id_agente/regras", title: "Criar/atualizar regras",  description: "Cria ou substitui as regras do agente.", bodyParams: [{ name: "regras", type: "string", required: true, description: "Texto com as regras do agente" }] },
          { method: "DELETE", path: "/multi-agente/agentes/:id_agente/regras", title: "Excluir regras",          description: "Remove todas as regras configuradas do agente." },
        ],
      },
      {
        title: "Etapas", endpoints: [
          { method: "GET",    path: "/multi-agente/agentes/:id_agente/etapas", title: "Obter etapas do agente", description: "Lista as etapas do fluxo de conversa do agente." },
          { method: "POST",   path: "/multi-agente/agentes/:id_agente/etapas", title: "Criar etapa",            description: "Adiciona uma nova etapa ao fluxo.", bodyParams: [{ name: "titulo", type: "string", required: true, description: "Título da etapa" }, { name: "conteudo", type: "string", required: true, description: "Instrução da etapa" }] },
          { method: "PUT",    path: "/multi-agente/etapas/:id",                title: "Atualizar etapa",        description: "Atualiza o conteúdo de uma etapa existente." },
          { method: "DELETE", path: "/multi-agente/etapas/:id",                title: "Excluir etapa",          description: "Remove uma etapa do fluxo do agente." },
        ],
      },
      {
        title: "FAQ", endpoints: [
          { method: "GET",    path: "/multi-agente/agentes/:id_agente/faq", title: "Obter FAQ do agente", description: "Retorna os pares de pergunta e resposta configurados." },
          { method: "POST",   path: "/multi-agente/agentes/:id_agente/faq", title: "Criar FAQ",           description: "Adiciona um par pergunta/resposta ao FAQ.", bodyParams: [{ name: "pergunta", type: "string", required: true, description: "Pergunta" }, { name: "resposta", type: "string", required: true, description: "Resposta" }] },
          { method: "PUT",    path: "/multi-agente/faq/:id",                title: "Atualizar FAQ",       description: "Atualiza uma entrada existente do FAQ." },
          { method: "DELETE", path: "/multi-agente/faq/:id",                title: "Excluir FAQ",         description: "Remove uma entrada do FAQ." },
        ],
      },
      {
        title: "Funcionamento", endpoints: [
          { method: "GET",    path: "/multi-agente/agentes/:id_agente/funcionamento", title: "Obter horário de funcionamento",  description: "Retorna os horários em que o agente está ativo." },
          { method: "PUT",    path: "/multi-agente/agentes/:id_agente/funcionamento", title: "Criar/atualizar funcionamento",   description: "Define os horários de funcionamento do agente.", bodyParams: [{ name: "dias", type: "array", required: true, description: "Dias da semana (0=dom … 6=sáb)" }, { name: "hora_inicio", type: "string", required: true, description: "Hora início (HH:mm)" }, { name: "hora_fim", type: "string", required: true, description: "Hora fim (HH:mm)" }] },
          { method: "DELETE", path: "/multi-agente/agentes/:id_agente/funcionamento", title: "Excluir funcionamento",           description: "Remove a configuração de horário do agente." },
        ],
      },
      {
        title: "Agendamento", endpoints: [
          { method: "GET",    path: "/multi-agente/agentes/:id_agente/agendamento", title: "Obter configuração de agendamento", description: "Retorna as configurações de agendamento automático." },
          { method: "PUT",    path: "/multi-agente/agentes/:id_agente/agendamento", title: "Criar/atualizar agendamento",       description: "Define como o agente agenda reuniões automaticamente." },
          { method: "DELETE", path: "/multi-agente/agentes/:id_agente/agendamento", title: "Excluir agendamento",               description: "Remove a configuração de agendamento." },
        ],
      },
      {
        title: "Funções", endpoints: [
          { method: "GET",    path: "/multi-agente/agentes/:id_agente/funcoes", title: "Obter funções do agente", description: "Lista as funções (tools) disponíveis para o agente." },
          { method: "POST",   path: "/multi-agente/agentes/:id_agente/funcoes", title: "Criar função",            description: "Adiciona uma nova função ao agente." },
          { method: "PUT",    path: "/multi-agente/funcoes/:id",                title: "Atualizar função",        description: "Atualiza uma função existente." },
          { method: "DELETE", path: "/multi-agente/funcoes/:id",                title: "Excluir função",          description: "Remove uma função do agente." },
        ],
      },
      {
        title: "Gatilhos", endpoints: [
          { method: "GET",    path: "/multi-agente/agentes/:id_agente/gatilhos",        title: "Listar gatilhos do agente",    description: "Retorna todos os gatilhos configurados para o agente." },
          { method: "POST",   path: "/multi-agente/agentes/:id_agente/gatilhos",        title: "Criar gatilho",                description: "Cria um novo gatilho de disparo automático." },
          { method: "PUT",    path: "/multi-agente/agentes/:id_agente/gatilhos/save",   title: "Salvar gatilhos em massa",     description: "Substitui todos os gatilhos do agente de uma vez." },
          { method: "PUT",    path: "/multi-agente/agentes/:id_agente/gatilhos/toggle", title: "Alternar status dos gatilhos", description: "Ativa ou desativa todos os gatilhos do agente." },
          { method: "PUT",    path: "/multi-agente/gatilhos/:id",                       title: "Atualizar gatilho",            description: "Atualiza um gatilho específico." },
          { method: "DELETE", path: "/multi-agente/gatilhos/:id",                       title: "Excluir gatilho",              description: "Remove um gatilho pelo ID." },
        ],
      },
    ],
  },
  {
    id: "crm", title: "CRM", prefix: "/crm", count: 73,
    description: "Operações de CRM incluindo funis, negociações, contatos, tags, ações, automações, conversão e mensagens agendadas.",
    subsections: [
      {
        title: "Funil", endpoints: [
          { method: "GET",  path: "/crm/funil",        title: "Obter funil de vendas", description: "Retorna todos os funis com seus estágios e contagens." },
          { method: "GET",  path: "/crm/funil/:id",    title: "Obter funil por ID",    description: "Retorna um funil específico com todos os estágios." },
          { method: "POST", path: "/crm/funil",        title: "Criar funil",           description: "Cria um novo funil de vendas.", bodyParams: [{ name: "nome", type: "string", required: true, description: "Nome do funil" }] },
          { method: "PUT",  path: "/crm/funil/:id",    title: "Atualizar funil",       description: "Atualiza nome ou configurações de um funil." },
          { method: "GET",  path: "/crm/estagios/:id", title: "Obter estágio por ID",  description: "Retorna um estágio específico do funil." },
        ],
      },
      {
        title: "Negociações", endpoints: [
          {
            method: "GET", path: "/crm/negociacoes", title: "Listar negociações",
            description: "Retorna negociações paginadas com filtros por funil, estágio e período.",
            queryParams: [
              { name: "id_funil",   type: "number", required: false, description: "Filtrar por funil" },
              { name: "id_estagio", type: "number", required: false, description: "Filtrar por estágio" },
              { name: "page",       type: "number", required: false, description: "Página (paginação)" },
            ],
          },
          { method: "GET",    path: "/crm/negociacoes/orfas",        title: "Listar negociações órfãs",     description: "Negociações sem usuário responsável atribuído." },
          { method: "GET",    path: "/crm/negociacoes/proxima-acao", title: "Negociações com próxima ação", description: "Lista negociações que possuem ação agendada." },
          { method: "GET",    path: "/crm/negociacoes/:id",          title: "Obter negociação por ID",      description: "Retorna todos os dados de uma negociação." },
          {
            method: "POST", path: "/crm/negociacoes", title: "Criar negociação",
            description: "Cria uma nova negociação no funil especificado.",
            bodyParams: [
              { name: "titulo",     type: "string", required: true,  description: "Título da negociação (ex: nome do lead)" },
              { name: "id_contato", type: "number", required: true,  description: "ID do contato vinculado" },
              { name: "id_funil",   type: "number", required: true,  description: "ID do funil" },
              { name: "id_estagio", type: "number", required: true,  description: "ID do estágio inicial" },
              { name: "descricao",  type: "string", required: false, description: "Descrição ou observações" },
              { name: "valor",      type: "number", required: false, description: "Valor da negociação" },
            ],
            requestExample:  `{\n  "titulo": "Carlos Mendes — Contabilidade",\n  "id_contato": 987,\n  "id_funil": 5568,\n  "id_estagio": 34490,\n  "descricao": "Quantidade de clientes: 50-200"\n}`,
            responseExample: `{\n  "status": "success",\n  "data": { "id": 1042, "titulo": "Carlos Mendes — Contabilidade" },\n  "meta": { "request_id": "uuid" }\n}`,
          },
          { method: "PUT",    path: "/crm/negociacoes/:id",              title: "Atualizar negociação",             description: "Atualiza dados gerais de uma negociação." },
          { method: "DELETE", path: "/crm/negociacoes/:id",              title: "Excluir negociação",               description: "Remove permanentemente uma negociação." },
          { method: "PUT",    path: "/crm/negociacoes/estagio",          title: "Atualizar estágio",                description: "Move uma negociação para outro estágio dentro do mesmo funil.", bodyParams: [{ name: "id_negociacao", type: "number", required: true, description: "ID da negociação" }, { name: "id_estagio", type: "number", required: true, description: "ID do novo estágio" }] },
          { method: "PUT",    path: "/crm/negociacoes/funil-estagio",    title: "Atualizar funil e estágio",        description: "Move uma negociação para outro funil e estágio." },
          { method: "PUT",    path: "/crm/negociacoes/score",            title: "Atualizar score",                  description: "Define o score (0–100) de uma negociação.", bodyParams: [{ name: "id_negociacao", type: "number", required: true, description: "ID da negociação" }, { name: "score", type: "number", required: true, description: "Score de 0 a 100" }] },
          { method: "PUT",    path: "/crm/negociacoes/proxima-acao",     title: "Atualizar próxima ação",           description: "Agenda a próxima ação para uma negociação." },
          { method: "PUT",    path: "/crm/negociacoes/valores",          title: "Atualizar valores",                description: "Atualiza o valor monetário de uma negociação." },
          { method: "PUT",    path: "/crm/negociacoes/extras",           title: "Atualizar campos extras",          description: "Salva campos customizados de uma negociação." },
          { method: "PUT",    path: "/crm/negociacoes/departamento",     title: "Atualizar departamento",           description: "Transfere uma negociação para outro departamento." },
          { method: "GET",    path: "/crm/deal-context",                 title: "Obter contexto completo do deal",  description: "Retorna contexto consolidado de uma negociação para uso pelo agente de IA." },
        ],
      },
      {
        title: "Contatos", endpoints: [
          { method: "GET",  path: "/crm/contatos",                                   title: "Listar contatos",                description: "Retorna contatos paginados com filtros por nome, e-mail e telefone." },
          {
            method: "POST", path: "/crm/contatos", title: "Criar contato",
            description: "Cria um novo contato no CRM.",
            bodyParams: [
              { name: "nome_contato", type: "string", required: true,  description: "Nome completo do contato" },
              { name: "telefone",     type: "string", required: true,  description: "Telefone (apenas dígitos)" },
              { name: "email",        type: "string", required: false, description: "E-mail do contato" },
              { name: "observacao",   type: "string", required: false, description: "Observações adicionais" },
            ],
            requestExample:  `{\n  "nome_contato": "Carlos Mendes",\n  "telefone": "5532988139103",\n  "email": "carlos@empresa.com"\n}`,
            responseExample: `{\n  "status": "success",\n  "data": { "id": 987, "nome_contato": "Carlos Mendes" },\n  "meta": { "request_id": "uuid" }\n}`,
          },
          { method: "GET",  path: "/crm/contatos/by-remote-jid",                     title: "Buscar por Remote JID",          description: "Localiza um contato pelo JID do WhatsApp.", queryParams: [{ name: "remote_jid", type: "string", required: true, description: "JID no formato 5511...@s.whatsapp.net" }] },
          { method: "GET",  path: "/crm/contatos/by-usuario/:id_usuario",            title: "Contatos por usuário",           description: "Lista contatos atribuídos a um usuário específico." },
          { method: "GET",  path: "/crm/contatos/by-departamento/:id_departamento",  title: "Contatos por departamento",      description: "Lista contatos do departamento especificado." },
          { method: "GET",  path: "/crm/contatos/usuarios-com-contatos",             title: "Usuários com contatos",          description: "Retorna usuários que possuem contatos atribuídos." },
          { method: "GET",  path: "/crm/contatos/departamentos-com-contatos",        title: "Departamentos com contatos",     description: "Retorna departamentos que possuem contatos." },
          { method: "GET",  path: "/crm/contatos/:id",                               title: "Obter contato por ID",           description: "Retorna todos os dados de um contato." },
          { method: "PUT",  path: "/crm/contatos/:id",                               title: "Atualizar contato",              description: "Atualiza dados de um contato existente." },
          { method: "POST", path: "/crm/contatos/find-deals",                        title: "Buscar deals por contato",       description: "Retorna todas as negociações vinculadas a um contato.", bodyParams: [{ name: "id_contato", type: "number", required: true, description: "ID do contato" }] },
        ],
      },
      {
        title: "Fontes e Anúncios", endpoints: [
          { method: "GET", path: "/crm/fontes",   title: "Listar fontes de lead", description: "Retorna as fontes de captação de leads cadastradas na conta." },
          { method: "GET", path: "/crm/anuncios", title: "Listar anúncios",       description: "Retorna os anúncios vinculados à conta para rastreamento de origem." },
        ],
      },
      {
        title: "Tags", endpoints: [
          { method: "GET",    path: "/crm/tags",               title: "Listar tags",            description: "Retorna todas as tags disponíveis na conta." },
          { method: "GET",    path: "/crm/tags/by-negociacao", title: "Tags de uma negociação", description: "Lista as tags aplicadas a uma negociação.", queryParams: [{ name: "id_negociacao", type: "number", required: true, description: "ID da negociação" }] },
          { method: "POST",   path: "/crm/tags",               title: "Adicionar tag",          description: "Adiciona uma tag a uma negociação.", bodyParams: [{ name: "id_negociacao", type: "number", required: true, description: "ID da negociação" }, { name: "id_tag", type: "number", required: true, description: "ID da tag" }] },
          { method: "DELETE", path: "/crm/tags",               title: "Remover tag",            description: "Remove uma tag de uma negociação." },
        ],
      },
      {
        title: "Ações", endpoints: [
          { method: "GET",    path: "/crm/acoes/modelos",                   title: "Listar modelos de ação",     description: "Retorna os modelos de ação cadastrados na conta." },
          { method: "GET",    path: "/crm/acoes/modelos/:id",               title: "Obter modelo por ID",        description: "Retorna um modelo de ação específico." },
          { method: "POST",   path: "/crm/acoes/modelos",                   title: "Criar modelo de ação",       description: "Cria um novo modelo reutilizável.", bodyParams: [{ name: "nome", type: "string", required: true, description: "Nome do modelo" }, { name: "descricao", type: "string", required: false, description: "Descrição" }] },
          { method: "PUT",    path: "/crm/acoes/modelos/:id",               title: "Atualizar modelo de ação",   description: "Atualiza um modelo existente." },
          { method: "DELETE", path: "/crm/acoes/modelos/:id",               title: "Excluir modelo de ação",     description: "Remove um modelo de ação." },
          { method: "GET",    path: "/crm/acoes",                           title: "Listar ações",               description: "Lista todas as ações com filtros por status e data." },
          { method: "GET",    path: "/crm/acoes/negociacao/:id_negociacao", title: "Ações de uma negociação",    description: "Lista ações vinculadas a uma negociação." },
          { method: "POST",   path: "/crm/acoes",                           title: "Criar ação",                 description: "Cria uma ação para uma negociação.", bodyParams: [{ name: "id_negociacao", type: "number", required: true, description: "ID da negociação" }, { name: "tipo", type: "string", required: true, description: "'ligacao' | 'email' | 'reuniao' | 'tarefa'" }, { name: "data", type: "string", required: true, description: "Data (YYYY-MM-DD HH:mm)" }] },
          { method: "PUT",    path: "/crm/acoes/:id",                       title: "Atualizar ação",             description: "Atualiza status ou data de uma ação." },
        ],
      },
      {
        title: "Conversão", endpoints: [
          { method: "GET",    path: "/crm/conversao/marcadores",            title: "Listar marcadores de conversão", description: "Lista marcadores que identificam eventos de conversão." },
          { method: "GET",    path: "/crm/conversao/marcadores/:id",        title: "Obter marcador por ID",          description: "Retorna um marcador específico." },
          { method: "POST",   path: "/crm/conversao/marcadores",            title: "Criar marcador de conversão",    description: "Cria um marcador para rastrear conversões." },
          { method: "PUT",    path: "/crm/conversao/marcadores/:id",        title: "Atualizar marcador",             description: "Atualiza nome ou configuração do marcador." },
          { method: "PUT",    path: "/crm/conversao/marcadores/:id/toggle", title: "Ativar/desativar marcador",      description: "Alterna o status ativo/inativo do marcador." },
          { method: "DELETE", path: "/crm/conversao/marcadores/:id",        title: "Excluir marcador",               description: "Remove permanentemente um marcador." },
          { method: "GET",    path: "/crm/conversao/regras",                title: "Listar regras de conversão",     description: "Retorna as regras de conversão automática." },
          { method: "GET",    path: "/crm/conversao/regras/:id",            title: "Obter regra por ID",             description: "Retorna uma regra específica." },
          { method: "POST",   path: "/crm/conversao/regras",                title: "Criar regra de conversão",       description: "Cria uma regra de conversão automática." },
          { method: "PUT",    path: "/crm/conversao/regras/:id",            title: "Atualizar regra de conversão",   description: "Atualiza uma regra existente." },
          { method: "PUT",    path: "/crm/conversao/regras/:id/toggle",     title: "Ativar/desativar regra",         description: "Alterna o status ativo/inativo da regra." },
          { method: "DELETE", path: "/crm/conversao/regras/:id",            title: "Excluir regra de conversão",     description: "Remove permanentemente uma regra." },
        ],
      },
      {
        title: "Automações", endpoints: [
          { method: "GET",    path: "/crm/automacoes",            title: "Listar automações",          description: "Retorna todas as automações configuradas." },
          { method: "GET",    path: "/crm/automacoes/:id",        title: "Obter automação por ID",     description: "Retorna uma automação específica com suas regras." },
          { method: "POST",   path: "/crm/automacoes",            title: "Criar automação",            description: "Cria uma automação de CRM." },
          { method: "PUT",    path: "/crm/automacoes/:id",        title: "Atualizar automação",        description: "Atualiza uma automação existente." },
          { method: "PUT",    path: "/crm/automacoes/:id/toggle", title: "Ativar/desativar automação", description: "Alterna o status ativo/inativo de uma automação." },
          { method: "DELETE", path: "/crm/automacoes/:id",        title: "Excluir automação",          description: "Remove permanentemente uma automação." },
        ],
      },
      {
        title: "Modelos de Mensagem", endpoints: [
          { method: "GET",    path: "/crm/mensagens-agendadas/modelos",     title: "Listar modelos de mensagem",   description: "Retorna modelos de mensagem disponíveis para agendamento." },
          { method: "GET",    path: "/crm/mensagens-agendadas/modelos/:id", title: "Obter modelo por ID",          description: "Retorna um modelo específico." },
          { method: "POST",   path: "/crm/mensagens-agendadas/modelos",     title: "Criar modelo de mensagem",     description: "Cria um novo modelo de mensagem.", bodyParams: [{ name: "nome", type: "string", required: true, description: "Nome do modelo" }, { name: "conteudo", type: "string", required: true, description: "Texto da mensagem" }] },
          { method: "PUT",    path: "/crm/mensagens-agendadas/modelos/:id", title: "Atualizar modelo de mensagem", description: "Atualiza um modelo existente." },
          { method: "DELETE", path: "/crm/mensagens-agendadas/modelos/:id", title: "Excluir modelo de mensagem",   description: "Remove permanentemente um modelo." },
        ],
      },
      {
        title: "Mensagens Agendadas", endpoints: [
          { method: "GET",    path: "/crm/mensagens-agendadas",     title: "Listar mensagens agendadas",  description: "Retorna mensagens agendadas com status de envio." },
          { method: "GET",    path: "/crm/mensagens-agendadas/:id", title: "Obter mensagem agendada",     description: "Retorna detalhes de uma mensagem agendada." },
          {
            method: "POST", path: "/crm/mensagens-agendadas", title: "Criar mensagem agendada",
            description: "Agenda uma mensagem para ser enviada automaticamente.",
            bodyParams: [
              { name: "id_contato",  type: "number", required: true,  description: "ID do contato destinatário" },
              { name: "id_whatsapp", type: "number", required: true,  description: "ID da conexão WhatsApp" },
              { name: "mensagem",    type: "string", required: true,  description: "Texto da mensagem" },
              { name: "data_envio",  type: "string", required: true,  description: "Data/hora de envio (YYYY-MM-DD HH:mm)" },
            ],
            requestExample: `{\n  "id_contato": 987,\n  "id_whatsapp": 16279,\n  "mensagem": "Lembrete da sua reunião amanhã.",\n  "data_envio": "2025-02-10 09:00"\n}`,
          },
          { method: "PUT",    path: "/crm/mensagens-agendadas/:id", title: "Atualizar mensagem agendada", description: "Altera data ou conteúdo de uma mensagem ainda não enviada." },
          { method: "DELETE", path: "/crm/mensagens-agendadas/:id", title: "Cancelar mensagem agendada",  description: "Cancela o envio de uma mensagem agendada." },
        ],
      },
    ],
  },
  {
    id: "usuarios", title: "Usuários", prefix: "/usuarios", count: 1,
    description: "Listagem de usuários ativos do cliente autenticado.",
    subsections: [
      {
        title: "Usuários", endpoints: [
          {
            method: "GET", path: "/usuarios", title: "Listar usuários",
            description: "Retorna todos os usuários ativos vinculados à conta autenticada.",
            responseExample: `{\n  "status": "success",\n  "data": [\n    { "id": 1, "nome": "Pedro Silva", "email": "pedro@empresa.com" }\n  ]\n}`,
          },
        ],
      },
    ],
  },
  {
    id: "whatsapp", title: "WhatsApp", prefix: "/whatsapp", count: 2,
    description: "Gerenciamento de conexões WhatsApp configuradas no sistema.",
    subsections: [
      {
        title: "Conexões", endpoints: [
          {
            method: "GET", path: "/whatsapp/conexoes", title: "Listar conexões WhatsApp",
            description: "Retorna todas as conexões WhatsApp da conta com status e tipo.",
            responseExample: `{\n  "status": "success",\n  "data": [\n    { "id": 16279, "nome": "Principal", "tipo": "v2", "status": "connected" }\n  ]\n}`,
          },
          { method: "GET", path: "/whatsapp/conexoes/:id", title: "Obter conexão por ID", description: "Retorna detalhes e status de uma conexão específica." },
        ],
      },
    ],
  },
  {
    id: "departamentos", title: "Departamentos", prefix: "/departamentos", count: 9,
    description: "CRUD de departamentos e gerenciamento de usuários dentro de cada departamento.",
    subsections: [
      {
        title: "Departamentos", endpoints: [
          { method: "GET",    path: "/departamentos",     title: "Listar departamentos",      description: "Retorna todos os departamentos da conta." },
          { method: "GET",    path: "/departamentos/:id", title: "Obter departamento por ID", description: "Retorna um departamento específico." },
          { method: "POST",   path: "/departamentos",     title: "Criar departamento",        description: "Cria um novo departamento.", bodyParams: [{ name: "nome", type: "string", required: true, description: "Nome do departamento" }] },
          { method: "PUT",    path: "/departamentos/:id", title: "Atualizar departamento",    description: "Atualiza o nome de um departamento." },
          { method: "DELETE", path: "/departamentos/:id", title: "Excluir departamento",      description: "Remove um departamento." },
        ],
      },
      {
        title: "Usuários do Departamento", endpoints: [
          { method: "GET",    path: "/departamentos/:id/usuarios/disponiveis",       title: "Usuários disponíveis",             description: "Lista usuários que podem ser adicionados ao departamento." },
          { method: "POST",   path: "/departamentos/:id/usuarios",                  title: "Adicionar usuário ao departamento", description: "Vincula um usuário ao departamento.", bodyParams: [{ name: "id_usuario", type: "number", required: true, description: "ID do usuário" }] },
          { method: "PUT",    path: "/departamentos/:id/usuarios/:id_usuario",      title: "Atualizar usuário no departamento", description: "Atualiza o papel do usuário no departamento." },
          { method: "DELETE", path: "/departamentos/:id/usuarios/:id_usuario",      title: "Remover usuário do departamento",   description: "Remove o vínculo do usuário com o departamento." },
        ],
      },
    ],
  },
  {
    id: "sessoes", title: "Sessões de IA", prefix: "/sessoes", count: 14,
    description: "Gerenciamento de sessões ativas do agente de IA, exclusões temporárias e permanentes.",
    subsections: [
      {
        title: "Consulta", endpoints: [
          { method: "GET", path: "/sessoes",                                       title: "Listar sessões ativas",              description: "Retorna todas as sessões de IA em andamento." },
          { method: "GET", path: "/sessoes/exclusoes",                             title: "Listar exclusões temporárias",       description: "Contatos temporariamente excluídos da IA." },
          { method: "GET", path: "/sessoes/exclusoes-permanentes",                 title: "Listar exclusões permanentes",       description: "Contatos permanentemente excluídos da IA." },
          { method: "GET", path: "/sessoes/all",                                   title: "Obter todos os dados consolidados",  description: "Retorna sessões, exclusões e configurações em uma única chamada." },
          { method: "GET", path: "/sessoes/by-remote-jid",                         title: "Buscar sessão por Remote JID",       description: "Localiza sessão pelo JID do WhatsApp.", queryParams: [{ name: "remote_jid", type: "string", required: true, description: "JID do contato" }] },
          { method: "GET", path: "/sessoes/exclusoes/by-remote-jid",               title: "Buscar exclusão temporária por JID", description: "Verifica se um JID está na lista de exclusões temporárias." },
          { method: "GET", path: "/sessoes/exclusoes-permanentes/by-remote-jid",   title: "Buscar exclusão permanente por JID", description: "Verifica se um JID está na lista de exclusões permanentes." },
        ],
      },
      {
        title: "Gerenciamento", endpoints: [
          { method: "POST",   path: "/sessoes/by-contact",                         title: "Buscar sessão por contato",          description: "Localiza sessão ativa pelo ID do contato.", bodyParams: [{ name: "id_contato", type: "number", required: true, description: "ID do contato" }] },
          { method: "DELETE", path: "/sessoes/:id",                                title: "Excluir sessão por ID",              description: "Encerra e remove uma sessão de IA." },
          { method: "DELETE", path: "/sessoes/exclusoes/:id",                      title: "Excluir exclusão temporária",        description: "Remove o contato da lista de exclusões temporárias." },
          { method: "DELETE", path: "/sessoes/exclusoes-permanentes/:id",          title: "Excluir exclusão permanente",        description: "Remove o contato da lista de exclusões permanentes." },
          { method: "POST",   path: "/sessoes/delete-by-remote-jid",               title: "Excluir por Remote JID",             description: "Encerra sessão pelo JID do WhatsApp.", bodyParams: [{ name: "remote_jid", type: "string", required: true, description: "JID do contato" }] },
          { method: "POST",   path: "/sessoes/exclusoes-permanentes/import",        title: "Importar exclusões em massa",        description: "Importa uma lista de JIDs para exclusão permanente.", bodyParams: [{ name: "remote_jids", type: "array", required: true, description: "Array de JIDs" }] },
          { method: "POST",   path: "/sessoes/bulk-delete",                         title: "Excluir sessões em massa",           description: "Encerra múltiplas sessões de uma vez.", bodyParams: [{ name: "ids", type: "array", required: true, description: "Array de IDs de sessões" }] },
        ],
      },
    ],
  },
  {
    id: "agent-config", title: "Config. do Agente", prefix: "/agent-config", count: 9,
    description: "Gerenciamento das configurações do agente de IA, chaves de API externas (OpenAI, ElevenLabs) e vozes.",
    subsections: [
      {
        title: "Configuração Geral", endpoints: [
          { method: "GET", path: "/agent-config",            title: "Obter configuração do agente",  description: "Retorna a configuração atual do agente de IA." },
          { method: "PUT", path: "/agent-config",            title: "Salvar configuração do agente", description: "Salva as configurações do agente." },
          { method: "GET", path: "/agent-config/negociacao", title: "Obter config de negociação",    description: "Retorna configurações específicas para negociações." },
        ],
      },
      {
        title: "Chaves de API", endpoints: [
          { method: "DELETE", path: "/agent-config/openai-key",              title: "Remover chave OpenAI",        description: "Remove a chave de API da OpenAI da conta." },
          { method: "DELETE", path: "/agent-config/elevenlabs-key",          title: "Remover chave ElevenLabs",    description: "Remove a chave de API do ElevenLabs." },
          { method: "POST",   path: "/agent-config/openai-key/validate",     title: "Validar chave OpenAI",        description: "Verifica se a chave OpenAI informada é válida.", bodyParams: [{ name: "api_key", type: "string", required: true, description: "Chave da OpenAI" }] },
          { method: "POST",   path: "/agent-config/elevenlabs-key/validate", title: "Validar chave ElevenLabs",   description: "Verifica se a chave ElevenLabs informada é válida.", bodyParams: [{ name: "api_key", type: "string", required: true, description: "Chave do ElevenLabs" }] },
        ],
      },
      {
        title: "Vozes ElevenLabs", endpoints: [
          { method: "GET",  path: "/agent-config/elevenlabs/voices",                   title: "Listar vozes ElevenLabs", description: "Retorna as vozes disponíveis na conta ElevenLabs." },
          { method: "POST", path: "/agent-config/elevenlabs/voices/:voice_id/preview", title: "Pré-visualizar voz",      description: "Gera um áudio de preview da voz selecionada." },
        ],
      },
    ],
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function MethodBadge({ method }: { method: Method }) {
  const s = METHOD_STYLE[method]
  return (
    <span
      className="inline-flex items-center justify-center rounded px-2.5 py-0.5 text-xs font-bold font-mono min-w-[56px] flex-shrink-0"
      style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}
    >
      {method}
    </span>
  )
}

function ParamTable({ params, title }: { params: Param[]; title: string }) {
  return (
    <div className="mt-5">
      <h5 className="text-sm font-semibold text-neutral-700 mb-2">{title}</h5>
      <div className="rounded-xl border border-neutral-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200">
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 w-44">Nome</th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 w-24">Tipo</th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 w-28">Obrigatório</th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {params.map((p, i) => (
              <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/40"}>
                <td className="px-4 py-2.5">
                  <code className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: "#EEF2FF", color: "#4338CA" }}>
                    {p.name}
                  </code>
                </td>
                <td className="px-4 py-2.5 text-xs text-neutral-500 font-mono">{p.type}</td>
                <td className="px-4 py-2.5">
                  <span
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold"
                    style={p.required
                      ? { background: "#FEF3C7", color: "#92400E" }
                      : { background: "#F3F4F6", color: "#6B7280" }}
                  >
                    {p.required ? "sim" : "não"}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-xs text-neutral-600">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="mt-4 rounded-xl border border-neutral-200 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 border-b border-neutral-200">
        <span className="text-xs text-neutral-500 font-medium">{label}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500) }}
          className="flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
      <pre className="p-4 bg-neutral-950 overflow-x-auto">
        <code className="text-xs font-mono text-green-400 whitespace-pre">{code}</code>
      </pre>
    </div>
  )
}

function EndpointCard({ ep }: { ep: Endpoint }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden">
      {/* Header — sempre visível, clicável */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-neutral-50 transition-colors text-left"
      >
        <MethodBadge method={ep.method} />
        <code className="flex-1 text-sm font-mono text-neutral-800 truncate">{ep.path}</code>
        <span className="hidden sm:block text-sm text-neutral-400 truncate max-w-[200px]">{ep.title}</span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className="flex-shrink-0 text-neutral-400 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Body — expande ao clicar */}
      {open && (
        <div className="border-t border-neutral-200 px-5 pt-4 pb-5 bg-white">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className="text-base font-semibold text-neutral-900">{ep.title}</h4>
            <span className="inline-flex items-center gap-1.5 flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-lg border border-neutral-200 text-neutral-500">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
              </svg>
              API Key
            </span>
          </div>
          {ep.description && <p className="text-sm text-neutral-500 leading-relaxed">{ep.description}</p>}

          {ep.warning && (
            <div className="mt-4 rounded-lg px-4 py-3 text-sm" style={{ background: "#FFFBEB", border: "1px solid #FDE68A", color: "#92400E" }}>
              {ep.warning}
            </div>
          )}

          {ep.queryParams && ep.queryParams.length > 0 && (
            <ParamTable params={ep.queryParams} title="Query Parameters" />
          )}
          {ep.bodyParams && ep.bodyParams.length > 0 && (
            <ParamTable params={ep.bodyParams} title="Request Body" />
          )}
          {ep.requestExample  && <CodeBlock label="Exemplo de Request"  code={ep.requestExample} />}
          {ep.responseExample && <CodeBlock label="Exemplo de Response" code={ep.responseExample} />}
        </div>
      )}
    </div>
  )
}

// ─── Intro ─────────────────────────────────────────────────────────────────────

function IntroSection() {
  return (
    <div id="introducao" className="scroll-mt-20 space-y-5">
      <div>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-1">Introdução</h2>
        <p className="text-sm text-neutral-400">Versão v1</p>
      </div>

      <div className="rounded-xl border border-neutral-200 p-5">
        <h3 className="text-sm font-semibold text-neutral-700 mb-2">Base URL</h3>
        <code className="block text-sm font-mono px-3 py-2 rounded-lg" style={{ background: "#F5F3FF", color: "#4C1D95" }}>
          https://integracao.agendasistemacrm.com.br/api/v1
        </code>
      </div>

      <div className="rounded-xl border border-neutral-200 p-5">
        <h3 className="text-sm font-semibold text-neutral-700 mb-3">Autenticação</h3>
        <p className="text-sm text-neutral-500 mb-3">Todas as requisições (exceto health check) requerem autenticação via API Key:</p>
        <div className="space-y-2">
          {[
            { label: "Opção 1", code: "Authorization: Bearer <sua_api_key>" },
            { label: "Opção 2", code: "X-API-Key: <sua_api_key>" },
          ].map((o) => (
            <div key={o.label} className="flex items-center gap-3">
              <span className="text-xs text-neutral-400 w-14 flex-shrink-0">{o.label}</span>
              <code className="text-xs font-mono px-2 py-1 rounded" style={{ background: "#F5F3FF", color: "#4C1D95" }}>{o.code}</code>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 p-5">
        <h3 className="text-sm font-semibold text-neutral-700 mb-3">Rate Limits</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg p-3 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
            <div className="text-xs font-semibold text-green-700">Leitura</div>
            <div className="text-xl font-bold text-green-800">60 req/min</div>
            <div className="text-xs font-mono text-green-600 mt-0.5">GET</div>
          </div>
          <div className="rounded-lg p-3 border" style={{ background: "#FEF9C3", borderColor: "#FDE047" }}>
            <div className="text-xs font-semibold text-yellow-700">Escrita</div>
            <div className="text-xl font-bold text-yellow-800">30 req/min</div>
            <div className="text-xs font-mono text-yellow-600 mt-0.5">POST / PUT / DELETE</div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 overflow-hidden">
        <div className="px-5 py-3 bg-neutral-50 border-b border-neutral-200">
          <h3 className="text-sm font-semibold text-neutral-700">Códigos de Erro</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white border-b border-neutral-100">
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-neutral-500 w-16">HTTP</th>
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-neutral-500 w-52">Código</th>
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-neutral-500">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {[
              { http: "401", code: "UNAUTHORIZED",        desc: "API key inválida ou ausente" },
              { http: "403", code: "FORBIDDEN",           desc: "Conta inativa ou permissão insuficiente" },
              { http: "404", code: "NOT_FOUND",           desc: "Recurso não encontrado" },
              { http: "400", code: "VALIDATION_ERROR",    desc: "Dados inválidos na requisição" },
              { http: "429", code: "RATE_LIMIT_EXCEEDED", desc: "Limite de requisições excedido" },
              { http: "500", code: "INTERNAL_ERROR",      desc: "Erro interno do servidor" },
            ].map((r, i) => (
              <tr key={r.code} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/40"}>
                <td className="px-5 py-2.5 text-xs font-mono font-semibold text-neutral-600">{r.http}</td>
                <td className="px-5 py-2.5"><code className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: "#EEF2FF", color: "#4338CA" }}>{r.code}</code></td>
                <td className="px-5 py-2.5 text-xs text-neutral-600">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Main ──────────────────────────────────────────────────────────────────────

export default function DocsContent() {
  return (
    <main className={`flex-1 min-w-0 px-6 py-10 max-w-4xl mx-auto space-y-16 ${inter.className}`}>
      <IntroSection />

      {SECTIONS.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-20">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
            <h2 className="text-2xl font-semibold text-neutral-900">{section.title}</h2>
            {section.prefix && <code className="text-sm font-mono text-neutral-400">{section.prefix}</code>}
            <span className="text-sm text-neutral-400">{section.count} endpoints</span>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8">{section.description}</p>

          <div className="space-y-8">
            {section.subsections.map((sub) => (
              <div key={sub.title}>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-sm font-semibold text-neutral-700">{sub.title}</h3>
                  <span className="text-xs text-neutral-400 font-medium">{sub.endpoints.length}</span>
                </div>
                <div className="space-y-2">
                  {sub.endpoints.map((ep) => (
                    <EndpointCard key={`${ep.method}-${ep.path}`} ep={ep} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
