import type { MetadataRoute } from "next"

const BASE_URL = "https://yolloia.com.br"
const LAST_MOD_SITE = "2026-05-09"

export default function sitemap(): MetadataRoute.Sitemap {
  // Páginas estáticas — prioridades e datas conforme especificação
  return [
    {
      url: BASE_URL,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/clinica-de-estetica`,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/imoveis`,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contabilidade`,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/advocacia`,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/agencia-de-marketing`,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termos`,
      lastModified: new Date(LAST_MOD_SITE),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
