import type { MetadataRoute } from "next"
import { blogPosts, blogCategories } from "@/lib/blog-data"

const BASE_URL = "https://yolloia.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blogPosts
  const categories = blogCategories

  // Páginas estáticas principais
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/clinica-de-estetica`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/imoveis`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/contabilidade`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/advocacia`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]

  // Páginas de categoria do blog
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/blog/categoria/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Artigos do blog — usa updatedAt para lastModified preciso
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...blogPages]
}
