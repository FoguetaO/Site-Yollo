import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts, getPostBySlug, getRelatedPosts, formatDate } from "@/lib/blog-data"
import Navbar from "@/components/navbar"
import BlogFooter from "@/components/blog/blog-footer"
import BlogContent from "@/components/blog/blog-content"
import BlogToc from "@/components/blog/blog-toc"
import BlogReadingProgress from "@/components/blog/blog-reading-progress"

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

  if (!post) return { title: "Artigo não encontrado | Blog Yollo IA" }

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
      images: [{ url: `https://yolloia.com.br${post.image.src}`, width: post.image.width, height: post.image.height, alt: post.image.alt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [`https://yolloia.com.br${post.image.src}`] },
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://yolloia.com.br${post.image.src}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role },
    publisher: { "@type": "Organization", name: "Yollo IA", url: "https://yolloia.com.br" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://yolloia.com.br/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "pt-BR",
  }

  const shareUrl = `https://yolloia.com.br/blog/${post.slug}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogReadingProgress />
      <Navbar />

      <main style={{ backgroundColor: "#FDFCFB" }} className="min-h-screen">

        {/* ── Header do post ── */}
        <header style={{ backgroundColor: "#FDFCFB" }} className="pt-28 pb-0">
          <div className="max-w-[1200px] mx-auto px-6">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-sm flex-wrap" style={{ color: "#9ca3af" }}>
                <li><Link href="/" className="hover:text-gray-700 transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-gray-700 transition-colors">Blog</Link></li>
                <li>/</li>
                <li><Link href={`/blog/categoria/${post.categorySlug}`} className="hover:text-gray-700 transition-colors">{post.category}</Link></li>
              </ol>
            </nav>

            {/* Keyword tags — estilo Assis.co */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.keywords.slice(0, 5).map((kw) => (
                <span key={kw} className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors" style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}>
                  #{kw}
                </span>
              ))}
            </div>

            {/* Título */}
            <h1 className="font-bold text-gray-900 leading-tight mb-4 text-balance" style={{ fontSize: "clamp(28px, 4vw, 42px)", maxWidth: "780px" }}>
              {post.title}
            </h1>

            {/* Descrição */}
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#4b5563", maxWidth: "680px" }}>
              {post.description}
            </p>

            {/* Autor + data */}
            <div className="flex items-center gap-4 pb-8 border-b" style={{ borderColor: "#e5e7eb" }}>
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: "#6C4FE8" }}>
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#9ca3af" }}>
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span>·</span>
                  <span>{post.readingTime} min de leitura</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Content container (grid 12 cols = igual Assis.co) ── */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-12 gap-x-8">

            {/* Coluna do artigo: 12 cols mobile, 8 cols xl */}
            <div className="col-span-12 xl:col-span-8">

              {/* Imagem destacada — dentro do grid, acima do conteúdo */}
              <figure className="mt-10 mb-10 rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                    priority
                  />
                </div>
                {post.image.caption && (
                  <figcaption className="text-center text-xs px-6 py-2.5" style={{ backgroundColor: "#f9fafb", color: "#9ca3af" }}>
                    {post.image.caption}
                  </figcaption>
                )}
              </figure>

              {/* Conteúdo do artigo */}
              <article className="pb-12">
                <BlogContent content={post.content} />

                {/* Tags de palavras-chave no final */}
                <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e5e7eb" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#9ca3af" }}>Palavras-chave</p>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <span key={keyword} className="px-3 py-1 text-sm rounded-full transition-colors cursor-default" style={{ backgroundColor: "#f3f4f6", color: "#4b5563" }}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compartilhar — final do artigo */}
                <div className="mt-8 pt-8 border-t flex items-center gap-3 flex-wrap" style={{ borderColor: "#e5e7eb" }}>
                  <p className="text-sm font-semibold" style={{ color: "#6b7280" }}>Compartilhar:</p>
                  <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " - " + shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-85 transition-opacity" style={{ backgroundColor: "#25D366" }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-85 transition-opacity" style={{ backgroundColor: "#0A66C2" }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-85 transition-opacity" style={{ backgroundColor: "#000" }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                </div>
              </article>
            </div>

            {/* Sidebar — 4 cols xl, sticky */}
            <aside className="hidden xl:block col-span-12 xl:col-span-4">
              <div className="sticky top-28 pt-10">
                <BlogToc content={post.content} />
              </div>
            </aside>
          </div>
        </div>

        {/* ── Artigos relacionados ── */}
        {relatedPosts.length > 0 && (
          <section style={{ backgroundColor: "#f9fafb" }} className="py-16 border-t" >
            <div className="max-w-[1200px] mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Artigos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <Image src={rel.image.src} alt={rel.image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                    </div>
                    <div className="flex flex-col gap-2 p-5">
                      <span className="text-xs font-semibold" style={{ color: "#6C4FE8" }}>{rel.category}</span>
                      <h3 className="font-bold text-gray-900 leading-snug group-hover:text-[#6C4FE8] transition-colors line-clamp-2 text-[15px]">{rel.title}</h3>
                      <span className="text-sm" style={{ color: "#9ca3af" }}>{rel.readingTime} min de leitura</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA final ── */}
        <section className="py-16" style={{ background: "linear-gradient(135deg, #6C4FE8 0%, #9879F0 100%)" }}>
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Automatize seu atendimento com IA
            </h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              A Yollo IA atende seus clientes 24h por dia, agenda consultas e aumenta suas vendas no WhatsApp.
            </p>
            <Link href="/#contratar" className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors text-sm" style={{ color: "#6C4FE8" }}>
              Agendar demonstração gratuita
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <BlogFooter />
    </>
  )
}
