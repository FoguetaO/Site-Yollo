"use client"

import { useEffect, useRef, useState } from "react"

function useCountUp(target: number, decimals = 0, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 1200
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(eased * target)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target])
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()
}

export default function Stats() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stat1 = useCountUp(8, 0, active)
  const stat2 = useCountUp(1.5, 1, active)
  const stat3 = useCountUp(94, 0, active)

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#0d0c0b" }}
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[120px]"
          style={{ backgroundColor: "#C8956C08" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center md:text-left max-w-4xl mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Não é promessa. É dado.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-0 max-w-5xl">
          {/* Hero stat */}
          <div className="flex-1 text-center md:text-left">
            <span className="block text-7xl md:text-[7rem] font-semibold tracking-tighter leading-none" style={{ color: "#C8956C" }}>
              {stat1}s
            </span>
            <span className="block text-lg font-semibold text-white/80 mt-2">tempo de resposta</span>
            <span className="block text-sm text-white/35 mt-1">de mais de 2h para 8 segundos</span>
          </div>

          {/* Supporting stats */}
          <div className="flex flex-row md:flex-col gap-8 md:gap-10 md:pl-12 md:border-l md:border-white/[0.08]">
            <div className="flex-1 text-center md:text-left">
              <span className="block text-4xl md:text-5xl font-semibold text-white tracking-tight leading-none">
                {stat2}M+
              </span>
              <span className="block text-sm font-semibold text-white/70 mt-2">agendamentos</span>
              <span className="hidden md:block text-xs text-white/30 mt-0.5">gerenciados pela Bella IA</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="block text-4xl md:text-5xl font-semibold text-white tracking-tight leading-none">
                {stat3}%
              </span>
              <span className="block text-sm font-semibold text-white/70 mt-2">de satisfação</span>
              <span className="hidden md:block text-xs text-white/30 mt-0.5">das clientes atendidas pela IA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
