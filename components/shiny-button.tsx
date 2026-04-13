import type { AnchorHTMLAttributes } from "react"

interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
}

export default function ShinyButton({ label, href = "#", className = "", ...props }: ShinyButtonProps) {
  return (
    <a href={href} className={`shiny-cta ${className}`} {...props}>
      <span className="shiny-cta-label">{label}</span>
    </a>
  )
}
