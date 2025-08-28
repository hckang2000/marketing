"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Logo } from "@/components/common/Logo"
import { Button } from "@/components/common/Button"
import { Container } from "@/components/common/Container"
import { MobileNav } from "./MobileNav"
import { useContact } from "@/components/providers/ContactProvider"

const navigation = [
  { name: "회사 소개", href: "/about" },
  { name: "마케팅 칼럼", href: "/blog" },
  { name: "설문 데이터", href: "/data" },
]

interface HeaderProps {
  onMobileNavStateChange?: (open: boolean) => void
}

export function Header({ onMobileNavStateChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openContact } = useContact()

  // MobileNav 상태 변경 시 부모 컴포넌트에 알림
  const handleMobileMenuToggle = (open: boolean) => {
    setMobileMenuOpen(open)
    onMobileNavStateChange?.(open)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button onClick={openContact} variant="gradient" size="sm">
              10초 문의
            </Button>
          </div>

          {/* Mobile CTA Button and Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={openContact} variant="gradient" size="sm">
              문의
            </Button>
            <button
              type="button"
              className="p-2 text-gray-700"
              onClick={() => handleMobileMenuToggle(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => handleMobileMenuToggle(false)}
        navigation={navigation}
        onContactClick={openContact}
      />
    </header>
  )
}
