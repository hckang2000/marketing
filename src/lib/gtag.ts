declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// GA가 사용 가능한지 확인하는 함수
const isGAEnabled = () => {
  return typeof window !== 'undefined' && GA_ID && window.gtag;
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
