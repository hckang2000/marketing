"use client"

import { use, type ReactNode } from "react"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { Container } from "@/components/common/Container"
import { ArticleHeader } from "@/components/common/ArticleHeader"
import { TableOfContents } from "@/components/common/TableOfContents"
import { ArticleCta } from "@/components/common/ArticleCta"
import { CategorySidebar } from "@/components/common/CategorySidebar"
import { RelatedContent } from "@/components/common/RelatedContent"
import { getBlogPostBySlug, getBlogCategories, getRelatedContent } from "@/data/blogPosts"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

function slugify(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\*\*/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "")
}

function extractHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const label = line.substring(3).replace(/\*\*/g, "").trim()
      return { id: slugify(label), label }
    })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params)
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const tocItems = extractHeadings(post.content)

  // 인라인 마크다운 (볼드체) 렌더링 함수
  const renderInlineMarkdown = (text: string) => {
    const boldRegex = /\*\*(.*?)\*\*/g
    const parts: (string | ReactNode)[] = []
    let lastIndex = 0
    let match

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }
      parts.push(
        <strong key={`bold-${match.index}`} className="font-bold text-gray-900">
          {match[1]}
        </strong>
      )
      lastIndex = match.index + match[0].length
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  // 마크다운 콘텐츠를 HTML로 변환하는 함수
  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return null
      }
      if (line.startsWith("## ")) {
        const label = line.substring(3).replace(/\*\*/g, "").trim()
        return (
          <h2
            key={index}
            id={slugify(label)}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-12 scroll-mt-24"
          >
            {renderInlineMarkdown(line.substring(3))}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-lg sm:text-xl font-bold text-gray-900 mb-3 mt-8">
            {renderInlineMarkdown(line.substring(4))}
          </h3>
        )
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-sm sm:text-base text-gray-700 mb-2 ml-4 leading-relaxed">
            {renderInlineMarkdown(line.substring(2))}
          </li>
        )
      }
      if (line.trim() === "") {
        return null
      }
      return (
        <p
          key={index}
          className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed"
          style={{ wordBreak: "keep-all" }}
        >
          {renderInlineMarkdown(line)}
        </p>
      )
    })
  }

  const categories = getBlogCategories()

  return (
    <div className="min-h-screen bg-gray-100">
      <Container>
        <div className="py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          <CategorySidebar categories={categories} activeCategory={post.category} />
          <div className="flex-1 lg:max-w-3xl">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-100 p-6 sm:p-10"
          >
            <ArticleHeader
              category={post.category}
              title={post.title}
              subtitle={post.excerpt}
              author={post.author}
              readTime={post.readTime}
              dateLabel={new Date(post.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              image={post.featuredImage}
            />

            <TableOfContents items={tocItems} />

            {/* 본문 */}
            <div className="prose-content">{renderContent(post.content)}</div>

            <ArticleCta />

            {/* 태그 */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-6 border-t border-gray-100">
                <p className="font-semibold text-gray-900 text-sm mb-3">태그</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* 관련 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <RelatedContent items={getRelatedContent(`/blog/${post.slug}`)} />
          </motion.div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  )
}
