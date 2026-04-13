"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  const slugify = (text: string) =>
    String(text)
      .toLowerCase()
      .replace(/\*\*/g, "")
      .replace(/`/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")

  const components: Components = {
    h2: ({ children }) => (
      <h2
        id={slugify(String(children))}
        className="text-2xl md:text-3xl font-bold text-neutral-900 mt-14 mb-5 leading-tight scroll-mt-24"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugify(String(children))}
        className="text-xl font-bold text-neutral-900 mt-10 mb-4 leading-tight scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-neutral-900 mt-8 mb-3">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-neutral-700 leading-[1.85] mb-6 text-[17px]">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-6 space-y-2 text-neutral-700 text-[17px] pl-0">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-6 space-y-2 text-neutral-700 text-[17px] pl-0 list-none counter-reset-item">{children}</ol>
    ),
    li: ({ children, ...props }) => {
      const isOrdered = (props as { ordered?: boolean }).ordered
      return isOrdered ? (
        <li className="flex gap-3 leading-[1.8] before:content-[counter(item)] before:counter-increment-item before:flex-shrink-0 before:w-6 before:h-6 before:rounded-full before:bg-[#6C4FE8]/10 before:text-[#6C4FE8] before:text-xs before:font-bold before:flex before:items-center before:justify-center before:mt-0.5">
          {children}
        </li>
      ) : (
        <li className="flex gap-3 leading-[1.8]">
          <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#6C4FE8]/60" aria-hidden="true" />
          <span>{children}</span>
        </li>
      )
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#6C4FE8] pl-6 py-3 my-8 bg-[#6C4FE8]/5 rounded-r-xl">
        <div className="text-neutral-700 italic text-[17px] leading-relaxed">{children}</div>
      </blockquote>
    ),
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      if (isInternal) {
        return (
          <Link
            href={href || "#"}
            className="text-[#6C4FE8] font-medium underline underline-offset-2 decoration-[#6C4FE8]/30 hover:decoration-[#6C4FE8] transition-colors"
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
          className="text-[#6C4FE8] font-medium underline underline-offset-2 decoration-[#6C4FE8]/30 hover:decoration-[#6C4FE8] transition-colors"
        >
          {children}
        </a>
      )
    },
    table: ({ children }) => (
      <div className="overflow-x-auto my-8 rounded-2xl border border-neutral-200 shadow-sm">
        <table className="w-full text-left">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-neutral-50 border-b border-neutral-200">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-neutral-100">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-neutral-50/60 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-5 py-3.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-5 py-3.5 text-sm text-neutral-700 leading-relaxed">{children}</td>
    ),
    code: ({ children, className }) => {
      const isInline = !className
      if (isInline) {
        return (
          <code className="px-1.5 py-0.5 bg-neutral-100 text-[#6C4FE8] text-[14px] rounded font-mono">
            {children}
          </code>
        )
      }
      return (
        <code className="block bg-neutral-900 text-neutral-100 p-5 rounded-2xl overflow-x-auto my-6 text-sm font-mono leading-relaxed">
          {children}
        </code>
      )
    },
    pre: ({ children }) => <>{children}</>,
    hr: () => (
      <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    ),
  }

  return (
    <div className="max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
