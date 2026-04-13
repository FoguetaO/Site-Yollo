"use client"

import { useEffect, useState } from "react"

export default function BlogReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50 pointer-events-none bg-transparent" aria-hidden="true">
      <div
        className="h-full transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%`, backgroundColor: "#6C4FE8" }}
      />
    </div>
  )
}
