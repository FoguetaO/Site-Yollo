import { NextRequest, NextResponse } from "next/server"

const BASE_URL = "https://app.agendasistemacrm.com.br/api"
const API_KEY = process.env.AGENDA_SISTEMA_API_KEY!
const FUNNEL_ID = 5568
const STAGE_ID = 34490

const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
}

// Mensagens personalizadas por segmento
function buildWhatsAppMessage(name: string, segment: string): string {
  const firstName = name.trim().split(" ")[0]

  const messages: Record<string, string> = {
    "Contabilidade": `Olá, ${firstName}! Tudo bem? 😊 Aqui é da equipe Yollo IA.\n\nVi que você tem interesse em automatizar o atendimento do seu escritório contábil pelo WhatsApp. Trabalhamos com agendamento automático, distribuição por departamento e CRM integrado — tudo pensado para a rotina de quem atua na área contábil.\n\nPosso te mostrar como funciona? É rápido e sem compromisso!`,
    "Advocacia": `Olá, ${firstName}! Tudo bem? Aqui é da equipe Yollo IA.\n\nVi que você tem interesse em otimizar o atendimento do seu escritório jurídico. Nossa solução cuida do primeiro contato dos clientes 24h por dia, agenda reuniões e encaminha cada caso para o advogado responsável — sem sobrecarregar sua equipe.\n\nPodemos conversar sobre como isso funcionaria no seu escritório?`,
    "Imóveis": `Olá, ${firstName}! Aqui é da equipe Yollo IA.\n\nVi que você atua no mercado imobiliário e tem interesse em automatizar o atendimento de leads pelo WhatsApp. Nossa IA qualifica compradores e locatários, agenda visitas e mantém o interesse do cliente quente até o fechamento.\n\nPosso te mostrar uma demonstração rápida?`,
    "Agência de Marketing": `Olá, ${firstName}! Aqui é da equipe Yollo IA.\n\nVi que você tem interesse em usar automação de WhatsApp para sua agência ou para os clientes dela. Trabalhamos com prospecção ativa, atendimento automatizado e relatórios de performance — tudo via API.\n\nPosso te mostrar como funciona na prática?`,
  }

  return (
    messages[segment] ??
    `Olá, ${firstName}! Aqui é da equipe Yollo IA. Vi que você tem interesse em automatizar o atendimento do seu negócio pelo WhatsApp. Posso te mostrar como funciona? É rápido e sem compromisso!`
  )
}

// Busca a primeira conexão WhatsApp disponível na conta
async function getWhatsAppConnectionId(): Promise<string | null> {
  try {
    const res = await fetch(`${BASE_URL}/whatsapp/conexoes`, { headers: HEADERS })
    if (!res.ok) return null
    const data = await res.json()
    // Tenta pegar a primeira conexão conectada
    const connections: { id: string; status?: string; connected?: boolean }[] =
      Array.isArray(data) ? data : data?.data ?? data?.conexoes ?? []
    const active = connections.find(
      (c) => c.status === "connected" || c.connected === true
    )
    return active?.id ?? connections[0]?.id ?? null
  } catch {
    return null
  }
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
    const res = await fetch(`${BASE_URL}/crm/contatos`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        nome: payload.name,
        email: payload.email,
        telefone: phoneDigits,
        observacao: payload.extra ?? "",
      }),
    })
    if (!res.ok) return null
    const data = await res.json()
    return data?.id ?? data?.data?.id ?? null
  } catch {
    return null
  }
}

// Cria a negociação no funil
async function createDeal(contactId: string, segment: string): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/crm/negocios`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        titulo: `Lead Yollo IA — ${segment}`,
        contato_id: contactId,
        funil_id: FUNNEL_ID,
        estagio_id: STAGE_ID,
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
        conexao_id: connectionId,
        numero: phoneDigits,
        mensagem: message,
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

    // Extra info: any additional field (procedures, clients, area, niche, etc.)
    const extraEntries = Object.entries(rest)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join(" | ")

    // 1. Buscar ID da conexão WhatsApp
    const connectionId = await getWhatsAppConnectionId()

    // 2. Criar contato
    const contactId = await createContact({ name, email, phone, extra: extraEntries })
    if (!contactId) {
      return NextResponse.json(
        { error: "Não foi possível criar o contato no CRM. Verifique a API Key." },
        { status: 500 }
      )
    }

    // 3. Criar negociação no funil
    await createDeal(contactId, segment ?? "Geral")

    // 4. Enviar mensagem WhatsApp (só se tiver conexão disponível)
    if (connectionId) {
      const message = buildWhatsAppMessage(name, segment ?? "")
      await sendWhatsAppMessage(connectionId, phone, message)
    }

    return NextResponse.json({ success: true, contactId })
  } catch (err) {
    console.error("[crm/route]", err)
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 })
  }
}
