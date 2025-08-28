"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { Button } from "@/components/common/Button"

const pricingPlans = [
  {
    id: 1,
    title: "라이트 300만",
    description: "",
    details: [
      "인플루언서 협찬 (방문형/기자단형)",
      "일본 구글 검색결과 상위노출"
    ]
  },
  {
    id: 2,
    title: "매출안심 500만",
    description: "목표 매출 미달시 환불",
    details: [
      "인플루언서 협찬 (방문형/기자단형)",
      "일본 구글 검색결과 상위노출",
      "기본 통번역 서비스 및 콘텐츠 번역",
      "LINE 공식계정 개설 및 관리 운영",
      "팔로워수 증대 및 SNS 활성화"
    ]
  },
  {
    id: 3,
    title: "매출안심 플러스 1,000만",
    description: "목표 매출 미달시 환불",
    details: [
      "인플루언서 협찬 (방문형/기자단형)",
      "일본 구글 검색결과 상위노출",
      "데이터 분석 및 퍼널 개선",
      "구글, 메타 해외 마케팅 (광고비 별도)",
      "기본 통번역 서비스 및 콘텐츠 번역",
      "LINE 공식계정 개설 및 관리 운영",
      "팔로워수 증대 및 SNS 활성화"
    ]
  }
]

export function Differentiators() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Title - Mobile */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:hidden">
            마케팅 가격
          </h2>
          
          {/* Title - Desktop */}
          <h2 className="hidden lg:block text-3xl font-bold text-gray-900 mb-4">
            마케팅 가격
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {pricingPlans.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </CardTitle>
                        {item.description && (
                          <p className="text-gray-600 mt-1">
                            <span className="text-red-600 font-bold">{item.description}</span>
                          </p>
                        )}
                      </div>
                    </div>
                                         <div className="text-gray-400">
                       {openItem === item.id ? (
                         <Minus className="h-6 w-6 text-primary" />
                       ) : (
                         <Plus className="h-6 w-6 text-primary" />
                       )}
                     </div>
                  </div>
                </CardHeader>

                {openItem === item.id && (
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">패키지 구성</h4>
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>


                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}
