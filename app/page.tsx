import type { Metadata } from "next"
import Navbar from "@/components/navbar"

const organizationSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "SoftwareApplication"],
  name: "Yollo IA",
  url: "https://yolloia.com.br",
  description:
    "Plataforma de automação de atendimento via WhatsApp com Inteligência Artificial para clínicas de estética, imobiliárias, escritórios contábeis e de advocacia.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "89",
  },
}

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é a Yollo IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Yollo IA é uma plataforma de automação de atendimento via WhatsApp com Inteligência Artificial. Ela atende seus clientes automaticamente 24 horas por dia, 7 dias por semana, responde dúvidas, qualifica leads e agenda procedimentos ou reuniões diretamente no chat — tudo configurado por você, sem precisar de programador.",
      },
    },
    {
      "@type": "Question",
      name: "Para quem a Yollo IA é indicada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Yollo IA é ideal para qualquer negócio que recebe clientes pelo WhatsApp e quer automatizar o atendimento sem perder qualidade. Os segmentos com maior resultado são: clínicas de estética e dermatologia, imobiliárias e corretores de imóveis, escritórios de contabilidade e advocacia, salões de beleza, spas, consultórios e profissionais liberais.",
      },
    },
    {
      "@type": "Question",
      name: "Como a IA aprende sobre o meu negócio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Yollo IA é configurada por prompt — você preenche as informações do seu negócio (serviços, preços, horários, tom de atendimento) e nosso gerador automático cria um prompt completo que instrui a IA sobre como atender seus clientes. Não há necessidade de programação ou treinamento com histórico de conversas.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a integração com minha agenda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Yollo IA integra com as principais ferramentas de agenda online. O chatbot verifica os horários disponíveis em tempo real e confirma o agendamento diretamente no WhatsApp. Após o agendamento, envia lembretes automáticos para reduzir faltas e no-shows — sem você precisar intervir.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso de um número novo ou posso usar o número atual do meu negócio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você pode usar o número existente do seu negócio. Oferecemos integração tanto via API Oficial do WhatsApp Business (Meta Tech Provider) quanto via API não oficial (Meta Tech Provider) — você escolhe a opção que melhor se encaixa. Nenhuma das opções exige trocar o número.",
      },
    },
    {
      "@type": "Question",
      name: "A Yollo IA funciona para imobiliárias e escritórios de advocacia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! A Yollo IA é multi-segmento. Para imobiliárias, automatiza a qualificação de leads, agendamento de visitas e follow-up de propostas. Para escritórios de advocacia, agenda consultas, responde dúvidas iniciais e encaminha os clientes para os advogados responsáveis — sempre dentro das normas da OAB.",
      },
    },
    {
      "@type": "Question",
      name: "Quais planos estão disponíveis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferecemos três modalidades: Mensal, Trimestral e Semestral. Todos os planos incluem acesso completo à plataforma, suporte e atualizações. Você pode cancelar a qualquer momento, sem multa e sem burocracia.",
      },
    },
    {
      "@type": "Question",
      name: "Posso testar antes de contratar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Oferecemos uma demonstração gratuita e personalizada com os dados do seu negócio. Basta preencher o formulário acima e nossa equipe entrará em contato para agendar a demo — sem compromisso.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Yollo IA — Automação de Atendimento no WhatsApp com Inteligência Artificial",
  description:
    "A Yollo IA automatiza o atendimento do seu negócio pelo WhatsApp com IA. Agenda, qualifica leads, faz follow-up e dispara campanhas 24h por dia. Para clínicas de estética, imobiliárias, escritórios contábeis e advocacia.",
  alternates: {
    canonical: "https://yolloia.com.br",
  },
  openGraph: {
    title: "Yollo IA — Automação de Atendimento no WhatsApp com IA",
    description:
      "Automatize o atendimento do seu negócio pelo WhatsApp com IA. Agenda, qualifica leads, faz follow-up e dispara campanhas 24h por dia.",
    url: "https://yolloia.com.br",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yollo IA — Automação de WhatsApp com IA",
    description: "Automatize o atendimento do seu negócio pelo WhatsApp com IA. Agenda, qualifica e atende 24h.",
  },
}


import Hero from "@/components/hero"
import Features from "@/components/features"
import Comparison from "@/components/comparison"
import HowItWorks from "@/components/how-it-works"
import HowItConnects from "@/components/how-it-connects"
import Objectives from "@/components/objectives"
import Stats from "@/components/stats"
import LeadForm from "@/components/lead-form"
import SocialProof from "@/components/social-proof"
import Security from "@/components/security"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import ScrollReveal from "@/components/scroll-reveal"

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSoftwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Navbar />
      <Hero />
      <ScrollReveal><Comparison /></ScrollReveal>
      <ScrollReveal delay={50}><Features /></ScrollReveal>
      <ScrollReveal delay={50}><HowItWorks /></ScrollReveal>
      <ScrollReveal delay={50}><HowItConnects /></ScrollReveal>
      <ScrollReveal delay={50}><Objectives /></ScrollReveal>

      <ScrollReveal delay={50}><Stats /></ScrollReveal>
      <ScrollReveal delay={50}><LeadForm /></ScrollReveal>
      <ScrollReveal delay={50}><SocialProof /></ScrollReveal>
      <ScrollReveal delay={50}><Security /></ScrollReveal>
      <ScrollReveal delay={50}><FAQ /></ScrollReveal>
      <ScrollReveal delay={50}><Footer /></ScrollReveal>
      <WhatsAppFloat />
    </main>
  )
}
