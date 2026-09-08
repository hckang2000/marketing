export type DomainKey = "clinic" | "market" | "acquisition" | "operation"

export interface Criterion {
  key: string
  domain: DomainKey
  label: string
  question: string
  max: number
}

export const DOMAIN_LABELS: Record<DomainKey, { title: string; subtitle: string; max: number }> = {
  clinic: { title: "Clinic", subtitle: "우리 병원 자체가 경쟁력이 있는가", max: 30 },
  market: { title: "Market", subtitle: "일본에서 실제로 팔리는가", max: 20 },
  acquisition: { title: "Acquisition", subtitle: "실제 환자로 전환할 수 있는가", max: 25 },
  operation: { title: "Operation", subtitle: "데려온 환자를 제대로 받을 수 있는가", max: 25 },
}

export const CRITERIA: Criterion[] = [
  {
    key: "product",
    domain: "clinic",
    label: "① 상품 경쟁력",
    question: "일본에서 굳이 한국까지 와서 우리 병원을 찾을 이유가 있는가?",
    max: 10,
  },
  {
    key: "price",
    domain: "clinic",
    label: "② 가격 경쟁력",
    question: "항공료·체류비를 고려해도 일본 현지 대비 매력적인가?",
    max: 10,
  },
  {
    key: "differentiation",
    domain: "clinic",
    label: "③ 차별화 경쟁력",
    question: "원장이 없어도 병원 이름만으로 설명되는 USP가 있는가?",
    max: 10,
  },
  {
    key: "demand",
    domain: "market",
    label: "④ 일본 수요",
    question: "우리가 잘하는 것과 일본인이 원하는 것이 겹치는가?",
    max: 10,
  },
  {
    key: "content",
    domain: "market",
    label: "⑤ 콘텐츠 경쟁력",
    question: "이 경쟁력을 일본 소비자가 온라인에서 확인할 수 있는가?",
    max: 10,
  },
  {
    key: "acquisition",
    domain: "acquisition",
    label: "⑥ 환자 획득 가능성",
    question: "우리 병원과 궁합이 맞는 채널(검색·SNS·인플루언서 등)이 명확한가?",
    max: 15,
  },
  {
    key: "conversion",
    domain: "acquisition",
    label: "⑦ 상담·예약 전환력",
    question: "일본어 상담 → 예약 → 결제 과정에서 이탈 없이 전환되는가?",
    max: 10,
  },
  {
    key: "capacity",
    domain: "operation",
    label: "⑧ 실제 수용 역량",
    question: "일본어 현장 대응·결제·사후관리까지 실제로 감당할 수 있는가?",
    max: 15,
  },
  {
    key: "ltv",
    domain: "operation",
    label: "⑨ 재방문·추천 가능성",
    question: "1회성 방문이 아니라 재방문·추가진료·소개로 이어지는 구조인가?",
    max: 10,
  },
]

export const TOTAL_MAX = CRITERIA.reduce((sum, c) => sum + c.max, 0)

export type TierId = "ready-to-scale" | "ready-to-test" | "build-first" | "not-yet"

export interface Tier {
  id: TierId
  range: [number, number]
  label: string
  description: string
}

export const TIERS: Tier[] = [
  {
    id: "ready-to-scale",
    range: [80, 100],
    label: "READY TO SCALE",
    description:
      "이미 일본 시장에서 경쟁할 조건이 상당 부분 갖춰져 있습니다. 적절한 채널과 포지셔닝을 찾으면 본격적인 환자 획득을 시작할 수 있습니다.",
  },
  {
    id: "ready-to-test",
    range: [60, 79],
    label: "READY TO TEST",
    description:
      "가능성이 있지만 바로 큰 예산을 투입하기보다 핵심 진료 1~2개로 시장 검증하는 것이 적합합니다.",
  },
  {
    id: "build-first",
    range: [40, 59],
    label: "BUILD FIRST",
    description: "일본 진출 자체보다 상품·포지셔닝·상담 인프라 구축이 먼저입니다.",
  },
  {
    id: "not-yet",
    range: [0, 39],
    label: "NOT YET",
    description: "현 시점에서는 마케팅 비용을 투입하는 것보다 진출 조건을 만드는 것이 우선입니다.",
  },
]

export function getTier(total: number): Tier {
  return TIERS.find((t) => total >= t.range[0] && total <= t.range[1]) ?? TIERS[TIERS.length - 1]
}

export function getDomainTotal(scores: Record<string, number>, domain: DomainKey): number {
  return CRITERIA.filter((c) => c.domain === domain).reduce((sum, c) => sum + (scores[c.key] ?? 0), 0)
}

export function getDefaultScores(): Record<string, number> {
  return Object.fromEntries(CRITERIA.map((c) => [c.key, Math.round(c.max / 2)]))
}
