import Link from "next/link"
import type { ContentItem } from "@/data/blogPosts"

export function RelatedContent({ items }: { items: ContentItem[] }) {
  if (!items.length) return null

  return (
    <div>
      <h3 className="font-bold text-gray-900 mb-4">관련 콘텐츠</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block bg-white border border-gray-100 p-5 hover:border-[#C1452D]/40 transition-colors"
          >
            <span className="text-xs font-medium text-[#C1452D]">{item.category}</span>
            <p
              className="mt-1 font-semibold text-gray-900 text-sm leading-snug"
              style={{ wordBreak: "keep-all" }}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
