"use client"

import { useRef } from "react"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { cn } from "@/lib/utils"

interface ProofCase {
  badge: string
  source: string
  headline: string
  description?: string
  image: string
  imageFit?: "cover" | "contain"
  dimImage?: boolean
  showBadgeOverlay?: boolean
  stats: { value: string; caption: string }[]
}

// 실제 캠페인 데이터 3건. 나머지 사례가 확보되면 이 배열에 추가하면 자동으로 카드가 늘어납니다.
const PROOF_CASES: ProofCase[] = [
  {
    badge: "캠페인 파일럿",
    source: "대형 제약사 사례",
    headline: "내한 관광객 대상 마케팅 캠페인",
    description: "일본, 대만 등 내한 후 약국에서 제품을 구매하는 수요를 타겟하여 진행했습니다.",
    image: "/images/proof-ckd-campaign-cover.png",
    dimImage: false,
    showBadgeOverlay: false,
    stats: [
      { value: "136만 회", caption: "월 합산 조회수" },
    ],
  },
  {
    badge: "인플루언서 SNS",
    source: "S 클리닉 사례",
    headline: "일본 환자 마케팅 캠페인",
    description: "클리닉과 대표 시술의 브랜딩을 통해 고객단가의 전환 수요를 생성하였습니다.",
    image: "/images/proof-sclinic-building.jpg",
    dimImage: false,
    showBadgeOverlay: false,
    stats: [
      { value: "4억원", caption: "월 예약 매출" },
    ],
  },
  {
    badge: "라인 퍼널",
    source: "B 피부과 사례",
    headline: "일본 환자 마케팅 캠페인",
    description: "공식 일본 계정 운영과 LINE CRM, 인플루언서 바이럴 마케팅을 진행했습니다.",
    image: "/images/proof-a-clinic-interior.jpg",
    dimImage: false,
    showBadgeOverlay: false,
    stats: [
      { value: "1억 5천만원", caption: "월 예약 매출" },
    ],
  },
]

function ProofCard({ item }: { item: ProofCase }) {
  return (
    <div className="w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-start bg-black rounded-2xl overflow-hidden">
      <div className="relative aspect-[4/3] bg-white">
        <Image
          src={item.image}
          alt=""
          fill
          className={cn(
            item.imageFit === "contain" ? "object-contain" : "object-cover",
            item.dimImage !== false && "opacity-60"
          )}
        />
        {item.showBadgeOverlay !== false && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-white bg-black/50 border border-white/20 px-3 py-1 rounded-full">
              {item.badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-bold text-white text-base mb-3">{item.source}</h3>

        <p className="text-sm text-white/70 leading-relaxed mb-5" style={{ wordBreak: "keep-all" }}>
          {item.headline}
          {item.description && <>. {item.description}</>}
        </p>

        <div className={item.stats.length > 1 ? "grid grid-cols-2 gap-4" : ""}>
          {item.stats.map((s) => (
            <div key={s.caption}>
              <p
                className={cn(
                  "font-bold text-white leading-tight",
                  item.stats.length > 1 ? "text-lg" : "text-3xl"
                )}
              >
                {s.value}
              </p>
              <p className="text-[11px] text-white/50 mt-1">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProofResults() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="proof-results" className="section-padding bg-gray-100">
      <Container>
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">숫자로 증명하는 결과</h2>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
          >
            {PROOF_CASES.map((item) => (
              <ProofCard key={item.source} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
