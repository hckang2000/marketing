# 2026-08-14 작업 기록

## Google Ads 전환 추적 연결 (CTA 클릭 → 전환)

### 배경
Google 검색광고 전환 설정을 위해 CTA 버튼 클릭을 전환으로 잡아야 함.
전환 ID: `AW-18389277474`.

### 사전 영향분석
- `src/lib/gtag.ts`에 전환 인프라(`trackConversion`, `GOOGLE_ADS_ID` 기본값)는 이미 존재.
- 문제 1: `src/app/layout.tsx`가 `GA_ID`(GA4)가 있을 때만 gtag.js를 로드 → `.env` 부재로 **어떤 태그도 안 실림**, 광고 ID는 config조차 안 함.
- 문제 2: CTA 버튼들이 `trackButtonClick`(GA4)만 호출, `trackConversion`은 미연결.
- 모든 CTA(Header, FinalCTA, Hero, Footer, MobileNav, ContentGate)가 `ContactProvider.openContact()` 단일 지점으로 수렴함을 확인.

### 변경 내용
- `src/app/layout.tsx`: 로드 조건을 `GA_ID || GOOGLE_ADS_ID`로 확장, init 스크립트에서 존재하는 ID를 각각 `config`. 광고 ID 기본값이 있어 이제 항상 로드됨.
- `src/components/providers/ContactProvider.tsx`: `openContact()`에서 `trackConversion()` 발사. DRY·고응집 위해 6개 CTA에 흩뿌리지 않고 단일 수렴점에 배치. Hero/Footer/ContentGate(기존 추적 없던 CTA)까지 자동 커버.
- `.env.example`: GA_ID / GOOGLE_ADS_ID / GOOGLE_ADS_CONVERSION_LABEL 문서화.

### 사후 영향분석
- `bunx tsc --noEmit` → 에러 0.
- 렌더된 HTML에 `gtag/js?id=AW-18389277474` + `config','AW-18389277474'` 확인.
- 기존 GA4 `trackButtonClick`(location 포함)은 그대로 유지 → 중복/충돌 없음.

### 남은 작업 (사용자 액션 필요)
- Google Ads > 도구 > 전환에서 전환 액션 생성 후 **전환 라벨** 발급.
- `.env.local`에 `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=<라벨>` 설정.
- 라벨 미설정 시 `trackConversion()`은 안전하게 no-op(개발 중 콘솔 경고) — 전환 미기록.

---

## 상담 신청 완료 페이지 + 전환 시점 재설계

### 배경
상담 폼 제출 후 리다이렉트될 완료(Thank-you) URL 페이지 요청. 겸사겸사 Google Ads
전환 신호를 "모달 열기" → "폼 제출 성공"으로 정밀화(진짜 리드 기준).

### 사전 영향분석
- `inquiry-success` 이벤트가 `ContentGate.tsx`에서 블로그 콘텐츠 잠금 해제에 사용됨.
  → 무조건 리다이렉트하면 게이트 제출자가 읽던 글에서 튕겨나가는 UX 붕괴 발생.
- 따라서 제출 경로를 2가지(intent)로 구분해야 함.
- 전역 레이아웃(Header/Footer/InquiryDialog)은 `ClientProviders`에 있어 신규 페이지는
  콘텐츠만 반환하면 자동 래핑됨.
- `docs/design/` 폴더 부재 → 기존 페이지(privacy 등) 패턴을 준수.

### 변경 내용
- `src/components/providers/ContactProvider.tsx`: `intent: "inquiry" | "unlock"` 추가.
  `openContact(intent?)`로 맥락 전달. onClick 직접 바인딩 시 MouseEvent 유입 대비 방어적 폴백.
  **전환 발사를 여기서 제거**(제출 시점으로 이동).
- `src/components/forms/InquiryDialog.tsx`: 제출 성공 시 `trackConversion()` 발사(모든 리드),
  `inquiry-success` 항상 디스패치(게이트 해제 유지). intent 분기 —
  `unlock`: 현재 페이지 유지(토스트+모달 닫기), `inquiry`: `/inquiry/complete`로 `router.push`.
- `src/app/inquiry/complete/page.tsx`: 신규 완료 페이지. noindex(허수 전환 방지), 브랜드 블루
  체크 아이콘, 홈/블로그 CTA. 전환은 제출 시점에서 이미 발사되므로 순수 확인 UI.
- `src/components/columns/ContentGate.tsx`: `openContact("unlock")`로 변경.
- `src/components/layout/Footer.tsx`: `onClick={() => openContact()}`(이벤트 유입 방지).

### 전환 모델 변경 요지
- 이전: 모달 열기 = 전환(허수 많음, 미제출자 포함).
- 현재: **폼 제출 성공 = 전환**(일반+게이트 경로 모두 단일 지점에서 발사). 완료 페이지는 UI 전용.

### 사후 영향분석
- `bunx tsc --noEmit` → exit 0.
- `/inquiry/complete` dev 응답 HTTP 200, 완료 문구 렌더, `noindex, nofollow` 메타 확인.
- 실제 폼 제출 테스트는 `/api/contact`가 실 CRM/Slack에 리드를 발송하므로 미수행(허수 리드 방지).
- 라벨 미설정이라 전환은 여전히 no-op — 라벨 설정 시 즉시 동작.
