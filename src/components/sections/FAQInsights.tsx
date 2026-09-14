"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Plus, ChevronRight, Newspaper } from "lucide-react"
import { Container } from "@/components/common/Container"
import { getAllBlogPosts } from "@/data/blogPosts"
import { cn } from "@/lib/utils"

const FAQ_ITEMS = [
  {
    question: "어떤 규모/진료과의 병원과 함께하나요?",
    answer:
      "피부과·성형외과·치과·한의원 등 진료과와 무관하게, 일본 인바운드 환자 유치에 관심 있는 병원과 함께합니다. 규모보다는 대표 진료의 경쟁력과 실행 의지를 우선적으로 봅니다.",
  },
  {
    question: "계약 기간은 어떻게 되나요?",
    answer:
      "월 정기 운영 플랜은 최소 3개월 계약을 기준으로 합니다. 채널 성과가 쌓이기까지 일정 기간이 필요하기 때문이며, 이후에는 성과를 보고 계속 여부를 결정하실 수 있습니다.",
  },
  {
    question: "성과는 보통 언제부터 나타나나요?",
    answer:
      "채널·상품에 따라 다르지만, 콘텐츠·채널 세팅 이후 통상 3개월차부터 문의 유입이 발생하기 시작합니다. 매출 전환까지는 상담·예약 프로세스 정비 여부에 따라 차이가 있어, 초기 진단 단계에서 함께 점검합니다.",
  },
  {
    question: "우리 병원에 맞는 전략인지 어떻게 알 수 있나요?",
    answer:
      "도입 상담 시 대표 진료, 현재 디지털 자산, 목표 예산을 함께 진단합니다. 필요하다면 「우리 병원 일본 진출 가능성 진단 리포트」로 먼저 자가진단해보실 수도 있습니다.",
  },
  {
    question: "다른 마케팅 대행사와 무엇이 다른가요?",
    answer:
      "중간 에이전시 없이 일본 현지 인플루언서·언론과 직접 계약하고 운영합니다. 서울대 경영 출신 컨설턴트가 데이터 기반으로 전략을 설계하고, 상담·예약 인프라까지 함께 점검합니다.",
  },
]

// /data 리포트 페이지의 실제 메타 정보
const featuredReport = {
  id: "featured-report",
  href: "/data",
  category: "마케팅 리포트",
  title: "일본인 고객 심층 분석",
  readTime: "10분",
  featuredImage: "/images/blog/customer-journey-report-cover.png",
}

export function FAQInsights() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const posts = getAllBlogPosts()
  const insightItems = [featuredReport, ...posts.slice(0, 2)]

  return (
    <section className="section-padding pb-32 lg:pb-40 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* 자주 묻는 질문 */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">자주 묻는 질문</h2>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={item.question}
                    className={cn(
                      "rounded-2xl border bg-white transition-colors",
                      isOpen ? "border-gray-300" : "border-gray-200"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-start gap-2 font-medium text-gray-900 text-sm">
                        <span className="text-gray-900 font-semibold">Q.</span>
                        <span style={{ wordBreak: "keep-all" }}>{item.question}</span>
                      </span>
                      <Plus
                        className={cn(
                          "h-5 w-5 shrink-0 text-gray-700 transition-transform duration-200",
                          isOpen && "rotate-45"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p
                            className="px-5 pb-5 text-gray-600 text-sm leading-relaxed"
                            style={{ wordBreak: "keep-all" }}
                          >
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 인사이트 */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">해외마케팅 필수지식</h2>
              <Link
                href="/blog"
                className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-[#C1452D] transition-colors"
              >
                더보기
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {insightItems.map((item) => {
                const href = "slug" in item ? `/blog/${item.slug}` : item.href
                return (
                  <Link
                    key={item.id}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 bg-white hover:shadow-sm transition-shadow group"
                  >
                    <div className="relative w-32 sm:w-40 aspect-video shrink-0 rounded-xl overflow-hidden">
                      {item.featuredImage ? (
                        <Image
                          src={item.featuredImage}
                          alt=""
                          fill
                          className="object-contain"
                          sizes="(min-width: 640px) 160px, 128px"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ background: "#FBEEE8" }}
                        >
                          <Newspaper className="h-6 w-6 text-[#C1452D]/60" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-500 mb-1">{item.category}</p>
                      <h3
                        className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-[#C1452D] transition-colors"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">{item.readTime} 읽기</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
