import { NextRequest, NextResponse } from "next/server"

const BASE_URL = "https://integracao.agendasistemacrm.com.br/api/v1"
const API_KEY = process.env.AGENDA_SISTEMA_API_KEY!
const FUNNEL_ID = 5568
const STAGE_ID = 34490
const WHATSAPP_CONNECTION_ID = "16279"

const HEADERS = {
  "Content-Type": "application/json",
  "X-API-Key": API_KEY,
}

// Mensagens personalizadas por segmento
function buildWhatsAppMessage(name: string, segment: string): string {
  const firstName = name.trim().split(" ")[0]

  const messages: Record<string, string> = {
    "Contabilidade": `Olá, ${firstName}! Tudo bem?\n\nAqui é o Pedro, da Yollo I.A.\n\nVi que você tem interesse em automatizar o atendimento do seu escritório contábil. Trabalhamos com agendamento automático de reuniões, atendimento via IA no WhatsApp, distribuição de conversas por departamento e CRM com movimentação automática de leads  -  tudo pensado para escritórios contábeis que querem crescer sem aumentar a equipe.\n\nPosso te mostrar como funciona? É rápido e sem compromisso.`,
    "Advocacia": `Olá, ${firstName}! Tudo bem?\n\nAqui é o Pedro, da Yollo I.A.\n\nVi que você tem interesse em otimizar o atendimento do seu escritório jurídico. Nossa solução atende clientes e prospects 24h por dia no WhatsApp, agenda reuniões de forma automática e encaminha cada caso para o advogado responsável  -  sem sobrecarregar sua equipe.\n\nPodemos conversar sobre como isso funcionaria no seu escritório?`,
    "Imóveis": `Olá, ${firstName}! Tudo bem?\n\nAqui é o Pedro, da Yollo I.A.\n\nVi que você atua no mercado imobiliário e tem interesse em automatizar o atendimento de leads pelo WhatsApp. Nossa IA atende compradores e locatários a qualquer hora, agenda visitas e mantém o lead aquecido até o fechamento.\n\nPosso te mostrar uma demonstração rápida?`,
    "Agência de Marketing": `Olá, ${firstName}! Tudo bem?\n\nAqui é o Pedro, da Yollo I.A.\n\nVi que você tem interesse em automação de WhatsApp para sua agência ou para os clientes dela. Trabalhamos com atendimento automatizado, qualificação de leads, disparo em massa personalizado e relatórios de performance.\n\nPosso te mostrar como funciona na prática?`,
    "Estética e Saúde": `Olá, ${firstName}! Tudo bem?\n\nAqui é o Pedro, da Yollo I.A.\n\nVi que você tem interesse em automatizar o atendimento da sua clínica pelo WhatsApp. Nossa IA agenda consultas, responde dúvidas dos pacientes 24h por dia e envia lembretes automáticos  -  tudo sem precisar de um atendente disponível o tempo todo.\n\nPosso te mostrar como funciona?`,
  }

  return (
    messages[segment] ??
    `Olá, ${firstName}! Tudo bem?\n\nAqui é o Pedro, da Yollo I.A.\n\nVi que você tem interesse em automatizar o atendimento do seu negócio pelo WhatsApp. Posso te mostrar como funciona? É rápido e sem compromisso.`
  )
}

// Cria o contato no CRM
async function createContact(payload: {
  name: string
  email: string
  phone: string
  extra?: string
}): Promise<string | null> {
  try {
    const phoneDigits = payload.phone.replace(/\D/g, "")
    const body = {
      nome_contato: payload.name,
      email: payload.email,
      telefone: phoneDigits,
      observacao: payload.extra ?? "",
    }
    const res = await fetch(`${BASE_URL}/crm/contatos`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (!res.ok) return null
    return data?.data?.id ?? data?.id ?? null
  } catch {
    return null
  }
}

// Labels legíveis para os campos extras de cada formulário
const FIELD_LABELS: Record<string, string> = {
  procedures:   "Procedimentos oferecidos",
  clients:      "Quantidade de clientes",
  area:         "Área de atuação",
  niche:        "Nicho de mercado",
  propertyType: "Foco da imobiliária",
  extra:        "Informação adicional",
}

function buildDealDescription(extra: string): string {
  if (!extra) return ""
  // extra vem no formato "chave: valor | chave: valor"
  return extra
    .split(" | ")
    .map((entry) => {
      const [key, ...rest] = entry.split(": ")
      const label = FIELD_LABELS[key.trim()] ?? key.trim()
      return `${label}: ${rest.join(": ")}`
    })
    .join("\n")
}

// Cria a negociação no funil
async function createDeal(
  contactId: string,
  contactName: string,
  segment: string,
  description: string
): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/crm/negociacoes`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        titulo: `${contactName}  -  ${segment}`,
        descricao: description,
        id_contato: contactId,
        id_funil: FUNNEL_ID,
        id_estagio: STAGE_ID,
      }),
    })
    return res.ok
  } catch {
    return false
  }
}

// Envia mensagem de texto no WhatsApp
async function sendWhatsAppMessage(
  connectionId: string,
  phone: string,
  message: string
): Promise<boolean> {
  try {
    const phoneDigits = phone.replace(/\D/g, "")
    const res = await fetch(`${BASE_URL}/whatsapp/mensagem/texto`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        id_whatsapp: Number(connectionId),
        number: phoneDigits,
        text: message,
      }),
    })
    return res.ok
  } catch {
    return false
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, segment, ...rest } = body

    if (!name || !phone) {
      return NextResponse.json({ error: "Nome e telefone são obrigatórios." }, { status: 400 })
    }

    // Campos extras do formulário (procedimentos, nicho, área, etc.)
    const extraEntries = Object.entries(rest)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join(" | ")

    // 1. Criar contato
    const contactId = await createContact({ name, email, phone, extra: extraEntries })
    if (!contactId) {
      return NextResponse.json(
        { error: "Não foi possível criar o contato no CRM. Verifique a API Key." },
        { status: 500 }
      )
    }

    // 2. Criar negociação com nome do lead no título e campo selecionado na descrição
    const dealDescription = buildDealDescription(extraEntries)
    await createDeal(contactId, name, segment ?? "Geral", dealDescription)

    // 3. Enviar mensagem WhatsApp imediatamente com a conexão configurada
    const message = buildWhatsAppMessage(name, segment ?? "")
    await sendWhatsAppMessage(WHATSAPP_CONNECTION_ID, phone, message)

    return NextResponse.json({ success: true, contactId })
  } catch (err) {
    console.error("[crm/route]", err)
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 })
  }
}
