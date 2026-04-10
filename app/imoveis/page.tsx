import NavbarImoveis from "@/components/imoveis/navbar-imoveis"
import HeroImoveis from "@/components/imoveis/hero-imoveis"
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
  title: "Bella IA — Assistente IA para WhatsApp que Capta, Qualifica e Vende Imóveis 24/7",
  description:
    "Assistente IA para WhatsApp que responde leads em segundos, qualifica compradores e agenda visitas automaticamente para sua imobiliária. Teste 30 dias.",
}

export default function ImoveisPage() {
  return (
    <main>
      <NavbarImoveis />
      <HeroImoveis />
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
