import NavbarContabil from "@/components/contabil/navbar-contabil"
import HeroContabil from "@/components/contabil/hero-contabil"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import ComparisonContabil from "@/components/contabil/comparison-contabil"
import HowItWorksContabil from "@/components/contabil/how-it-works-contabil"
import CRMSectionContabil from "@/components/contabil/crm-section-contabil"
import ObjectivesContabil from "@/components/contabil/objectives-contabil"
import StatsContabil from "@/components/contabil/stats-contabil"
import LeadFormContabil from "@/components/contabil/lead-form-contabil"
import FAQContabil from "@/components/contabil/faq-contabil"
import FooterContabil from "@/components/contabil/footer-contabil"
import WhatsAppFloat from "@/components/whatsapp-float"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata = {
  title: "IA para Escritórios Contábeis: Atenda Mais Clientes sem Ampliar a Equipe — Yollo IA",
  description:
    "Responda dúvidas fiscais, envie lembretes de obrigações e capte novos leads automaticamente pelo WhatsApp. Escale o atendimento do seu escritório contábil sem precisar contratar mais colaboradores.",
  alternates: { canonical: "https://yolloia.com.br/contabilidade" },
  openGraph: {
    title: "IA para Escritórios Contábeis: Mais Clientes, Mesma Equipe — Yollo IA",
    description: "Automatize dúvidas fiscais, lembretes de obrigações e captação de leads para seu escritório contábil com IA no WhatsApp.",
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
        <CRMSectionContabil />
        <ScrollReveal delay={50}><ObjectivesContabil /></ScrollReveal>
        <ScrollReveal delay={50}><StatsContabil /></ScrollReveal>
        <ScrollReveal delay={50}>
        <SegmentFeatureHero
          badge="IA para Escritórios Contábeis"
          title="Escale o atendimento do seu escritório sem contratar mais ninguém"
          description="O que a Yollo IA faz pelo seu escritório contábil:"
          features={[
            { label: "Responde dúvidas sobre IRPF, MEI, Simples Nacional e obrigações acessórias", href: "#funcionalidades" },
            { label: "Envia lembretes automáticos de vencimentos fiscais para cada cliente", href: "#funcionalidades" },
            { label: "Capta, qualifica e agenda reunião com novos leads sem intervenção da equipe", href: "#funcionalidades" },
          ]}
          ctaLabel="Agendar demonstração para meu escritório"
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
