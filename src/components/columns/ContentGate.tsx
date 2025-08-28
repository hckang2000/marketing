"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/common/Button"
import { useContact } from "@/components/providers/ContactProvider"

interface ContentGateProps {
  articleSlug: string
  children: React.ReactNode
}

export function ContentGate({ articleSlug, children }: ContentGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { openContact } = useContact()

  useEffect(() => {
    setIsClient(true)
    
    // localStorage에서 잠금 해제 상태 확인
    const unlockStatus = localStorage.getItem(`gate:${articleSlug}`)
    if (unlockStatus === "unlocked") {
      setIsUnlocked(true)
    }

    // inquiry-success 이벤트 리스너 등록
    const handleInquirySuccess = () => {
      setIsUnlocked(true)
      localStorage.setItem(`gate:${articleSlug}`, "unlocked")
    }

    window.addEventListener("inquiry-success", handleInquirySuccess)

    return () => {
      window.removeEventListener("inquiry-success", handleInquirySuccess)
    }
  }, [articleSlug])

  // 서버 사이드 렌더링 시에는 항상 콘텐츠 표시
  if (!isClient) {
    return <>{children}</>
  }

  // 잠금 해제된 경우 콘텐츠 표시
  if (isUnlocked) {
    return <>{children}</>
  }

  // 잠긴 상태: 제한된 높이의 블러 처리된 콘텐츠와 CTA 버튼 표시
  return (
    <div className="relative">
      {/* 제한된 높이의 블러 처리된 콘텐츠 미리보기 */}
      <div className="relative h-[20vh] overflow-hidden">
        <div className="blur-sm brightness-75 pointer-events-none">
          {children}
        </div>
        
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>
      
      {/* CTA 버튼 */}
      <div className="text-center py-8">
        <Button
          onClick={openContact}
          variant="gradient"
          size="lg"
          className="shadow-lg hover:shadow-xl transition-all duration-300"
        >
          10초 문의하고 마저 읽기
        </Button>
      </div>
    </div>
  )
}
