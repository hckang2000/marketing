"use client"

import { use } from "react"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts"

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
          return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6">{renderInlineMarkdown(line.substring(2))}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8">{renderInlineMarkdown(line.substring(3))}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-3xl font-bold text-gray-900 mb-3 mt-6">{renderInlineMarkdown(line.substring(4))}</h3>
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="text-base text-gray-700 mb-2 ml-4">{renderInlineMarkdown(line.substring(2))}</li>
        }
        if (line.trim() === '') {
          return <br key={index} />
        }
        if (line.trim()) {
          return <p key={index} className="text-base text-gray-700 mb-4 leading-relaxed">{renderInlineMarkdown(line)}</p>
        }
        return null
      })
  }

  // 인라인 마크다운 (볼드체, 밑줄) 렌더링 함수
  const renderInlineMarkdown = (text: string) => {
    // **볼드체** 처리
    const boldRegex = /\*\*(.*?)\*\*/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = boldRegex.exec(text)) !== null) {
      // 매치 이전 텍스트 추가
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }
      // 볼드체 텍스트 추가
      parts.push(<strong key={`bold-${match.index}`} className="font-bold">{match[1]}</strong>)
      lastIndex = match.index + match[0].length
    }

    // 남은 텍스트 추가
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.length > 0 ? parts : text
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
              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
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

                     {/* Previous/Next Posts */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
           >
             <div className="max-w-4xl mx-auto">
               <div className="flex justify-between items-center">
                 {/* Previous Post */}
                 {post.id > 1 && (
                   <Link
                     href={`/blog/${blogPosts.find((p: any) => p.id === post.id - 1)?.slug}`}
                     className="flex items-center text-primary hover:text-primary/80 transition-colors group"
                   >
                     <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                     <div className="text-left">
                       <p className="text-sm text-gray-500">이전 글</p>
                       <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                         {blogPosts.find((p: any) => p.id === post.id - 1)?.title}
                       </p>
                     </div>
                   </Link>
                 )}
                 
                 {/* Next Post */}
                 {post.id < blogPosts.length && (
                   <Link
                     href={`/blog/${blogPosts.find((p: any) => p.id === post.id + 1)?.slug}`}
                     className="flex items-center text-primary hover:text-primary/80 transition-colors group ml-auto"
                   >
                     <div className="text-right">
                       <p className="text-sm text-gray-500">다음 글</p>
                       <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                         {blogPosts.find((p: any) => p.id === post.id + 1)?.title}
                       </p>
                     </div>
                     <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                   </Link>
                 )}
               </div>
             </div>
           </motion.div>
        </div>
      </Container>
    </div>
  )
}
