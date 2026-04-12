"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  const components: Components = {
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-10 mb-4 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-neutral-900 mt-8 mb-3">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-neutral-700 leading-relaxed mb-6 text-lg">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-700 text-lg">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-neutral-700 text-lg">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    strong: ({ children }) => <strong className="font-bold text-neutral-900">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#6C4FE8] pl-6 py-2 my-6 bg-[#6C4FE8]/5 rounded-r-lg">
        <div className="text-neutral-700 italic">{children}</div>
      </blockquote>
    ),
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      if (isInternal) {
        return (
          <Link
            href={href || "#"}
            className="text-[#6C4FE8] font-medium hover:underline transition-colors"
          >
            {children}
          </Link>
        )
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6C4FE8] font-medium hover:underline transition-colors"
        >
          {children}
        </a>
      )
    },
    table: ({ children }) => (
      <div className="overflow-x-auto my-8 rounded-xl border border-neutral-200">
        <table className="w-full text-left">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-neutral-50">{children}</thead>,
    tbody: ({ children }) => <tbody className="divide-y divide-neutral-200">{children}</tbody>,
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="px-4 py-3 text-sm font-semibold text-neutral-900">{children}</th>
    ),
    td: ({ children }) => <td className="px-4 py-3 text-sm text-neutral-700">{children}</td>,
    code: ({ children, className }) => {
      const isInline = !className
      if (isInline) {
        return (
          <code className="px-1.5 py-0.5 bg-neutral-100 text-neutral-800 text-sm rounded font-mono">
            {children}
          </code>
        )
      }
      return (
        <code className="block bg-neutral-900 text-neutral-100 p-4 rounded-xl overflow-x-auto my-6 text-sm font-mono">
          {children}
        </code>
      )
    },
    pre: ({ children }) => <>{children}</>,
    hr: () => <hr className="my-10 border-neutral-200" />,
  }

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
