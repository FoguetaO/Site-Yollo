import type { MetadataRoute } from "next"

const BASE_URL = "https://yolloia.com.br"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Todos os crawlers: permite tudo exceto rotas internas e redirects antigos
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/estetica",    // redirect antigo — canônico é /clinica-de-estetica
          "/contabil",    // redirect antigo — canônico é /contabilidade
        ],
      },
      {
        // Bloqueia crawlers de IA para não usarem o conteúdo sem permissão
        userAgent: ["GPTBot", "Google-Extended", "CCBot", "anthropic-ai", "PerplexityBot"],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
