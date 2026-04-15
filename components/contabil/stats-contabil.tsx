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

export default function StatsContabil() {
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

  const stat1 = useCountUp(12, 0, active)
  const stat2 = useCountUp(4.7, 1, active)
  const stat3 = useCountUp(94, 0, active)

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#0a0d14" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[120px]"
          style={{ backgroundColor: "#6C4FE808" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center md:text-left max-w-4xl mb-14 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold text-white tracking-tight">
            Não é promessa. É dado.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-0 max-w-5xl">
          <div className="flex-1 text-center md:text-left">
            <span className="block text-5xl sm:text-7xl md:text-[7rem] font-semibold tracking-tighter leading-none" style={{ color: "#6C4FE8" }}>
              {stat1}s
            </span>
            <span className="block text-lg font-semibold text-white/80 mt-2">tempo de resposta</span>
            <span className="block text-sm text-white/35 mt-1">de mais de 3h para 12 segundos</span>
          </div>

          <div className="flex flex-row md:flex-col gap-8 md:gap-10 md:pl-12 md:border-l md:border-white/[0.08]">
            <div className="flex-1 text-center md:text-left">
              <span className="block text-4xl md:text-5xl font-semibold text-white tracking-tight leading-none">
                {stat2}k+
              </span>
              <span className="block text-sm font-semibold text-white/70 mt-2">clientes atendidos</span>
              <span className="hidden md:block text-xs text-white/30 mt-0.5">por escritórios parceiros da Yollo IA</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="block text-4xl md:text-5xl font-semibold text-white tracking-tight leading-none">
                {stat3}%
              </span>
              <span className="block text-sm font-semibold text-white/70 mt-2">de retenção de clientes</span>
              <span className="hidden md:block text-xs text-white/30 mt-0.5">escritórios que usam Yollo IA retêm mais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
