"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { Button } from "@/components/common/Button"

const categories = [
  { id: "all", name: "전체" },
  { id: "dermatology", name: "피부과" },
  { id: "plastic", name: "성형외과" },
  { id: "dental", name: "치과" },
]

const caseStudies = [
  {
    id: 1,
    title: "홍대 OOO의원",
    category: "dermatology",
    thumbnail: "/api/placeholder/400/300",
    result: "월 매출 2억 → 4.5억 (6개월)",
    description: "일본 인플루언서 협찬 마케팅으로 성공적인 매출 증대를 달성했습니다.",
  },
  {
    id: 2,
    title: "강남 XXX의원",
    category: "plastic",
    thumbnail: "/api/placeholder/400/300",
    result: "예약 증가 300%",
    description: "체계적인 마케팅 전략으로 일본 환자 예약이 크게 증가했습니다.",
  },
  {
    id: 3,
    title: "서초 YYY의원",
    category: "dental",
    thumbnail: "/api/placeholder/400/300",
    result: "광고비 대비 15배 수익",
    description: "효율적인 마케팅으로 높은 투자 대비 수익률을 달성했습니다.",
  },
  {
    id: 4,
    title: "마포 ZZZ의원",
    category: "dermatology",
    thumbnail: "/api/placeholder/400/300",
    result: "신규 환자 200% 증가",
    description: "일본 고객 유치에 성공하여 신규 환자가 크게 증가했습니다.",
  },
  {
    id: 5,
    title: "송파 AAA의원",
    category: "plastic",
    thumbnail: "/api/placeholder/400/300",
    result: "월 매출 1.5억 → 3.2억",
    description: "전문적인 마케팅 서비스로 안정적인 매출 증대를 이룩했습니다.",
  },
  {
    id: 6,
    title: "종로 BBB의원",
    category: "dental",
    thumbnail: "/api/placeholder/400/300",
    result: "ROAS 1200% 달성",
    description: "높은 광고 투자 대비 수익률을 달성하여 성공적인 마케팅을 완료했습니다.",
  },
]

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCaseStudies = selectedCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              실제 사례
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              클리닉브릿지와 함께한 원장님들의 실제 성과 사례를 확인해보세요
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-2xl flex items-center justify-center">
                    <span className="text-gray-600 font-medium">
                      {study.title} 썸네일
                    </span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium">
                        {categories.find(c => c.id === study.category)?.name}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-lg font-bold text-primary mb-2">
                        {study.result}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {study.description}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      자세히 보기
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                해당 카테고리의 사례가 없습니다.
              </p>
            </motion.div>
          )}
        </div>
      </Container>
    </div>
  )
}
