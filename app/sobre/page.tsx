import type { Metadata } from "next"
import Image from "next/image"
import { MessageCircle, CalendarCheck, UserCheck, Plug, Bell, ShieldCheck, Star } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Sobre a Yollo IA — Automação de Atendimento via WhatsApp com IA",
  description:
    "Conheça a Yollo IA — plataforma brasileira de automação de atendimento via WhatsApp com Inteligência Artificial para clínicas, imobiliárias, contadores e advogados.",
  alternates: { canonical: "https://yolloia.com.br/sobre" },
}

const stats = [
  { value: "até 10s", label: "Tempo de resposta", sub: "vs. +2h do mercado" },
  { value: "4.000+", label: "Agendamentos/mês", sub: "gerenciados pela IA" },
  { value: "89%", label: "Satisfação", sub: "dos clientes atendidos" },
  { value: "24/7", label: "Disponibilidade", sub: "sem interrupção" },
]

const features = [
  {
    icon: MessageCircle,
    title: "Atendimento 24/7",
    description:
      "A IA responde leads em segundos, a qualquer hora. Conversa de forma natural, sem menus rígidos — adaptando o tom ao seu negócio.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento automático",
    description:
      "Consulta a agenda em tempo real, marca horários e envia confirmações e lembretes automáticos antes de cada atendimento.",
  },
  {
    icon: UserCheck,
    title: "Qualificação de leads",
    description:
      "Identifica perfil, urgência e intenção de cada contato durante a conversa. Seu time entra em cena apenas quando necessário.",
  },
  {
    icon: Plug,
    title: "Conecta ao seu número",
    description:
      "Sem trocar número. Integra à API oficial da Meta ou ao seu número existente — configuração em minutos, sem técnico.",
  },
  {
    icon: Bell,
    title: "Follow-up automático",
    description:
      "Envia mensagens de acompanhamento para leads que não responderam, mantendo o relacionamento ativo sem esforço manual.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e LGPD",
    description:
      "Criptografia de ponta-a-ponta em todas as mensagens. Dados armazenados em total conformidade com a LGPD.",
  },
]

const credentials = [
  {
    title: "Parceira oficial da Meta",
    description:
      "Tech Provider verificado pela Meta. Usa a API oficial do WhatsApp (Cloud API), garantindo estabilidade e zero risco de banimento.",
  },
  {
    title: "Membro do WhatsApp AI Startups Hub",
    description:
      "Programa exclusivo da Meta para startups na fronteira da inovação em IA aplicada ao WhatsApp.",
  },
  {
    title: "Conformidade com LGPD",
    description:
      "Todas as mensagens protegidas com criptografia de ponta-a-ponta. Dados armazenados em conformidade com a Lei Geral de Proteção de Dados.",
  },
  {
    title: "Empresa brasileira",
    description:
      "Desenvolvida no Brasil, para o mercado brasileiro. Suporte em português, com atendimento humano quando você precisar.",
  },
]

const faqs = [
  {
    q: "O que é a Yollo IA?",
    a: "A Yollo IA é uma plataforma brasileira de automação de atendimento via WhatsApp com Inteligência Artificial. Desenvolvida para clínicas de estética, imobiliárias, escritórios contábeis e de advocacia — qualquer negócio que precisa responder rápido e não pode depender de uma secretária disponível 24 horas por dia.",
  },
  {
    q: "Como a Yollo IA aprende sobre o meu negócio?",
    a: "A configuração é feita por perguntas simples: você informa os serviços, preços, horários e tom de atendimento. A IA usa essas informações para responder como se fosse um membro da sua equipe — sem precisar de programação ou treinamento técnico.",
  },
  {
    q: "Preciso mudar o número do meu WhatsApp?",
    a: "Não. A Yollo IA conecta tanto à API oficial do WhatsApp Business da Meta quanto diretamente ao seu número existente. Você escolhe a opção que melhor se encaixa e continua usando o mesmo número que seus clientes já conhecem.",
  },
  {
    q: "Para quais segmentos a Yollo IA é indicada?",
    a: "Clínicas de estética e dermatologia, imobiliárias e corretores, escritórios de contabilidade, advocacia e agências de marketing. Em qualquer negócio onde o atendimento via WhatsApp é crítico e a velocidade de resposta faz diferença no resultado.",
  },
  {
    q: "Como funciona o cancelamento?",
    a: "Sem multa e sem burocracia. Planos mensais podem ser cancelados a qualquer momento com efeito no fim do ciclo. Planos anuais têm garantia de reembolso integral nos primeiros 7 dias após a contratação.",
  },
]

const Divider = () => (
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="border-t border-neutral-200" />
  </div>
)

export default function SobrePage() {
  return (
    <>
      <Navbar />

      <main className="pt-16 bg-[#f9f9f8]">

        {/* Hero */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#6C4FE8" }}>
              Sobre a Yollo IA
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold text-neutral-900 tracking-tight leading-[1.1] max-w-3xl text-balance">
              IA para atendimento automático no WhatsApp
            </h1>
            <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-2xl text-pretty">
              Startup brasileira que usa inteligência artificial para automatizar o atendimento via
              WhatsApp. Mais rápida que um atendente humano, mais inteligente que um chatbot
              tradicional.
            </p>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  { src: "/images/avatar-1.jpg", fallback: "CL" },
                  { src: "/images/avatar-2.jpg", fallback: "MR" },
                  { src: "/images/avatar-3.jpg", fallback: "PS" },
                  { src: "/images/avatar-4.jpg", fallback: "JB" },
                ].map((a) => (
                  <Avatar key={a.fallback} className="size-9 ring-2 ring-[#f9f9f8]">
                    <AvatarImage src={a.src} alt={a.fallback} />
                    <AvatarFallback className="text-xs bg-neutral-200 text-neutral-600">
                      {a.fallback}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-800">+200 negócios</span> automatizados no Brasil
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Stats */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-12">
              Em números
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-4xl md:text-5xl font-semibold tracking-tight leading-none mb-2"
                    style={{ color: "#6C4FE8" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm font-semibold text-neutral-800 mb-0.5">{s.label}</div>
                  <div className="text-xs text-neutral-400">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* História */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                Nossa história
              </p>
              <h2 className="text-3xl font-semibold text-neutral-900 leading-snug text-balance">
                Por que criamos a Yollo IA
              </h2>
            </div>
            <div className="flex flex-col gap-5 text-[15px] text-neutral-500 leading-relaxed">
              <p>
                A Yollo IA nasceu de um problema que se repetia em todo tipo de negócio de
                atendimento: clientes mandavam mensagem no WhatsApp, esperavam horas, e quando a
                resposta chegava, já tinham ido para o concorrente. Não por falta de interesse —
                por falta de velocidade.
              </p>
              <p>
                Pesquisas mostram que negócios que respondem em menos de 5 minutos têm até 100x
                mais chance de converter um lead. No Brasil, o tempo médio de resposta via
                WhatsApp comercial é de mais de 2 horas. A Yollo IA resolve esse gargalo em
                todos os segmentos onde o atendimento é crítico.
              </p>
              <p>
                Nossa plataforma conecta Inteligência Artificial ao WhatsApp Business API oficial
                da Meta, permitindo que o assistente responda, qualifique, agende e faça follow-up
                de forma autônoma — 24 horas por dia, 7 dias por semana. O profissional entra em
                cena apenas quando a situação exige julgamento humano.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* O que a Yollo faz */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto space-y-12">
            <div className="max-w-xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Produto
              </p>
              <h2 className="text-3xl font-semibold text-neutral-900 text-balance">
                O que a Yollo IA faz
              </h2>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Uma plataforma completa de atendimento automático — do primeiro contato ao
                agendamento confirmado, sem precisar de um atendente disponível 24 horas.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y border border-neutral-200 rounded-2xl overflow-hidden *:p-8">
              {features.map((f) => (
                <div key={f.title} className="space-y-3 bg-[#f9f9f8]">
                  <div className="flex items-center gap-2">
                    <f.icon className="size-4 text-neutral-400" />
                    <h3 className="text-sm font-semibold text-neutral-900">{f.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Credenciais */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Credenciais
            </p>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-12 text-balance">
              Por que confiar na Yollo IA
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="flex gap-4 rounded-2xl px-6 py-6 bg-white border border-neutral-200"
                >
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#6C4FE8" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">{c.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logos de credencial */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Image
                src="/images/meta-verified.svg"
                alt="Meta Verified"
                width={120}
                height={18}
              />
              <div className="w-px h-8 bg-neutral-200" />
              <Image
                src="/images/whatsapp-ai-hub.png"
                alt="WhatsApp AI Startups Hub"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-12 text-balance">
              Perguntas frequentes sobre a Yollo IA
            </h2>
            <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {faqs.map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                    <span className="text-[15px] font-semibold text-neutral-600 group-open:text-neutral-900 transition-colors">
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all group-open:rotate-45 bg-neutral-100 border border-neutral-200">
                      <svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-neutral-500 leading-relaxed max-w-3xl">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* CTA final */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight text-balance max-w-2xl mx-auto">
              Conheça a Yollo IA na prática
            </h2>
            <p className="mt-5 text-neutral-500 text-base max-w-md mx-auto">
              Veja seu assistente respondendo com os dados da sua empresa antes do fim do dia.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href="/#contratar"
                className="inline-flex items-center justify-center text-sm font-semibold text-white px-7 py-3.5 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "#6C4FE8", boxShadow: "0 8px 24px #6C4FE840" }}
              >
                Agendar demonstração gratuita
              </a>
              <p className="text-xs text-neutral-400">Sem compromisso · Configuração em minutos</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
