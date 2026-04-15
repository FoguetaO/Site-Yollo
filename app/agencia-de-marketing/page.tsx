import NavbarAgencia from "@/components/agencia/navbar-agencia"
import HeroAgencia from "@/components/agencia/hero-agencia"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import ComparisonAgencia from "@/components/agencia/comparison-agencia"
import HowItWorksAgencia from "@/components/agencia/how-it-works-agencia"
import StatsAgencia from "@/components/agencia/stats-agencia"
import ObjectivesAgencia from "@/components/agencia/objectives-agencia"
import FAQAgencia from "@/components/agencia/faq-agencia"
import LeadFormAgencia from "@/components/agencia/lead-form-agencia"
import FooterAgencia from "@/components/agencia/footer-agencia"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata = {
  title: "Yollo IA para Agências de Marketing  -  Prospecção Automática por Segmento e Cidade via WhatsApp",
  description:
    "Automatize a prospecção da sua agência de marketing com IA. Mapeie empresas por segmento e cidade, dispare mensagens em massa pelo WhatsApp e encha o pipeline de reuniões qualificadas.",
  alternates: { canonical: "https://yolloia.com.br/agencia-de-marketing" },
  openGraph: {
    title: "IA para Agências de Marketing  -  Yollo IA",
    description: "Prospecte clientes por segmento e cidade, dispare em massa pelo WhatsApp e agende reuniões automaticamente com a Yollo IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

export default function AgenciaMarketingPage() {
  return (
    <main>
      <NavbarAgencia />
      <HeroAgencia />
      <ScrollReveal><ComparisonAgencia /></ScrollReveal>
      <ScrollReveal delay={50}><HowItWorksAgencia /></ScrollReveal>
      <ScrollReveal delay={50}><StatsAgencia /></ScrollReveal>
      <ScrollReveal delay={50}><ObjectivesAgencia /></ScrollReveal>
      <ScrollReveal delay={50}><FAQAgencia /></ScrollReveal>
      <ScrollReveal delay={50}>
        <SegmentFeatureHero
          badge="IA para Agências de Marketing"
          title="Prospecte, dispare e feche contratos enquanto sua agência dorme"
          description="Os recursos da Yollo IA para agências de marketing incluem:"
          features={[
            { label: "Prospecção automática por segmento e cidade", href: "#funcionalidades" },
            { label: "Disparo em massa personalizado via WhatsApp", href: "#funcionalidades" },
            { label: "Nurturing e agendamento automático de reuniões", href: "#funcionalidades" },
          ]}
          ctaLabel="Explore os recursos para agências"
          ctaHref="#contratar"
          phoneImage={{
            src: "/ultimasecao.png",
            alt: "Smartphone mostrando prospecção automática e disparo em massa via WhatsApp com IA Yollo para agências de marketing",
          }}
          accentColor="#F59E0B"
        />
      </ScrollReveal>
      <ScrollReveal delay={50}><LeadFormAgencia /></ScrollReveal>
      <ScrollReveal delay={50}><FooterAgencia /></ScrollReveal>
    </main>
  )
}
