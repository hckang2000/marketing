import { NextResponse } from "next/server"
import { Resend } from "resend"

// Check if Resend API key is available
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(req: Request) {
  try {
    const { name, phone, email, message, hp } = await req.json()

    // Honeypot check
    if (hp) {
      return NextResponse.json({ ok: true })
    }

    // Validation
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일을 입력해주세요" },
        { status: 400 }
      )
    }

    // Phone validation
    const phoneRegex = /^[0-9-+\s()]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "올바른 전화번호를 입력해주세요" },
        { status: 400 }
      )
    }

    // Send email
    if (!resend) {
      console.log("Resend API key not configured. Skipping email send.")
      // In development or when API key is not set, just log the data
      console.log("Contact form data:", { name, phone, email, message })
      return NextResponse.json({ ok: true })
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL || "no-reply@clinicbridge.co.kr",
      to: process.env.TO_EMAIL || "hckang2000@naver.com",
      subject: "클리닉브릿지 1분 문의 도착",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            클리닉브릿지 신규 문의
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">문의자 정보</h3>
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>연락처:</strong> ${phone}</p>
            <p><strong>이메일:</strong> ${email}</p>
          </div>
          
          <div style="background: #fff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">
            <h3 style="color: #667eea; margin-top: 0;">문의내용</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px;">
            <p>이 이메일은 클리닉브릿지 웹사이트를 통해 자동으로 발송되었습니다.</p>
            <p>발송 시간: ${new Date().toLocaleString('ko-KR')}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 다시 시도해주세요." },
      { status: 500 }
    )
  }
}
