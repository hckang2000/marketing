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
