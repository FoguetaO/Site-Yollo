import type { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Yollo IA — Assistente IA para WhatsApp que Agenda, Qualifica e Atende 24/7",
  description:
    "Automatize o atendimento do seu negócio pelo WhatsApp com Inteligência Artificial. A Yollo IA agenda, qualifica leads, faz follow-up e dispara campanhas 24h por dia. Ideal para clínicas de estética, imobiliárias, escritórios contábeis e advocacia.",
  alternates: {
    canonical: "https://yolloia.com.br",
  },
  openGraph: {
    title: "Yollo IA — Assistente IA para WhatsApp que Agenda, Qualifica e Atende 24/7",
    description:
      "Automatize o atendimento do seu negócio pelo WhatsApp com IA. Agenda, qualifica leads, faz follow-up e dispara campanhas 24h por dia.",
    url: "https://yolloia.com.br",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yollo IA — Assistente IA para WhatsApp",
    description: "Automatize o atendimento do seu negócio pelo WhatsApp com IA. Agenda, qualifica e atende 24h.",
  },
}


import Hero from "@/components/hero"
import SegmentFeatureHero from "@/components/segment-feature-hero"
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
      <SegmentFeatureHero
        badge="IA para Clínicas de Estética"
        title="A secretária virtual que atende e agenda por você, 24h por dia"
        description="O conjunto de recursos guiados por IA da Yollo inclui funcionalidades incríveis:"
        features={[
          { label: "Agendamento automático de procedimentos", href: "#funcionalidades" },
          { label: "Qualificação e CRM de clientes", href: "#funcionalidades" },
          { label: "Lembretes e redução de faltas", href: "#funcionalidades" },
        ]}
        ctaLabel="Explore os recursos para clínicas"
        ctaHref="#contratar"
        phoneImage={{
          src: "/ultimasecao.png",
          alt: "Smartphone sendo segurado por uma mão mostrando conversa de atendimento automático via WhatsApp pela IA Yollo em clínica de estética",
        }}
        accentColor="#6C4FE8"
      />
      <Security />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
