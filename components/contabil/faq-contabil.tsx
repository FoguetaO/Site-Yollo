"use client"

import { useState } from "react"

const faqs = [
  {
    question: "O que é a Yollo IA para escritórios contábeis?",
    answer:
      "A Yollo IA é um assistente de inteligência artificial para WhatsApp especializado em contabilidade. Ela atende clientes automaticamente 24 horas por dia, responde dúvidas sobre Simples Nacional, MEI, CNPJ, obrigações acessórias e prazos fiscais, recolhe documentos e agenda reuniões. Diferente de chatbots com fluxos engessados, a Yollo IA usa IA generativa para aprender sobre o seu escritório e atender de forma natural e precisa.",
  },
  {
    question: "Para quem a Yollo IA contábil é indicada?",
    answer:
      "É ideal para escritórios contábeis de qualquer porte que recebem mensagens frequentes de clientes pelo WhatsApp e desejam automatizar o atendimento sem perder a qualidade. Os perfis mais comuns são: escritórios com carteira de 50 a 500 clientes, contadores autônomos que trabalham sozinhos, escritórios que atendem MPEs e MEIs, e escritórios em crescimento que não querem contratar mais auxiliares de atendimento.",
  },
  {
    question: "Os clientes percebem que estão falando com uma IA?",
    answer:
      "Na maioria das vezes, não. A Yollo IA é treinada com o tom de voz do seu escritório e aprende as especificidades da sua carteira. Para dúvidas técnicas mais complexas, ela transfere para o contador responsável com um resumo do contexto — garantindo continuidade sem perda de informação.",
  },
  {
    question: "A IA consegue responder sobre legislação tributária?",
    answer:
      "Sim, dentro do que você configurar. A Yollo IA pode responder sobre regimes tributários (Simples, Presumido, Real), prazos de obrigações, procedimentos para abertura e encerramento de empresa, emissão de notas fiscais e dúvidas gerais sobre MEI. Ela não substitui a consultoria do contador, mas resolve as perguntas recorrentes que tomam tempo do dia a dia.",
  },
  {
    question: "Como funciona a coleta de documentos?",
    answer:
      "A Yollo IA envia uma mensagem automática ao cliente solicitando os documentos necessários para o fechamento do mês, declarações ou outros processos. O cliente pode responder com fotos, PDFs ou links. Os documentos são organizados por cliente e a equipe é notificada quando tudo estiver completo — sem precisar ligar ou enviar e-mails.",
  },
  {
    question: "Quanto tempo leva para configurar?",
    answer:
      "A configuração inicial leva de 30 a 60 minutos. Você informa à Yollo IA sobre seus serviços, regimes tributários atendidos, prazos que monitora e o tom de atendimento do escritório. Depois disso, ela já está pronta para atender seus clientes.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer:
      "Sim! Oferecemos uma demonstração gratuita onde você vê a Yollo IA funcionando com dados reais do seu escritório. Basta preencher o formulário e nossa equipe entra em contato para agendar.",
  },
]

export default function FAQContabil() {
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
