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

export const metadata = {
  title: "Yollo IA para Advocacia — IA no WhatsApp que Agenda Consultas e Qualifica Clientes 24/7",
  description:
    "Automação de atendimento via WhatsApp com IA para escritórios de advocacia. Agende consultas, qualifique potenciais clientes e faça follow-up automaticamente — respeitando as normas da OAB.",
  keywords: [
    "IA para escritório de advocacia",
    "automação WhatsApp advocacia",
    "chatbot WhatsApp advogado",
    "agendamento de consultas jurídicas",
    "qualificação de clientes advocacia",
    "marketing jurídico WhatsApp",
    "atendimento automático escritório advocacia",
    "CRM para advogados",
    "assistente virtual jurídico",
    "WhatsApp para advogados",
  ],
  alternates: { canonical: "https://yollo.ai/advocacia" },
  openGraph: {
    title: "IA para Escritórios de Advocacia — Yollo IA",
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
      <SegmentFeatureHero
        badge="IA para Escritórios de Advocacia"
        title="O assistente jurídico que agenda consultas e qualifica clientes enquanto você advoga"
        description="Os recursos da Yollo IA para escritórios de advocacia incluem:"
        features={[
          { label: "Agendamento automático de consultas iniciais", href: "#funcionalidades" },
          { label: "Qualificação de potenciais clientes por área do direito", href: "#funcionalidades" },
          { label: "Follow-up ético e dentro das normas da OAB", href: "#funcionalidades" },
        ]}
        ctaLabel="Explore os recursos para advocacia"
        ctaHref="#contratar"
        phoneImage={{
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qLv2UZe56j2fGzRf6QXfRdLRCz1lz4.png",
          alt: "Smartphone mostrando agendamento automático de consultas jurídicas via WhatsApp com IA Yollo para escritório de advocacia",
        }}
        accentColor="#7c3aed"
        gradientFrom="#faf5ff"
        gradientVia="#ede9fe"
        gradientTo="#f5f3ff"
      />
      <ComparisonAdvocacia />
      <HowItWorksAdvocacia />
      <StatsAdvocacia />
      <ObjectivesAdvocacia />
      <FAQAdvocacia />
      <LeadFormAdvocacia />
      <FooterAdvocacia />
    </main>
  )
}
