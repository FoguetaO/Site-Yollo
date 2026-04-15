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

export const metadata = {
  title: "Yollo IA para Advocacia  -  IA no WhatsApp que Agenda Consultas e Qualifica Clientes 24/7",
  description:
    "Automação de atendimento via WhatsApp com IA para escritórios de advocacia. Agende consultas, qualifique potenciais clientes e faça follow-up automaticamente  -  respeitando as normas da OAB.",
  alternates: { canonical: "https://yolloia.com.br/advocacia" },
  openGraph: {
    title: "IA para Escritórios de Advocacia  -  Yollo IA",
    description: "Agende consultas, qualifique clientes e automatize o atendimento do seu escritório com IA. Normas OAB respeitadas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

export default function AdvocaciaPage() {
  return (
    <main>
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
        title="Agende consultas e qualifique clientes enquanto você advoga"
        description="Os recursos da Yollo IA para escritórios de advocacia incluem:"
        features={[
          { label: "Agendamento automático de consultas iniciais", href: "#funcionalidades" },
          { label: "Qualificação de potenciais clientes por área do direito", href: "#funcionalidades" },
          { label: "Follow-up ético e dentro das normas da OAB", href: "#funcionalidades" },
        ]}
        ctaLabel="Explore os recursos para advocacia"
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
