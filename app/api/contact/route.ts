import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const DESTINATION_EMAIL = "flowing.bussines@gmail.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, procedures } = body

    if (!name || !email || !phone || !procedures) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Yollo IA <onboarding@resend.dev>",
      to: [DESTINATION_EMAIL],
      replyTo: email,
      subject: `Novo lead Yollo IA: ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 16px;">
              <tr>
                <td align="center">
                  <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                    <!-- Header -->
                    <tr>
                      <td style="background:linear-gradient(135deg,#6C4FE8,#8B72F0);padding:32px 40px;text-align:center;">
                        <p style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Yollo IA</p>
                        <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);">Novo lead recebido pelo formulário</p>
                      </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                      <td style="padding:40px;">
                        <p style="margin:0 0 24px;font-size:18px;font-weight:600;color:#111827;">
                          Um novo contato preencheu o formulário no site!
                        </p>
                        <!-- Fields -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding:12px 16px;background:#f9fafb;border-radius:10px 10px 0 0;border-bottom:1px solid #e5e7eb;">
                              <p style="margin:0;font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Nome completo</p>
                              <p style="margin:4px 0 0;font-size:15px;font-weight:500;color:#111827;">${name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:12px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">
                              <p style="margin:0;font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">E-mail</p>
                              <p style="margin:4px 0 0;font-size:15px;font-weight:500;color:#111827;">
                                <a href="mailto:${email}" style="color:#6C4FE8;text-decoration:none;">${email}</a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:12px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">
                              <p style="margin:0;font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">WhatsApp</p>
                              <p style="margin:4px 0 0;font-size:15px;font-weight:500;color:#111827;">
                                <a href="https://wa.me/55${phone.replace(/\D/g, "")}" style="color:#6C4FE8;text-decoration:none;">${phone}</a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:12px 16px;background:#f9fafb;border-radius:0 0 10px 10px;">
                              <p style="margin:0;font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Segmento / Procedimentos</p>
                              <p style="margin:4px 0 0;font-size:15px;font-weight:500;color:#111827;">${procedures}</p>
                            </td>
                          </tr>
                        </table>

                        <!-- CTA -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                          <tr>
                            <td align="center">
                              <a href="https://wa.me/55${phone.replace(/\D/g, "")}"
                                style="display:inline-block;padding:14px 32px;background:#6C4FE8;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:10px;">
                                Responder via WhatsApp
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="padding:20px 40px;border-top:1px solid #f3f4f6;text-align:center;">
                        <p style="margin:0;font-size:12px;color:#9ca3af;">
                          Este e-mail foi gerado automaticamente pelo formulário do site Yollo IA.<br/>
                          Para responder ao lead, use o e-mail ou WhatsApp acima.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[Yollo] Resend error:", error)
      return NextResponse.json(
        { error: "Falha ao enviar o e-mail. Tente novamente." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 })
  } catch (err) {
    console.error("[Yollo] Unexpected error:", err)
    return NextResponse.json(
      { error: "Erro inesperado no servidor." },
      { status: 500 }
    )
  }
}
