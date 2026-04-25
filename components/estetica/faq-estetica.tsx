"use client"

import { useState } from "react"

const faqs = [
  {
    question: "A IA consegue informar preços dos procedimentos?",
    answer:
      "Sim. Você cadastra os tratamentos, valores e promoções durante a configuração. A IA responde com as informações corretas e atualizadas para cada cliente.",
  },
  {
    question: "Funciona com agenda online como Booksy ou Meetime?",
    answer:
      "Sim, a Yollo IA integra com as principais ferramentas de agendamento online. O cliente escolhe o horário direto no WhatsApp e a agenda é atualizada automaticamente.",
  },
  {
    question: "A IA consegue enviar lembretes antes do procedimento?",
    answer:
      "Sim. Você configura o tempo de antecedência (ex: 24h ou 2h antes) e a IA envia a mensagem automaticamente, reduzindo faltas e no-shows.",
  },
  {
    question: "Posso usar no meu número de WhatsApp atual da clínica?",
    answer:
      "Sim. Tanto via API Oficial quanto via API Não Oficial, você mantém o mesmo número que seus clientes já conhecem.",
  },
  {
    question: "A IA funciona para mais de um profissional na mesma clínica?",
    answer:
      "Sim. Você pode configurar a IA para gerenciar a agenda de múltiplos profissionais, cada um com seus horários e especialidades.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function FaqEstetica() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
