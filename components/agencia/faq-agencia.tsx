"use client"

import { useState } from "react"

const faqs = [
  {
    question: "O que é a Yollo IA para agências de marketing?",
    answer:
      "A Yollo IA é uma plataforma de prospecção e automação de atendimento via WhatsApp para agências de marketing. Ela mapeia empresas por segmento e cidade, dispara mensagens em massa personalizadas, faz nurturing automático dos leads e agenda reuniões para o time comercial  -  sem intervenção humana.",
  },
  {
    question: "Como funciona a prospecção por segmento e cidade?",
    answer:
      "Você define o nicho que deseja prospectar (ex: clínicas de estética, restaurantes, academias) e a cidade-alvo. A Yollo IA mapeia automaticamente as empresas desse segmento que possuem WhatsApp disponível para contato e monta a lista de prospecção pronta para o disparo.",
  },
  {
    question: "O que é o disparo em massa e como ele funciona?",
    answer:
      "O disparo em massa permite enviar centenas de mensagens personalizadas simultaneamente para os prospects mapeados. Cada mensagem é adaptada ao segmento e contexto da empresa  -  diferente de um broadcast genérico. A IA gerencia as respostas automaticamente e continua a conversa com cada prospect.",
  },
  {
    question: "A IA faz o follow-up automaticamente?",
    answer:
      "Sim! Prospects que não responderam recebem follow-ups automáticos em intervalos configuráveis. A IA responde dúvidas, apresenta cases de sucesso do nicho e mantém o interesse aquecido até o prospect estar pronto para uma reunião com o time comercial.",
  },
  {
    question: "Para quais segmentos de mercado posso prospectar?",
    answer:
      "Para qualquer segmento que sua agência atende: clínicas de estética, restaurantes, academias, pet shops, escritórios contábeis, advocacias, lojas de varejo, escolas, imobiliárias e muito mais. A configuração da IA é flexível e você pode criar campanhas diferentes para cada nicho.",
  },
  {
    question: "Funciona em qualquer cidade do Brasil?",
    answer:
      "Sim! A prospecção pode ser direcionada para qualquer cidade brasileira. Você pode segmentar por cidade, região, estado ou rodar campanhas nacionais  -  dependendo do modelo de atendimento da sua agência.",
  },
  {
    question: "Quais planos estão disponíveis?",
    answer:
      "Oferecemos três modalidades: Mensal, Trimestral e Semestral. Todos os planos podem ser cancelados a qualquer momento, sem multa e sem burocracia.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer:
      "Sim! Oferecemos uma demonstração gratuita onde você vê a Yollo IA prospectando e disparando para o segmento e cidade que sua agência já atende. Basta preencher o formulário e nossa equipe entra em contato para agendar.",
  },
]

export default function FAQAgencia() {
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
