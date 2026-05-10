import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da Yollo IA em conformidade com a LGPD. Saiba quais dados coletamos, como os utilizamos e quais são seus direitos como titular.",
  alternates: { canonical: "https://yolloia.com.br/privacidade" },
}

const lastUpdated = "9 de maio de 2025"

const sections = [
  {
    id: "controlador",
    title: "1. Quem somos",
    content: `A Yollo IA é a controladora dos dados pessoais coletados e tratados no contexto desta plataforma e dos serviços de automação de atendimento via WhatsApp que prestamos.

Nosso canal dedicado para assuntos de privacidade é privacidade@yolloia.com.br. Use esse endereço para exercer seus direitos, tirar dúvidas ou fazer qualquer solicitação relacionada aos seus dados.`,
  },
  {
    id: "dados-coletados",
    title: "2. Quais dados coletamos",
    content: `Coletamos apenas os dados necessários para prestar o serviço contratado:

— Nome completo, e-mail e número de WhatsApp: para identificação e comunicação.
— Histórico de conversas com o assistente de IA: para operar o serviço e melhorá-lo continuamente.
— Dados de pagamento: processados por plataformas certificadas (PCI-DSS). Não armazenamos números de cartão de crédito.
— Dados técnicos: endereço IP, tipo de dispositivo e identificadores de sessão, usados para segurança e estabilidade da plataforma.

Não coletamos dados sensíveis (como dados de saúde, biometria ou origem racial) de forma direta. Se sua atividade envolver esses dados — como clínicas médicas — você é responsável por coletar o consentimento adequado dos seus clientes finais.`,
  },
  {
    id: "finalidade",
    title: "3. Para que usamos seus dados",
    content: `Usamos seus dados exclusivamente para:

— Operar o assistente de IA: responder mensagens, realizar agendamentos e executar os fluxos que você configurou.
— Suporte e relacionamento: responder chamados, processar pagamentos e enviar comunicações sobre o contrato.
— Melhoria do serviço: analisar padrões de uso de forma agregada e anonimizada — sem identificar usuários individuais.
— Cumprimento legal: atender obrigações fiscais e requisições de autoridades quando exigido por lei.
— Comunicações de marketing: novidades e atualizações da Yollo IA, sempre com opção de cancelamento (opt-out) em cada mensagem.`,
  },
  {
    id: "base-legal",
    title: "4. Base legal (LGPD)",
    content: `Todo tratamento de dados que realizamos está fundamentado na Lei nº 13.709/2018:

— Execução de contrato (art. 7º, V): dados necessários para prestar o serviço que você contratou.
— Legítimo interesse (art. 7º, IX): análise de uso e prevenção a fraudes, sempre de forma proporcional.
— Cumprimento de obrigação legal (art. 7º, II): quando exigido por autoridades competentes.
— Consentimento (art. 7º, I): para o envio de comunicações de marketing, que podem ser revogadas a qualquer momento.`,
  },
  {
    id: "compartilhamento",
    title: "5. Com quem compartilhamos",
    content: `Compartilhamos dados apenas quando necessário e com as seguintes categorias de parceiros:

— Meta Platforms / WhatsApp Business API: as mensagens trafegam pela infraestrutura oficial da Meta. A Meta processa metadados de acordo com sua própria política de privacidade (facebook.com/policy).
— Provedores de infraestrutura em nuvem: servidores e armazenamento que suportam a plataforma, com acordos de confidencialidade e proteção de dados.
— Processadores de pagamento: plataformas certificadas PCI-DSS responsáveis pela cobrança dos planos.
— Autoridades públicas: quando exigido por ordem judicial ou requisição legal formal.

Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins comerciais que não sejam os descritos acima.`,
  },
  {
    id: "retencao",
    title: "6. Por quanto tempo guardamos",
    content: `Guardamos seus dados pelo tempo necessário para a finalidade que os originou:

— Dados de conta e contrato: pelo prazo contratual mais 5 anos após o encerramento, conforme exigências fiscais.
— Histórico de conversas: 12 meses após a última interação, salvo solicitação de exclusão antecipada ou exigência legal.
— Logs e dados técnicos: até 6 meses, exceto quando necessário para fins de segurança ou cumprimento de ordem judicial.

Após o prazo aplicável, os dados são eliminados de forma segura ou anonimizados.`,
  },
  {
    id: "direitos",
    title: "7. Seus direitos como titular",
    content: `A LGPD garante a você os seguintes direitos, que podem ser exercidos a qualquer momento:

— Confirmação: saber se tratamos dados seus.
— Acesso: receber uma cópia dos dados que mantemos sobre você.
— Correção: corrigir dados incompletos, inexatos ou desatualizados.
— Eliminação: solicitar a exclusão de dados tratados com base em consentimento.
— Portabilidade: transferir seus dados para outro fornecedor de serviço.
— Revogação de consentimento: retirar o consentimento dado anteriormente, sem prejuízo do tratamento já realizado.
— Oposição: contestar tratamentos realizados com base em legítimo interesse.

Para exercer qualquer direito, envie um e-mail para privacidade@yolloia.com.br com o assunto "Solicitação LGPD — [seu nome]". Respondemos em até 15 dias úteis.`,
  },
  {
    id: "seguranca",
    title: "8. Como protegemos seus dados",
    content: `Adotamos práticas de segurança alinhadas ao estado da arte:

— Criptografia TLS em todas as comunicações em trânsito.
— Criptografia em repouso nos bancos de dados que armazenam informações sensíveis.
— Controle de acesso por função: cada colaborador acessa apenas o que precisa para seu trabalho.
— Monitoramento contínuo e plano formal de resposta a incidentes.

Em caso de incidente que possa gerar risco ou dano aos titulares, notificaremos a ANPD e os afetados dentro dos prazos estabelecidos pela LGPD.`,
  },
  {
    id: "cookies",
    title: "9. Cookies",
    content: `Nosso site utiliza cookies para funcionamento básico da plataforma, análise de desempenho (de forma agregada) e personalização da experiência.

Você pode gerenciar ou desativar cookies nas configurações do seu navegador. A desativação de alguns cookies pode limitar funcionalidades do site, mas não impede o uso do assistente de IA contratado.`,
  },
  {
    id: "transferencia",
    title: "10. Transferência internacional",
    content: `Alguns dos nossos fornecedores de tecnologia — como provedores de nuvem e a própria infraestrutura da Meta — estão sediados fora do Brasil. Quando transferimos dados para o exterior, adotamos cláusulas contratuais padrão e verificamos que o nível de proteção oferecido é equivalente ao exigido pela LGPD.`,
  },
  {
    id: "atualizacoes",
    title: "11. Atualizações desta política",
    content: `Podemos atualizar esta Política periodicamente para refletir mudanças nos nossos serviços ou na legislação aplicável. Quando as mudanças forem relevantes, você será notificado por e-mail ou por aviso em destaque na plataforma com antecedência mínima de 15 dias.

A data da última revisão está sempre indicada no topo desta página.`,
  },
  {
    id: "contato",
    title: "12. Fale sobre privacidade",
    content: `Para qualquer dúvida, solicitação ou exercício de direitos relacionados aos seus dados pessoais:

E-mail: privacidade@yolloia.com.br
Assunto sugerido: "Solicitação LGPD — [seu nome]"

Nossa equipe responde em até 15 dias úteis a partir do recebimento da mensagem.`,
  },
]

export default function PrivacidadePage() {
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
              Política de Privacidade
            </h1>
            <p className="mt-4 text-sm text-neutral-400">
              Última atualização: {lastUpdated}
            </p>
            <p className="mt-6 text-base text-neutral-500 leading-relaxed max-w-2xl">
              Privacidade não é rodapé de contrato para a Yollo IA — é parte do serviço. Esta
              Política explica, em linguagem direta, quais dados coletamos, por que coletamos,
              com quem compartilhamos e o que você pode fazer para controlar suas informações,
              em plena conformidade com a Lei nº 13.709/2018 (LGPD).
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
              <nav aria-label="Índice da política de privacidade" className="lg:sticky lg:top-24">
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
              Tem alguma dúvida sobre como tratamos seus dados? Fale com nossa equipe de privacidade.
            </p>
            <a
              href="mailto:privacidade@yolloia.com.br"
              className="shrink-0 inline-flex items-center justify-center text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "#6C4FE8" }}
            >
              privacidade@yolloia.com.br
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
