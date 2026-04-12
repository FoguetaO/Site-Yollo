"use client"

import { useState } from "react"

const faqs = [
  {
    question: "O que é a Yollo IA?",
    answer:
      "A Yollo IA é uma plataforma de atendimento inteligente para WhatsApp especializada em clínicas de estética. Ela atende suas clientes automaticamente 24 horas por dia, responde dúvidas sobre tratamentos, preços e disponibilidade, e agenda procedimentos direto no chat — tudo baseado em um prompt que você mesmo configura com as informações da sua clínica.",
  },
  {
    question: "Para quem a Yollo IA é indicada?",
    answer:
      "A Yollo IA é ideal para qualquer clínica de estética, spa ou profissional de beleza que recebe clientes pelo WhatsApp e quer automatizar o primeiro atendimento sem perder a qualidade. Os principais perfis incluem: esteticistas autônomas, clínicas de estética, spas, clínicas de dermatologia estética, biomédicos, centros de micropigmentação e salões de beleza.",
  },
  {
    question: "Como a IA aprende sobre minha clínica?",
    answer:
      "A Yollo IA é treinada por prompt — você preenche as informações da sua clínica (tratamentos, preços, horários, tom de atendimento) e nosso gerador cria um prompt completo que instrui a IA sobre como atender seus clientes. Não há necessidade de treinar a IA com conversas.",
  },
  {
    question: "Como funciona a integração com minha agenda?",
    answer:
      "A Yollo IA integra com as principais ferramentas de agenda online. Ela verifica os horários disponíveis em tempo real e confirma o agendamento diretamente no WhatsApp. Após o agendamento, ela envia lembretes automáticos para reduzir faltas.",
  },
  {
    question: "Preciso usar um número novo ou posso usar o número da minha clínica?",
    answer:
      "Você pode usar o número existente da sua clínica. Oferecemos integração tanto via API Oficial do WhatsApp Business quanto via API não oficial — você escolhe a opção que melhor se encaixa no seu negócio.",
  },
  {
    question: "Quais planos estão disponíveis?",
    answer:
      "Oferecemos três modalidades: Mensal, Trimestral e Semestral. Todos os planos podem ser cancelados a qualquer momento, sem multa e sem burocracia.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer:
      "Sim! Oferecemos uma demonstração gratuita onde você pode ver a Yollo IA em ação com os dados da sua própria clínica. Basta preencher o formulário e nossa equipe entrará em contato para agendar.",
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
