import type { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Yollo IA  -  Automação de Atendimento no WhatsApp com Inteligência Artificial",
  description:
    "A Yollo IA automatiza o atendimento do seu negócio pelo WhatsApp com IA. Agenda, qualifica leads, faz follow-up e dispara campanhas 24h por dia. Para clínicas de estética, imobiliárias, escritórios contábeis e advocacia.",
  alternates: {
    canonical: "https://yolloia.com.br",
  },
  openGraph: {
    title: "Yollo IA  -  Automação de Atendimento no WhatsApp com IA",
    description:
      "Automatize o atendimento do seu negócio pelo WhatsApp com IA. Agenda, qualifica leads, faz follow-up e dispara campanhas 24h por dia.",
    url: "https://yolloia.com.br",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yollo IA  -  Automação de WhatsApp com IA",
    description: "Automatize o atendimento do seu negócio pelo WhatsApp com IA. Agenda, qualifica e atende 24h.",
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
import ScrollReveal from "@/components/scroll-reveal"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollReveal><Comparison /></ScrollReveal>
      <ScrollReveal delay={50}><Features /></ScrollReveal>
      <ScrollReveal delay={50}><HowItWorks /></ScrollReveal>
      <ScrollReveal delay={50}><HowItConnects /></ScrollReveal>
      <ScrollReveal delay={50}><Objectives /></ScrollReveal>
      <ScrollReveal delay={50}><ConfigureIA /></ScrollReveal>
      <ScrollReveal delay={50}><Stats /></ScrollReveal>
      <ScrollReveal delay={50}><LeadForm /></ScrollReveal>
      <ScrollReveal delay={50}><SocialProof /></ScrollReveal>
      <ScrollReveal delay={50}><Security /></ScrollReveal>
      <ScrollReveal delay={50}><FAQ /></ScrollReveal>
      <ScrollReveal delay={50}><Footer /></ScrollReveal>
      <WhatsAppFloat />
    </main>
  )
}
