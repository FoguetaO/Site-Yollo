import NavbarContabil from "@/components/contabil/navbar-contabil"
import HeroContabil from "@/components/contabil/hero-contabil"
import ComparisonContabil from "@/components/contabil/comparison-contabil"
import HowItWorksContabil from "@/components/contabil/how-it-works-contabil"
import ObjectivesContabil from "@/components/contabil/objectives-contabil"
import StatsContabil from "@/components/contabil/stats-contabil"
import LeadFormContabil from "@/components/contabil/lead-form-contabil"
import FAQContabil from "@/components/contabil/faq-contabil"
import FooterContabil from "@/components/contabil/footer-contabil"
import WhatsAppFloat from "@/components/whatsapp-float"

export const metadata = {
  title: "Yollo IA — Assistente IA para WhatsApp que Atende Clientes, Lembra Prazos e Recolhe Documentos 24/7",
  description:
    "Assistente IA para WhatsApp especializada em escritórios contábeis. Responde dúvidas fiscais, envia lembretes de obrigações, recolhe documentos e agenda reuniões automaticamente. Teste grátis.",
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
      <LeadFormContabil />
      <FAQContabil />
      <FooterContabil />
      <WhatsAppFloat />
    </main>
  )
}
