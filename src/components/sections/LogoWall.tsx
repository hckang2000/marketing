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
  width?: number
  height?: number
}

const logos: LogoItem[] = [
  { id: 1, name: "종근당", logo: "/images/logo_ckd_trim.png", width: 138, height: 34 },
  { id: 2, name: "온누리약국", logo: "/images/logo_onnuri_pharmacy_trim.png", width: 154, height: 43 },
  { id: 3, name: "파미셀", logo: "/images/logo_pharmicell_trim.png", width: 140, height: 44 },
  { id: 4, name: "강남언니", logo: "/images/강남언니_logo_trim.png", width: 161, height: 30 },
  { id: 6, name: "블리비", logo: "/images/블리비_logo_trim.png", width: 112, height: 45 },
  { id: 7, name: "손유나", logo: "/images/sonyouna_logo_trim.png", width: 92, height: 87 },
  { id: 8, name: "더스퀘어치과", logo: "/images/logo_thesquare_dental_trim.png", width: 210, height: 49 },
  { id: 9, name: "오픈닥터", logo: "/images/오픈닥터_logo_trim.png", width: 97, height: 27 },
  { id: 10, name: "플랫팜", logo: "/images/플랫팜_logo_trim.png", width: 136, height: 46 },
  { id: 11, name: "셀린클리닉", logo: "/images/cellin_logo_trim.png", width: 136, height: 52 },
  { id: 12, name: "Thome", logo: "/images/logo_Thome_trim.png", width: 140, height: 26 },
  { id: 13, name: "셀올로지", logo: "/images/logo_cellology_trim.png", width: 140, height: 37 },
  { id: 14, name: "김현수클리닉", logo: "/images/logo_kimhyunsoo_clinic.svg", width: 220, height: 22 },
]

function LogoTile({ item, ariaHidden = false }: { item: LogoItem; ariaHidden?: boolean }) {
  const width = item.width ?? 140
  const height = item.height ?? 56

  return (
    <div
      aria-hidden={ariaHidden}
      className="flex items-center justify-center shrink-0"
      style={{ width, height }}
    >
      <div className="relative w-full h-full">
        <Image src={item.logo} alt={item.name} fill className="object-contain" sizes={`${width}px`} />
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
          "flex items-center w-max gap-10 sm:gap-12",
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
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <p
          className="text-center text-xl sm:text-2xl font-bold text-gray-900 leading-[1.5] mb-14 lg:mb-20"
          style={{ wordBreak: "keep-all" }}
        >
          코스피 상장사부터 네트워크 병원 본사까지.
          <br />
          메디컬 리더들의 해외 마케팅을 전담합니다.
        </p>
      </Container>
      <MarqueeRow items={[...logos, ...logos, ...logos]} direction="left" />
    </section>
  )
}
