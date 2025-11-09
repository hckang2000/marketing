interface SlackMessagePayload {
  text?: string
  blocks?: unknown[]
}

interface SlackSendResult {
  ok: boolean
  skipped?: boolean
  error?: string
  status?: number
}

const webhookUrl = process.env.SLACK_WEBHOOK_URL?.trim()

export async function sendSlackNotification(
  payload: SlackMessagePayload
): Promise<SlackSendResult> {
  if (!webhookUrl) {
    console.warn("⚠️ Slack 웹훅 URL이 설정되지 않아 전송을 건너뜁니다.")
    return { ok: false, skipped: true, error: "Slack webhook not configured" }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => response.statusText)
      console.error("❌ Slack 알림 전송 실패:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      })
      return {
        ok: false,
        error: errorText,
        status: response.status,
      }
    }

    return { ok: true, status: response.status }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown Slack send error"
    console.error("❌ Slack 알림 전송 중 예외 발생:", message)
    return { ok: false, error: message }
  }
}

