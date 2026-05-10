import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app/", "/api/", "/_next/", "/crm/"],
      },
    ],
    sitemap: "https://yolloia.com.br/sitemap.xml",
  }
}
