import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts, getPostBySlug, getRelatedPosts, formatDate } from "@/lib/blog-data"
import Navbar from "@/components/navbar"
import BlogFooter from "@/components/blog/blog-footer"
import BlogContent from "@/components/blog/blog-content"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Artigo não encontrado | Blog Yollo IA",
    }
  }

  return {
    title: `${post.title} | Blog Yollo IA`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      locale: "pt_BR",
      siteName: "Yollo IA",
      images: [
        {
          url: `https://yolloia.com.br${post.image.src}`,
          width: post.image.width,
          height: post.image.height,
          alt: post.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://yolloia.com.br${post.image.src}`],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post)

  // JSON-LD Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: `https://yolloia.com.br${post.image.src}`,
      width: post.image.width,
      height: post.image.height,
      caption: post.image.caption,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Yollo IA",
      url: "https://yolloia.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://yolloia.com.br/logo-yollo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yolloia.com.br/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "pt-BR",
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yolloia.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://yolloia.com.br/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://yolloia.com.br/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F5F3FF] to-white pt-32 pb-12">
          <div className="max-w-[800px] mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-neutral-500 flex-wrap">
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
                <li>
                  <Link
                    href={`/blog/categoria/${post.categorySlug}`}
                    className="hover:text-neutral-800 transition-colors"
                  >
                    {post.category}
                  </Link>
                </li>
              </ol>
            </nav>

            {/* Meta */}
            <div className="flex items-center gap-3 flex-wrap mb-6">
              <Link
                href={`/blog/categoria/${post.categorySlug}`}
                className="px-3 py-1 bg-[#6C4FE8]/10 text-[#6C4FE8] text-sm font-semibold rounded-full hover:bg-[#6C4FE8]/20 transition-colors"
              >
                {post.category}
              </Link>
              <span className="text-neutral-400">·</span>
              <time dateTime={post.publishedAt} className="text-sm text-neutral-500">
                {formatDate(post.publishedAt)}
              </time>
              <span className="text-neutral-400">·</span>
              <span className="text-sm text-neutral-500">{post.readingTime} min de leitura</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">{post.description}</p>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 border-b border-neutral-200">
              <div className="w-12 h-12 rounded-full bg-[#6C4FE8]/10 flex items-center justify-center">
                <span className="text-[#6C4FE8] font-bold text-lg">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">{post.author.name}</p>
                <p className="text-sm text-neutral-500">{post.author.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-[1000px] mx-auto px-6 -mt-4 mb-0">
          <figure className="rounded-2xl overflow-hidden shadow-lg">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                title={post.image.title}
                fill
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 1000px"
                priority
              />
            </div>
            {post.image.caption && (
              <figcaption className="text-center text-sm text-neutral-500 bg-neutral-50 px-6 py-3">
                {post.image.caption}
              </figcaption>
            )}
          </figure>
        </div>

        {/* Article Content */}
        <article className="max-w-[800px] mx-auto px-6 py-12">
          <BlogContent content={post.content} />

          {/* Keywords Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm font-semibold text-neutral-500 mb-3">Palavras-chave:</p>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-sm font-semibold text-neutral-500 mb-3">Compartilhar:</p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + " - https://yolloia.com.br/blog/" + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Compartilhar no WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent("https://yolloia.com.br/blog/" + post.slug)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Compartilhar no LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent("https://yolloia.com.br/blog/" + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Compartilhar no X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-neutral-50 py-16">
            <div className="max-w-[1200px] mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                Artigos relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-neutral-200 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <Image
                        src={relatedPost.image.src}
                        alt={relatedPost.image.alt}
                        title={relatedPost.image.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-5">
                      <span className="text-sm font-semibold text-[#6C4FE8]">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold text-neutral-900 leading-tight group-hover:text-[#6C4FE8] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <span className="text-sm text-neutral-500">{relatedPost.readingTime} min</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#6C4FE8] to-[#9879F0] py-16">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automatize seu atendimento com IA
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
