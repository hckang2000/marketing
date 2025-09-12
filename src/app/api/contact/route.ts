import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createTrelloCard, getTrelloConfig, testTrelloAuth } from "@/lib/trello"

// Check if Resend API key is available
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(req: Request) {
  try {
    const { name, phone, hospital, email, message, hp } = await req.json()

    // Honeypot check
    if (hp) {
      return NextResponse.json({ ok: true })
    }

    // Validation
    if (!name || !phone || !hospital || !email || !message) {
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

    // Trello 카드 생성
    const trelloConfig = getTrelloConfig()
    let trelloCardId: string | null = null
    
    console.log("🔍 Trello 카드 생성 시작:", {
      hasConfig: !!trelloConfig,
      name: name,
      hospital: hospital
    })
    
    if (trelloConfig) {
      try {
        // 먼저 인증 테스트
        console.log("🧪 Trello API 인증 테스트 시작...")
        const authSuccess = await testTrelloAuth(trelloConfig)
        if (!authSuccess) {
          console.error("❌ Trello API 인증 실패로 카드 생성을 건너뜁니다.")
        } else {
          console.log("✅ Trello API 인증 성공, 카드 생성 시작...")
          const trelloCard = await createTrelloCard(trelloConfig, {
            name,
            phone,
            hospital,
            email,
            message,
          })
          trelloCardId = trelloCard.id
          console.log(`✅ Trello 카드 생성 성공: ${trelloCard.shortUrl}`)
        }
      } catch (error) {
        console.error("❌ Trello 카드 생성 실패:", error)
        console.error("❌ 오류 상세:", {
          message: error instanceof Error ? error.message : "알 수 없는 오류",
          stack: error instanceof Error ? error.stack : undefined
        })
        // Trello 오류는 이메일 전송을 중단시키지 않음
      }
    } else {
      console.log("❌ Trello 설정이 없어 카드 생성을 건너뜁니다.")
    }

    // Send email
    if (!resend) {
      console.log("Resend API key not configured. Skipping email send.")
      // In development or when API key is not set, just log the data
      console.log("Contact form data:", { name, phone, hospital, email, message })
      return NextResponse.json({ 
        ok: true, 
        trelloCardId: trelloCardId 
      })
    }

    await resend.emails.send({
       from: process.env.FROM_EMAIL || "no-reply@clinicbridge.co.kr",
       to: process.env.TO_EMAIL || "clinicbridge.kr@gmail.com",
      subject: "클리닉브릿지 10초 문의 도착",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            클리닉브릿지 신규 문의
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">문의자 정보</h3>
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>연락처:</strong> ${phone}</p>
            <p><strong>병원명/직책:</strong> ${hospital}</p>
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

    return NextResponse.json({ 
      ok: true, 
      trelloCardId: trelloCardId 
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 다시 시도해주세요." },
      { status: 500 }
    )
  }
}
