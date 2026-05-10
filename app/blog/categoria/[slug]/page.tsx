import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogCategories, getPostsByCategory, formatDate } from "@/lib/blog-data"
import Navbar from "@/components/navbar"
import BlogFooter from "@/components/blog/blog-footer"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = blogCategories.find((c) => c.slug === slug)

  if (!category) {
    return {
      title: "Categoria não encontrada | Blog Yollo IA",
    }
  }

  return {
    title: `${category.name} | Blog Yollo IA`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Blog Yollo IA`,
      description: category.description,
      type: "website",
      locale: "pt_BR",
      siteName: "Yollo IA",
    },
    alternates: {
      canonical: `https://yolloia.com.br/blog/categoria/${category.slug}`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = blogCategories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const posts = getPostsByCategory(slug)

  // JSON-LD Schema
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} - Blog Yollo IA`,
    description: category.description,
    url: `https://yolloia.com.br/blog/categoria/${category.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Yollo IA",
      url: "https://yolloia.com.br",
    },
    inLanguage: "pt-BR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://yolloia.com.br/blog/${post.slug}`,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <Navbar />
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
                <li>
                  <Link href="/blog" className="hover:text-neutral-800 transition-colors">
                    Blog
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
                <li className="text-neutral-800 font-medium">{category.name}</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                {category.name}
              </h1>
              <p className="text-lg text-neutral-600 max-w-2xl">{category.description}</p>
              <p className="text-sm text-neutral-500 mt-2">{posts.length} artigos</p>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                href="/blog"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              >
                Todos
              </Link>
              {blogCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/categoria/${cat.slug}`}
                  className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    cat.slug === slug
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-[1200px] mx-auto px-6 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">
                Nenhum artigo encontrado nesta categoria.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-4 text-[#6C4FE8] font-semibold hover:underline"
              >
                Ver todos os artigos
                <svg
                  className="w-4 h-4"
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
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

                    <h2 className="font-bold text-neutral-900 leading-tight group-hover:text-[#6C4FE8] transition-colors text-lg line-clamp-2">
                      {post.title}
                    </h2>

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
          )}
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
