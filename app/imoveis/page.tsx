import NavbarImoveis from "@/components/imoveis/navbar-imoveis"
import HeroImoveis from "@/components/imoveis/hero-imoveis"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import ComparisonImoveis from "@/components/imoveis/comparison-imoveis"
import HowItWorksImoveis from "@/components/imoveis/how-it-works-imoveis"
import HowItConnectsImoveis from "@/components/imoveis/how-it-connects-imoveis"
import ObjectivesImoveis from "@/components/imoveis/objectives-imoveis"
import StatsImoveis from "@/components/imoveis/stats-imoveis"
import LeadFormImoveis from "@/components/imoveis/lead-form-imoveis"
import SocialProofImoveis from "@/components/imoveis/social-proof-imoveis"
import SecurityImoveis from "@/components/imoveis/security-imoveis"
import FAQImoveis from "@/components/imoveis/faq-imoveis"
import FooterImoveis from "@/components/imoveis/footer-imoveis"
import WhatsAppFloat from "@/components/whatsapp-float"
import ScrollReveal from "@/components/scroll-reveal"

const segmentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IA para Imobiliárias e Corretores de Imóveis — Yollo IA",
  description:
    "Automação de atendimento via WhatsApp com IA para imobiliárias e corretores. Qualificação de leads, agendamento de visitas e follow-up automático.",
  url: "https://yolloia.com.br/imoveis",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://yolloia.com.br" },
      { "@type": "ListItem", position: 2, name: "Imóveis", item: "https://yolloia.com.br/imoveis" },
    ],
  },
}

export const metadata = {
  title: "IA para Imobiliárias: Qualifique Leads e Agende Visitas pelo WhatsApp — Yollo IA",
  description:
    "Qualifique compradores e locatários, agende visitas e faça follow-up de propostas automaticamente pelo WhatsApp. Seu corretor só entra em campo com leads prontos para fechar.",
  alternates: { canonical: "https://yolloia.com.br/imoveis" },
  openGraph: {
    title: "IA para Imobiliárias: Qualificação de Leads e Agendamento de Visitas — Yollo IA",
    description: "Qualifique leads imobiliários, agende visitas e faça follow-up automático pelo WhatsApp com IA. Atendimento 24h.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

export default function ImoveisPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(segmentSchema) }}
      />
      <NavbarImoveis />
      <HeroImoveis />
      <ScrollReveal><ComparisonImoveis /></ScrollReveal>
      <ScrollReveal delay={50}><HowItWorksImoveis /></ScrollReveal>
      <ScrollReveal delay={50}><HowItConnectsImoveis /></ScrollReveal>
      <ScrollReveal delay={50}><ObjectivesImoveis /></ScrollReveal>

      <ScrollReveal delay={50}><StatsImoveis /></ScrollReveal>
      <ScrollReveal delay={50}><LeadFormImoveis /></ScrollReveal>
      <ScrollReveal delay={50}><SocialProofImoveis /></ScrollReveal>
      <ScrollReveal delay={50}>
      <SegmentFeatureHero
        badge="IA para Imobiliárias e Corretores"
        title="Seu corretor fecha o negócio. A IA cuida de tudo antes disso."
        description="O que a Yollo IA faz pela sua imobiliária:"
        features={[
          { label: "Qualifica compradores e locatários: tipo de imóvel, bairro, orçamento e prazo", href: "#funcionalidades" },
          { label: "Agenda visitas automaticamente e confirma presença 1h antes", href: "#funcionalidades" },
          { label: "Faz follow-up de propostas sem o corretor precisar lembrar", href: "#funcionalidades" },
        ]}
        ctaLabel="Agendar demonstração para minha imobiliária"
        ctaHref="#contratar"
        phoneImage={{
          src: "/ultimasecao.png",
          alt: "Smartphone mostrando qualificação automática de leads imobiliários via WhatsApp com a IA Yollo — agendamento de visitas e follow-up automático",
        }}
        accentColor="#6C4FE8"
      />
      </ScrollReveal>
      <ScrollReveal delay={50}><SecurityImoveis /></ScrollReveal>
      <ScrollReveal delay={50}><FAQImoveis /></ScrollReveal>
      <ScrollReveal delay={50}><FooterImoveis /></ScrollReveal>
      <WhatsAppFloat />
    </main>
  )
}
