"use client"

import { useState } from "react"

const faqs = [
  {
    question: "O que é a Yollo IA para escritórios de advocacia?",
    answer:
      "A Yollo IA é um assistente de inteligência artificial para WhatsApp especializado em advocacia. Ela atende clientes automaticamente 24 horas por dia, responde dúvidas jurídicas iniciais, qualifica leads, coleta documentos e agenda consultas. Diferente de chatbots com fluxos engessados, a Yollo IA usa IA generativa para aprender sobre seu escritório e atender de forma natural e precisa.",
  },
  {
    question: "Para quem a Yollo IA jurídica é indicada?",
    answer:
      "É ideal para escritórios de advocacia de qualquer porte e advogados autônomos que recebem mensagens frequentes de clientes pelo WhatsApp e desejam automatizar o atendimento sem perder qualidade. Os perfis mais comuns são: escritórios com 2 a 20 advogados, advogados solo que trabalham sozinhos, escritórios que atendem pessoa física e jurídica, e escritórios em crescimento que não querem contratar secretárias.",
  },
  {
    question: "A IA pode dar consultoria jurídica?",
    answer:
      "Não. A Yollo IA não dá pareceres ou consultoria jurídica — apenas respostas informativas iniciais e qualificação de casos. Para questões que exigem análise técnica, ela orienta o cliente a agendar uma consulta com o advogado. Isso garante segurança jurídica e responsabilidade ética.",
  },
  {
    question: "Os clientes percebem que estão falando com uma IA?",
    answer:
      "Na maioria das vezes, não. A Yollo IA é treinada com o tom de voz do seu escritório e aprende as especificidades da sua área de atuação. Para casos mais complexos, ela transfere para o advogado responsável com um resumo do contexto — garantindo continuidade sem perda de informação.",
  },
  {
    question: "Funciona com diferentes áreas do direito?",
    answer:
      "Sim! Civil, trabalhista, empresarial, previdenciário, familiar, tributário — você configura a IA conforme sua especialidade e ela aprende a responder dentro do seu contexto. Escritórios multidisciplinares também podem criar fluxos diferentes por área.",
  },
  {
    question: "Como funciona a coleta de documentos?",
    answer:
      "A Yollo IA envia uma mensagem automática ao cliente solicitando os documentos necessários para o caso (contratos, holerites, carteira de trabalho, procurações etc). O cliente pode responder com fotos ou PDFs diretamente pelo WhatsApp. Os documentos são organizados por cliente e a equipe é notificada quando tudo estiver completo.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer:
      "Sim! Oferecemos uma demonstração gratuita onde você vê a Yollo IA funcionando com dados reais do seu escritório. Basta preencher o formulário e nossa equipe entra em contato para agendar.",
  },
]

export default function FAQAdvocacia() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 text-center">Perguntas frequentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-neutral-900 font-medium hover:bg-neutral-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <p className="px-6 pb-4 text-neutral-600 leading-relaxed text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
