"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { getAllBlogPosts } from "@/data/blogPosts"

const blogPosts = getAllBlogPosts()

// /data 리포트 페이지의 실제 메타 정보
const featuredReport = {
  href: "/data",
  image: "/images/hero-data.png",
  category: "마케팅 리포트",
  title: "일본인 고객 심층 분석",
  subtitle: "일본 글로벌 환자 유치 전략을 위한 5단계 고객 여정 데이터",
  publishedAt: "2025년 8월 25일",
  method: "설문조사 데이터 분석",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="py-16">

          {/* Featured Report */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">마케팅 리포트</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href={featuredReport.href}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ring-2 ring-primary/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="relative h-48 sm:h-full min-h-[200px]">
                      <Image
                        src={featuredReport.image}
                        alt={featuredReport.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <span className="text-sm text-primary font-medium mb-2">
                        {featuredReport.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {featuredReport.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4" style={{ wordBreak: "keep-all" }}>
                        {featuredReport.subtitle}
                      </p>
                      <div className="text-xs text-gray-500">
                        발간일 {featuredReport.publishedAt} · {featuredReport.method}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>

          {/* Blog Posts Flex */}
          <div className="flex flex-wrap justify-center gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] max-w-md"
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className={`h-full hover:shadow-lg transition-shadow cursor-pointer ${post.isReport ? 'ring-2 ring-primary/20' : ''}`}>
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
        </div>
      </Container>
    </div>
  )
}
