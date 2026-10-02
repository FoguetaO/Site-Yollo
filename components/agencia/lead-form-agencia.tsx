"use client"

import CrmEmbedForm from "@/components/crm-embed-form"

export default function LeadFormAgencia() {
  return (
    <section id="contratar" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24 md:items-start">
          <div className="md:flex-1 md:sticky md:top-24 mb-10 md:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight text-center md:text-left">
              Comece agora
            </h2>
            <p className="text-base md:text-lg text-gray-500 mt-3 text-center md:text-left">
              Preencha seus dados e veja a Yollo IA prospectando para o segmento e cidade da sua agência — em tempo real.
            </p>
            <div className="hidden md:flex flex-col gap-4 mt-10">
              {[
                { title: "Prospecção em minutos", desc: "Defina o nicho e a cidade — a IA entrega a lista e já inicia os disparos." },
                { title: "Planos flexíveis", desc: "Mensal, Trimestral ou Semestral. Cancele quando quiser, sem multa." },
                { title: "API Oficial e Não Oficial do WhatsApp", desc: "Escolha a melhor opção para o seu negócio." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5 text-green-500"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[480px] lg:w-[520px] flex-shrink-0">
            <div className="bg-white md:border md:border-gray-100 md:rounded-2xl md:p-4 md:shadow-sm overflow-hidden">
              <CrmEmbedForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
