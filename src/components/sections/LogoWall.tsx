"use client"

import Image from "next/image"
import { Container } from "@/components/common/Container"
import { cn } from "@/lib/utils"

// 더스퀘어덱(thesquare-deck) index.html의 "함께한 곳" 로고 월을 클론.
interface LogoItem {
  id: number
  name: string
  logo: string
  bg?: string
}

const logos: LogoItem[] = [
  { id: 1, name: "종근당", logo: "/images/logo_ckd.png" },
  { id: 2, name: "파미셀", logo: "/images/logo_pharmicell.png" },
  { id: 3, name: "Thome", logo: "/images/logo_Thome.jpg" },
  { id: 4, name: "강남언니", logo: "/images/강남언니_logo.png" },
  { id: 5, name: "여신티켓", logo: "/images/여신티켓_logo.png" },
  { id: 6, name: "손유나", logo: "/images/sonyouna_logo.jpg" },
  { id: 7, name: "오픈닥터", logo: "/images/오픈닥터_logo.png" },
  { id: 8, name: "플랫팜", logo: "/images/플랫팜_logo.png" },
  { id: 9, name: "블리비", logo: "/images/블리비_logo.jpg", bg: "#fee1d9" },
  { id: 10, name: "셀린클리닉", logo: "/images/cellinclinic_logo.png", bg: "#0000cc" },
]

function LogoTile({ item, ariaHidden = false }: { item: LogoItem; ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex items-center justify-center w-[140px] h-[56px] shrink-0">
      <div className="relative w-full h-full">
        <Image src={item.logo} alt={item.name} fill className="object-contain" sizes="140px" />
      </div>
    </div>
  )
}

function MarqueeRow({ items, direction }: { items: LogoItem[]; direction: "left" | "right" }) {
  const track = [...items, ...items]

  return (
    <div className="marquee-row overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-3 sm:gap-4",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
      >
        {track.map((item, index) => (
          <LogoTile key={`${item.id}-${index}`} item={item} ariaHidden={index >= items.length} />
        ))}
      </div>
    </div>
  )
}

export function LogoWall() {
  return (
    <section className="pt-2 lg:pt-3 pb-10 lg:pb-14 bg-white">
      <Container>
        <MarqueeRow items={[...logos, ...logos, ...logos]} direction="left" />
      </Container>
    </section>
  )
}
