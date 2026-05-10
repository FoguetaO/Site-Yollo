import NavbarEstetica from "@/components/estetica/navbar-estetica"
import HeroEstetica from "@/components/estetica/hero-estetica"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import Comparison from "@/components/comparison"
import HowItWorks from "@/components/how-it-works"
import Objectives from "@/components/objectives"
import Stats from "@/components/stats"
import LeadForm from "@/components/lead-form"
import Security from "@/components/security"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export const metadata = {
  title: "IA para Clínicas de Estética: Atendimento Automático no WhatsApp 24h — Yollo IA",
  description:
    "Agende botox, limpeza de pele, micropigmentação e peeling automaticamente pelo WhatsApp com IA. Confirmações automáticas reduzem faltas. Sem secretária, sem falhas, 24h por dia.",
  alternates: { canonical: "https://yolloia.com.br/clinica-de-estetica" },
  openGraph: {
    title: "IA para Clínicas de Estética: Agendamento Automático 24h — Yollo IA",
    description: "Reduza faltas e agende procedimentos automaticamente pelo WhatsApp com IA. Botox, limpeza de pele, micropigmentação e mais.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

const segmentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IA para Clínicas de Estética — Yollo IA",
  description:
    "Automação de atendimento via WhatsApp com IA para clínicas de estética. Agendamento automático, qualificação de leads e CRM integrado.",
  url: "https://yolloia.com.br/clinica-de-estetica",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://yolloia.com.br" },
      { "@type": "ListItem", position: 2, name: "Clínica de Estética", item: "https://yolloia.com.br/clinica-de-estetica" },
    ],
  },
}

export default function ClinicaDeEsteticaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(segmentSchema) }}
      />
      <NavbarEstetica />
      <main>
        <HeroEstetica />
        <Comparison />
        <HowItWorks />
        <Objectives />
        <Stats />
        <SegmentFeatureHero
          badge="IA para Clínicas de Estética"
          title="Menos faltas, mais procedimentos realizados — sem depender de secretária"
          description="O que a Yollo IA faz pela sua clínica de estética:"
          features={[
            { label: "Agenda botox, peeling, limpeza de pele e micropigmentação automaticamente", href: "#funcionalidades" },
            { label: "Envia confirmações e lembretes 24h antes para reduzir faltas", href: "#funcionalidades" },
            { label: "Qualifica a cliente e responde dúvidas sobre procedimentos no WhatsApp", href: "#funcionalidades" },
          ]}
          ctaLabel="Agendar demonstração para minha clínica"
          ctaHref="#contratar"
          phoneImage={{
            src: "/ultimasecao.png",
            alt: "Smartphone mostrando atendimento automático via WhatsApp em clínica de estética com IA Yollo",
          }}
          accentColor="#6C4FE8"
        />
        <LeadForm />
        <Security />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
