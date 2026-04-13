import type { MetadataRoute } from "next"

const BASE_URL = "https://yolloia.com.br"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Todos os crawlers (incluindo IA): permite tudo exceto rotas internas e redirects antigos
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/estetica",   // redirect antigo — canônico é /clinica-de-estetica
          "/contabil",   // redirect antigo — canônico é /contabilidade
        ],
      },
      // ChatGPT (OpenAI)
      { userAgent: "GPTBot", allow: "/" },
      // Google Gemini / SGE
      { userAgent: "Google-Extended", allow: "/" },
      // Anthropic Claude
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
      // Meta AI
      { userAgent: "meta-externalagent", allow: "/" },
      // Amazon Alexa
      { userAgent: "Amazonbot", allow: "/" },
      // Common Crawl (base de dados usada por muitos modelos de IA)
      { userAgent: "CCBot", allow: "/" },
      // Apple
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
