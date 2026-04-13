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

export const metadata = {
  title: "Yollo IA para Contabilidade — IA no WhatsApp que Atende Clientes e Lembra Obrigações 24/7",
  description:
    "Automação de atendimento via WhatsApp com IA para escritórios contábeis e contadores. Responde dúvidas fiscais, envia lembretes de obrigações, recolhe documentos e agenda reuniões automaticamente.",
  alternates: { canonical: "https://yolloia.com.br/contabil" },
  openGraph: {
    title: "IA para Escritórios Contábeis — Yollo IA",
    description: "Automatize o atendimento do seu escritório contábil. Responda clientes, lembre prazos e recolha documentos com IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

export default function ContabilPage() {
  return (
    <main>
      <NavbarContabil />
      <HeroContabil />
      <ComparisonContabil />
      <HowItWorksContabil />
      <ObjectivesContabil />
      <StatsContabil />
      <SegmentFeatureHero
        badge="IA para Escritórios Contábeis"
        title="O assistente contábil que atende clientes e lembra prazos por você, 24h por dia"
        description="Os recursos guiados por IA da Yollo para contabilidade incluem:"
        features={[
          { label: "Respostas automáticas a dúvidas fiscais e trabalhistas", href: "#funcionalidades" },
          { label: "Lembretes automáticos de obrigações e prazos", href: "#funcionalidades" },
          { label: "Recolhimento de documentos e agendamento de reuniões", href: "#funcionalidades" },
        ]}
        ctaLabel="Explore os recursos para contabilidade"
        ctaHref="#contratar"
        phoneImage={{
          src: "/ultimasecao.png",
          alt: "Smartphone mostrando atendimento automático de escritório contábil via WhatsApp com IA Yollo — lembretes fiscais e coleta de documentos",
        }}
        accentColor="#6C4FE8"
      />
      <LeadFormContabil />
      <FAQContabil />
      <FooterContabil />
      <WhatsAppFloat />
    </main>
  )
}
