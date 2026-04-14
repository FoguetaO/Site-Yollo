"use client"

import { useState } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// ─── Types ─────────────────────────────────────────────────────────────────
type Method = "GET" | "POST" | "PUT" | "DELETE"

interface Field {
  name: string
  type: string
  required: boolean
  description: string
}

interface ParamGroup {
  label: string
  fields: Field[]
}

interface Endpoint {
  method: Method
  path: string
  title: string
  description?: string
  params?: ParamGroup[]
  request?: string
  response?: string
  warning?: string
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

// ─── Method colors ──────────────────────────────────────────────────────────
const METHOD_STYLE: Record<Method, { bg: string; text: string; border: string }> = {
  GET:    { bg: "#DCFCE7", text: "#166534", border: "#86EFAC" },
  POST:   { bg: "#DBEAFE", text: "#1E40AF", border: "#93C5FD" },
  PUT:    { bg: "#FEF9C3", text: "#854D0E", border: "#FDE047" },
  DELETE: { bg: "#FEE2E2", text: "#991B1B", border: "#FCA5A5" },
}

// ─── All sections & endpoints ───────────────────────────────────────────────
const SECTIONS: Section[] = [
  {
    id: "relatorios", title: "Relatórios", prefix: "/relatorio", count: 15,
    description: "Relatórios de CRM, ações, follow-ups, notificações e Facebook CAPI com filtros por período.",
    subsections: [
      {
        title: "Relatórios Gerais", endpoints: [
          { method: "GET", path: "/relatorio/crm", title: "Relatório geral do CRM", description: "Retorna métricas completas do CRM incluindo conversões, gráficos e top usuários.", params: [{ label: "Query Parameters", fields: [{ name: "dataInicio", type: "string", required: true, description: "Data início (YYYY-MM-DD)" }, { name: "dataFinal", type: "string", required: true, description: "Data final (YYYY-MM-DD)" }] }], response: `{\n  "status": "success",\n  "data": {\n    "conversoes": 42,\n    "leads": 130,\n    "taxa_conversao": "32.3%"\n  },\n  "meta": { "request_id": "uuid" }\n}` },
          { method: "GET", path: "/relatorio/gerais", title: "Relatórios gerais por funil", description: "Retorna dados gerais agrupados por funil de vendas.", params: [{ label: "Query Parameters", fields: [{ name: "dataInicio", type: "string", required: true, description: "Data início (YYYY-MM-DD)" }, { name: "dataFinal", type: "string", required: true, description: "Data final (YYYY-MM-DD)" }] }] },
        ],
      },
      {
        title: "Relatório de Ações", endpoints: [
          { method: "GET", path: "/relatorio/acoes", title: "Relatório de ações", description: "Lista ações realizadas no período filtrado.", params: [{ label: "Query Parameters", fields: [{ name: "dataInicio", type: "string", required: true, description: "Data início (YYYY-MM-DD)" }, { name: "dataFinal", type: "string", required: true, description: "Data final (YYYY-MM-DD)" }] }] },
          { method: "GET", path: "/relatorio/acoes/stats", title: "Estatísticas de ações", description: "Retorna estatísticas agregadas das ações do período." },
        ],
      },
      {
        title: "Follow-ups", endpoints: [
          { method: "GET", path: "/relatorio/followup", title: "Relatório de follow-ups", description: "Lista todos os follow-ups com filtros de período." },
          { method: "GET", path: "/relatorio/followup/stats", title: "Estatísticas de follow-ups", description: "Retorna estatísticas agregadas dos follow-ups." },
          { method: "GET", path: "/relatorio/followup/historico", title: "Histórico de follow-ups", description: "Histórico completo de follow-ups realizados." },
          { method: "GET", path: "/relatorio/followup/negociacao/:id", title: "Follow-ups de uma negociação", description: "Retorna todos os follow-ups vinculados a uma negociação específica." },
          { method: "POST", path: "/relatorio/followup", title: "Criar follow-up", description: "Cria um novo follow-up para uma negociação.", params: [{ label: "Request Body", fields: [{ name: "id_negociacao", type: "number", required: true, description: "ID da negociação" }, { name: "data", type: "string", required: true, description: "Data do follow-up (YYYY-MM-DD)" }, { name: "descricao", type: "string", required: false, description: "Descrição do follow-up" }] }] },
          { method: "PUT", path: "/relatorio/followup/:id", title: "Atualizar follow-up", description: "Atualiza um follow-up existente pelo ID.", params: [{ label: "Path Parameters", fields: [{ name: "id", type: "number", required: true, description: "ID do follow-up" }] }] },
          { method: "DELETE", path: "/relatorio/followup/:id", title: "Excluir follow-up", description: "Remove permanentemente um follow-up pelo ID.", params: [{ label: "Path Parameters", fields: [{ name: "id", type: "number", required: true, description: "ID do follow-up" }] }] },
        ],
      },
      {
        title: "Notificações", endpoints: [
          { method: "GET", path: "/relatorio/notificacoes", title: "Relatório de notificações", description: "Lista notificações enviadas no período." },
          { method: "GET", path: "/relatorio/notificacoes/stats", title: "Estatísticas de notificações", description: "Estatísticas agregadas das notificações." },
        ],
      },
      {
        title: "Facebook CAPI", endpoints: [
          { method: "GET", path: "/relatorio/facebook-capi", title: "Relatório Facebook CAPI", description: "Retorna eventos enviados ao Facebook Conversions API." },
          { method: "GET", path: "/relatorio/facebook-capi/stats", title: "Estatísticas Facebook CAPI", description: "Estatísticas dos eventos do Facebook CAPI." },
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
          { method: "GET", path: "/chat/list", title: "Listar conversas (Inbox)", description: "Retorna a lista de conversas ativas no inbox." },
          { method: "GET", path: "/chat/contato/:id_contato", title: "Obter chat por contato", description: "Retorna o chat de um contato específico." },
          { method: "GET", path: "/chat/contato/:id_contato/mensagens", title: "Mensagens de um contato", description: "Lista todas as mensagens trocadas com um contato." },
        ],
      },
      {
        title: "Mensagens", endpoints: [
          { method: "GET", path: "/chat/mensagens", title: "Buscar mensagens (read-only)", description: "Busca mensagens com filtros. Endpoint somente leitura." },
        ],
      },
      {
        title: "Contexto", endpoints: [
          { method: "GET", path: "/chat/context/v2", title: "Obter contexto do chat V2", description: "Retorna o contexto completo de uma conversa na versão v2." },
        ],
      },
      {
        title: "Configurações", endpoints: [
          { method: "GET", path: "/chat/config/conversas", title: "Obter config de conversas", description: "Retorna as configurações globais de conversas." },
          { method: "PUT", path: "/chat/config/conversas", title: "Atualizar config de conversas", description: "Atualiza as configurações globais de conversas." },
        ],
      },
      {
        title: "Envio de Mensagens (v2)", endpoints: [
          {
            method: "POST", path: "/whatsapp/mensagem/texto", title: "Enviar mensagem de texto",
            description: "Envia uma mensagem de texto via WhatsApp para o número especificado. A API detecta automaticamente o tipo da conexão (v2, v1 ou API-OFICIAL) a partir do id_whatsapp e roteia internamente para o provider correto.",
            warning: "Limitação API-OFICIAL: mensagens fora da janela de 24h só podem ser enviadas como template pré-aprovado pela Meta — esta versão da API ainda não suporta envio de templates.",
            params: [{ label: "Request Body", fields: [{ name: "id_whatsapp", type: "number", required: true, description: "ID da conexão WhatsApp (v2, v1 ou API-OFICIAL)" }, { name: "number", type: "string", required: true, description: "Número do destinatário (ex: 5511999999999)" }, { name: "text", type: "string", required: true, description: "Texto da mensagem" }, { name: "replyId", type: "string", required: false, description: "ID da mensagem para responder (reply) — suporte varia por provider" }] }],
            request: `{\n  "id_whatsapp": 16279,\n  "number": "5511999999999",\n  "text": "Olá! Sua proposta foi aprovada."\n}`,
            response: `{\n  "status": "success",\n  "data": {\n    "messageId": "BAE5F2C3A4B6D8E0",\n    "sent": true\n  },\n  "meta": {\n    "request_id": "550e8400-e29b-41d4-a716-446655440000"\n  }\n}`,
          },
          {
            method: "POST", path: "/whatsapp/mensagem/midia", title: "Enviar mídia via URL",
            description: "Envia uma mensagem com mídia (imagem, vídeo, documento ou áudio) via URL pública.",
            params: [{ label: "Request Body", fields: [{ name: "id_whatsapp", type: "number", required: true, description: "ID da conexão WhatsApp" }, { name: "number", type: "string", required: true, description: "Número do destinatário (ex: 5511999999999)" }, { name: "mediaUrl", type: "string", required: true, description: "URL pública do arquivo de mídia" }, { name: "mediaType", type: "string", required: true, description: "Tipo da mídia: image, video, document, audio" }, { name: "caption", type: "string", required: false, description: "Legenda para imagens e vídeos" }] }],
          },
        ],
      },
    ],
  },
  {
    id: "agente", title: "Agente", prefix: "/multi-agente", count: 28,
    description: "Gerenciamento de agentes de IA, suas configurações, etapas, FAQ, funcionamento, agendamento, funções e gatilhos.",
    subsections: [
      { title: "Agentes", endpoints: [{ method: "GET", path: "/multi-agente/agentes", title: "Listar agentes", description: "Retorna todos os agentes de IA configurados na conta." }] },
      { title: "Regras", endpoints: [{ method: "GET", path: "/multi-agente/agentes/:id_agente/regras", title: "Obter regras do agente", description: "Retorna as regras de comportamento de um agente." }, { method: "PUT", path: "/multi-agente/agentes/:id_agente/regras", title: "Criar/atualizar regras", description: "Cria ou atualiza as regras de um agente." }, { method: "DELETE", path: "/multi-agente/agentes/:id_agente/regras", title: "Excluir regras", description: "Remove as regras de um agente." }] },
      { title: "Etapas", endpoints: [{ method: "GET", path: "/multi-agente/agentes/:id_agente/etapas", title: "Obter etapas do agente", description: "Lista as etapas de conversa de um agente." }, { method: "POST", path: "/multi-agente/agentes/:id_agente/etapas", title: "Criar etapa", description: "Cria uma nova etapa de conversa para o agente." }, { method: "PUT", path: "/multi-agente/etapas/:id", title: "Atualizar etapa", description: "Atualiza uma etapa existente." }, { method: "DELETE", path: "/multi-agente/etapas/:id", title: "Excluir etapa", description: "Remove uma etapa do agente." }] },
      { title: "FAQ", endpoints: [{ method: "GET", path: "/multi-agente/agentes/:id_agente/faq", title: "Obter FAQ do agente", description: "Lista perguntas e respostas do FAQ de um agente." }, { method: "POST", path: "/multi-agente/agentes/:id_agente/faq", title: "Criar FAQ", description: "Adiciona uma entrada ao FAQ do agente." }, { method: "PUT", path: "/multi-agente/faq/:id", title: "Atualizar FAQ", description: "Atualiza uma entrada do FAQ." }, { method: "DELETE", path: "/multi-agente/faq/:id", title: "Excluir FAQ", description: "Remove uma entrada do FAQ." }] },
      { title: "Funcionamento", endpoints: [{ method: "GET", path: "/multi-agente/agentes/:id_agente/funcionamento", title: "Obter horário de funcionamento", description: "Retorna os horários de funcionamento do agente." }, { method: "PUT", path: "/multi-agente/agentes/:id_agente/funcionamento", title: "Criar/atualizar funcionamento", description: "Define os horários de funcionamento do agente." }, { method: "DELETE", path: "/multi-agente/agentes/:id_agente/funcionamento", title: "Excluir funcionamento", description: "Remove a configuração de horário do agente." }] },
      { title: "Agendamento", endpoints: [{ method: "GET", path: "/multi-agente/agentes/:id_agente/agendamento", title: "Obter configuração de agendamento", description: "Retorna as configurações de agendamento do agente." }, { method: "PUT", path: "/multi-agente/agentes/:id_agente/agendamento", title: "Criar/atualizar agendamento", description: "Define as configurações de agendamento do agente." }, { method: "DELETE", path: "/multi-agente/agentes/:id_agente/agendamento", title: "Excluir agendamento", description: "Remove a configuração de agendamento." }] },
      { title: "Funções", endpoints: [{ method: "GET", path: "/multi-agente/agentes/:id_agente/funcoes", title: "Obter funções do agente", description: "Lista as funções (tools) disponíveis para o agente." }, { method: "POST", path: "/multi-agente/agentes/:id_agente/funcoes", title: "Criar função", description: "Adiciona uma nova função ao agente." }, { method: "PUT", path: "/multi-agente/funcoes/:id", title: "Atualizar função", description: "Atualiza uma função existente." }, { method: "DELETE", path: "/multi-agente/funcoes/:id", title: "Excluir função", description: "Remove uma função do agente." }] },
      { title: "Gatilhos", endpoints: [{ method: "GET", path: "/multi-agente/agentes/:id_agente/gatilhos", title: "Listar gatilhos do agente", description: "Lista todos os gatilhos configurados para o agente." }, { method: "POST", path: "/multi-agente/agentes/:id_agente/gatilhos", title: "Criar gatilho", description: "Cria um novo gatilho para o agente." }, { method: "PUT", path: "/multi-agente/agentes/:id_agente/gatilhos/save", title: "Salvar gatilhos em massa", description: "Salva múltiplos gatilhos de uma vez." }, { method: "PUT", path: "/multi-agente/agentes/:id_agente/gatilhos/toggle", title: "Alternar status dos gatilhos", description: "Ativa ou desativa todos os gatilhos do agente." }, { method: "PUT", path: "/multi-agente/gatilhos/:id", title: "Atualizar gatilho", description: "Atualiza um gatilho específico." }, { method: "DELETE", path: "/multi-agente/gatilhos/:id", title: "Excluir gatilho", description: "Remove um gatilho do agente." }] },
    ],
  },
  {
    id: "crm", title: "CRM", prefix: "/crm", count: 73,
    description: "Operações de CRM incluindo funis, negociações, contatos, tags, ações, automações, conversão e mensagens agendadas.",
    subsections: [
      { title: "Funil", endpoints: [{ method: "GET", path: "/crm/funil", title: "Obter funil de vendas", description: "Retorna todos os funis de vendas com seus estágios." }, { method: "GET", path: "/crm/funil/:id", title: "Obter funil por ID", description: "Retorna um funil específico pelo ID." }, { method: "POST", path: "/crm/funil", title: "Criar funil", description: "Cria um novo funil de vendas." }, { method: "PUT", path: "/crm/funil/:id", title: "Atualizar funil", description: "Atualiza um funil existente." }, { method: "GET", path: "/crm/estagios/:id", title: "Obter estágio por ID", description: "Retorna um estágio específico de um funil." }] },
      {
        title: "Negociações", endpoints: [
          { method: "GET", path: "/crm/negociacoes", title: "Listar negociações", description: "Lista todas as negociações com filtros opcionais.", params: [{ label: "Query Parameters", fields: [{ name: "id_funil", type: "number", required: false, description: "Filtrar por funil" }, { name: "id_estagio", type: "number", required: false, description: "Filtrar por estágio" }, { name: "page", type: "number", required: false, description: "Página para paginação" }] }] },
          { method: "GET", path: "/crm/negociacoes/orfas", title: "Listar negociações órfãs", description: "Retorna negociações sem usuário responsável." },
          { method: "GET", path: "/crm/negociacoes/proxima-acao", title: "Negociações com próxima ação", description: "Lista negociações que possuem próxima ação agendada." },
          { method: "GET", path: "/crm/negociacoes/:id", title: "Obter negociação por ID", description: "Retorna uma negociação específica pelo ID." },
          {
            method: "POST", path: "/crm/negociacoes", title: "Criar negociação",
            description: "Cria uma nova negociação no funil.",
            params: [{ label: "Request Body", fields: [{ name: "titulo", type: "string", required: true, description: "Título da negociação" }, { name: "id_contato", type: "number", required: true, description: "ID do contato" }, { name: "id_funil", type: "number", required: true, description: "ID do funil" }, { name: "id_estagio", type: "number", required: true, description: "ID do estágio" }, { name: "descricao", type: "string", required: false, description: "Descrição da negociação" }] }],
            request: `{\n  "titulo": "Carlos Mendes — Contabilidade",\n  "id_contato": 123,\n  "id_funil": 5568,\n  "id_estagio": 34490,\n  "descricao": "Quantidade de clientes: 50-200"\n}`,
            response: `{\n  "status": "success",\n  "data": { "id": 9871, "titulo": "Carlos Mendes — Contabilidade" },\n  "meta": { "request_id": "uuid" }\n}`,
          },
          { method: "PUT", path: "/crm/negociacoes/:id", title: "Atualizar negociação", description: "Atualiza os dados de uma negociação existente." },
          { method: "DELETE", path: "/crm/negociacoes/:id", title: "Excluir negociação", description: "Remove permanentemente uma negociação." },
          { method: "PUT", path: "/crm/negociacoes/estagio", title: "Atualizar estágio da negociação", description: "Move a negociação para outro estágio do mesmo funil." },
          { method: "PUT", path: "/crm/negociacoes/funil-estagio", title: "Atualizar funil e estágio", description: "Move a negociação para um funil e estágio diferentes." },
          { method: "PUT", path: "/crm/negociacoes/score", title: "Atualizar score da negociação", description: "Atualiza a pontuação de qualificação da negociação." },
          { method: "PUT", path: "/crm/negociacoes/proxima-acao", title: "Atualizar próxima ação", description: "Define ou atualiza a próxima ação agendada para a negociação." },
          { method: "PUT", path: "/crm/negociacoes/valores", title: "Atualizar valores da negociação", description: "Atualiza os valores monetários da negociação." },
          { method: "PUT", path: "/crm/negociacoes/extras", title: "Atualizar campos extras", description: "Atualiza campos personalizados da negociação." },
          { method: "PUT", path: "/crm/negociacoes/departamento", title: "Atualizar departamento da negociação", description: "Atribui a negociação a um departamento." },
          { method: "GET", path: "/crm/deal-context", title: "Obter contexto completo do deal", description: "Retorna todos os dados consolidados de uma negociação: contato, histórico, ações e mensagens." },
        ],
      },
      {
        title: "Contatos", endpoints: [
          { method: "GET", path: "/crm/contatos", title: "Listar contatos", description: "Retorna todos os contatos com filtros opcionais." },
          {
            method: "POST", path: "/crm/contatos", title: "Criar contato",
            description: "Cria um novo contato no CRM.",
            params: [{ label: "Request Body", fields: [{ name: "nome_contato", type: "string", required: true, description: "Nome completo do contato" }, { name: "email", type: "string", required: false, description: "E-mail do contato" }, { name: "telefone", type: "string", required: true, description: "Telefone (somente dígitos)" }, { name: "observacao", type: "string", required: false, description: "Observações adicionais" }] }],
            request: `{\n  "nome_contato": "Carlos Mendes",\n  "email": "carlos@empresa.com",\n  "telefone": "5511999999999",\n  "observacao": "Interesse em abertura de CNPJ"\n}`,
          },
          { method: "GET", path: "/crm/contatos/by-remote-jid", title: "Buscar contato por Remote JID", description: "Busca um contato pelo identificador JID do WhatsApp." },
          { method: "GET", path: "/crm/contatos/by-usuario/:id_usuario", title: "Contatos por usuário", description: "Lista contatos atribuídos a um usuário específico." },
          { method: "GET", path: "/crm/contatos/by-departamento/:id_departamento", title: "Contatos por departamento", description: "Lista contatos atribuídos a um departamento." },
          { method: "GET", path: "/crm/contatos/usuarios-com-contatos", title: "Usuários com contatos", description: "Retorna usuários que possuem contatos atribuídos." },
          { method: "GET", path: "/crm/contatos/departamentos-com-contatos", title: "Departamentos com contatos", description: "Retorna departamentos que possuem contatos." },
          { method: "GET", path: "/crm/contatos/:id", title: "Obter contato por ID", description: "Retorna um contato específico pelo ID." },
          { method: "PUT", path: "/crm/contatos/:id", title: "Atualizar contato", description: "Atualiza os dados de um contato existente." },
          { method: "POST", path: "/crm/contatos/find-deals", title: "Buscar deals por contato", description: "Retorna todas as negociações vinculadas a um contato." },
        ],
      },
      { title: "Fontes e Anúncios", endpoints: [{ method: "GET", path: "/crm/fontes", title: "Listar fontes de lead", description: "Retorna todas as fontes de origem de leads cadastradas." }, { method: "GET", path: "/crm/anuncios", title: "Listar anúncios", description: "Retorna todos os anúncios rastreados no sistema." }] },
      { title: "Tags", endpoints: [{ method: "GET", path: "/crm/tags", title: "Listar tags", description: "Lista todas as tags disponíveis na conta." }, { method: "GET", path: "/crm/tags/by-negociacao", title: "Tags de uma negociação", description: "Retorna as tags atribuídas a uma negociação." }, { method: "POST", path: "/crm/tags", title: "Adicionar tag à negociação", description: "Atribui uma tag a uma negociação." }, { method: "DELETE", path: "/crm/tags", title: "Remover tag da negociação", description: "Remove uma tag de uma negociação." }] },
      { title: "Ações", endpoints: [{ method: "GET", path: "/crm/acoes/modelos", title: "Listar modelos de ação", description: "Lista todos os modelos de ação disponíveis." }, { method: "GET", path: "/crm/acoes/modelos/:id", title: "Obter modelo de ação por ID", description: "Retorna um modelo de ação pelo ID." }, { method: "POST", path: "/crm/acoes/modelos", title: "Criar modelo de ação", description: "Cria um novo modelo de ação." }, { method: "PUT", path: "/crm/acoes/modelos/:id", title: "Atualizar modelo de ação", description: "Atualiza um modelo de ação existente." }, { method: "DELETE", path: "/crm/acoes/modelos/:id", title: "Excluir modelo de ação", description: "Remove um modelo de ação." }, { method: "GET", path: "/crm/acoes", title: "Listar ações", description: "Lista todas as ações com filtros opcionais." }, { method: "GET", path: "/crm/acoes/negociacao/:id_negociacao", title: "Ações de uma negociação", description: "Lista ações vinculadas a uma negociação específica." }, { method: "POST", path: "/crm/acoes", title: "Criar ação", description: "Cria uma nova ação no CRM." }, { method: "PUT", path: "/crm/acoes/:id", title: "Atualizar ação", description: "Atualiza uma ação existente." }] },
      {
        title: "Conversão", endpoints: [
          { method: "GET", path: "/crm/conversao/marcadores", title: "Listar marcadores de conversão", description: "Lista todos os marcadores de conversão." },
          { method: "GET", path: "/crm/conversao/marcadores/:id", title: "Obter marcador por ID", description: "Retorna um marcador de conversão pelo ID." },
          { method: "POST", path: "/crm/conversao/marcadores", title: "Criar marcador de conversão", description: "Cria um novo marcador de conversão." },
          { method: "PUT", path: "/crm/conversao/marcadores/:id", title: "Atualizar marcador", description: "Atualiza um marcador de conversão existente." },
          { method: "PUT", path: "/crm/conversao/marcadores/:id/toggle", title: "Ativar/desativar marcador", description: "Alterna o status ativo/inativo do marcador." },
          { method: "DELETE", path: "/crm/conversao/marcadores/:id", title: "Excluir marcador", description: "Remove um marcador de conversão." },
          { method: "GET", path: "/crm/conversao/regras", title: "Listar regras de conversão", description: "Lista todas as regras de conversão configuradas." },
          { method: "GET", path: "/crm/conversao/regras/:id", title: "Obter regra por ID", description: "Retorna uma regra de conversão pelo ID." },
          { method: "POST", path: "/crm/conversao/regras", title: "Criar regra de conversão", description: "Cria uma nova regra de conversão." },
          { method: "PUT", path: "/crm/conversao/regras/:id", title: "Atualizar regra de conversão", description: "Atualiza uma regra de conversão existente." },
          { method: "PUT", path: "/crm/conversao/regras/:id/toggle", title: "Ativar/desativar regra", description: "Alterna o status ativo/inativo da regra." },
          { method: "DELETE", path: "/crm/conversao/regras/:id", title: "Excluir regra de conversão", description: "Remove uma regra de conversão." },
        ],
      },
      { title: "Automações", endpoints: [{ method: "GET", path: "/crm/automacoes", title: "Listar automações", description: "Lista todas as automações configuradas." }, { method: "GET", path: "/crm/automacoes/:id", title: "Obter automação por ID", description: "Retorna uma automação específica." }, { method: "POST", path: "/crm/automacoes", title: "Criar automação", description: "Cria uma nova automação de CRM." }, { method: "PUT", path: "/crm/automacoes/:id", title: "Atualizar automação", description: "Atualiza uma automação existente." }, { method: "PUT", path: "/crm/automacoes/:id/toggle", title: "Ativar/desativar automação", description: "Alterna o status ativo/inativo da automação." }, { method: "DELETE", path: "/crm/automacoes/:id", title: "Excluir automação", description: "Remove uma automação." }] },
      { title: "Modelos de Mensagem", endpoints: [{ method: "GET", path: "/crm/mensagens-agendadas/modelos", title: "Listar modelos de mensagem", description: "Lista todos os modelos de mensagem agendada." }, { method: "GET", path: "/crm/mensagens-agendadas/modelos/:id", title: "Obter modelo por ID", description: "Retorna um modelo de mensagem pelo ID." }, { method: "POST", path: "/crm/mensagens-agendadas/modelos", title: "Criar modelo de mensagem", description: "Cria um novo modelo de mensagem." }, { method: "PUT", path: "/crm/mensagens-agendadas/modelos/:id", title: "Atualizar modelo de mensagem", description: "Atualiza um modelo existente." }, { method: "DELETE", path: "/crm/mensagens-agendadas/modelos/:id", title: "Excluir modelo de mensagem", description: "Remove um modelo de mensagem." }] },
      { title: "Mensagens Agendadas", endpoints: [{ method: "GET", path: "/crm/mensagens-agendadas", title: "Listar mensagens agendadas", description: "Lista todas as mensagens agendadas." }, { method: "GET", path: "/crm/mensagens-agendadas/:id", title: "Obter mensagem agendada por ID", description: "Retorna uma mensagem agendada pelo ID." }, { method: "POST", path: "/crm/mensagens-agendadas", title: "Criar mensagem agendada", description: "Agenda o envio de uma mensagem para uma data futura." }, { method: "PUT", path: "/crm/mensagens-agendadas/:id", title: "Atualizar mensagem agendada", description: "Atualiza uma mensagem agendada." }, { method: "DELETE", path: "/crm/mensagens-agendadas/:id", title: "Cancelar mensagem agendada", description: "Cancela e remove uma mensagem agendada." }] },
    ],
  },
  {
    id: "usuarios", title: "Usuários", prefix: "/usuarios", count: 1,
    description: "Listagem de usuários ativos do cliente autenticado.",
    subsections: [
      { title: "Usuários", endpoints: [{ method: "GET", path: "/usuarios", title: "Listar usuários", description: "Retorna todos os usuários ativos da conta autenticada.", response: `{\n  "status": "success",\n  "data": [\n    { "id": 1, "nome": "João Silva", "email": "joao@empresa.com", "ativo": true }\n  ],\n  "meta": { "request_id": "uuid" }\n}` }] },
    ],
  },
  {
    id: "whatsapp", title: "WhatsApp", prefix: "/whatsapp", count: 2,
    description: "Gerenciamento de conexões WhatsApp configuradas no sistema.",
    subsections: [
      {
        title: "Conexões", endpoints: [
          { method: "GET", path: "/whatsapp/conexoes", title: "Listar conexões WhatsApp", description: "Retorna todas as conexões WhatsApp configuradas na conta.", response: `{\n  "status": "success",\n  "data": [\n    {\n      "id": 16279,\n      "nome": "Principal",\n      "status": "connected",\n      "tipo": "v2"\n    }\n  ],\n  "meta": { "request_id": "uuid" }\n}` },
          { method: "GET", path: "/whatsapp/conexoes/:id", title: "Obter conexão por ID", description: "Retorna os detalhes de uma conexão WhatsApp específica.", params: [{ label: "Path Parameters", fields: [{ name: "id", type: "number", required: true, description: "ID da conexão WhatsApp" }] }] },
        ],
      },
    ],
  },
  {
    id: "departamentos", title: "Departamentos", prefix: "/departamentos", count: 9,
    description: "CRUD de departamentos e gerenciamento de usuários dentro de cada departamento.",
    subsections: [
      { title: "Departamentos", endpoints: [{ method: "GET", path: "/departamentos", title: "Listar departamentos", description: "Lista todos os departamentos da conta." }, { method: "GET", path: "/departamentos/:id", title: "Obter departamento por ID", description: "Retorna um departamento específico." }, { method: "POST", path: "/departamentos", title: "Criar departamento", description: "Cria um novo departamento." }, { method: "PUT", path: "/departamentos/:id", title: "Atualizar departamento", description: "Atualiza um departamento existente." }, { method: "DELETE", path: "/departamentos/:id", title: "Excluir departamento", description: "Remove um departamento." }] },
      { title: "Usuários do Departamento", endpoints: [{ method: "GET", path: "/departamentos/:id/usuarios/disponiveis", title: "Usuários disponíveis", description: "Lista usuários disponíveis para adicionar ao departamento." }, { method: "POST", path: "/departamentos/:id/usuarios", title: "Adicionar usuário ao departamento", description: "Adiciona um usuário a um departamento." }, { method: "PUT", path: "/departamentos/:id/usuarios/:id_usuario", title: "Atualizar usuário no departamento", description: "Atualiza as permissões de um usuário no departamento." }, { method: "DELETE", path: "/departamentos/:id/usuarios/:id_usuario", title: "Remover usuário do departamento", description: "Remove um usuário do departamento." }] },
    ],
  },
  {
    id: "sessoes", title: "Sessões de IA", prefix: "/sessoes", count: 14,
    description: "Gerenciamento de sessões ativas do agente de IA, exclusões temporárias e permanentes.",
    subsections: [
      { title: "Consulta", endpoints: [{ method: "GET", path: "/sessoes", title: "Listar sessões ativas", description: "Retorna todas as sessões ativas do agente de IA." }, { method: "GET", path: "/sessoes/exclusoes", title: "Listar exclusões temporárias", description: "Lista contatos com exclusão temporária do agente." }, { method: "GET", path: "/sessoes/exclusoes-permanentes", title: "Listar exclusões permanentes", description: "Lista contatos com exclusão permanente." }, { method: "GET", path: "/sessoes/all", title: "Obter todos os dados consolidados", description: "Retorna sessões, exclusões temporárias e permanentes de uma vez." }, { method: "GET", path: "/sessoes/by-remote-jid", title: "Buscar sessão por Remote JID", description: "Busca uma sessão pelo JID do WhatsApp." }, { method: "GET", path: "/sessoes/exclusoes/by-remote-jid", title: "Buscar exclusão temporária por JID", description: "Busca exclusão temporária pelo JID." }, { method: "GET", path: "/sessoes/exclusoes-permanentes/by-remote-jid", title: "Buscar exclusão permanente por JID", description: "Busca exclusão permanente pelo JID." }] },
      { title: "Gerenciamento", endpoints: [{ method: "POST", path: "/sessoes/by-contact", title: "Buscar sessão por contato", description: "Busca sessões vinculadas a um contato." }, { method: "DELETE", path: "/sessoes/:id", title: "Excluir sessão por ID", description: "Remove uma sessão ativa." }, { method: "DELETE", path: "/sessoes/exclusoes/:id", title: "Excluir exclusão temporária", description: "Remove uma exclusão temporária." }, { method: "DELETE", path: "/sessoes/exclusoes-permanentes/:id", title: "Excluir exclusão permanente", description: "Remove uma exclusão permanente." }, { method: "POST", path: "/sessoes/delete-by-remote-jid", title: "Excluir por Remote JID", description: "Remove sessões pelo JID do WhatsApp." }, { method: "POST", path: "/sessoes/exclusoes-permanentes/import", title: "Importar exclusões permanentes em massa", description: "Importa múltiplas exclusões permanentes de uma vez." }, { method: "POST", path: "/sessoes/bulk-delete", title: "Excluir sessões em massa", description: "Remove múltiplas sessões de uma vez." }] },
    ],
  },
  {
    id: "agent-config", title: "Configurações do Agente", prefix: "/agent-config", count: 9,
    description: "Gerenciamento das configurações do agente de IA, chaves de API externas (OpenAI, ElevenLabs) e vozes.",
    subsections: [
      { title: "Configuração Geral", endpoints: [{ method: "GET", path: "/agent-config", title: "Obter configuração do agente", description: "Retorna a configuração atual do agente de IA." }, { method: "PUT", path: "/agent-config", title: "Salvar configuração do agente", description: "Salva as configurações do agente." }, { method: "GET", path: "/agent-config/negociacao", title: "Obter config de negociação", description: "Retorna configurações específicas de negociação do agente." }] },
      { title: "Chaves de API", endpoints: [{ method: "DELETE", path: "/agent-config/openai-key", title: "Remover chave OpenAI", description: "Remove a chave de API da OpenAI configurada." }, { method: "DELETE", path: "/agent-config/elevenlabs-key", title: "Remover chave ElevenLabs", description: "Remove a chave de API do ElevenLabs." }, { method: "POST", path: "/agent-config/openai-key/validate", title: "Validar chave OpenAI", description: "Valida se a chave da OpenAI é válida e está ativa." }, { method: "POST", path: "/agent-config/elevenlabs-key/validate", title: "Validar chave ElevenLabs", description: "Valida se a chave do ElevenLabs é válida." }] },
      { title: "Vozes ElevenLabs", endpoints: [{ method: "GET", path: "/agent-config/elevenlabs/voices", title: "Listar vozes ElevenLabs", description: "Retorna as vozes disponíveis na conta ElevenLabs." }, { method: "POST", path: "/agent-config/elevenlabs/voices/:voice_id/preview", title: "Pré-visualizar voz ElevenLabs", description: "Gera um áudio de preview com a voz selecionada." }] },
    ],
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function MethodBadge({ method }: { method: Method }) {
  const s = METHOD_STYLE[method]
  return (
    <span
      className="inline-flex items-center justify-center rounded px-2 py-0.5 text-xs font-bold font-mono flex-shrink-0"
      style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}`, minWidth: 52 }}
    >
      {method}
    </span>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800) }}
      className="flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors"
      style={{ color: copied ? "#6C4FE8" : "#6B7280" }}
    >
      {copied
        ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
        : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
      }
      {copied ? "Copiado" : "Copiar"}
    </button>
  )
}

function FieldTable({ fields }: { fields: Field[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-neutral-200 mt-3">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-neutral-50 border-b border-neutral-200">
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wide w-40">Nome</th>
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wide w-24">Tipo</th>
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wide w-28">Obrigatório</th>
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f, i) => (
            <tr key={i} className={i < fields.length - 1 ? "border-b border-neutral-100" : ""}>
              <td className="px-4 py-3">
                <code className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: "#EDE9FE", color: "#4F39B0" }}>{f.name}</code>
              </td>
              <td className="px-4 py-3 text-xs text-neutral-500 font-mono">{f.type}</td>
              <td className="px-4 py-3">
                {f.required
                  ? <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#FEF9C3", color: "#854D0E" }}>sim</span>
                  : <span className="text-xs text-neutral-400">não</span>}
              </td>
              <td className="px-4 py-3 text-xs text-neutral-600 leading-relaxed">{f.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function EndpointRow({ endpoint }: { endpoint: Endpoint }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
      {/* ── Clickable header ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <MethodBadge method={endpoint.method} />
          <code className="text-sm font-mono text-neutral-700 truncate">{endpoint.path}</code>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-sm text-neutral-500 hidden md:block truncate max-w-xs">{endpoint.title}</span>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className="text-neutral-400 flex-shrink-0 transition-transform duration-200"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* ── Expanded body ── */}
      {open && (
        <div className="border-t border-neutral-200 bg-neutral-50 px-5 py-5">
          {/* Title + API Key badge */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h4 className="text-base font-semibold text-neutral-900">{endpoint.title}</h4>
            <span
              className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1.5"
              style={{ background: "#EDE9FE", color: "#4F39B0", borderColor: "#DDD6FE" }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
              API Key
            </span>
          </div>

          {endpoint.description && (
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">{endpoint.description}</p>
          )}

          {/* Warning */}
          {endpoint.warning && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 mb-4 leading-relaxed">
              {endpoint.warning}
            </div>
          )}

          {/* Params */}
          {endpoint.params?.map((group, gi) => (
            <div key={gi} className="mb-4">
              <p className="text-sm font-semibold text-neutral-800 mb-1">{group.label}</p>
              <FieldTable fields={group.fields} />
            </div>
          ))}

          {/* Request example */}
          {endpoint.request && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Exemplo de Request</p>
                <CopyButton text={endpoint.request} />
              </div>
              <pre className="bg-neutral-900 text-neutral-100 rounded-xl px-5 py-4 text-xs font-mono overflow-x-auto leading-relaxed">{endpoint.request}</pre>
            </div>
          )}

          {/* Response example */}
          {endpoint.response && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Exemplo de Response</p>
                <CopyButton text={endpoint.response} />
              </div>
              <pre className="bg-neutral-900 text-neutral-100 rounded-xl px-5 py-4 text-xs font-mono overflow-x-auto leading-relaxed">{endpoint.response}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Introduction section ────────────────────────────────────────────────────
function IntroSection() {
  const successJson = `{\n  "status": "success",\n  "data": { ... },\n  "meta": { "request_id": "uuid" }\n}`
  const errorJson   = `{\n  "status": "error",\n  "error": {\n    "code": "ERROR_CODE",\n    "message": "Descrição do erro",\n    "details": ["...detalhes (opcional)"]\n  },\n  "meta": { "request_id": "uuid" }\n}`

  return (
    <section id="introducao" className="mb-16">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5"
        style={{ background: "#6C4FE815", color: "#4F39B0", border: "1px solid #6C4FE830" }}>
        API REST v1
      </span>
      <h1 className="text-3xl font-bold text-neutral-900 mb-3 text-balance">API de Integração</h1>
      <p className="text-neutral-500 text-base leading-relaxed mb-8 max-w-2xl">
        API REST para integração com o sistema de CRM, WhatsApp e Agentes de IA. Permite automatizar operações de negociações, contatos, mensagens, relatórios e configurações.
      </p>

      {/* Base URL */}
      <div className="mb-8">
        <h2 className="text-base font-semibold text-neutral-900 mb-3">Base URL</h2>
        <div className="flex items-center gap-3 bg-neutral-950 rounded-xl px-5 py-4">
          <span className="text-neutral-600 font-mono text-sm select-none">$</span>
          <code className="text-sm font-mono text-emerald-400">https://integracao.agendasistemacrm.com.br/api/v1</code>
        </div>
      </div>

      {/* Auth */}
      <div className="mb-8">
        <h2 className="text-base font-semibold text-neutral-900 mb-2">Autenticação</h2>
        <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
          Todas as requisições (exceto health check) requerem autenticação via API Key. Utilize um dos métodos:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[["Opção 1", "Authorization: Bearer <api_key>"], ["Opção 2", "X-API-Key: <api_key>"]].map(([label, val]) => (
            <div key={label} className="rounded-xl border border-neutral-100 bg-neutral-50 p-4">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">{label}</p>
              <code className="text-sm font-mono text-neutral-700">{val}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Rate Limits */}
      <div className="mb-8">
        <h2 className="text-base font-semibold text-neutral-900 mb-3">Rate Limits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl border border-neutral-100 p-4 flex items-start gap-3">
            <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: "#DCFCE7", color: "#166534" }}>GET</span>
            <div><p className="text-sm font-semibold text-neutral-800">Endpoints de leitura</p><p className="text-sm text-neutral-500">60 requisições/min</p></div>
          </div>
          <div className="rounded-xl border border-neutral-100 p-4 flex items-start gap-3">
            <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: "#DBEAFE", color: "#1E40AF" }}>POST / PUT / DELETE</span>
            <div><p className="text-sm font-semibold text-neutral-800">Endpoints de escrita</p><p className="text-sm text-neutral-500">30 requisições/min</p></div>
          </div>
        </div>
        <p className="text-sm text-neutral-500 mb-2">Headers retornados:</p>
        <div className="flex flex-wrap gap-2">
          {["X-RateLimit-Limit", "X-RateLimit-Remaining", "Retry-After"].map((h) => (
            <code key={h} className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-lg font-mono">{h}</code>
          ))}
        </div>
      </div>

      {/* Response format */}
      <div className="mb-8">
        <h2 className="text-base font-semibold text-neutral-900 mb-4">Formato de Respostas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[["Sucesso", successJson, "#16a34a"], ["Erro", errorJson, "#dc2626"]].map(([label, code, color]) => (
            <div key={label as string}>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-sm font-semibold" style={{ color: color as string }}>{label as string}</p>
                <CopyButton text={code as string} />
              </div>
              <pre className="bg-neutral-900 text-neutral-100 rounded-xl px-5 py-4 text-xs font-mono overflow-x-auto leading-relaxed">{code as string}</pre>
            </div>
          ))}
        </div>
      </div>

      {/* Error codes */}
      <div>
        <h2 className="text-base font-semibold text-neutral-900 mb-3">Códigos de Erro</h2>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                {["HTTP", "Código", "Descrição"].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["401", "UNAUTHORIZED",        "API key inválida ou ausente"],
                ["403", "FORBIDDEN",           "Conta inativa ou permissão insuficiente"],
                ["404", "NOT_FOUND",           "Recurso não encontrado"],
                ["400", "VALIDATION_ERROR",    "Dados inválidos na requisição"],
                ["429", "RATE_LIMIT_EXCEEDED", "Limite de requisições excedido"],
                ["500", "INTERNAL_ERROR",      "Erro interno do servidor"],
              ].map(([code, key, desc], i, arr) => (
                <tr key={code} className={i < arr.length - 1 ? "border-b border-neutral-100" : ""}>
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-neutral-600">{code}</td>
                  <td className="px-4 py-3"><code className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: "#FEE2E2", color: "#991B1B" }}>{key}</code></td>
                  <td className="px-4 py-3 text-xs text-neutral-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ─── Section block ───────────────────────────────────────────────────────────
function SectionBlock({ section }: { section: Section }) {
  return (
    <section id={section.id} className="mb-16">
      <div className="flex items-start gap-3 mb-6 pb-5 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-2xl font-bold text-neutral-900">{section.title}</h2>
            <code className="text-xs font-mono text-neutral-400">{section.prefix}</code>
            <span className="text-xs text-neutral-400">{section.count} endpoints</span>
          </div>
          <p className="text-sm text-neutral-500 leading-relaxed">{section.description}</p>
        </div>
      </div>

      {section.subsections.map((sub, si) => (
        <div key={si} className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-sm font-semibold text-neutral-700">{sub.title}</h3>
            <span className="text-xs text-neutral-400 font-mono">{sub.endpoints.length}</span>
          </div>
          <div className="flex flex-col gap-2">
            {sub.endpoints.map((ep, ei) => (
              <EndpointRow key={ei} endpoint={ep} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

// ─── Root ────────────────────────────────────────────────────────────────────
export default function DocsContent() {
  return (
    <main className={`flex-1 min-w-0 px-6 lg:px-10 py-10 max-w-4xl ${inter.className}`}>
      <IntroSection />
      {SECTIONS.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}
    </main>
  )
}
