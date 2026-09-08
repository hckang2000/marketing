# 공동 디자인 규칙

## 브랜드 컬러 (2026-09-03 개편)

명함 디자인(테라코타 블록 + 화이트/블랙) 기준으로 사이트 전체 키컬러를 블루 → 테라코타로 교체.

| 토큰 | 값 | 용도 |
|------|-----|------|
| Primary | `#C1452D` | 기본 브랜드 컬러 (버튼, 아이콘, 강조 텍스트, 로고 dark variant) |
| Primary Bright | `#D65A3B` | 히어로처럼 어두운 배경 위 CTA 버튼 |
| Primary Bright Hover | `#B84A2E` | 위 버튼의 hover 상태 |
| Primary Dark (hover) | `#A23A24` | 기본 버튼 hover, 강조 텍스트 hover |
| Primary Tint | `#FBEEE8` | 옅은 배경 강조 (섹션 배경, 아이콘 원형 배경) |

- `globals.css`의 `--primary` / `--ring` CSS 변수(HSL `10 62% 47%`)로도 등록되어 있어 `bg-primary`, `text-primary` 등 Tailwind 유틸리티가 자동으로 새 컬러를 따른다.
- 로고(`Logo.tsx`)는 CSS 필터 대신 실제 컬러가 적용된 SVG 두 벌(`cb-logo.svg`=흰색, `cb-logo-terracotta.svg`=`#C1452D`)을 `variant`에 따라 교체한다.
- 새 브랜드 컬러를 쓰는 곳을 늘릴 때는 위 표의 토큰만 사용하고 임의의 새 블루/오렌지 값을 추가하지 않는다.
