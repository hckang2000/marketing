"use client"

// 구조 기획: 자가진단형 리드마그넷 — 「우리 병원 일본 진출 가능성 진단 리포트」
// 목적: 원장이 스스로 가능성을 판단 → 부족한 부분 인식 → 전문가 진단(상담)을 원하게 만드는 것.
// 5~16p(9개 진단 항목 + 종합 Scorecard)가 리드마그넷의 진짜 제품 — 읽는 자료가 아니라
// 원장이 직접 점수를 매기는 인터랙티브 도구로 구현한다.

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Building2,
  Search,
  Target,
  Wrench,
  TrendingUp,
  Ban,
} from "lucide-react"
import { PageHero } from "@/components/common/PageHero"
import { Container } from "@/components/common/Container"
import { SectionTitle } from "@/components/common/SectionTitle"
import { useMotionAnimation, useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"
import { ScoreCard } from "./_components/ScoreCard"
import { DemandMatrix } from "./_components/DemandMatrix"
import { RevenueSimulator } from "./_components/RevenueSimulator"
import { DiagnosisLeadForm } from "./_components/DiagnosisLeadForm"
import { TIERS } from "./_components/scoring"

const AUDIENCE = [
  "일본 진출을 고민하지만 “우리도 될까?”가 불확실한 원장",
  "SNS·홈페이지는 있지만 실제 문의·매출로 이어지지 않는 병원",
  "예산을 투입하기 전에 우리 병원의 현재 위치를 먼저 확인하고 싶은 병원",
]

const DOMAIN_OVERVIEW = [
  {
    icon: Building2,
    title: "Clinic",
    subtitle: "우리 병원 자체가 경쟁력이 있는가",
    detail: "상품 · 가격 · 차별화 경쟁력",
  },
  {
    icon: Search,
    title: "Market",
    subtitle: "일본에서 실제로 팔리는가",
    detail: "일본 수요 · 콘텐츠 경쟁력",
  },
  {
    icon: Target,
    title: "Acquisition",
    subtitle: "실제 환자로 전환할 수 있는가",
    detail: "환자 획득 가능성 · 상담·예약 전환력",
  },
  {
    icon: Wrench,
    title: "Operation",
    subtitle: "데려온 환자를 제대로 받을 수 있는가",
    detail: "실제 수용 역량 · 재방문·추천 가능성",
  },
]

const SPECIALTY_STRATEGIES = [
  {
    name: "피부과",
    summary: "반복 구매 × 낮은 진입장벽 × 시각적 콘텐츠",
    detail: "SNS·인플루언서·프로모션 기반 획득에 상대적으로 유리합니다.",
  },
  {
    name: "성형외과",
    summary: "고관여 × 높은 객단가 × 결과 중요",
    detail: "Before&After, 원장 전문성, 후기와 장기적인 신뢰 형성이 중요합니다.",
  },
  {
    name: "치과",
    summary: "치료 목적 × 일정/체류기간 × 신뢰",
    detail: "가격뿐 아니라 치료 일정, 기술력, 보증·사후관리를 명확히 설명하는 것이 중요합니다.",
  },
  {
    name: "한의원",
    summary: "일본 소비자에게 익숙하지 않은 진료 영역 존재",
    detail: "“왜 한국에서 이 치료를 받아야 하는가”를 설명하는 콘텐츠 자체가 핵심 Acquisition 자산입니다.",
  },
]

const ROADMAP = [
  { step: "1", title: "진단", detail: "우리 병원의 현재 위치를 9개 항목으로 진단합니다." },
  { step: "2", title: "포지셔닝", detail: "일본 수요와 겹치는 대표 진료·메시지를 정합니다." },
  { step: "3", title: "인프라", detail: "일본어 상담·예약·결제·사후관리 체계를 갖춥니다." },
  { step: "4", title: "테스트", detail: "핵심 진료 1~2개로 소규모 채널 테스트를 진행합니다." },
  { step: "5", title: "Scale", detail: "검증된 채널·상품을 중심으로 예산을 확대합니다." },
]

const FAILURE_PATTERNS = [
  "포지셔닝 없이 무작정 SNS 채널부터 개설한다",
  "차별화 없이 가격 할인만으로 승부하려 한다",
  "콘텐츠·홈페이지를 번역만 하고 끝낸다",
  "일본어 상담·예약 인프라 없이 광고부터 집행한다",
  "대표 진료를 정하지 않고 모든 진료를 동시에 알리려 한다",
]

const ANALYSIS_ITEMS = [
  "일본 검색 수요",
  "경쟁병원 가격",
  "경쟁병원 SNS/콘텐츠",
  "현재 병원 디지털 자산",
  "대표 진료 경쟁력",
]

export default function BenchmarkPage() {
  const heroMotion = useMotionAnimation()
  const audienceStagger = useStaggeredAnimation(AUDIENCE.length)
  const domainStagger = useStaggeredAnimation(DOMAIN_OVERVIEW.length)
  const specialtyStagger = useStaggeredAnimation(SPECIALTY_STRATEGIES.length)
  const roadmapStagger = useStaggeredAnimation(ROADMAP.length)

  const [assessment, setAssessment] = useState({ total: 50, tierId: "build-first" })

  return (
    <div>
      <PageHero
        category="가능성 진단 리포트"
        title="우리 병원, 일본에서도 통할까?"
        subtitle="일본 환자 유치 가능성 진단 리포트 — 자가진단으로 우리 병원의 현재 위치를 확인하세요"
        image="/images/hero-data.png"
      />

      {/* 이 리포트가 필요한 병원 */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle title="이 리포트가 필요한 병원" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {AUDIENCE.map((text, index) => (
              <motion.div
                key={text}
                {...audienceStagger(index)}
                className="p-6 rounded-2xl bg-[#FBEEE8] text-center"
              >
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 핵심 질문 */}
      <section className="section-padding bg-black">
        <Container>
          <motion.div {...heroMotion} className="text-center max-w-2xl mx-auto">
            <p className="text-white/60 text-sm font-semibold mb-4 tracking-wide">일본 진출의 핵심 질문</p>
            <p className="text-white/50 text-lg sm:text-xl line-through decoration-2 mb-3">
              &ldquo;일본 시장이 좋은가?&rdquo;
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed" style={{ wordBreak: "keep-all" }}>
              &ldquo;우리 병원이 일본에서 선택받을 이유가 있는가?&rdquo;
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 진단 가능성 모델 */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="진출 가능성 진단 모델"
            subtitle="Clinic × Market × Acquisition × Operation, 4개 영역 9개 항목으로 진단합니다"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {DOMAIN_OVERVIEW.map((d, index) => {
              const Icon = d.icon
              return (
                <motion.div
                  key={d.title}
                  {...domainStagger(index)}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#FBEEE8] flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-7 w-7 text-[#C1452D]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{d.title}</h3>
                  <p className="text-xs text-gray-500 mb-2" style={{ wordBreak: "keep-all" }}>
                    {d.subtitle}
                  </p>
                  <p className="text-xs text-[#C1452D] font-medium" style={{ wordBreak: "keep-all" }}>
                    {d.detail}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 일본 수요 매트릭스 */}
      <section className="section-padding bg-gray-100">
        <Container>
          <SectionTitle
            title="우리 병원 대표 진료, 어느 사분면에 있나요?"
            subtitle="④ 일본 수요 진단 — 우리가 잘하는 것과 일본인이 원하는 것이 겹치는가"
          />
          <div className="max-w-4xl mx-auto">
            <DemandMatrix />
          </div>
        </Container>
      </section>

      {/* 인터랙티브 스코어카드 */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="9개 항목 자가진단 — 직접 점수를 매겨보세요"
            subtitle="각 항목의 슬라이더를 우리 병원 상황에 맞게 조정하면, 아래 종합 Scorecard가 실시간으로 계산됩니다"
          />
          <div className="max-w-3xl mx-auto">
            <ScoreCard onChange={(total, tierId) => setAssessment({ total, tierId })} />
          </div>
        </Container>
      </section>

      {/* 4가지 유형 */}
      <section className="section-padding bg-gray-100">
        <Container>
          <SectionTitle title="당신의 병원은 어떤 유형인가요?" subtitle="점수 구간별 4가지 유형과 권장 전략입니다" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {TIERS.map((t) => {
              const isCurrent = t.id === assessment.tierId
              return (
                <div
                  key={t.id}
                  className={
                    isCurrent
                      ? "p-6 rounded-2xl bg-[#C1452D] text-white shadow-md ring-2 ring-[#C1452D] ring-offset-2"
                      : "p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
                  }
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={isCurrent ? "font-bold" : "font-bold text-gray-900"}>{t.label}</span>
                    <span className={isCurrent ? "text-white/70 text-xs" : "text-gray-400 text-xs"}>
                      {t.range[0]}~{t.range[1]}점
                    </span>
                  </div>
                  <p
                    className={isCurrent ? "text-white/85 text-sm leading-relaxed" : "text-gray-600 text-sm leading-relaxed"}
                    style={{ wordBreak: "keep-all" }}
                  >
                    {t.description}
                  </p>
                  {isCurrent && (
                    <p className="mt-3 text-xs font-semibold text-white/90">현재 우리 병원 진단 결과</p>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 진료과별 전략 */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle title="진료과별 추천 전략" subtitle="진료과마다 환자 획득 메커니즘이 다릅니다" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SPECIALTY_STRATEGIES.map((s, index) => (
              <motion.div
                key={s.name}
                {...specialtyStagger(index)}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="inline-block text-xs font-bold text-[#C1452D] bg-[#FBEEE8] px-3 py-1 rounded-full mb-3">
                  {s.name}
                </span>
                <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base" style={{ wordBreak: "keep-all" }}>
                  {s.summary}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 매출 시뮬레이션 */}
      <section className="section-padding bg-gray-100">
        <Container>
          <SectionTitle title="매출 시뮬레이션" subtitle="객단가 × 내원환자 수로 월 해외환자 매출을 가늠해보세요" />
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <RevenueSimulator />
          </div>
        </Container>
      </section>

      {/* 90일 로드맵 */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle title="첫 90일 로드맵" />
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {ROADMAP.map((r, index) => (
              <motion.div
                key={r.step}
                {...roadmapStagger(index)}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#C1452D] text-white font-bold flex items-center justify-center mx-auto mb-3">
                  {r.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{r.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  {r.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 실패하는 병원의 공통점 */}
      <section className="section-padding bg-gray-100">
        <Container>
          <SectionTitle title="실패하는 병원의 공통점" />
          <div className="max-w-2xl mx-auto space-y-3">
            {FAILURE_PATTERNS.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <Ban className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm sm:text-base" style={{ wordBreak: "keep-all" }}>
                  {f}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA + 진단 신청 폼 */}
      <section className="section-padding bg-black">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <TrendingUp className="h-10 w-10 text-white/70 mx-auto mb-4" />
            <p className="text-white/70 text-sm font-semibold mb-3">자가진단은 여기까지입니다</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ wordBreak: "keep-all" }}>
              실제 일본 진출 가능성은 아래 5가지를 함께 분석해야
              <br className="hidden sm:block" />
              정확하게 판단할 수 있습니다
            </h2>
            <ul className="inline-block text-left text-white/90 space-y-2 mb-2">
              {ANALYSIS_ITEMS.map((item, i) => (
                <li key={item} className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="font-bold text-white/60">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-xl mx-auto">
            <DiagnosisLeadForm score={assessment.total} tier={assessment.tierId} />
          </div>
        </Container>
      </section>
    </div>
  )
}
