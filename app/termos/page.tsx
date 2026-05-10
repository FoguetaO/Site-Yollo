import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do serviço Yollo IA. Conheça as condições de uso, responsabilidades do contratante, limitações e políticas de cancelamento.",
  alternates: { canonical: "https://yolloia.com.br/termos" },
}

const lastUpdated = "9 de maio de 2025"

const sections = [
  {
    id: "objeto",
    title: "1. O que é a Yollo IA",
    content: `A Yollo IA é uma plataforma de automação de atendimento via WhatsApp com Inteligência Artificial. O serviço permite que você configure um assistente virtual capaz de responder mensagens, qualificar leads, realizar agendamentos e enviar mensagens automatizadas — tudo pela API oficial do WhatsApp Business da Meta Platforms.

O acesso é concedido mediante contratação de um dos planos disponíveis em yolloia.com.br, exclusivamente para uso comercial legítimo por pessoas físicas ou jurídicas que atuem em atividade profissional regular.`,
  },
  {
    id: "aceitacao",
    title: "2. Aceitação",
    content: `Ao contratar ou utilizar o serviço, você declara ter lido e concordado integralmente com estes Termos de Uso e com a Política de Privacidade da Yollo IA.

Se você não concordar com alguma cláusula, não utilize o serviço e solicite o cancelamento do plano. Seguir usando a plataforma após eventuais atualizações equivale a aceitar os novos Termos.`,
  },
  {
    id: "responsabilidades-contratante",
    title: "3. O que é sua responsabilidade",
    content: `Ao contratar a Yollo IA, você assume responsabilidade exclusiva por:

— A veracidade das informações cadastradas e o conteúdo das mensagens configuradas no assistente.
— Obter o consentimento dos destinatários para recebimento de mensagens automatizadas, conforme exigido pela LGPD e pelas políticas da Meta.
— Cumprir todas as leis e regulamentações aplicáveis à sua atividade — incluindo normas setoriais de saúde, direito, contabilidade e mercado imobiliário.
— Usar o serviço exclusivamente para finalidades lícitas, dentro das políticas da Meta Platforms.
— Manter a confidencialidade das credenciais de acesso e comunicar imediatamente qualquer uso não autorizado.`,
  },
  {
    id: "limitacoes",
    title: "4. O que não é permitido",
    content: `O serviço não pode ser usado para:

— Envio de spam ou mensagens em massa sem consentimento prévio dos destinatários.
— Conteúdo falso, enganoso, difamatório, ofensivo ou ilegal.
— Promoção de produtos ou serviços proibidos por lei brasileira ou pelas políticas da Meta.
— Coleta de dados sensíveis sem as salvaguardas exigidas pela LGPD.
— Qualquer atividade que possa resultar no bloqueio ou banimento do número de WhatsApp vinculado.
— Engenharia reversa, descompilação ou modificação da plataforma.
— Revenda ou cessão do acesso a terceiros sem autorização prévia por escrito da Yollo IA.

O descumprimento dessas regras pode resultar em suspensão imediata do acesso, sem reembolso e sem prejuízo de outras medidas cabíveis.`,
  },
  {
    id: "disponibilidade",
    title: "5. Disponibilidade do serviço",
    content: `A Yollo IA emprega todos os esforços para manter a plataforma disponível continuamente. No entanto, não garantimos disponibilidade ininterrupta e não nos responsabilizamos por interrupções causadas por:

— Manutenções programadas (comunicadas com antecedência sempre que possível).
— Falhas ou indisponibilidade da infraestrutura da Meta / WhatsApp Business API.
— Casos fortuitos, força maior ou ataques cibernéticos fora do nosso controle.

Solicitações de crédito ou compensação por indisponibilidade devem ser feitas ao suporte e serão avaliadas caso a caso, com compensação limitada ao valor do plano mensal vigente.`,
  },
  {
    id: "pagamento",
    title: "6. Pagamento",
    content: `O pagamento deve ser realizado na periodicidade escolhida no momento da contratação (mensal, trimestral ou semestral), de acordo com os valores vigentes.

Podemos reajustar os preços dos planos com aviso prévio de 30 dias. Se não concordar com o reajuste, você pode cancelar sem multa durante esse período.

O atraso no pagamento por mais de 5 dias úteis pode resultar na suspensão temporária do acesso até a regularização.`,
  },
  {
    id: "cancelamento",
    title: "7. Cancelamento",
    content: `Você pode cancelar o plano a qualquer momento pelo e-mail de suporte ou pelo painel da plataforma.

— Planos mensais: o cancelamento tem efeito ao final do ciclo de cobrança em curso. Não há reembolso proporcional.
— Planos anuais: cancelamentos feitos em até 7 dias corridos após a contratação ou renovação têm reembolso integral. Após esse prazo, não há reembolso pela fração não utilizada — exceto nos casos garantidos pelo Código de Defesa do Consumidor (Lei nº 8.078/1990).

Em caso de violação comprovada destes Termos, a Yollo IA pode cancelar o acesso imediatamente e sem reembolso.`,
  },
  {
    id: "propriedade-intelectual",
    title: "8. Propriedade intelectual",
    content: `Todos os direitos sobre a plataforma Yollo IA — software, design, algoritmos e marca — pertencem à Yollo IA ou a seus licenciadores.

Ao contratar o serviço, você recebe uma licença limitada, não exclusiva, intransferível e revogável para uso da plataforma durante o período contratado.

Você mantém a propriedade dos dados e conteúdos que inserir na plataforma. Ao usá-la, você concede à Yollo IA permissão para processar esses dados exclusivamente para a prestação do serviço.`,
  },
  {
    id: "limitacao-responsabilidade",
    title: "9. Limitação de responsabilidade",
    content: `Dentro dos limites permitidos pela legislação brasileira, a Yollo IA não se responsabiliza por:

— Perda de receita, lucros cessantes ou danos indiretos decorrentes do uso ou da impossibilidade de uso do serviço.
— Decisões comerciais tomadas com base nas respostas geradas pelo assistente de IA.
— Danos causados por uso indevido ou não autorizado das credenciais de acesso.

Em qualquer hipótese, a responsabilidade total da Yollo IA fica limitada ao valor pago pelo contratante nos 3 meses anteriores ao evento.`,
  },
  {
    id: "alteracoes",
    title: "10. Alterações nestes Termos",
    content: `Podemos atualizar estes Termos periodicamente. Alterações relevantes serão comunicadas com pelo menos 15 dias de antecedência, por e-mail ou aviso na plataforma.

Continuar usando o serviço após a data de vigência das mudanças equivale a aceitar os novos Termos. Se você discordar, pode cancelar antes da entrada em vigor.`,
  },
  {
    id: "foro",
    title: "11. Foro e lei aplicável",
    content: `Estes Termos são regidos pelas leis da República Federativa do Brasil.

Em caso de divergência, as partes se comprometem a buscar primeiro uma solução amigável, por negociação direta ou mediação.

Não sendo possível um acordo, fica eleito o foro da comarca de São Paulo, Estado de São Paulo, como o competente para dirimir quaisquer disputas, com renúncia expressa a qualquer outro foro, por mais privilegiado que seja.`,
  },
]

export default function TermosPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16 bg-[#f9f9f8]">
        {/* Hero */}
        <section className="py-24 md:py-28 px-6">
          <div className="max-w-[1200px] mx-auto">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#6C4FE8" }}
            >
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight leading-tight max-w-2xl text-balance">
              Termos de Uso
            </h1>
            <p className="mt-4 text-sm text-neutral-400">
              Última atualização: {lastUpdated}
            </p>
            <p className="mt-6 text-base text-neutral-500 leading-relaxed max-w-2xl">
              Aqui estão as regras do jogo — escritas de forma clara, sem juridiquês desnecessário.
              Ao contratar ou usar a Yollo IA, você concorda com o que está neste documento.
              Recomendamos a leitura antes de assinar qualquer plano.
            </p>
          </div>
        </section>

        {/* Divisor */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-t border-neutral-200" />
        </div>

        {/* Índice + Conteúdo */}
        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">

            {/* Índice lateral */}
            <aside className="lg:w-64 lg:shrink-0">
              <nav aria-label="Índice dos termos de uso" className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                  Índice
                </p>
                <ol className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors leading-relaxed"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Corpo do texto */}
            <div className="flex-1 flex flex-col gap-14">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">{s.title}</h2>
                  <div className="text-[15px] text-neutral-500 leading-relaxed whitespace-pre-line">
                    {s.content}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA rodapé */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-t border-neutral-200" />
        </div>
        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-neutral-400 text-sm max-w-md">
              Dúvidas sobre os termos? Entre em contato com nossa equipe antes de contratar.
            </p>
            <a
              href="mailto:contato@yolloia.com.br"
              className="shrink-0 inline-flex items-center justify-center text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "#6C4FE8" }}
            >
              contato@yolloia.com.br
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
