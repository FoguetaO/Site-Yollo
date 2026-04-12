"use client"

import { useState } from "react"

export default function FAQAdvocacia() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "A IA pode cometer erros jurídicos?",
      answer: "A IA não dá consultoria jurídica completa — apenas respostas iniciais e qualificação. Você sempre revisa antes de qualquer comprometimento legal.",
    },
    {
      question: "Funciona com diferentes áreas do direito?",
      answer: "Sim! Civil, trabalhista, administrativo, empresarial, previdenciário — você configura conforme sua especialidade.",
    },
    {
      question: "Como os clientes ficam sabendo que é IA?",
      answer: "Você controla isso. Pode ser transparente ou manter discreto — ambas as abordagens funcionam bem.",
    },
    {
      question: "Quanto tempo leva para configurar?",
      answer: "De 15 a 30 minutos. Você responde perguntas sobre sua área e o sistema aprende automaticamente.",
    },
  ]

  return (
    <section id="faq" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">Dúvidas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left p-6 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-100 transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900">{faq.question}</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  style={{ color: "#6C4FE8" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              {openIndex === i && <p className="mt-3 text-neutral-600">{faq.answer}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
