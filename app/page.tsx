import type { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Yollo IA — Automação de WhatsApp com IA para Clínicas, Imobiliárias, Contadores e Advogados",
  description:
    "Automatize o atendimento do seu negócio pelo WhatsApp com Inteligência Artificial. A Yollo IA agenda, qualifica leads, faz follow-up e dispara campanhas 24h por dia. Ideal para clínicas de estética, imobiliárias, escritórios contábeis e advocacia.",
  keywords: [
    "automação WhatsApp",
    "chatbot WhatsApp com IA",
    "assistente virtual WhatsApp",
    "agendamento automático WhatsApp",
    "IA para clínica de estética",
    "IA para imobiliária",
    "IA para escritório contábil",
    "IA para advocacia",
    "WhatsApp Business API",
    "CRM WhatsApp",
    "disparo em massa WhatsApp",
    "follow-up automático WhatsApp",
    "atendimento automático 24 horas",
    "qualificação de leads WhatsApp",
    "chatbot para clínica de estética",
    "automação de atendimento",
    "Meta Tech Provider",
    "parceiro oficial Meta WhatsApp",
  ],
  alternates: {
    canonical: "https://yollo.ai",
  },
}


import Hero from "@/components/hero"
import Features from "@/components/features"
import Comparison from "@/components/comparison"
import HowItWorks from "@/components/how-it-works"
import HowItConnects from "@/components/how-it-connects"
import Objectives from "@/components/objectives"
import ConfigureIA from "@/components/configure-ia"
import Stats from "@/components/stats"
import LeadForm from "@/components/lead-form"
import SocialProof from "@/components/social-proof"
import Security from "@/components/security"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <HowItWorks />
      <HowItConnects />
      <Objectives />
      <ConfigureIA />
      <Stats />
      <LeadForm />
      <SocialProof />
      <Security />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
