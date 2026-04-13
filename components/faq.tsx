"use client"

import { useState } from "react"

const faqs = [
  {
    question: "O que é a Yollo IA?",
    answer:
      "A Yollo IA é uma plataforma de automação de atendimento via WhatsApp com Inteligência Artificial. Ela atende seus clientes automaticamente 24 horas por dia, 7 dias por semana, responde dúvidas, qualifica leads e agenda procedimentos ou reuniões diretamente no chat — tudo configurado por você, sem precisar de programador.",
  },
  {
    question: "Para quem a Yollo IA é indicada?",
    answer:
      "A Yollo IA é ideal para qualquer negócio que recebe clientes pelo WhatsApp e quer automatizar o atendimento sem perder qualidade. Os segmentos com maior resultado são: clínicas de estética e dermatologia, imobiliárias e corretores de imóveis, escritórios de contabilidade e advocacia, salões de beleza, spas, consultórios e profissionais liberais.",
  },
  {
    question: "Como a IA aprende sobre o meu negócio?",
    answer:
      "A Yollo IA é configurada por prompt — você preenche as informações do seu negócio (serviços, preços, horários, tom de atendimento) e nosso gerador automático cria um prompt completo que instrui a IA sobre como atender seus clientes. Não há necessidade de programação ou treinamento com histórico de conversas.",
  },
  {
    question: "Como funciona a integração com minha agenda?",
    answer:
      "A Yollo IA integra com as principais ferramentas de agenda online. O chatbot verifica os horários disponíveis em tempo real e confirma o agendamento diretamente no WhatsApp. Após o agendamento, envia lembretes automáticos para reduzir faltas e no-shows — sem você precisar intervir.",
  },
  {
    question: "Preciso de um número novo ou posso usar o número atual do meu negócio?",
    answer:
      "Você pode usar o número existente do seu negócio. Oferecemos integração tanto via API Oficial do WhatsApp Business (Meta Tech Provider) quanto via API não oficial (Meta Tech Provider) — você escolhe a opção que melhor se encaixa. Nenhuma das opções exige trocar o número.",
  },
  {
    question: "A Yollo IA funciona para imobiliárias e escritórios de advocacia?",
    answer:
      "Sim! A Yollo IA é multi-segmento. Para imobiliárias, automatiza a qualificação de leads, agendamento de visitas e follow-up de propostas. Para escritórios de advocacia, agenda consultas, responde dúvidas iniciais e encaminha os clientes para os advogados responsáveis — sempre dentro das normas da OAB.",
  },
  {
    question: "Quais planos estão disponíveis?",
    answer:
      "Oferecemos três modalidades: Mensal, Trimestral e Semestral. Todos os planos incluem acesso completo à plataforma, suporte e atualizações. Você pode cancelar a qualquer momento, sem multa e sem burocracia.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer:
      "Sim! Oferecemos uma demonstração gratuita e personalizada com os dados do seu negócio. Basta preencher o formulário acima e nossa equipe entrará em contato para agendar a demo — sem compromisso.",
  },
]

export default function FAQ() {
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
