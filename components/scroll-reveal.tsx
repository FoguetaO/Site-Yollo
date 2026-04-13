"use client"

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  distance?: number
  once?: boolean
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
  distance = 28,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  const getTranslate = (): string => {
    switch (direction) {
      case "up":    return `translateY(${distance}px)`
      case "down":  return `translateY(-${distance}px)`
      case "left":  return `translateX(${distance}px)`
      case "right": return `translateX(-${distance}px)`
      case "none":  return "none"
    }
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial hidden state
    el.style.opacity = "0"
    el.style.transform = getTranslate()
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1"
            el.style.transform = "translateY(0) translateX(0)"
            if (once) observer.unobserve(el)
          } else if (!once) {
            el.style.opacity = "0"
            el.style.transform = getTranslate()
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, direction, duration, distance, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
