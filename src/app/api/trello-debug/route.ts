import { NextResponse } from "next/server"
import { getTrelloConfig, getTrelloLists, testTrelloAuth } from "@/lib/trello"

/**
 * Trello 설정 및 리스트 조회를 위한 디버깅 API
 * 개발 환경에서만 사용하세요
 */
export async function GET() {
  try {
    const config = getTrelloConfig()
    
    if (!config) {
      return NextResponse.json({
        error: "Trello 설정이 없습니다",
        requiredEnvVars: [
          "TRELLO_API_KEY",
          "TRELLO_API_TOKEN", 
          "TRELLO_BOARD_ID",
          "TRELLO_LIST_ID"
        ]
      }, { status: 400 })
    }

    // 인증 테스트
    const authSuccess = await testTrelloAuth(config)
    
    if (!authSuccess) {
      return NextResponse.json({
        error: "Trello API 인증 실패",
        config: {
          boardId: config.boardId,
          listId: config.listId,
          apiKey: config.apiKey ? "설정됨" : "설정되지 않음",
          token: config.token ? "설정됨" : "설정되지 않음"
        }
      }, { status: 401 })
    }

    // 보드의 리스트 목록 조회
    const lists = await getTrelloLists(config)
    
    return NextResponse.json({
      success: true,
      auth: "성공",
      config: {
        boardId: config.boardId,
        listId: config.listId,
        apiKey: config.apiKey ? "설정됨" : "설정되지 않음",
        token: config.token ? "설정됨" : "설정되지 않음"
      },
      lists: lists.map(list => ({
        id: list.id,
        name: list.name,
        closed: list.closed
      }))
    })
  } catch (error) {
    console.error("Trello 디버깅 오류:", error)
    return NextResponse.json({
      error: "Trello API 연결 실패",
      message: error instanceof Error ? error.message : "알 수 없는 오류"
    }, { status: 500 })
  }
}
