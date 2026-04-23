"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Logo } from "@/components/common/Logo"
import { Button } from "@/components/common/Button"
import { Container } from "@/components/common/Container"
import { MobileNav } from "./MobileNav"
import { useContact } from "@/components/providers/ContactProvider"
import { trackButtonClick } from "@/lib/gtag"

const navigation = [
  { name: "처음으로", href: "/" },
  { name: "회사 소개", href: "/about" },
  { name: "마케팅 칼럼", href: "/blog" },
  { name: "설문 데이터", href: "/data" },
]

interface HeaderProps {
  onMobileNavStateChange?: (open: boolean) => void
}

const SCROLL_THRESHOLD = 500

export function Header({ onMobileNavStateChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openContact } = useContact()
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  const isTransparent = isHome && !isScrolled

  const handleContactClick = () => {
    trackButtonClick("contact", "header")
    openContact()
  }

  const handleMobileMenuToggle = (open: boolean) => {
    setMobileMenuOpen(open)
    onMobileNavStateChange?.(open)
  }

  const headerClass = isTransparent
    ? "bg-transparent backdrop-blur-sm border-b border-white/15"
    : "bg-white/95 backdrop-blur-sm border-b border-gray-200"

  const navLinkClass = isTransparent
    ? "text-white/90 hover:text-white transition-colors font-medium"
    : "text-gray-900 hover:text-red-500 transition-colors font-medium"

  const mobileMenuIconClass = isTransparent ? "text-white" : "text-gray-900"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClass}`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo size="md" variant={isTransparent ? "light" : "dark"} />

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={navLinkClass}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button onClick={handleContactClick} variant="default" size="sm">
              10초 문의
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={handleContactClick} variant="default" size="sm">
              문의
            </Button>
            <button
              type="button"
              className={`p-2 ${mobileMenuIconClass}`}
              onClick={() => handleMobileMenuToggle(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Container>

      <MobileNav
        open={mobileMenuOpen}
        onClose={() => handleMobileMenuToggle(false)}
        navigation={navigation}
        onContactClick={handleContactClick}
      />
    </header>
  )
}
