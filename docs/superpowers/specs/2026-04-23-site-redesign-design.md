# 사이트 전체 개편 디자인 스펙

**날짜**: 2026-04-23  
**참고 사이트**: https://seumbiz.com/  
**대상**: 홈페이지, 회사소개, 마케팅 칼럼, 설문데이터 (4개 페이지 전체)  
**작업 브랜치**: `redesign` (master에서 분기 → 완료 후 merge)

---

## 공통 디자인 시스템

| 항목 | 값 |
|---|---|
| 강조색 (primary) | `#EF4444` (Tailwind `red-500`) |
| 배경 교차 | 흰색(`white`) / 연회색(`gray-50`) |
| 그라데이션 | **전면 제거** — 버튼, 텍스트, 배경 모두 |
| 버튼 스타일 | solid 단색만 사용 |
| 기존 blue-500(`#3b82f6`) | 모두 red-500(`#EF4444`)으로 교체 |

---

## 1. 홈페이지 (`src/app/page.tsx`)

### 섹션 구성 (seumbiz.com 구조 기반)

#### 유지
- **Hero**: 현재 배경이미지 + 어두운 오버레이 + 중앙 헤드라인 구조 유지. 버튼 `variant="gradient"` → solid 변경.

#### 신규/재구성
- **차별성 3카드** (`Differentiators`): seumbiz의 "특별합니다" 섹션과 동일한 구조. 흰 배경, 3컬럼 카드 그리드, 각 카드에 아이콘 + 제목 + 설명. 현재 Differentiators 컴포넌트 레이아웃 재구성.
- **서비스 세로 리스트** (`Service`): seumbiz의 "가치를 제공합니다" 섹션. 연회색 배경, 서비스 항목들을 번호/구분선과 함께 세로 나열. 각 항목: 제목 + 짧은 설명.
- **후기 이미지 그리드** (`SocialProof`): 현재 Swiper 캐로셀 → 정적 2~3컬럼 이미지 그리드. 이미지는 기존 testimonial 이미지 재활용, 각 이미지 아래 캡션 유지.

#### 제거
- `TeamIntroduction`
- `InfluencerDM`
- `FinalCTA`

### 섹션 순서
```
Hero → 차별성 3카드 → 서비스 세로 리스트 → 후기 이미지 그리드 → Footer
```

---

## 2. 회사소개 (`src/app/about/page.tsx`)

- 페이지 상단 텍스트 헤더: 현재 구조 유지
- CEO 프로필 아바타 컨테이너: `bg-gradient-to-br from-blue-400 to-purple-500` → `bg-gray-100`
- 버튼: `variant="gradient"` → solid (`bg-red-500 text-white`)

---

## 3. 마케팅 칼럼 (`src/app/blog/page.tsx`)

- 현재 카드 그리드 구조 유지
- `text-primary` / `ring-primary` 등 primary 색상 참조는 CSS 변수 통해 red-500으로 자동 반영
- 뉴스레터 구독 섹션: `bg-primary` 버튼 색상 red-500 통일

---

## 4. 설문데이터 (`src/app/data/page.tsx`)

현재 파란 계열 스타일 전체를 red-500으로 교체. 인라인 style 태그 내 색상 변경.

| 요소 | 변경 전 | 변경 후 |
|---|---|---|
| 페이지 헤더 배경 | `linear-gradient(135deg, #3b82f6, #1d4ed8)` | `#EF4444` solid |
| 헤더 그림자 | `rgba(59,130,246,0.3)` | `rgba(239,68,68,0.3)` |
| 통계 카드 border-top | `#3b82f6` | `#EF4444` |
| 통계 숫자 색상 | `color: #3b82f6` | `color: #EF4444` |
| 여정 단계 border/badge | `#3b82f6` | `#EF4444` |
| 인사이트 박스 border-left | `#3b82f6` | `#EF4444` |
| highlight span | `background: #3b82f6` | `background: #EF4444` |
| meta-info border-left | `#3b82f6` | `#EF4444` |
| persona-title 배경 | `#3b82f6` | `#EF4444` |
| tier-table 헤더 | `background: #3b82f6` | `background: #EF4444` |
| 결론 섹션 배경 | `linear-gradient(135deg, #3b82f6, #1d4ed8)` | `background: #1f2937` (gray-800 solid) |
| `strong` 태그 색상 | `color: #3b82f6` | `color: #EF4444` |
| 여정 단계 `::before` badge | `background: #3b82f6` | `background: #EF4444` |
| journey-stage border | `border: 2px solid #3b82f6` | `border: 2px solid #EF4444` |
| insight-box border-left | `border-left: 5px solid #3b82f6` | `border-left: 5px solid #EF4444` |
| key-point border-left | `border-left: 5px solid #3b82f6` | `border-left: 5px solid #EF4444` |
| persona-card border | `border: 2px solid #3b82f6` | `border: 2px solid #EF4444` |
| 배경 연파랑 (`#f0f9ff`, `#f0f4ff`) | 연파랑 | `#fef2f2` (연빨강) |

---

## 작업 브랜치 전략

1. `master`에서 `redesign` 브랜치 생성
2. `redesign`에서 전체 작업
3. 완료 후 `master`로 merge
4. push는 사용자가 직접 진행
