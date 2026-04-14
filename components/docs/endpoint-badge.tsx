const METHOD_STYLES: Record<string, { bg: string; text: string }> = {
  GET:    { bg: "bg-blue-50",   text: "text-blue-600" },
  POST:   { bg: "bg-green-50",  text: "text-green-600" },
  PUT:    { bg: "bg-amber-50",  text: "text-amber-600" },
  DELETE: { bg: "bg-red-50",    text: "text-red-600" },
}

export default function EndpointBadge({
  method,
  path,
  desc,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE"
  path: string
  desc: string
}) {
  const style = METHOD_STYLES[method] ?? { bg: "bg-neutral-100", text: "text-neutral-600" }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-100 px-4 py-3 hover:bg-neutral-50/60 transition-colors group">
      <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded font-mono ${style.bg} ${style.text}`}>
        {method}
      </span>
      <code className="text-sm font-mono text-neutral-700 flex-shrink-0">{path}</code>
      <span className="text-sm text-neutral-400 truncate ml-auto">{desc}</span>
    </div>
  )
}
