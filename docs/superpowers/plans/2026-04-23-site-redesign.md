# 사이트 전체 개편 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** seumbiz.com 구조 기반으로 4개 페이지 전체를 개편하고, 강조색을 red-500으로 통일하며 모든 그라데이션을 제거한다.

**Architecture:** `redesign` 브랜치에서 전체 작업. 공통 디자인 시스템(CSS 변수, Button)을 먼저 변경한 뒤 홈페이지 → 서브페이지 순으로 진행. 테스트 환경 없음 — `npm run dev`로 시각 확인.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, Radix UI

---

## 변경 파일 목록

| 파일 | 작업 |
|---|---|
| `src/app/globals.css` | `--primary` → red-500, `.gradient-bg` → solid red |
| `src/components/common/Button.tsx` | `gradient` variant → solid red |
| `src/components/sections/Differentiators.tsx` | 전면 재작성 — 3컬럼 카드 |
| `src/components/sections/Service.tsx` | 전면 재작성 — 세로 리스트 |
| `src/components/sections/SocialProof.tsx` | Swiper → 정적 이미지 그리드 |
| `src/app/page.tsx` | 불필요 섹션 제거 |
| `src/app/about/page.tsx` | 아바타 배경, 버튼 variant 변경 |
| `src/app/data/page.tsx` | 파란색 → red-500, 그라데이션 제거 |

---

## Task 1: redesign 브랜치 생성

**Files:** 없음

- [ ] **Step 1: 브랜치 생성 및 이동**

```bash
git checkout -b redesign
git branch
```
Expected: `* redesign` 표시됨

- [ ] **Step 2: 개발 서버 시작**

```bash
npm run dev
```
Expected: `localhost:3000` 정상 동작 확인

---

## Task 2: 공통 디자인 시스템 — CSS 변수 및 gradient 제거

**Files:**
- Modify: `src/app/globals.css`

현재 `--primary`는 파란색(HSL 221.2 83.2% 53.3%). red-500(#EF4444)에 해당하는 HSL은 `0 84.2% 60.2%`.  
`--ring`도 동일하게 변경. `.gradient-bg`를 solid red로, `.text-gradient`를 plain color로 변경.

- [ ] **Step 1: globals.css 수정**

`src/app/globals.css`에서 다음 부분을 교체:

```css
/* 변경 전 */
--primary: 221.2 83.2% 53.3%;
--primary-foreground: 210 40% 98%;
/* ... */
--ring: 221.2 83.2% 53.3%;
```

```css
/* 변경 후 */
--primary: 0 84.2% 60.2%;
--primary-foreground: 0 0% 100%;
/* ... */
--ring: 0 84.2% 60.2%;
```

그리고 `.gradient-bg`, `.text-gradient` 교체:

```css
/* 변경 전 */
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

```css
/* 변경 후 */
.gradient-bg {
  background: #EF4444;
}

.text-gradient {
  color: #EF4444;
}
```

- [ ] **Step 2: 브라우저에서 primary 색상 확인**

`localhost:3000` 방문 → 버튼, 링크 등 primary 색상이 빨간색으로 바뀌었는지 확인

- [ ] **Step 3: 커밋**

```bash
git add src/app/globals.css
git commit -m "design: primary 색상 red-500으로 변경, 그라데이션 제거"
```

---

## Task 3: Button 컴포넌트 — gradient variant 제거

**Files:**
- Modify: `src/components/common/Button.tsx`

- [ ] **Step 1: gradient variant를 solid red로 변경**

`src/components/common/Button.tsx`에서:

```typescript
// 변경 전
gradient: "gradient-bg text-white hover:opacity-90",
```

```typescript
// 변경 후
gradient: "bg-red-500 text-white hover:bg-red-600",
```

- [ ] **Step 2: 브라우저에서 버튼 확인**

`localhost:3000/about` → "10초 문의하기" 버튼이 그라데이션 없는 solid red인지 확인

- [ ] **Step 3: 커밋**

```bash
git add src/components/common/Button.tsx
git commit -m "design: gradient 버튼을 solid red-500으로 변경"
```

---

## Task 4: Differentiators — 차별성 3카드 섹션으로 재작성

**Files:**
- Modify: `src/components/sections/Differentiators.tsx`

현재 가격 아코디언 → seumbiz "특별합니다" 형태의 흰 배경 3컬럼 카드 그리드.

- [ ] **Step 1: Differentiators.tsx 전체 교체**

```typescript
"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Search } from "lucide-react"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const differentiators = [
  {
    id: 1,
    icon: Users,
    title: "일본 고객 직접 소통",
    description: "MCN 없이 일본 마이크로 인플루언서와 직접 계약. 1,000명 이상의 일본 고객과 직접 소통한 현지 데이터를 보유하고 있습니다.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "광고비 10배 매출",
    description: "실제 집행한 캠페인에서 광고비 대비 평균 10배 이상의 매출을 기록했습니다. 성과 없는 마케팅은 제안하지 않습니다.",
  },
  {
    id: 3,
    icon: Search,
    title: "데이터 기반 전략",
    description: "서울대 경영 출신 마케터가 설문 데이터와 고객 여정 분석을 바탕으로 병원에 맞는 최적 채널과 예산을 설계합니다.",
  },
]

export function Differentiators() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            클리닉브릿지가 특별한 이유
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            일본 시장에서 검증된 방법으로 병원의 매출을 만들어 드립니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: 브라우저에서 확인**

`localhost:3000` → 홈페이지에서 3컬럼 카드 섹션이 표시되는지 확인

- [ ] **Step 3: 커밋**

```bash
git add src/components/sections/Differentiators.tsx
git commit -m "feat: Differentiators를 차별성 3카드 섹션으로 재구성"
```

---

## Task 5: Service — 세로 리스트 섹션으로 재작성

**Files:**
- Modify: `src/components/sections/Service.tsx`

현재 어두운 배경 + 2x3 hover 그리드 → 연회색 배경 + 세로 리스트 형태.

- [ ] **Step 1: Service.tsx 전체 교체**

```typescript
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const services = [
  {
    id: 1,
    title: "X 리트윗 이벤트",
    logo: "/images/x.png",
    description: "리트윗 할인 이벤트를 통해 초반 예약 유도. 개원 준비 단계 혹은 극초반에 적합합니다.",
  },
  {
    id: 2,
    title: "인플루언서 협찬",
    logo: "/images/instagram.png",
    description: "소형 인플루언서 협찬을 통해 인지도 확보. 레이저 시술이나 리프팅에 효과적입니다.",
  },
  {
    id: 3,
    title: "DB 마케팅",
    logo: "/images/line.png",
    description: "Meta, Google 광고를 통해 상담 유입. 개원 초반 환자 유입에 적합합니다.",
  },
  {
    id: 4,
    title: "검색최적화 (SEO)",
    logo: "/images/google.png",
    description: "웹사이트 내 후기 작성 및 백링크 작업. 개원 중후반 안정적 트래픽 유지에 적합합니다.",
  },
  {
    id: 5,
    title: "현지 매거진 송출",
    logo: "/images/ameba.png",
    description: "현지 언론과 매거진에 기사 송출. 중고가 맞춤형 클리닉에 적합합니다.",
  },
  {
    id: 6,
    title: "자체 유튜브 운영",
    logo: "/images/youtube.png",
    description: "중고가 특화 시술 홍보에 적합한 영상 콘텐츠 마케팅입니다.",
  },
]

export function Service() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            클리닉브릿지가 제공하는 가치
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            병원의 위치, 주력 시술, 규모에 맞는 채널을 선택해 집중합니다
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 py-8"
            >
              <div className="flex-shrink-0 w-12 h-12 relative">
                <Image
                  src={service.logo}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: 브라우저에서 확인**

`localhost:3000` → 서비스 섹션이 연회색 배경 세로 리스트로 표시되는지 확인

- [ ] **Step 3: 커밋**

```bash
git add src/components/sections/Service.tsx
git commit -m "feat: Service를 세로 리스트 형태로 재구성"
```

---

## Task 6: SocialProof — Swiper 캐로셀 → 정적 이미지 그리드

**Files:**
- Modify: `src/components/sections/SocialProof.tsx`
- Delete: `src/components/sections/SocialProof.css` (Swiper 전용 스타일 파일 존재 시)

- [ ] **Step 1: SocialProof.tsx 전체 교체**

```typescript
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/testimonial-1.jpg",
    caption: "홍대 OOO의원 원장님 — 일본 인플루언서 마케팅 시작하고 월 매출 2억에서 6개월만에 3.5억으로 올랐습니다.",
  },
  {
    id: 2,
    image: "/images/testimonials/testimonial-2.jpg",
    caption: "강남 XXX의원 원장님 — 광고비 대비 15배 매출이 나옵니다.",
  },
  {
    id: 3,
    image: "/images/testimonials/testimonial-3.jpg",
    caption: "신논현 YYY의원 원장님 — 주말에 일본 환자가 40명까지 오네요.",
  },
]

export function SocialProof() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            원장님들 실제 후기
          </h2>
          <p className="text-base text-gray-600 max-w-lg mx-auto">
            클리닉브릿지와 함께한 원장님들의 실제 후기를 확인해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4">
                <Image
                  src={testimonial.image}
                  alt={`후기 이미지 ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {testimonial.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: SocialProof.css 삭제 여부 확인 후 처리**

```bash
ls src/components/sections/SocialProof.css 2>/dev/null && echo "exists" || echo "not found"
```

파일이 존재하면:
```bash
git rm src/components/sections/SocialProof.css
```

- [ ] **Step 3: 브라우저에서 확인**

`localhost:3000` → 후기 섹션이 3컬럼 이미지 그리드로 표시되는지 확인

- [ ] **Step 4: 커밋**

```bash
git add src/components/sections/SocialProof.tsx
git commit -m "feat: SocialProof Swiper 캐로셀을 정적 이미지 그리드로 교체"
```

---

## Task 7: 홈페이지 — 불필요 섹션 제거 및 순서 정리

**Files:**
- Modify: `src/app/page.tsx`

제거: TeamIntroduction, InfluencerDM, FinalCTA  
순서: Hero → Differentiators → Service → SocialProof

- [ ] **Step 1: page.tsx 전체 교체**

```typescript
"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { useContact } from "@/components/providers/ContactProvider"

const Differentiators = dynamic(
  () => import("@/components/sections/Differentiators").then(mod => ({ default: mod.Differentiators })),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
)

const Service = dynamic(
  () => import("@/components/sections/Service").then(mod => ({ default: mod.Service })),
  { loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> }
)

const SocialProof = dynamic(
  () => import("@/components/sections/SocialProof").then(mod => ({ default: mod.SocialProof })),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
)

export default function HomePage() {
  const { openContact } = useContact()

  return (
    <>
      <Hero onContactClick={openContact} />
      <Differentiators />
      <Service />
      <SocialProof />
    </>
  )
}
```

- [ ] **Step 2: 브라우저에서 전체 홈페이지 확인**

`localhost:3000` → 4개 섹션(Hero → 3카드 → 서비스 리스트 → 후기 그리드)이 순서대로 표시되는지 확인

- [ ] **Step 3: 커밋**

```bash
git add src/app/page.tsx
git commit -m "feat: 홈페이지 섹션 구성 seumbiz 구조로 개편"
```

---

## Task 8: Hero — 버튼 variant 변경

**Files:**
- Modify: `src/components/sections/Hero.tsx`

현재 Hero의 CTA 버튼은 `variant="outline"`. 흰 배경에서 잘 보이도록 solid red로 변경.

- [ ] **Step 1: Hero.tsx 버튼 variant 수정**

`src/components/sections/Hero.tsx`에서:

```typescript
// 변경 전
<Button
  onClick={onContactClick}
  variant="outline"
  size="lg"
  className="w-full lg:w-96 lg:px-8"
>
```

```typescript
// 변경 후
<Button
  onClick={onContactClick}
  variant="default"
  size="lg"
  className="w-full lg:w-96 lg:px-8"
>
```

- [ ] **Step 2: 브라우저에서 Hero 버튼 확인**

`localhost:3000` → Hero CTA 버튼이 solid red-500으로 표시되는지 확인

- [ ] **Step 3: 커밋**

```bash
git add src/components/sections/Hero.tsx
git commit -m "design: Hero CTA 버튼을 solid red로 변경"
```

---

## Task 9: 회사소개 페이지 정리

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: 아바타 배경 그라데이션 제거 + 버튼 variant 변경**

`src/app/about/page.tsx`에서:

```typescript
// 변경 전
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 mb-6">
```

```typescript
// 변경 후
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 mb-6">
```

그리고:

```typescript
// 변경 전
<Button onClick={openContact} variant="gradient" className="mt-6">
```

```typescript
// 변경 후
<Button onClick={openContact} variant="default" className="mt-6">
```

- [ ] **Step 2: 브라우저에서 확인**

`localhost:3000/about` → 프로필 아바타 배경이 gray, 버튼이 solid red인지 확인

- [ ] **Step 3: 커밋**

```bash
git add src/app/about/page.tsx
git commit -m "design: 회사소개 그라데이션 제거, 버튼 solid red로 변경"
```

---

## Task 10: 설문데이터 페이지 — blue → red-500 전면 교체

**Files:**
- Modify: `src/app/data/page.tsx`

파란색(`#3b82f6`, `#1d4ed8`, `#f0f9ff`, `#f0f4ff`)을 red-500 계열로 교체. 그라데이션 배경 제거.

- [ ] **Step 1: 헤더 섹션 변경**

`src/app/data/page.tsx`에서 헤더 인라인 스타일:

```typescript
// 변경 전
style={{
  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  color: 'white',
  padding: '60px 0',
  textAlign: 'center',
  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
  marginBottom: '40px',
  width: '100%',
  position: 'relative'
}}
```

```typescript
// 변경 후
style={{
  background: '#EF4444',
  color: 'white',
  padding: '60px 0',
  textAlign: 'center',
  boxShadow: '0 4px 20px rgba(239, 68, 68, 0.3)',
  marginBottom: '40px',
  width: '100%',
  position: 'relative'
}}
```

- [ ] **Step 2: 결론 섹션 변경**

```typescript
// 변경 전
style={{
  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  ...
  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
  ...
}}
```

```typescript
// 변경 후
style={{
  background: '#1f2937',
  ...
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
  ...
}}
```

- [ ] **Step 3: style jsx 블록 내 색상 전체 교체**

`<style jsx>` 블록에서 모든 `#3b82f6` → `#EF4444`, `#f0f9ff` → `#fef2f2`, `#f0f4ff` → `#fef2f2`:

```css
/* 변경 전 */
.meta-info { border-left: 5px solid #3b82f6; }
.meta-item strong { color: #3b82f6; }
.journey-stage { border: 2px solid #3b82f6; }
.journey-stage::before { background: #3b82f6; }
.insight-box { background: #f0f9ff; border-left: 5px solid #3b82f6; }
.stat-card { border-top: 4px solid #3b82f6; }
.stat-number { color: #3b82f6; }
.highlight { background: #3b82f6; }
.key-point { background: #f0f4ff; border-left: 5px solid #3b82f6; }
.tier-table th { background: #3b82f6; }
.persona-title { background: #3b82f6; }
.persona-card { border: 2px solid #3b82f6; }
strong { color: #3b82f6; }
```

```css
/* 변경 후 */
.meta-info { border-left: 5px solid #EF4444; }
.meta-item strong { color: #EF4444; }
.journey-stage { border: 2px solid #EF4444; }
.journey-stage::before { background: #EF4444; }
.insight-box { background: #fef2f2; border-left: 5px solid #EF4444; }
.stat-card { border-top: 4px solid #EF4444; }
.stat-number { color: #EF4444; }
.highlight { background: #EF4444; }
.key-point { background: #fef2f2; border-left: 5px solid #EF4444; }
.tier-table th { background: #EF4444; }
.persona-title { background: #EF4444; }
.persona-card { border: 2px solid #EF4444; }
strong { color: #EF4444; }
```

- [ ] **Step 4: 브라우저에서 확인**

`localhost:3000/data` → 헤더, 통계 카드, 여정 단계, 결론 섹션이 red-500 계열로 표시되는지 확인

- [ ] **Step 5: 커밋**

```bash
git add src/app/data/page.tsx
git commit -m "design: 설문데이터 파란색 → red-500, 그라데이션 제거"
```

---

## Task 11: 빌드 확인 및 master merge

**Files:** 없음

- [ ] **Step 1: 빌드 오류 확인**

```bash
npm run build
```
Expected: 빌드 성공 (오류 없음). TypeScript/ESLint 오류 발생 시 수정 후 재빌드.

- [ ] **Step 2: lint 확인**

```bash
npm run lint
```
Expected: 오류 없음

- [ ] **Step 3: master로 merge**

```bash
git checkout master
git merge redesign
```

- [ ] **Step 4: 최종 확인**

```bash
git log --oneline -10
```
Expected: 모든 커밋이 master에 반영됨 확인

> push는 사용자가 직접 진행
