import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SegmentHero from "@/components/segment-hero"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import LeadForm from "@/components/lead-form"
import Faq from "@/components/faq"

export const metadata: Metadata = {
  title: "IA para Clínicas de Estética — Automação de WhatsApp e Agendamento Automático",
  description:
    "Automatize o atendimento da sua clínica de estética pelo WhatsApp com Inteligência Artificial. A Yollo IA agenda procedimentos, responde clientes 24h, reduz faltas e aumenta o faturamento da sua clínica.",
  keywords: [
    "IA para clínica de estética",
    "automação WhatsApp clínica estética",
    "agendamento automático clínica estética",
    "chatbot WhatsApp clínica de estética",
    "assistente virtual estética",
    "CRM para clínica de estética",
    "reduzir faltas clínica de estética",
    "atendimento automático estética",
    "WhatsApp para clínica de estética",
    "IA para esteticista",
    "secretária virtual clínica estética",
  ],
  alternates: {
    canonical: "https://yolloia.com.br/estetica",
  },
  openGraph: {
    title: "IA para Clínicas de Estética — Yollo IA",
    description:
      "Automatize o atendimento da sua clínica de estética. Agende, qualifique e atenda clientes 24h pelo WhatsApp com IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
    images: [
      {
        url: "https://yolloia.com.br/segments/phone-estetica.jpg",
        width: 1200,
        height: 630,
        alt: "Yollo IA para clínicas de estética — automação de WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para Clínicas de Estética — Yollo IA",
    description: "Automatize o atendimento da sua clínica com IA. Agende, qualifique e atenda 24h pelo WhatsApp.",
    images: ["https://yolloia.com.br/segments/phone-estetica.jpg"],
  },
}

const segmentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IA para Clínicas de Estética — Yollo IA",
  description:
    "Automação de atendimento via WhatsApp com IA para clínicas de estética. Agendamento automático, qualificação de leads e CRM integrado.",
  url: "https://yolloia.com.br/estetica",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://yolloia.com.br" },
      { "@type": "ListItem", position: 2, name: "Clínica de Estética", item: "https://yolloia.com.br/estetica" },
    ],
  },
}

export default function EsteticaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(segmentSchema) }}
      />
      <Navbar />
      <main>
        <SegmentHero
          badge="IA para Clínicas de Estética"
          title="A secretária virtual que atende e agenda por você,"
          titleHighlight="24h por dia"
          description="A Yollo IA atende suas clientes pelo WhatsApp no momento em que elas mandam mensagem — mesmo à noite, no fim de semana ou enquanto você realiza um procedimento. Agenda, tira dúvidas, qualifica e reduz faltas automaticamente."
          ctaLabel="Explore os recursos para estética"
          ctaHref="#contratar"
          phoneImage={{
            src: "/segments/phone-estetica.jpg",
            alt: "Smartphone mostrando conversa de atendimento automático via WhatsApp em clínica de estética com IA Yollo",
          }}
          gradientFrom="#FDF2F8"
          gradientTo="#F5F3FF"
        />
        <HowItWorks />
        <Features />
        <LeadForm />
        <SegmentFeatureHero
          badge="IA para Clínicas de Estética"
          title="A secretária virtual que atende e agenda por você, 24h por dia"
          description="Os recursos guiados por IA da Yollo para clínicas de estética incluem:"
          features={[
            { label: "Agendamento automático de procedimentos", href: "#funcionalidades" },
            { label: "Qualificação e CRM de clientes", href: "#funcionalidades" },
            { label: "Lembretes e redução de faltas", href: "#funcionalidades" },
          ]}
          ctaLabel="Explore os recursos para estética"
          ctaHref="#contratar"
          phoneImage={{
            src: "/ultimasecao.png",
            alt: "Smartphone mostrando atendimento automático via WhatsApp em clínica de estética com IA Yollo",
          }}
          accentColor="#6C4FE8"
        />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
