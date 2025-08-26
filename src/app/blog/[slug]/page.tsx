"use client"

import { use } from "react"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"
import { getBlogPostBySlug } from "@/data/blogPosts"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params)
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Markdown 콘텐츠를 HTML로 변환하는 간단한 함수
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6">{line.substring(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{line.substring(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-6">{line.substring(4)}</h3>
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="text-gray-700 mb-2 ml-4">{line.substring(2)}</li>
        }
        if (line.trim() === '') {
          return <br key={index} />
        }
        if (line.trim()) {
          return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{line}</p>
        }
        return null
      })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="py-16">
          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              블로그로 돌아가기
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto">
              {/* Category and Read Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author */}
              {post.author && (
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">작성자</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  {renderContent(post.content)}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">태그</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">관련 글</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 여기에 관련 글들을 표시할 수 있습니다 */}
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 mb-2">다음 글 준비 중...</p>
                    <h4 className="font-semibold text-gray-900">더 많은 마케팅 인사이트</h4>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
