import type { Metadata } from "next"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"
import { ClientProviders } from "@/components/providers/ClientProviders"
import { GAProvider } from "@/components/providers/GAProvider"
import { GA_ID } from "@/lib/gtag"

export const metadata: Metadata = {
  title: "클리닉브릿지 - 일본 대상 병원 마케팅 전문",
  description: "일본 대상 마케팅만으로 광고비의 10배를 더 벌어준 병원 전문 마케팅 회사. 서울대 출신 마케터가 업계 최저 단가로 진행합니다.",
  keywords: "병원 마케팅, 일본 마케팅, 인플루언서 마케팅, 해외 환자 유치, 클리닉브릿지",
  authors: [{ name: "클리닉브릿지" }],
  creator: "클리닉브릿지",
  publisher: "클리닉브릿지",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clinicbridge.co.kr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "클리닉브릿지 - 일본 병원 마케팅 전문",
    description: "일본 대상 마케팅만으로 광고비의 10배를 더 벌어준 병원 전문 마케팅 회사",
    url: "https://clinicbridge.co.kr",
    siteName: "클리닉브릿지",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "클리닉브릿지 - 일본 병원 마케팅 전문",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "클리닉브릿지 - 일본 병원 마케팅 전문",
    description: "일본 대상 마케팅만으로 광고비의 10배를 더 벌어준 병원 전문 마케팅 회사",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
        <ClientProviders>
          <Suspense fallback={null}>
            <GAProvider />
          </Suspense>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
