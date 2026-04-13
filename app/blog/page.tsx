import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, blogCategories, formatDate } from "@/lib/blog-data"
import BlogNavbar from "@/components/blog/blog-navbar"
import BlogFooter from "@/components/blog/blog-footer"

export const metadata: Metadata = {
  title: "Blog Yollo IA | IA, WhatsApp Business, Vendas e Automação",
  description:
    "Artigos sobre inteligência artificial, WhatsApp Business, vendas e automação para clínicas de estética, imobiliárias, contadores e advogados. Aprenda a vender mais com IA.",
  keywords: [
    "blog ia",
    "whatsapp business",
    "automação whatsapp",
    "chatbot whatsapp",
    "ia para vendas",
    "automação clínica estética",
    "automação imobiliária",
    "automação contabilidade",
    "automação advocacia",
  ],
  openGraph: {
    title: "Blog Yollo IA | IA, WhatsApp Business, Vendas e Automação",
    description:
      "Artigos sobre inteligência artificial, WhatsApp Business, vendas e automação para negócios. Aprenda a vender mais com IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "Yollo IA",
  },
  alternates: {
    canonical: "/blog",
  },
}

// JSON-LD Schema for Blog
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Yollo IA",
  description: "Artigos sobre IA, WhatsApp Business, vendas e automação para negócios.",
  url: "https://yolloia.com.br/blog",
  publisher: {
    "@type": "Organization",
    name: "Yollo IA",
    url: "https://yolloia.com.br",
  },
  inLanguage: "pt-BR",
  blogPost: blogPosts.slice(0, 10).map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    url: `https://yolloia.com.br/blog/${post.slug}`,
  })),
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const regularPosts = blogPosts.slice(1)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogNavbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F5F3FF] to-white pt-32 pb-12">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li>
                  <Link href="/" className="hover:text-neutral-800 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <svg
                    className="w-4 h-4 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li className="text-neutral-800 font-medium">Blog</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Blog</h1>
              <p className="text-lg text-neutral-600 max-w-2xl">
                Artigos sobre IA, WhatsApp Business, vendas e automação para ajudar seu negócio a
                crescer.
              </p>
              <p className="text-sm text-neutral-500 mt-2">
                {blogPosts.length} artigos publicados
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                href="/blog"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full transition-colors bg-neutral-900 text-white"
              >
                Todos ({blogPosts.length})
              </Link>
              {blogCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/categoria/${category.slug}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                >
                  {category.name} ({category.count})
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="max-w-[1200px] mx-auto px-6 py-12">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-neutral-200 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto md:w-1/2 md:min-h-[320px]">
              <Image
                src={featuredPost.image.src}
                alt={featuredPost.image.alt}
                title={featuredPost.image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-[#6C4FE8] text-white text-xs font-semibold rounded-full">
                  Em destaque
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-8 md:w-1/2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-[#6C4FE8]">
                  {featuredPost.category}
                </span>
                <span className="text-neutral-300">·</span>
                <time
                  dateTime={featuredPost.publishedAt}
                  className="text-sm text-neutral-500"
                >
                  {formatDate(featuredPost.publishedAt)}
                </time>
                <span className="text-neutral-300">·</span>
                <span className="text-sm text-neutral-500">
                  {featuredPost.readingTime} min de leitura
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight group-hover:text-[#6C4FE8] transition-colors">
                {featuredPost.title}
              </h2>

              <p className="text-neutral-600 leading-relaxed line-clamp-3">
                {featuredPost.description}
              </p>

              <div className="flex items-center gap-2 mt-auto pt-4">
                <span className="text-[#6C4FE8] font-semibold group-hover:underline">
                  Ler artigo
                </span>
                <svg
                  className="w-5 h-5 text-[#6C4FE8] transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </section>

        {/* All Posts Grid */}
        <section className="max-w-[1200px] mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-neutral-200 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    title={post.image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-[#6C4FE8]">{post.category}</span>
                    <span className="text-neutral-300">·</span>
                    <time dateTime={post.publishedAt} className="text-sm text-neutral-500">
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="text-neutral-300">·</span>
                    <span className="text-sm text-neutral-500">{post.readingTime} min</span>
                  </div>

                  <h3 className="font-bold text-neutral-900 leading-tight group-hover:text-[#6C4FE8] transition-colors text-lg line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 mt-auto pt-2">
                    <span className="text-sm text-[#6C4FE8] font-medium group-hover:underline">
                      Ler artigo
                    </span>
                    <svg
                      className="w-4 h-4 text-[#6C4FE8] transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#6C4FE8] to-[#9879F0] py-16">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para automatizar seu atendimento?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              A Yollo IA atende seus clientes 24h por dia, agenda consultas e aumenta suas vendas
              no WhatsApp.
            </p>
            <Link
              href="/#contratar"
              className="inline-flex items-center gap-2 bg-white text-[#6C4FE8] font-semibold px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors"
            >
              Agendar demonstração gratuita
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  )
}
