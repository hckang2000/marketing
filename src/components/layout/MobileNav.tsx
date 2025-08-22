"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/common/Button"

interface NavigationItem {
  name: string
  href: string
}

interface MobileNavProps {
  open: boolean
  onClose: () => void
  navigation: NavigationItem[]
  onContactClick: () => void
}

export function MobileNav({ open, onClose, navigation, onContactClick }: MobileNavProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">메뉴</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="block text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="p-6 border-t">
            <Button
              onClick={() => {
                onContactClick()
                onClose()
              }}
              variant="gradient"
              className="w-full"
            >
              1분 문의하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
