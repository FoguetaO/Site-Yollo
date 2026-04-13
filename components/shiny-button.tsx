"use client"

import type { AnchorHTMLAttributes } from "react"

interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
}

export default function ShinyButton({ label, href = "#", className = "", ...props }: ShinyButtonProps) {
  return (
    <>
      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @property --gradient-angle-offset {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @property --gradient-percent {
          syntax: "<percentage>";
          initial-value: 5%;
          inherits: false;
        }
        @property --gradient-shine {
          syntax: "<color>";
          initial-value: white;
          inherits: false;
        }

        @keyframes rotate-glow {
          0%   { --gradient-angle: 0deg; }
          100% { --gradient-angle: 360deg; }
        }
        @keyframes rotate-glow-offset {
          0%   { --gradient-angle-offset: 0deg; }
          100% { --gradient-angle-offset: 360deg; }
        }

        .shiny-cta {
          --shiny-cta-bg: #6C4FE8;
          --shiny-cta-bg-subtle: #5a3fd6;
          --shiny-cta-fg: #ffffff;
          --shiny-cta-highlight: #a78bfa;
          --shiny-cta-highlight-subtle: #c4b5fd;
          --animation: rotate-glow linear infinite;
          --duration: 3s;
          --shadow-size: 2px;

          isolation: isolate;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          outline-offset: 4px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.2;
          border: 1px solid transparent;
          border-radius: 360px;
          color: var(--shiny-cta-fg);
          background: var(--shiny-cta-bg);
          box-shadow: inset 0 -1px 2px 1px rgba(255,255,255,0.18);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: opacity 0.2s, transform 0.2s;
          white-space: nowrap;
        }

        .shiny-cta:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .shiny-cta::before,
        .shiny-cta::after {
          content: "";
          pointer-events: none;
          position: absolute;
          inset: -var(--shadow-size);
          border-radius: inherit;
        }

        .shiny-cta::before {
          inset: -1px;
          background: conic-gradient(
            from calc(var(--gradient-angle) - var(--gradient-percent)),
            transparent 0%,
            var(--shiny-cta-highlight) 5%,
            var(--shiny-cta-highlight-subtle) 10%,
            var(--shiny-cta-bg-subtle) 12%,
            transparent 20%
          );
          animation: var(--animation);
          animation-duration: var(--duration);
          border-radius: inherit;
        }

        .shiny-cta::after {
          inset: var(--shadow-size);
          background: var(--shiny-cta-bg);
          border-radius: inherit;
        }

        .shiny-cta-label {
          position: relative;
          z-index: 1;
        }
      `}</style>
      <a href={href} className={`shiny-cta ${className}`} {...props}>
        <span className="shiny-cta-label">{label}</span>
      </a>
    </>
  )
}
