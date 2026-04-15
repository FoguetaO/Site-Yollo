import NavbarEstetica from "@/components/estetica/navbar-estetica"
import HeroEstetica from "@/components/estetica/hero-estetica"
import SegmentFeatureHero from "@/components/segment-feature-hero"
import Comparison from "@/components/comparison"
import HowItWorks from "@/components/how-it-works"
import Objectives from "@/components/objectives"
import Stats from "@/components/stats"
import LeadForm from "@/components/lead-form"
import Security from "@/components/security"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export const metadata = {
  title: "Yollo IA para Clínicas de Estética  -  IA no WhatsApp que Agenda e Atende 24/7",
  description:
    "Automação de atendimento via WhatsApp com IA para clínicas de estética. Agende procedimentos, responda clientes 24h, reduza faltas e aumente o faturamento da sua clínica com Inteligência Artificial.",
  alternates: { canonical: "https://yolloia.com.br/clinica-de-estetica" },
  openGraph: {
    title: "IA para Clínicas de Estética  -  Yollo IA",
    description: "Automatize o atendimento da sua clínica de estética. Agende, qualifique e atenda clientes 24h pelo WhatsApp com IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
}

const segmentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IA para Clínicas de Estética  -  Yollo IA",
  description:
    "Automação de atendimento via WhatsApp com IA para clínicas de estética. Agendamento automático, qualificação de leads e CRM integrado.",
  url: "https://yolloia.com.br/clinica-de-estetica",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://yolloia.com.br" },
      { "@type": "ListItem", position: 2, name: "Clínica de Estética", item: "https://yolloia.com.br/clinica-de-estetica" },
    ],
  },
}

export default function ClinicaDeEsteticaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(segmentSchema) }}
      />
      <NavbarEstetica />
      <main>
        <HeroEstetica />
        <Comparison />
        <HowItWorks />
        <Objectives />
        <Stats />
        <SegmentFeatureHero
          badge="IA para Clínicas de Estética"
          title="Atende, agenda e qualifica suas clientes pelo WhatsApp, 24h por dia"
          description="Os recursos guiados por IA da Yollo para clínicas de estética incluem:"
          features={[
            { label: "Agendamento automático de procedimentos", href: "#funcionalidades" },
            { label: "Qualificação e CRM de clientes", href: "#funcionalidades" },
            { label: "Lembretes e redução de faltas", href: "#funcionalidades" },
          ]}
          ctaLabel="Explore os recursos para estética"
          ctaHref="#contratar"
          phoneImage={{
            src: "/ultimasecao.png",
            alt: "Smartphone mostrando atendimento automático via WhatsApp em clínica de estética com IA Yollo",
          }}
          accentColor="#6C4FE8"
        />
        <LeadForm />
        <Security />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
