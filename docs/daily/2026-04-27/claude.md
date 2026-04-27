# 2026-04-27 작업 기록

## Hero 섹션 워딩 변경 (엔터프라이즈 타겟 전환)

- 브랜치: `text-edit` (master에서 분기)
- 파일: `src/components/sections/Hero.tsx`

### 변경 내용

| 영역 | 변경 전 | 변경 후 |
| --- | --- | --- |
| H1 | 일본 환자 유치로 / 광고비 10배 매출목표 | 엔터프라이즈 의료 그룹을 위한 / 글로벌 환자 유치 솔루션 |
| H2 | 지금 문의시 광고비 50% 할인 | 데이터 기반 통합 마케팅으로 안정적인 성과를 보장합니다 |
| CTA | 10초 문의하기 | 도입 상담 신청 |

### 의도

- 단일 클리닉/프로모션 톤(할인·즉시 문의)을 제거하고, 대형 의료 그룹·법인 의사결정자를 대상으로 한 메시지로 전환.
- "엔터프라이즈", "의료 그룹", "솔루션", "도입 상담" 등 B2B 도입 검토 단계의 어휘 사용.
- 가격 소구(50% 할인) 대신 신뢰 소구(데이터 기반·안정적 성과)로 톤 변경.

### 영향 분석

- 변경 범위: Hero 섹션 카피만 수정. 컴포넌트 인터페이스(`HeroProps`), 레이아웃, 이미지, CTA 핸들러(`onContactClick`) 변경 없음.
- 다른 모듈 영향: 없음. `Button`, `Container` 공통 컴포넌트 사용 방식 그대로.
- 후속 검토 필요 사항:
  - 다른 섹션(Features, Pricing, Footer 등)도 동일한 엔터프라이즈 톤으로 정렬 필요 여부 확인.
  - CTA 모달·문의 폼의 필드/문구가 엔터프라이즈 도입 상담에 부합하는지 별도 점검.
  - SEO 메타(title, description)가 기존 일본 환자 유치 키워드 기반이라면 갱신 필요.

---

## sections 폴더 전체 워딩 엔터프라이즈 톤 정렬

- 브랜치: `text-edit`
- 대상: `src/components/sections/` 내 컴포넌트 전체
  - `FinalCTA.tsx`
  - `Differentiators.tsx`
  - `Service.tsx`
  - `SocialProof.tsx`
  - `TeamIntroduction.tsx`
  - `InfluencerDM.tsx`
- 변경 제외: `InfluencerDM.css`(스타일 파일, 워딩 없음), `Hero.tsx`(이전 작업에서 완료)

### 톤 전환 원칙

- **타겟 변경**: 단일 클리닉/원장 → 엔터프라이즈 의료 그룹·법인·메디컬 네트워크
- **메시지 전환**:
  - 가격 소구(할인·즉시 문의) → 신뢰 소구(데이터·SLA·ROI 보장)
  - "원장님" 호칭 제거 → "의료 그룹", "도입 의료 그룹" 등 법인 단위 표현
  - "병원 마케팅" → "글로벌 환자 유치 솔루션", "통합 마케팅"
  - "마케팅 대행사" → "전문 컨설팅 조직"
  - "중간 브로커" → "중간 에이전시"(엔터프라이즈 어휘)
- **유지 원칙**:
  - 컴포넌트 인터페이스/Props/핸들러/이미지 경로/레이아웃 변경 없음 (텍스트만 수정)
  - 디자인 토큰·컬러·spacing 변경 없음
  - 검증 가능한 정량 지표(10배 ROI, 인플루언서 500명 등)는 그대로 유지하되 표현만 엔터프라이즈 톤으로 재서술

### 섹션별 핵심 변경

| 섹션 | 주요 변경 |
| --- | --- |
| FinalCTA | 헤드라인 "지금 바로 문의주세요" → "엔터프라이즈 도입 상담", CTA "10초 문의하기" → "도입 상담 신청" |
| Differentiators | 카드 타이틀을 ROI/네트워크/컨설팅 축으로 재정렬, "클리닉브릿지가 특별한 이유" → "엔터프라이즈가 클리닉브릿지를 선택하는 이유" |
| Service | 6개 서비스 카드를 퍼포먼스/인플루언서/DB/SEO/PR/오너드 미디어 축으로 재서술, 단일 병원 표현 제거 |
| SocialProof | "원장님 후기" → "도입 의료 그룹의 실제 성과", testimonial caption을 법인·그룹 표현으로 재작성, `wordBreak: keep-all` 추가하여 가독성 정렬 |
| TeamIntroduction | "마케팅 대행사" → "엔터프라이즈 전문 컨설팅 조직", "현직 의사" → "현직 의료 자문진" |
| InfluencerDM | "DM 주고받는 회사" → "현지 인플루언서 네트워크를 직접 운영하는 자체 조직", "투명성 보신 적 있나요?" → "엔터프라이즈가 요구하는 투명성" |

### 영향 분석 (사후)

- 컴포넌트 시그니처/Props/이벤트 핸들러 변경 없음 → 페이지 조립부(`page.tsx` 등) 영향 없음.
- `ResponsiveText`, `SectionTitle`, `Container`, `Button` 등 공통 컴포넌트 호출 방식 동일.
- `gtag` 트래킹 이벤트(`trackButtonClick('contact', 'final_cta')`) 변경 없음 → 분석 파이프라인 영향 없음.
- Tailwind 클래스/디자인 토큰 변경 없음 → 디자인 회귀 위험 없음.
- 후속 점검 권장 항목:
  - SEO 메타데이터(title, description, OG 태그)가 단일 병원/할인 키워드 기반인지 확인 후 엔터프라이즈 키워드로 정렬.
  - 문의 모달·폼 라벨, 헤더/푸터, 블로그·About 페이지의 문구도 동일 톤으로 정렬 필요 여부 결정.
  - testimonial 이미지(스크린샷 텍스트)와 카피 간 정합성 확인 — 이미지가 단일 원장님 톤이면 교체 검토.

---

## "10초 문의" 잔존 카피 일괄 정렬

엔터프라이즈 톤(`도입 상담 신청`)과 어긋나는 "10초 문의" 계열 카피를 전수 변경했습니다.

### UI 변경

| 위치 | 변경 전 | 변경 후 |
| --- | --- | --- |
| `components/forms/InquiryDialog.tsx` (Dialog.Title) | 10초 문의하기 | 도입 상담 신청 |
| `components/layout/Header.tsx` (데스크톱 CTA) | 10초 문의 | 도입 상담 |
| `components/layout/Header.tsx` (모바일 축약 CTA) | 문의 | 상담 |
| `components/layout/Footer.tsx` | 10초 문의하기 | 도입 상담 신청 |
| `components/layout/MobileNav.tsx` | 10초 문의하기 | 도입 상담 신청 |
| `components/columns/ContentGate.tsx` | 10초 문의하고 마저 읽기 | 도입 상담 신청 후 이어 읽기 |

### 백엔드 알림 변경 (UI 정합성)

| 위치 | 변경 전 | 변경 후 |
| --- | --- | --- |
| `app/api/contact/route.ts` (Slack text) | 새로운 10초 문의가 접수되었습니다 | 새로운 도입 상담 신청이 접수되었습니다 |
| `app/api/contact/route.ts` (Email subject) | 클리닉브릿지 10초 문의 도착 | 클리닉브릿지 도입 상담 신청 도착 |

### 변경 제외

- `app/about/page.tsx:72` — 주석 블록(`{/* */}`) 안에 비활성화된 코드라 사용자 노출 없음. 미변경.
- `docs/superpowers/plans/2026-04-23-site-redesign.md` — 과거 리디자인 계획 문서의 검수 체크리스트 문구. 역사 기록이라 그대로 둠.

### 영향 분석

- 컴포넌트 시그니처/Props/이벤트 핸들러 미변경, 텍스트만 수정.
- `gtag` 이벤트 키(`trackButtonClick('contact', ...)`)는 그대로라 분석 파이프라인 영향 없음.
- Slack/이메일 알림은 문구만 변경. 페이로드 스키마, 수신처, 트리거 흐름 모두 동일.
- 후속 점검 권장: 운영팀이 사용하는 Slack 알림 라우팅 룰이 "10초 문의" 키워드로 매칭되어 있다면 룰을 "도입 상담 신청"으로 갱신 필요.

---

## 사이트 전반 외부 노출 텍스트 엔터프라이즈 톤 정렬

사용자가 외부에 보이는 모든 텍스트를 엔터프라이즈 향으로 일괄 변경 요청. 외부 노출되지 않는 내부 로깅·CRM(Trello)·내부 운영 알림은 변경 대상에서 최소화했습니다.

### 변경 파일

| 파일 | 변경 항목 |
| --- | --- |
| `src/app/layout.tsx` | SEO 메타(title, description, OG, Twitter, alt, keywords) 전면 교체 |
| `src/app/about/page.tsx` | PageHero 서브타이틀, CEO 인용문 2개, 자기소개 3단락 재작성 |
| `src/app/blog/page.tsx` | PageHero(category/title/subtitle), 뉴스레터 카드 타이틀·설명 교체 |
| `src/app/blog/[slug]/page.tsx` | "블로그로 돌아가기" → "인사이트 목록으로 돌아가기" |
| `src/app/data/page.tsx` | PageHero category·subtitle, 결론 단락의 처방 문장 그룹 단위 표현으로 재작성 |
| `src/app/privacy/page.tsx` | 수집 항목 라벨 폼과 일치 |
| `src/app/terms/page.tsx` | 서비스 정의 문구와 서비스 목록 4개 재작성 |
| `src/components/layout/Header.tsx` | 내비 라벨 "처음으로/마케팅 칼럼/설문 데이터" → "홈/인사이트/리포트" |
| `src/components/layout/Footer.tsx` | 회사 설명 문구, "블로그" → "인사이트", "문의" → "도입 문의" |
| `src/components/forms/InquiryDialog.tsx` | "병원명/직책" → "소속/직책", "문의내용" → "도입 검토 내용" 라벨·placeholder, 성공 토스트, 제출 버튼 |
| `src/lib/validators.ts` | zod 검증 메시지 폼과 일치 |
| `src/app/api/contact/route.ts` | Slack/이메일의 폼 필드 라벨만 정합성 정렬(나머지는 외부 노출 아님) |
| `src/data/blogPosts.ts` | 2개 글의 title/excerpt/category/tags + 톤이 강한 단락(서두/주요 가이드 문장) 재작성 |

### 변경 제외 (외부 노출 아님 / 고유명사)

- `src/lib/trello.ts` — 내부 CRM 카드 본문.
- `src/lib/slack.ts`, `src/lib/gtag.ts`, `src/lib/utils.ts`, `src/data/blogPostTemplate.ts` — 운영 로직 또는 어디서도 import되지 않는 템플릿.
- `src/components/sections/TeamIntroduction.tsx`의 "서울대병원 수련" — 고유명사라 유지.
- `route.ts`의 검증 에러 응답("모든 필드를 입력해주세요" 등) — 톤 중립이라 유지.
- `app/about/page.tsx`의 주석 처리된 "10초 문의하기" — 비활성 코드.

### 톤 전환 키워드 매핑

| Before | After |
| --- | --- |
| 원장님 / 원장 | 의료 그룹 의사결정자 / 마케팅 의사결정자 |
| 병원 (자사 의뢰자 지칭) | 의료 그룹 / 법인 의료기관 |
| 병원명 (폼 필드) | 소속/직책 |
| 일본 대상 병원 마케팅 | 엔터프라이즈 의료 그룹 대상 글로벌 마케팅 |
| 해외 환자 유치 | 글로벌 환자 유치 솔루션 |
| 마케팅 칼럼 / 블로그 | 인사이트 |
| 설문 데이터 | 엔터프라이즈 리포트 |
| 가격·할인 소구 | ROI 보장형 운영 / 데이터 기반 검증된 성과 |

### 영향 분석 (사후)

- 컴포넌트 시그니처, Props, 이벤트 핸들러, 데이터 키(`hospital`, `message`), 라우팅 모두 변경 없음.
- `gtag` 트래킹 이벤트 키와 zod 스키마 필드 키 변경 없음 → 분석/저장 파이프라인 영향 없음.
- `blogPosts.ts`의 `slug` 변경 없음 → 기존 URL/공유 링크 그대로 유지.
- SEO 메타 변경 → 검색 인덱스 재반영에 수일~수주 소요 예상.
- 후속 점검 권장:
  - testimonial·OG 이미지의 텍스트가 단일 클리닉 톤이면 교체.
  - `data/blogPostTemplate.ts`도 신규 글 작성 시 톤 일관성 확보를 위해 차후 갱신 권장.
  - 블로그 본문은 톤 강한 단락만 정렬했고 분석 데이터·전략 제안 단락은 신뢰도 유지를 위해 그대로 둠. 격식체 통일 등 추가 톤업이 필요한지 결정 필요.

---

## "엔터프라이즈" / "의료 그룹" 키워드 일괄 제거

사용자 피드백: 타겟이 그렇다는 의미였지 키워드로 그대로 노출하지 말 것. 모든 등장 위치에서 두 단어를 제거하고 "글로벌 의료 마케팅" 톤으로 정렬.

### 변경 위치

| 파일 | 변경 |
| --- | --- |
| `src/app/layout.tsx` | title/description/OG/Twitter/keywords의 "엔터프라이즈 의료 그룹을 위한 글로벌 환자 유치 솔루션" → "글로벌 의료 마케팅"으로 압축. keywords에서 두 단어 제거 |
| `src/app/terms/page.tsx` | 서비스 목록의 "의료 그룹 단위 통합 환자 유치 캠페인 관리" → "통합 환자 유치 캠페인 관리" (목적 정의 문구는 사용자 편집으로 이미 "글로벌 마케팅 서비스"로 정렬됨) |
| `src/components/sections/FinalCTA.tsx` | 헤드라인 "엔터프라이즈 도입 상담" → "도입 상담 신청" |
| `src/app/data/page.tsx` | 결론의 "의료 그룹은 가격 경쟁이 아닌..." → "의료 마케팅에서는 가격 경쟁이 아닌...", "그룹 단위로 확보" → "안정적으로 확보" |
| `src/components/forms/InquiryDialog.tsx` | placeholder "OOO 메디컬 그룹 / 마케팅 총괄" → "OOO / 마케팅 담당" |
| `src/components/layout/Footer.tsx` | 회사 설명 "엔터프라이즈 의료 그룹을 위한 글로벌 환자 유치 솔루션 파트너" → "글로벌 의료 마케팅 파트너" |
| `src/data/blogPosts.ts` | 두 글의 title/excerpt/카테고리/태그/본문에서 "엔터프라이즈 의료 그룹" 전수 제거. category "엔터프라이즈 인사이트" → "마케팅 인사이트", tag "엔터프라이즈 의료" → "글로벌 의료 마케팅". 본문은 "병원" / "병원이라면" / "의사결정자" 등 직접 호칭으로 재작성 |

### 잔존 검증

- `grep "엔터프라이즈\|의료 그룹\|메디컬 그룹\|의료 네트워크" src/` 결과 0건 확인.

### 톤 원칙 보강

- 타겟은 대형 병원·법인 의료기관이지만, **외부 노출 카피에는 "엔터프라이즈"·"의료 그룹"을 키워드로 쓰지 않는다**.
- 대체 표현: "글로벌 의료 마케팅", "병원", "의사결정자", "고객사" 등 중립·전문 어휘 사용.
