"use client"

import Link from "next/link"

interface CategorySidebarProps {
  categories: string[]
  activeCategory: string
  onSelect?: (category: string) => void
}

function categoryHref(category: string) {
  return category === "전체" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`
}

export function CategorySidebar({ categories, activeCategory, onSelect }: CategorySidebarProps) {
  return (
    <aside className="lg:w-48 shrink-0">
      <h2 className="font-bold text-gray-900 mb-4">카테고리</h2>
      <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
        {categories.map((category) => {
          const isActive = category === activeCategory
          const className = `text-left whitespace-nowrap px-3 py-2 rounded-lg text-sm transition-colors ${
            isActive
              ? "bg-[#FBEEE8] text-[#C1452D] font-semibold"
              : "text-gray-600 hover:bg-gray-50"
          }`

          if (onSelect) {
            return (
              <button key={category} type="button" onClick={() => onSelect(category)} className={className}>
                {category}
              </button>
            )
          }

          return (
            <Link key={category} href={categoryHref(category)} className={className}>
              {category}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
