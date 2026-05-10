"use client"

export default function SegmentCard({
  name,
  href,
}: {
  name: string
  href: string
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between rounded-2xl px-6 py-5 transition-all"
      style={{ backgroundColor: "#ffffff08", border: "1px solid #ffffff10" }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = "#6C4FE840"
        ;(e.currentTarget as HTMLElement).style.backgroundColor = "#6C4FE80d"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = "#ffffff10"
        ;(e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff08"
      }}
    >
      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
        {name}
      </span>
      <svg
        className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  )
}
