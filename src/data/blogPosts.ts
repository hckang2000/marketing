export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  slug: string
  isReport: boolean
  author?: string
  tags?: string[]
  featuredImage?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "한국 피부과 클리닉 일본인 고객 심층 분석 보고서",
    excerpt: "일본인 환자의 5단계 고객 여정을 기반으로 한 마케팅 전략 가이드. X(트위터) 인지도 28%, 리뷰·증례 중시 66% 등 핵심 데이터 분석.",
    content: `
# 한국 피부과 클리닉 일본인 고객 심층 분석 보고서

## 개요

본 보고서는 한국 피부과 클리닉의 일본인 고객을 대상으로 한 심층 분석 결과를 담고 있습니다. 일본인 환자들의 고객 여정과 의사결정 과정을 분석하여 효과적인 마케팅 전략을 제시합니다.

## 주요 발견사항

### 1. 고객 여정 분석
일본인 환자들의 5단계 고객 여정을 분석한 결과:

1. **인지 단계**: 소셜미디어(특히 X/트위터)를 통한 정보 수집
2. **관심 단계**: 리뷰와 증례 사진을 통한 신뢰도 확인
3. **고려 단계**: 가격과 시술 안전성 비교 검토
4. **결정 단계**: 온라인 예약 시스템을 통한 편의성 중시
5. **방문 후**: SNS 공유를 통한 경험 공유

### 2. 핵심 데이터

- **X(트위터) 인지도**: 28%
- **리뷰·증례 중시도**: 66%
- **온라인 예약 선호도**: 78%
- **가격 민감도**: 42%

## 마케팅 전략 제안

### 디지털 마케팅 강화
- X(트위터) 채널 운영 강화
- 증례 사진과 리뷰 중심의 콘텐츠 제작
- 일본어 콘텐츠 제공

### 고객 경험 개선
- 온라인 예약 시스템 최적화
- 일본어 고객 서비스 제공
- 방문 후 SNS 공유 유도 프로그램

## 결론

일본인 고객의 특성을 고려한 맞춤형 마케팅 전략이 필요하며, 특히 디지털 채널을 통한 접근과 신뢰도 구축이 핵심 요소임을 확인했습니다.
    `,
    date: "2025-08-26",
    readTime: "15분",
    category: "마케팅 분석",
    slug: "japan-customer-analysis-report",
    isReport: true,
    author: "마케팅팀",
    tags: ["일본인 고객", "피부과", "마케팅 분석", "고객 여정"],
    featuredImage: "/images/blog/japan-customer-analysis.jpg"
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
