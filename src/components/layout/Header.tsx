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
  { name: "서비스", href: "/#services" },
  { name: "소개", href: "/about" },
  { name: "칼럼", href: "/blog" },
  { name: "데이터", href: "/data" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openContact } = useContact()

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
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

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
        onContactClick={openContact}
      />
    </header>
  )
}
