import NavbarAdvocacia from "@/components/advocacia/navbar-advocacia"
import HeroAdvocacia from "@/components/advocacia/hero-advocacia"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import ComparisonAdvocacia from "@/components/advocacia/comparison-advocacia"
import HowItWorksAdvocacia from "@/components/advocacia/how-it-works-advocacia"
import StatsAdvocacia from "@/components/advocacia/stats-advocacia"
import ObjectivesAdvocacia from "@/components/advocacia/objectives-advocacia"
import FAQAdvocacia from "@/components/advocacia/faq-advocacia"
import LeadFormAdvocacia from "@/components/advocacia/lead-form-advocacia"
import FooterAdvocacia from "@/components/advocacia/footer-advocacia"
import ScrollReveal from "@/components/scroll-reveal"

const segmentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IA para Escritórios de Advocacia — Yollo IA",
  description:
    "Automação de atendimento via WhatsApp com IA para escritórios de advocacia. Agendamento de consultas, qualificação de clientes e follow-up respeitando as normas da OAB.",
  url: "https://yolloia.com.br/advocacia",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://yolloia.com.br" },
      { "@type": "ListItem", position: 2, name: "Advocacia", item: "https://yolloia.com.br/advocacia" },
    ],
  },
}

export const metadata = {
  title: "IA para Advogados: Qualifique Clientes e Agende Consultas Automaticamente — Yollo IA",
  description:
    "Faça triagem de casos, qualifique potenciais clientes por área do direito e agende consultas automaticamente pelo WhatsApp. Compliance com as normas da OAB — atendimento jurídico 24h.",
  alternates: { canonical: "https://yolloia.com.br/advocacia" },
  openGraph: {
    title: "IA para Advogados: Triagem de Casos e Agendamento de Consultas — Yollo IA",
    description: "Traje casos, qualifique clientes e agende consultas automaticamente com IA no WhatsApp. Dentro das normas da OAB.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

export default function AdvocaciaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(segmentSchema) }}
      />
      <NavbarAdvocacia />
      <HeroAdvocacia />
      <ScrollReveal><ComparisonAdvocacia /></ScrollReveal>
      <ScrollReveal delay={50}><HowItWorksAdvocacia /></ScrollReveal>
      <ScrollReveal delay={50}><StatsAdvocacia /></ScrollReveal>
      <ScrollReveal delay={50}><ObjectivesAdvocacia /></ScrollReveal>
      <ScrollReveal delay={50}><FAQAdvocacia /></ScrollReveal>
      <ScrollReveal delay={50}>
      <SegmentFeatureHero
        badge="IA para Escritórios de Advocacia"
        title="Só entre em contato com clientes que já foram triados e qualificados"
        description="O que a Yollo IA faz pelo seu escritório de advocacia:"
        features={[
          { label: "Faz triagem de casos: identifica área do direito e viabilidade antes da consulta", href: "#funcionalidades" },
          { label: "Agenda consultas iniciais automaticamente e envia confirmação ao cliente", href: "#funcionalidades" },
          { label: "Atua dentro das diretrizes éticas da OAB — sem captação indevida de clientela", href: "#funcionalidades" },
        ]}
        ctaLabel="Agendar demonstração para meu escritório"
        ctaHref="#contratar"
        phoneImage={{
          src: "/ultimasecao.png",
          alt: "Smartphone mostrando agendamento automático de consultas jurídicas via WhatsApp com IA Yollo para escritório de advocacia",
        }}
        accentColor="#6C4FE8"
      />
      </ScrollReveal>
      <ScrollReveal delay={50}><LeadFormAdvocacia /></ScrollReveal>
      <ScrollReveal delay={50}><FooterAdvocacia /></ScrollReveal>
    </main>
  )
}
