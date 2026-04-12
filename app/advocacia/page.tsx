import NavbarAdvocacia from "@/components/advocacia/navbar-advocacia"
import HeroAdvocacia from "@/components/advocacia/hero-advocacia"
import ComparisonAdvocacia from "@/components/advocacia/comparison-advocacia"
import HowItWorksAdvocacia from "@/components/advocacia/how-it-works-advocacia"
import StatsAdvocacia from "@/components/advocacia/stats-advocacia"
import ObjectivesAdvocacia from "@/components/advocacia/objectives-advocacia"
import FAQAdvocacia from "@/components/advocacia/faq-advocacia"
import LeadFormAdvocacia from "@/components/advocacia/lead-form-advocacia"
import FooterAdvocacia from "@/components/advocacia/footer-advocacia"

export const metadata = {
  title: "Advocacia - Yollo IA | Atendimento 24h para Escritórios Jurídicos",
  description: "Seu escritório de advocacia atendendo clientes 24h pelo WhatsApp com IA. Qualifique leads, agende consultas e aumente receita sem contratar mais atendentes.",
  keywords: "advocacia WhatsApp, IA para advogados, atendimento jurídico automático, marketing para advogados",
}

export default function AdvocaciaPage() {
  return (
    <main>
      <NavbarAdvocacia />
      <HeroAdvocacia />
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
