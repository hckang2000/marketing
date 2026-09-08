"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, User } from "lucide-react"
import { Container } from "@/components/common/Container"

interface ProofCase {
  badge: string
  source: string
  headline: string
  description?: string
  stats: { value: string; caption: string }[]
}

// 실제 캠페인 데이터 3건. 나머지 사례가 확보되면 이 배열에 추가하면 자동으로 카드가 늘어납니다.
const PROOF_CASES: ProofCase[] = [
  {
    badge: "라인 퍼널",
    source: "A 피부과 사례",
    headline: "인입 383명에서 예약 45명까지, 단계마다 숫자로 확인했습니다",
    description: "라인 인입 383명 → 상담 74명(19.3%) → 예약 45명·53건(60.8%)",
    stats: [
      { value: "1억 2,699만 원", caption: "월 예약 매출" },
      { value: "약 240만원", caption: "예약 환자 객단가" },
    ],
  },
  {
    badge: "캠페인 파일럿",
    source: "의약품 캠페인 사례",
    headline: "조회당 비용 6.5원, 지출 대비 매출 약 2.9배",
    description: "6주 만에 조회수 136만 회, 뷰티 콘텐츠 평균(10원)보다 낮은 조회당 비용",
    stats: [
      { value: "136만 회", caption: "6주 누적 조회수" },
      { value: "약 2.9배", caption: "지출 대비 추정 매출" },
    ],
  },
  {
    badge: "인플루언서 SNS",
    source: "S 클리닉 사례",
    headline: "인플루언서 후기 한 건이 500만 조회를 넘겼습니다",
    description: "일본 X에서 시술 후기 게시물이 각각 530만 회, 510만 회 조회",
    stats: [
      { value: "5.3M", caption: "Views" },
      { value: "5.1M", caption: "Views" },
    ],
  },
]

function ProofCard({ item }: { item: ProofCase }) {
  return (
    <div className="w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-start bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center">
      <span className="inline-block text-xs font-semibold text-[#C1452D] bg-[#FBEEE8] px-3 py-1 rounded-full mb-4">
        {item.badge}
      </span>

      <h3 className="font-bold text-gray-900 mb-3 text-base leading-snug" style={{ wordBreak: "keep-all" }}>
        {item.headline}
      </h3>

      {item.description && (
        <p className="text-xs text-gray-500 leading-relaxed mb-5" style={{ wordBreak: "keep-all" }}>
          {item.description}
        </p>
      )}

      <div className="grid grid-cols-2 gap-4 mb-6">
        {item.stats.map((s) => (
          <div key={s.caption}>
            <p className="text-lg font-bold text-[#C1452D] leading-tight">{s.value}</p>
            <p className="text-[11px] text-gray-500">{s.caption}</p>
          </div>
        ))}
      </div>

      <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
        <User className="h-3.5 w-3.5" />
        {item.source}
      </span>
    </div>
  )
}

export function ProofResults() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.9 * (direction === "left" ? -1 : 1)
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="proof-results" className="section-padding bg-gray-100">
      <Container>
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">숫자로 증명하는 결과</h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="이전"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
          >
            {PROOF_CASES.map((item) => (
              <ProofCard key={item.source} item={item} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="다음"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </Container>
    </section>
  )
}
