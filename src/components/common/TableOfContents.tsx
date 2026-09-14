interface TocItem {
  id: string
  label: string
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null

  return (
    <nav className="bg-gray-50 p-5 mb-10">
      <p className="font-semibold text-gray-900 text-sm mb-3">목차</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-gray-600 hover:text-[#C1452D] transition-colors"
              style={{ wordBreak: "keep-all" }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
