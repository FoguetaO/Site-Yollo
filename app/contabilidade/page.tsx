import NavbarContabil from "@/components/contabil/navbar-contabil"
import HeroContabil from "@/components/contabil/hero-contabil"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import ComparisonContabil from "@/components/contabil/comparison-contabil"
import HowItWorksContabil from "@/components/contabil/how-it-works-contabil"
import ObjectivesContabil from "@/components/contabil/objectives-contabil"
import StatsContabil from "@/components/contabil/stats-contabil"
import LeadFormContabil from "@/components/contabil/lead-form-contabil"
import FAQContabil from "@/components/contabil/faq-contabil"
import FooterContabil from "@/components/contabil/footer-contabil"
import WhatsAppFloat from "@/components/whatsapp-float"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata = {
  title: "Yollo IA para Contabilidade — Captação, Qualificação e Atendimento Automático de Leads",
  description:
    "Automação de captação e qualificação de leads via WhatsApp com IA para escritórios contábeis. Agenda reuniões, distribui por departamento, rastreia anúncios e move leads no CRM automaticamente.",
  alternates: { canonical: "https://yolloia.com.br/contabilidade" },
  openGraph: {
    title: "IA para Escritórios Contábeis — Yollo IA",
    description: "Automatize o atendimento do seu escritório contábil. Responda clientes, lembre prazos e recolha documentos com IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

const segmentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IA para Contabilidade — Yollo IA",
  description: "Automação de atendimento via WhatsApp com IA para escritórios contábeis.",
  url: "https://yolloia.com.br/contabilidade",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://yolloia.com.br" },
      { "@type": "ListItem", position: 2, name: "Contabilidade", item: "https://yolloia.com.br/contabilidade" },
    ],
  },
}

export default function ContabilidadePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(segmentSchema) }}
      />
      <main>
        <NavbarContabil />
        <HeroContabil />
        <ScrollReveal><ComparisonContabil /></ScrollReveal>
        <ScrollReveal delay={50}><HowItWorksContabil /></ScrollReveal>
        <ScrollReveal delay={50}><ObjectivesContabil /></ScrollReveal>
        <ScrollReveal delay={50}><StatsContabil /></ScrollReveal>
        <ScrollReveal delay={50}>
        <SegmentFeatureHero
          badge="IA para Escritórios Contábeis"
          title="Do lead curioso ao contrato assinado, sem o contador precisar intervir"
          description="Os recursos da Yollo IA para escritórios contábeis incluem:"
          features={[
            { label: "Agendamento automático e atendimento por IA 24h no WhatsApp", href: "#funcionalidades" },
            { label: "Qualificação de leads e distribuição por departamento", href: "#funcionalidades" },
            { label: "Rastreamento de anúncios e CRM com movimentação automática", href: "#funcionalidades" },
          ]}
          ctaLabel="Explore os recursos para contabilidade"
          ctaHref="#contratar"
          phoneImage={{
            src: "/ultimasecao.png",
            alt: "Smartphone mostrando atendimento automático de escritório contábil via WhatsApp com IA Yollo",
          }}
          accentColor="#6C4FE8"
          titleFontSize="43px"
          sectionPaddingTop="30px"
          contentPaddingTop="67px"
        />
        </ScrollReveal>
        <ScrollReveal delay={50}><LeadFormContabil /></ScrollReveal>
        <ScrollReveal delay={50}><FAQContabil /></ScrollReveal>
        <ScrollReveal delay={50}><FooterContabil /></ScrollReveal>
        <WhatsAppFloat />
      </main>
    </>
  )
}
