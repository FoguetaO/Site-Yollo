"use client"

import { useState } from "react"
import FaqItem from "@/components/faq-item"

const faqs = [
  {
    question: "O que a Yollo IA faz para escritórios contábeis?",
    answer:
      "A Yollo IA automatiza o processo de captação e qualificação de leads para escritórios contábeis via WhatsApp. Ela agenda reuniões automaticamente, realiza o atendimento inicial por IA, distribui conversas para o departamento correto (fiscal, pessoal, societário ou comercial), rastreia qual anúncio gerou cada lead e move os cards do CRM conforme o lead avança na conversa — tudo sem intervenção da equipe.",
  },
  {
    question: "A Yollo IA envia lembretes de obrigações fiscais?",
    answer:
      "Não. A Yollo IA não é focada em lembretes de obrigações nem em recolhimento de documentos de clientes ativos. Ela é especializada em captação, qualificação e nutrição de leads — ou seja, em transformar prospects em clientes prontos para fechar contrato. Para gestão de obrigações de clientes já ativos, existem outras ferramentas específicas.",
  },
  {
    question: "Para quem a Yollo IA contábil é indicada?",
    answer:
      "É ideal para escritórios contábeis que investem em anúncios (Meta Ads, Google Ads) para captação de novos clientes e precisam de um processo automatizado para qualificar e agendar reuniões com esses leads. Funciona muito bem para escritórios com equipe enxuta que não querem dedicar tempo do contador para triagem de curiosos.",
  },
  {
    question: "Como funciona o CRM com movimentação automática?",
    answer:
      "Conforme o lead interage com a IA e avança nas etapas — responde as perguntas de qualificação, escolhe um horário de reunião, confirma o agendamento — o card dele é movido automaticamente entre as colunas do pipeline (Novo Lead → Qualificado → Reunião Marcada → Fechado). Nenhum clique manual é necessário.",
  },
  {
    question: "Como o rastreamento de anúncios funciona?",
    answer:
      "Quando um lead clica em um anúncio e abre uma conversa no WhatsApp, a Yollo IA identifica automaticamente qual campanha ou anúncio gerou aquele contato. Assim você sabe exatamente quais anúncios estão trazendo leads qualificados, sem precisar perguntar ao cliente 'como nos encontrou'.",
  },
  {
    question: "Quais planos estão disponíveis?",
    answer:
      "Oferecemos três modalidades: Mensal, Trimestral e Semestral. Todos os planos podem ser cancelados a qualquer momento, sem multa e sem burocracia.",
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
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
