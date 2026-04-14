"use client"

import { useState } from "react"

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors opacity-0 group-hover:opacity-100"
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
      <pre className="p-5 text-sm text-neutral-300 overflow-x-auto leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  )
}
