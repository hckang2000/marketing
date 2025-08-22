"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"

const blogPosts = [
  {
    id: 1,
    title: "일본 인플루언서 마케팅의 핵심 전략",
    excerpt: "일본 고객을 유치하기 위한 인플루언서 마케팅의 핵심 전략과 실제 성공 사례를 소개합니다.",
    date: "2024-01-15",
    readTime: "5분",
    category: "마케팅 전략",
    slug: "japan-influencer-marketing-strategy",
  },
  {
    id: 2,
    title: "병원 해외 마케팅 성공 사례 분석",
    excerpt: "실제 병원들의 해외 마케팅 성공 사례를 분석하고 핵심 성공 요인을 알아봅니다.",
    date: "2024-01-10",
    readTime: "7분",
    category: "성공 사례",
    slug: "hospital-overseas-marketing-success",
  },
  {
    id: 3,
    title: "일본 고객의 의사결정 패턴 이해하기",
    excerpt: "일본 고객들이 병원을 선택할 때 어떤 요소들을 중시하는지 분석해봅니다.",
    date: "2024-01-05",
    readTime: "6분",
    category: "고객 분석",
    slug: "japanese-customer-decision-pattern",
  },
  {
    id: 4,
    title: "효과적인 SNS 마케팅 전략",
    excerpt: "병원 SNS 마케팅에서 성과를 높이는 실전 전략들을 공유합니다.",
    date: "2024-01-01",
    readTime: "8분",
    category: "SNS 마케팅",
    slug: "effective-sns-marketing-strategy",
  },
  {
    id: 5,
    title: "해외 환자 유치를 위한 콘텐츠 전략",
    excerpt: "일본 고객을 유치하기 위한 효과적인 콘텐츠 마케팅 전략을 소개합니다.",
    date: "2023-12-25",
    readTime: "6분",
    category: "콘텐츠 마케팅",
    slug: "overseas-patient-content-strategy",
  },
  {
    id: 6,
    title: "병원 브랜딩의 중요성과 전략",
    excerpt: "해외 시장에서 성공하기 위한 병원 브랜딩 전략과 실제 적용 사례를 다룹니다.",
    date: "2023-12-20",
    readTime: "9분",
    category: "브랜딩",
    slug: "hospital-branding-importance",
  },
]

export default function BlogPage() {
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
              블로그
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              병원 마케팅에 대한 전문적인 인사이트와 최신 트렌드를 공유합니다
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-2xl flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {post.title} 썸네일
                      </span>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-primary font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('ko-KR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="max-w-2xl mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  최신 마케팅 인사이트 받아보기
                </CardTitle>
                <p className="text-gray-600">
                  병원 마케팅에 대한 전문적인 내용을 이메일로 받아보세요
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="이메일 주소"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    구독하기
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
