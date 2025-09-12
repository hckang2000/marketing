import { NextResponse } from "next/server"

/**
 * Trello 토큰 테스트를 위한 간단한 API
 * 브라우저에서 직접 테스트할 수 있습니다
 */
export async function GET() {
  const apiKey = process.env.TRELLO_API_KEY
  const token = process.env.TRELLO_API_TOKEN

  if (!apiKey || !token) {
    return NextResponse.json({
      error: "환경변수가 설정되지 않았습니다",
      apiKey: apiKey ? "설정됨" : "설정되지 않음",
      token: token ? "설정됨" : "설정되지 않음"
    }, { status: 400 })
  }

  // 간단한 API 테스트
  const testUrl = `https://api.trello.com/1/members/me?key=${apiKey}&token=${token}`
  
  try {
    console.log('🔍 API 키 테스트:', {
      apiKey: `${apiKey.substring(0, 8)}...`,
      apiKeyLength: apiKey.length,
      token: `${token.substring(0, 8)}...`,
      tokenLength: token.length,
      testUrl: testUrl
    })

    const response = await fetch(testUrl)
    
    // 응답 텍스트를 먼저 확인
    const responseText = await response.text()
    console.log('📝 Trello API 응답:', {
      status: response.status,
      statusText: response.statusText,
      responseText: responseText
    })

    let data
    try {
      data = JSON.parse(responseText)
    } catch (parseError) {
      return NextResponse.json({
        success: false,
        error: "JSON 파싱 실패",
        status: response.status,
        statusText: response.statusText,
        rawResponse: responseText,
        parseError: parseError instanceof Error ? parseError.message : "알 수 없는 오류",
        testUrl: testUrl,
        apiKey: `${apiKey.substring(0, 8)}...`,
        token: `${token.substring(0, 8)}...`
      }, { status: response.status })
    }
    
    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "API 키와 토큰이 유효합니다",
        user: {
          username: data.username,
          fullName: data.fullName,
          id: data.id
        },
        testUrl: testUrl
      })
    } else {
      return NextResponse.json({
        success: false,
        error: "API 키 또는 토큰이 유효하지 않습니다",
        status: response.status,
        statusText: response.statusText,
        response: data,
        rawResponse: responseText,
        testUrl: testUrl,
        apiKey: `${apiKey.substring(0, 8)}...`,
        token: `${token.substring(0, 8)}...`
      }, { status: response.status })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "API 요청 실패",
      message: error instanceof Error ? error.message : "알 수 없는 오류",
      testUrl: testUrl,
      apiKey: `${apiKey.substring(0, 8)}...`,
      token: `${token.substring(0, 8)}...`
    }, { status: 500 })
  }
}
