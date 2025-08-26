import { BlogPost } from "./blogPosts"

// 새로운 블로그 포스트를 작성할 때 이 템플릿을 사용하세요
export const blogPostTemplate: Omit<BlogPost, 'id'> = {
  title: "새로운 블로그 포스트 제목",
  excerpt: "포스트의 간단한 요약을 여기에 작성하세요. 2-3문장으로 핵심 내용을 설명합니다.",
  content: `
# 새로운 블로그 포스트 제목

## 개요

포스트의 개요나 소개를 여기에 작성하세요.

## 주요 내용

### 1. 첫 번째 섹션
첫 번째 주요 내용을 여기에 작성하세요.

### 2. 두 번째 섹션
두 번째 주요 내용을 여기에 작성하세요.

- 첫 번째 포인트
- 두 번째 포인트
- 세 번째 포인트

## 결론

포스트의 결론을 여기에 작성하세요.
  `,
  date: "2025-01-01", // YYYY-MM-DD 형식으로 작성
  readTime: "5분", // 예상 읽기 시간
  category: "카테고리명", // 예: "마케팅 분석", "디지털 마케팅", "고객 경험" 등
  slug: "new-blog-post-slug", // URL에 사용될 슬러그 (영문, 하이픈 사용)
  isReport: false, // 보고서인 경우 true, 일반 포스트인 경우 false
  author: "작성자명", // 선택사항
  tags: ["태그1", "태그2", "태그3"], // 선택사항
  featuredImage: "/images/blog/featured-image.jpg" // 선택사항
}

// 새로운 포스트를 추가하는 방법:
// 1. 이 템플릿을 복사하여 blogPosts.ts 파일에 추가
// 2. 고유한 id 부여 (기존 포스트들의 id + 1)
// 3. 제목, 내용, 카테고리 등을 수정
// 4. slug는 고유해야 하며 URL 친화적으로 작성
// 5. date는 실제 발행일로 설정

/*
예시:
{
  id: 2, // 기존 포스트가 1개라면 2로 설정
  title: "병원 마케팅에서 소셜미디어 활용 전략",
  excerpt: "소셜미디어를 활용한 효과적인 병원 마케팅 전략과 실제 성공 사례를 소개합니다.",
  content: `# 병원 마케팅에서 소셜미디어 활용 전략...`,
  date: "2025-01-15",
  readTime: "8분",
  category: "디지털 마케팅",
  slug: "hospital-social-media-marketing-strategy",
  isReport: false,
  author: "마케팅팀",
  tags: ["소셜미디어", "병원마케팅", "디지털마케팅"],
  featuredImage: "/images/blog/social-media-marketing.jpg"
}
*/
