"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { trackButtonClick } from "@/lib/gtag"

export const TOP_BANNER_HEIGHT = 40

const DISMISS_KEY = "topBanner:dataReport:dismissed"

interface TopBannerProps {
  onDismiss: () => void
}

export function TopBanner({ onDismiss }: TopBannerProps) {
  const handleCtaClick = () => {
    trackButtonClick("data_report_cta", "top_banner")
  }

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1")
    onDismiss()
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center bg-black px-4 text-white"
      style={{ height: TOP_BANNER_HEIGHT }}
    >
      <Link
        href="/data"
        onClick={handleCtaClick}
        className="flex items-center gap-2 text-center text-xs font-medium hover:underline sm:text-sm"
      >
        <span className="hidden sm:inline">🎁 일본인 고객 심층 분석 리포트 무료 공개</span>
        <span className="sm:hidden">🎁 일본인 고객 무료 리포트</span>
        <span className="font-bold underline underline-offset-2">무료로 보기 →</span>
      </Link>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="배너 닫기"
        className="absolute right-3 p-1 text-white/80 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export function isTopBannerDismissed() {
  if (typeof window === "undefined") return true
  return sessionStorage.getItem(DISMISS_KEY) === "1"
}
