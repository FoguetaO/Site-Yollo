import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Yollo IA — Assistente IA para WhatsApp que Agenda, Qualifica e Atende 24/7',
    template: '%s | Yollo IA',
  },
  description: 'Assistente IA para WhatsApp que responde clientes em segundos, agenda procedimentos automaticamente e organiza seu negócio. Teste 30 dias grátis.',
  authors: [{ name: 'Yollo IA' }],
  creator: 'Yollo IA',
  publisher: 'Yollo IA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Yollo IA',
    title: 'Yollo IA — Assistente IA para WhatsApp',
    description: 'Assistente IA para WhatsApp que responde clientes em segundos, agenda procedimentos automaticamente e organiza seu negócio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yollo IA — Assistente IA para WhatsApp',
    description: 'Assistente IA para WhatsApp que responde clientes em segundos e agenda automaticamente.',
  },
  // Adicione seu código real do Google Search Console aqui:
  // verification: { google: 'SEU_CODIGO_AQUI' },
  alternates: {
    canonical: 'https://yolloia.com.br',
  },
}

// JSON-LD Schema for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Yollo IA',
  url: 'https://yolloia.com.br',
  logo: {
    '@type': 'ImageObject',
    url: 'https://yolloia.com.br/logo-yollo.png',
    width: 240,
    height: 64,
  },
  description: 'Plataforma de automação de WhatsApp com Inteligência Artificial para clínicas de estética, imobiliárias, escritórios contábeis e de advocacia.',
  sameAs: [
    'https://www.instagram.com/yollo.ia',
    'https://www.linkedin.com/company/yollo-ia',
    'https://www.tiktok.com/@yollo.ia',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: 'Portuguese',
  },
  areaServed: 'BR',
  foundingLocation: 'Brasil',
}

// JSON-LD Schema for WebSite with SearchAction
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Yollo IA',
  url: 'https://yolloia.com.br',
  inLanguage: 'pt-BR',
  description: 'Plataforma de automação de atendimento via WhatsApp com IA para negócios brasileiros.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://yolloia.com.br/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// JSON-LD Schema for SoftwareApplication
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Yollo IA',
  operatingSystem: 'Web, WhatsApp',
  applicationCategory: 'BusinessApplication',
  description: 'Plataforma de automação de WhatsApp com IA — agenda, qualifica leads, faz follow-up e dispara campanhas para clínicas, imobiliárias, contadores e advogados.',
  url: 'https://yolloia.com.br',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Atendimento automático 24h pelo WhatsApp',
    'Agendamento automático de procedimentos',
    'Qualificação de leads',
    'Follow-up automático',
    'Disparo de campanhas',
    'CRM integrado',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
