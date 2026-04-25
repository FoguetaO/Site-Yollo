export default function HowItWorksEstetica() {
  return (
    <section id="como-funciona" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none hidden md:block opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-normal text-neutral-900">
            Como a{" "}
            <span className="italic gradient-brand">
              Yollo IA
            </span>{" "}
            funciona
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Da primeira mensagem ao agendamento confirmado. Tudo automático, sem você precisar intervir.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Responde em segundos</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A IA atende suas clientes instantaneamente, apresenta tratamentos e tira dúvidas a qualquer hora do dia ou da noite.
              </p>
            </div>
            {/* Visual: WhatsApp mock */}
            <div className="mt-auto bg-[#E4DDD6] rounded-xl p-3 min-h-[220px] relative overflow-hidden border border-[#D4CDB6]">
              <div className="flex flex-col gap-2">
                <div className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm text-neutral-800 max-w-[85%]">
                  Oi, vocês fazem limpeza de pele? Qual o valor?
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">20:02</div>
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  Olá! Sim, fazemos! Nossa limpeza de pele profunda custa R$ 180. Posso te mostrar o que está incluso e verificar um horário pra você?
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">20:02 ✓✓</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Qualifica antes de passar</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Identifica quem tem real intenção de agendar, separa curiosos de clientes prontos e organiza tudo para você.
              </p>
            </div>
            {/* Visual: WhatsApp mock conversa 2 */}
            <div className="mt-auto bg-[#E4DDD6] rounded-xl p-3 min-h-[220px] relative overflow-hidden border border-[#D4CDB6]">
              <div className="flex flex-col gap-2">
                <div className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm text-neutral-800 max-w-[85%]">
                  Quero fazer botox, mas tenho dúvidas se é pra mim
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">20:10</div>
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  Entendo! Me conta um pouco mais: você já fez algum procedimento antes? Assim consigo te orientar melhor e, se quiser, agendar uma avaliação gratuita com a especialista.
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">20:10 ✓✓</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Agenda automaticamente</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Preenche sua agenda com os horários disponíveis e envia confirmação para a cliente sem você fazer nada.
              </p>
            </div>
            {/* Visual: WhatsApp mock conversa 3 */}
            <div className="mt-auto bg-[#E4DDD6] rounded-xl p-3 min-h-[220px] relative overflow-hidden border border-[#D4CDB6]">
              <div className="flex flex-col gap-2">
                <div className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm text-neutral-800 max-w-[85%]">
                  Quero agendar pra sexta de tarde
                </div>
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  Temos horário às 15h e às 17h na sexta. Qual prefere?
                </div>
                <div className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm text-neutral-800 max-w-[85%]">
                  15h
                </div>
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  Perfeito! Agendado para sexta às 15h. Vou te enviar a confirmação agora ✅
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
