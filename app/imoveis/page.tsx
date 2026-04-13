import NavbarImoveis from "@/components/imoveis/navbar-imoveis"
import HeroImoveis from "@/components/imoveis/hero-imoveis"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import ComparisonImoveis from "@/components/imoveis/comparison-imoveis"
import HowItWorksImoveis from "@/components/imoveis/how-it-works-imoveis"
import HowItConnectsImoveis from "@/components/imoveis/how-it-connects-imoveis"
import ObjectivesImoveis from "@/components/imoveis/objectives-imoveis"
import ConfigureIAImoveis from "@/components/imoveis/configure-ia-imoveis"
import StatsImoveis from "@/components/imoveis/stats-imoveis"
import LeadFormImoveis from "@/components/imoveis/lead-form-imoveis"
import SocialProofImoveis from "@/components/imoveis/social-proof-imoveis"
import SecurityImoveis from "@/components/imoveis/security-imoveis"
import FAQImoveis from "@/components/imoveis/faq-imoveis"
import FooterImoveis from "@/components/imoveis/footer-imoveis"
import WhatsAppFloat from "@/components/whatsapp-float"

export const metadata = {
  title: "Yollo IA para Imobiliárias — IA no WhatsApp que Capta, Qualifica e Agenda Visitas 24/7",
  description:
    "Automação de atendimento via WhatsApp com IA para imobiliárias e corretores de imóveis. Qualifique leads, agende visitas e faça follow-up automaticamente. Parceiro oficial Meta — WhatsApp Business API.",
  keywords: [
    "IA para imobiliária",
    "automação WhatsApp imobiliária",
    "qualificação de leads imobiliários",
    "chatbot WhatsApp corretor de imóveis",
    "CRM para imobiliária",
    "agendamento de visitas automático",
    "follow-up automático imobiliária",
    "WhatsApp para corretor de imóveis",
    "assistente virtual imobiliária",
    "captação de leads imobiliários",
  ],
  alternates: { canonical: "https://yollo.ai/imoveis" },
  openGraph: {
    title: "IA para Imobiliárias e Corretores — Yollo IA",
    description: "Qualifique leads, agende visitas e feche mais negócios pelo WhatsApp com IA. Atendimento 24h.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

export default function ImoveisPage() {
  return (
    <main>
      <NavbarImoveis />
      <HeroImoveis />
      <SegmentFeatureHero
        badge="IA para Imobiliárias e Corretores"
        title="O assistente que qualifica leads e agenda visitas enquanto você fecha negócios"
        description="Os recursos da Yollo IA para o setor imobiliário incluem:"
        features={[
          { label: "Qualificação automática de compradores e locatários", href: "#funcionalidades" },
          { label: "Agendamento de visitas pelo WhatsApp", href: "#funcionalidades" },
          { label: "Follow-up automático de propostas e negociações", href: "#funcionalidades" },
        ]}
        ctaLabel="Explore os recursos para imobiliárias"
        ctaHref="#contratar"
        phoneImage={{
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qLv2UZe56j2fGzRf6QXfRdLRCz1lz4.png",
          alt: "Smartphone mostrando qualificação automática de leads imobiliários via WhatsApp com a IA Yollo — agendamento de visitas e follow-up automático",
        }}
        accentColor="#2563EB"
        gradientFrom="#eff6ff"
        gradientVia="#dbeafe"
        gradientTo="#ede9fd"
      />
      <ComparisonImoveis />
      <HowItWorksImoveis />
      <HowItConnectsImoveis />
      <ObjectivesImoveis />
      <ConfigureIAImoveis />
      <StatsImoveis />
      <LeadFormImoveis />
      <SocialProofImoveis />
      <SecurityImoveis />
      <FAQImoveis />
      <FooterImoveis />
      <WhatsAppFloat />
    </main>
  )
}
