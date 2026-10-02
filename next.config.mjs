/** @type {import('next').NextConfig} */

const blogSegmentRedirects = {
  "/clinica-de-estetica": [
    "automacao-whatsapp-clinica-estetica",
    "como-reduzir-faltas-clinica-estetica",
    "crm-whatsapp-estetica",
    "marketing-clinica-estetica-instagram",
  ],
  "/imoveis": [
    "automacao-whatsapp-imobiliaria",
    "qualificacao-leads-imobiliarios",
    "crm-imobiliario-whatsapp",
    "como-vender-imoveis-pelo-whatsapp",
  ],
  "/contabilidade": [
    "automacao-whatsapp-escritorio-contabil",
    "captacao-clientes-contabilidade",
    "como-fidelizar-clientes-contabilidade",
  ],
  "/advocacia": [
    "automacao-whatsapp-advogado",
    "marketing-digital-advogados",
    "como-agendar-consultas-advocacia",
  ],
}

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    const segmentPosts = Object.entries(blogSegmentRedirects).flatMap(
      ([destination, slugs]) =>
        slugs.map((slug) => ({
          source: `/blog/${slug}`,
          destination,
          permanent: true,
        })),
    )

    return [
      ...segmentPosts,
      { source: "/blog/categoria/:segment", destination: "/:segment", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
