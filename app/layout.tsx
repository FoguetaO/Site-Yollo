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
  keywords: [
    'IA para WhatsApp',
    'automação WhatsApp',
    'chatbot WhatsApp',
    'assistente virtual',
    'atendimento automatizado',
    'agendamento automático',
    'CRM WhatsApp',
  ],
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
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://yollo.ai',
  },
}

// JSON-LD Schema for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Yollo IA',
  url: 'https://yollo.ai',
  logo: 'https://yollo.ai/logo-yollo.png',
  description: 'Assistente IA para WhatsApp que responde clientes em segundos, agenda procedimentos automaticamente e organiza seu negócio.',
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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
