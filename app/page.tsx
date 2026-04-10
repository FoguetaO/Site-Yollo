import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Comparison from "@/components/comparison"
import HowItWorks from "@/components/how-it-works"
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
      <HowItWorks />
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
