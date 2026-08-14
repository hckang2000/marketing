declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Google Ads 전환 추적 설정
// - GOOGLE_ADS_ID: 광고 계정의 전환 ID (페이지 소스에 노출되는 공개값이므로 기본값 내장, env로 오버라이드 가능)
// - GOOGLE_ADS_CONVERSION_LABEL: 특정 전환 액션의 라벨 (Google Ads > 도구 > 전환에서 발급).
//   라벨이 없으면 전환 이벤트는 발생하지 않는다 (send_to가 특정 전환 액션에 매핑되지 못하므로).
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18389277474';
export const GOOGLE_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

// gtag 사용 가능 여부 (GA4 / Google Ads 공통 스크립트 로드 확인)
const isGtagReady = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// GA가 사용 가능한지 확인하는 함수
const isGAEnabled = () => {
  return isGtagReady() && !!GA_ID;
};

// 페이지뷰 추적 함수
export const pageview = (url: string) => {
  if (!isGAEnabled()) return;
  
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

// 이벤트 추적 함수
export const event = (action: string, params: Record<string, unknown>) => {
  if (!isGAEnabled()) return;
  
  window.gtag('event', action, params);
};

// 버튼 클릭 이벤트 추적 함수
export const trackButtonClick = (buttonName: string, location: string) => {
  event('button_click', {
    button_name: buttonName,
    location: location,
    event_category: 'engagement',
    event_label: `${location}_${buttonName}`,
  });
};

// Google Ads 전환 추적 함수
// 메인 CTA(상담 신청) 클릭 시 호출하여 광고 전환을 기록한다.
// 전환 라벨이 설정되지 않았으면 안전하게 무시한다 (개발 중에는 콘솔 경고).
export const trackConversion = () => {
  if (!isGtagReady() || !GOOGLE_ADS_ID) return;

  if (!GOOGLE_ADS_CONVERSION_LABEL) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[gtag] NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL 미설정 — 전환 이벤트를 건너뜁니다.'
      );
    }
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
  });
};
