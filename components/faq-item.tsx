"use client"

import { useId } from "react"

type FaqItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  const id = useId()
  const buttonId = `${id}-button`
  const panelId = `${id}-panel`

  return (
    <div
      className={`rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300 ease-out ${
        isOpen
          ? "border-neutral-300 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]"
          : "border-neutral-200 hover:border-neutral-300"
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left text-base font-medium leading-snug text-neutral-900 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-neutral-400"
        >
          <span>{question}</span>
          <span
            aria-hidden="true"
            className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
              isOpen ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-500"
            }`}
          >
            <svg
              className={`size-4 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pr-16 text-sm leading-relaxed text-neutral-600 md:text-[15px]">{answer}</p>
        </div>
      </div>
    </div>
  )
}
