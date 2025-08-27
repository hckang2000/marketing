"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { getAllBlogPosts } from "@/data/blogPosts"

const blogPosts = getAllBlogPosts()

export default function BlogPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "블로그 구독자",
          phone: "없음",
          email: email,
          message: "블로그 이메일 구독 신청",
          hp: "" // honeypot
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setEmail("")
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 3000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Email subscription error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              마케팅 칼럼
            </h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              병원 마케팅에 대한 생각을 공유합니다
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

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="max-w-2xl mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  마케팅 정보 받아보기
                </CardTitle>
                <p className="text-base text-gray-600">
                  매달 새로운 칼럼을 보내드립니다.
                </p>
              </CardHeader>
                             <CardContent>
                 <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                   <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="이메일 주소"
                     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                     required
                   />
                   <button 
                     type="submit"
                     disabled={isSubmitting}
                     className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? "구독 중..." : "구독하기"}
                   </button>
                 </form>
                 
                 {/* Status Messages */}
                 {submitStatus === "success" && (
                   <p className="text-sm text-green-600 text-center mt-3">
                     구독이 완료되었습니다!
                   </p>
                 )}
                 {submitStatus === "error" && (
                   <p className="text-sm text-red-600 text-center mt-3">
                     구독 중 오류가 발생했습니다. 다시 시도해주세요.
                   </p>
                 )}
               </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
