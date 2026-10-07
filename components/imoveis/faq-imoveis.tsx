"use client"

import { useState } from "react"
import FaqItem from "@/components/faq-item"

const faqs = [
  {
    question: "O que é a Yollo IA para imobiliárias?",
    answer:
      "A Yollo IA é uma plataforma de atendimento inteligente para WhatsApp especializada no mercado imobiliário. Ela atende leads automaticamente 24 horas por dia, responde dúvidas sobre imóveis, preços e condições de financiamento, qualifica compradores e inquilinos e agenda visitas — tudo configurado via prompt com as informações da sua carteira.",
  },
  {
    question: "Para quem a Yollo IA imobiliária é indicada?",
    answer:
      "É ideal para qualquer profissional ou empresa do mercado imobiliário que recebe leads pelo WhatsApp e quer automatizar a triagem sem perder qualidade. Os perfis mais comuns são: corretores autônomos, imobiliárias de médio porte, construtoras com stand de vendas, gestoras de locação e incorporadoras.",
  },
  {
    question: "Como a IA aprende sobre minha imobiliária?",
    answer:
      "A Yollo IA é treinada por prompt — você informa os tipos de imóveis, regiões de atuação, condições de venda e locação, e o tom de atendimento. Nosso gerador cria o prompt completo que instrui a IA. Não é necessário treinar com conversas.",
  },
  {
    question: "Como funciona a integração com minha agenda de visitas?",
    answer:
      "A Yollo IA verifica a disponibilidade do corretor responsável pelo imóvel, confirma o agendamento da visita diretamente no WhatsApp e envia lembretes automáticos para o lead no dia anterior e algumas horas antes — reduzindo no-shows consideravelmente.",
  },
  {
    question: "A IA consegue apresentar os imóveis com fotos?",
    answer:
      "Sim. A Yollo IA pode enviar links do imóvel, imagens e até vídeos diretamente no chat do WhatsApp. Ela também descreve os principais atributos do imóvel (metragem, quartos, vagas, condomínio) com base nas informações que você configurou no prompt.",
  },
  {
    question: "Quais planos estão disponíveis?",
    answer:
      "Oferecemos três modalidades: Mensal, Trimestral e Semestral. Todos os planos podem ser cancelados a qualquer momento, sem multa e sem burocracia.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer:
      "Sim! Oferecemos uma demonstração gratuita onde você pode ver a Yollo IA em ação com os dados da sua própria imobiliária. Basta preencher o formulário e nossa equipe entrará em contato para agendar.",
  },
]

export default function FAQImoveis() {
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
