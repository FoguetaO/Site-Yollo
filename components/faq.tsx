"use client"

import { useState } from "react"

const faqs = [
  {
    question: "O que é a Bella IA?",
    answer:
      "A Bella IA é um assistente de inteligência artificial para WhatsApp especializado em clínicas de estética. Ela atende suas clientes automaticamente, 24 horas por dia, responde dúvidas sobre tratamentos, preços e disponibilidade, e agenda os procedimentos direto no chat. Diferente de chatbots tradicionais baseados em fluxos prontos, a Bella IA usa IA generativa para aprender o tom de voz da sua clínica e atender de forma natural.",
  },
  {
    question: "Para quem a Bella IA é indicada?",
    answer:
      "A Bella IA é ideal para qualquer clínica de estética, spa ou profissional de beleza que recebe clientes pelo WhatsApp e quer automatizar o primeiro atendimento sem perder a qualidade. Os principais perfis incluem: esteticistas autônomas, clínicas de estética, spas, clínicas de dermatologia estética, biomédicos, centros de micropigmentação e salões de beleza.",
  },
  {
    question: "As clientes percebem que estão falando com uma IA?",
    answer:
      "Na maioria das vezes, não. A Bella IA é treinada para responder de forma natural, usando o tom de voz da sua clínica. Ela aprende com suas conversas reais e se adapta ao perfil das suas clientes. Se quiser, você pode informar no início da conversa que é uma IA — a escolha é sua.",
  },
  {
    question: "Como funciona a integração com minha agenda?",
    answer:
      "A Bella IA integra com as principais ferramentas de agenda online. Ela verifica os horários disponíveis em tempo real e confirma o agendamento diretamente no WhatsApp. Após o agendamento, ela envia lembretes automáticos para reduzir faltas.",
  },
  {
    question: "Preciso usar um número novo ou posso usar o número da minha clínica?",
    answer:
      "Você pode usar o número existente da sua clínica. Faremos a migração para a API Oficial do WhatsApp Business, que é o mesmo número que você já usa. O processo é simples e sua equipe mantém acesso ao mesmo número.",
  },
  {
    question: "Quanto tempo leva para configurar?",
    answer:
      "A configuração inicial leva em média 30 minutos. Você conversa com nosso agente de configuração, que aprende tudo sobre sua clínica — tratamentos, preços, horários e forma de atendimento. Após isso, a Bella IA já está pronta para atender suas clientes.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer:
      "Sim! Oferecemos uma demonstração gratuita onde você pode ver a Bella IA em ação com os dados da sua própria clínica. Basta preencher o formulário acima e nossa equipe entrará em contato para agendar.",
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
