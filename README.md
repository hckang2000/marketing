# 클리닉브릿지 - 일본 대상 병원 마케팅 랜딩 사이트

일본 대상 마케팅만으로 광고비의 10배를 더 벌어준 병원 전문 마케팅 회사의 랜딩 사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Email Service**: Resend
- **Icons**: Lucide React

## 📁 프로젝트 구조

```
marketing/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts    # 문의 폼 API
│   │   ├── about/page.tsx          # 회사 소개
│   │   ├── blog/page.tsx           # 블로그 리스트
│   │   ├── case-studies/page.tsx   # 후기 목록
│   │   ├── privacy/page.tsx        # 개인정보처리방침
│   │   ├── terms/page.tsx          # 이용약관
│   │   ├── layout.tsx              # 루트 레이아웃
│   │   └── page.tsx                # 홈페이지
│   ├── components/
│   │   ├── common/                 # 공통 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── SectionTitle.tsx
│   │   ├── forms/
│   │   │   └── InquiryDialog.tsx   # 문의 다이얼로그
│   │   ├── layout/
│   │   │   ├── Header.tsx          # 헤더
│   │   │   ├── Footer.tsx          # 푸터
│   │   │   └── MobileNav.tsx       # 모바일 네비게이션
│   │   ├── providers/
│   │   │   └── ContactProvider.tsx # 문의 상태 관리
│   │   └── sections/               # 랜딩 페이지 섹션
│   │       ├── Hero.tsx
│   │       ├── SocialProof.tsx
│   │       ├── HighlightResult.tsx
│   │       ├── TestimonialQuote.tsx
│   │       ├── Differentiators.tsx
│   │       ├── Process.tsx
│   │       ├── PlatformsGrid.tsx
│   │       └── FinalCTA.tsx
│   └── lib/
│       ├── utils.ts                # 유틸리티 함수
│       └── validators.ts           # 폼 검증 스키마
├── public/                         # 정적 파일
├── tailwind.config.ts              # Tailwind 설정
├── next.config.ts                  # Next.js 설정
└── package.json
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# Resend 설정 (이메일 발송용)
RESEND_API_KEY=your_resend_api_key_here
TO_EMAIL=hckang2000@naver.com
FROM_EMAIL=no-reply@yourdomain.com

# Google Analytics (선택사항)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Meta Pixel (선택사항)
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📧 이메일 설정

### Resend 설정 (권장)

1. [Resend](https://resend.com)에서 계정 생성
2. API 키 발급
3. 도메인 인증 (선택사항)
4. 환경 변수에 API 키 설정

### Web3Forms 설정 (대안)

Resend 대신 Web3Forms를 사용하려면:

1. [Web3Forms](https://web3forms.com)에서 access_key 발급
2. `src/app/api/contact/route.ts`에서 Web3Forms 로직으로 변경

## 🎨 커스터마이징

### 이미지 교체

1. `public/` 폴더에 이미지 파일 추가
2. 컴포넌트에서 이미지 경로 수정
3. 플레이스홀더 이미지는 `/api/placeholder/` 경로 사용

### 텍스트 교체

각 컴포넌트 파일에서 텍스트를 직접 수정하세요:

- `src/components/sections/Hero.tsx` - 메인 헤드라인
- `src/components/sections/SocialProof.tsx` - 후기 내용
- `src/components/sections/TestimonialQuote.tsx` - 인용구
- 기타 섹션별 텍스트

### 색상 테마 변경

`tailwind.config.ts`에서 색상 변수를 수정하세요:

```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... 기타 색상
}
```

## 📱 반응형 디자인

- **Mobile**: 320px ~ 768px
- **Tablet**: 768px ~ 1024px
- **Desktop**: 1024px 이상

모든 컴포넌트는 모바일 우선으로 설계되었습니다.

## 🚀 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 환경 변수 설정
3. 자동 배포

### Cloudflare Pages 배포

1. [Cloudflare Pages](https://pages.cloudflare.com)에서 프로젝트 생성
2. 빌드 설정:
   - Build command: `npm run build`
   - Build output directory: `.next`
3. 환경 변수 설정

## 🧪 테스트

### 폼 테스트

```bash
# curl을 사용한 API 테스트
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "테스트",
    "phone": "010-1234-5678",
    "email": "test@example.com",
    "message": "테스트 문의입니다."
  }'
```

### 성능 테스트

```bash
# Lighthouse 테스트
npm run lighthouse

# 또는 브라우저 개발자 도구에서 Lighthouse 실행
```

## 📊 SEO 최적화

- 메타데이터 설정 완료
- Open Graph 태그 포함
- Twitter Card 지원
- 구조화된 데이터 준비
- 사이트맵 자동 생성

## 🔧 개발 가이드

### 새 컴포넌트 추가

1. `src/components/` 하위에 적절한 폴더 생성
2. TypeScript 인터페이스 정의
3. 컴포넌트 구현
4. 필요한 경우 스토리북 추가

### 새 페이지 추가

1. `src/app/` 하위에 폴더 생성
2. `page.tsx` 파일 생성
3. 메타데이터 설정
4. 레이아웃 적용

### API 엔드포인트 추가

1. `src/app/api/` 하위에 폴더 생성
2. `route.ts` 파일 생성
3. HTTP 메서드별 핸들러 구현

## 🐛 문제 해결

### 빌드 오류

```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 캐시 클리어
npm run clean
```

### 스타일 문제

```bash
# Tailwind CSS 재빌드
npm run build:css
```

### 이메일 발송 문제

1. Resend API 키 확인
2. 도메인 인증 상태 확인
3. 스팸 필터 설정 확인

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**클리닉브릿지** - 일본 대상 병원 마케팅 전문
