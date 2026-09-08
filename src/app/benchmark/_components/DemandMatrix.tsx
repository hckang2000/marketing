"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Level = "low" | "high"

interface TreatmentInput {
  name: string
  demand: Level
  competitiveness: Level
}

const QUADRANTS: { demand: Level; competitiveness: Level; label: string }[] = [
  { demand: "low", competitiveness: "high", label: "시장교육 필요" },
  { demand: "high", competitiveness: "high", label: "최우선 진출 상품" },
  { demand: "low", competitiveness: "low", label: "진출 보류" },
  { demand: "high", competitiveness: "low", label: "경쟁력 개선 후 진입" },
]

function ToggleGroup({
  value,
  onChange,
  lowLabel,
  highLabel,
}: {
  value: Level
  onChange: (v: Level) => void
  lowLabel: string
  highLabel: string
}) {
  return (
    <div className="inline-flex rounded-full border border-gray-200 p-0.5 bg-gray-50">
      {(["low", "high"] as Level[]).map((level) => (
        <button
          key={level}
          type="button"
          onClick={() => onChange(level)}
          className={cn(
            "px-3 py-1 text-xs sm:text-sm rounded-full transition-colors",
            value === level ? "bg-[#C1452D] text-white font-semibold" : "text-gray-500"
          )}
        >
          {level === "low" ? lowLabel : highLabel}
        </button>
      ))}
    </div>
  )
}

export function DemandMatrix() {
  const [treatments, setTreatments] = useState<TreatmentInput[]>([
    { name: "", demand: "high", competitiveness: "high" },
    { name: "", demand: "high", competitiveness: "low" },
    { name: "", demand: "low", competitiveness: "high" },
  ])

  const update = (index: number, patch: Partial<TreatmentInput>) => {
    setTreatments((prev) => prev.map((t, i) => (i === index ? { ...t, ...patch } : t)))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        {treatments.map((t, index) => (
          <div key={index} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <label className="text-sm font-semibold text-gray-900 mb-2 block">
              대표 진료 {index + 1}
            </label>
            <input
              type="text"
              value={t.name}
              onChange={(e) => update(index, { name: e.target.value })}
              placeholder="예: 리쥬란, 코 재수술, 임플란트 등"
              className="w-full mb-3 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1452D]/30"
            />
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <span className="text-xs text-gray-500 mr-2">일본 수요</span>
                <ToggleGroup
                  value={t.demand}
                  onChange={(v) => update(index, { demand: v })}
                  lowLabel="낮음"
                  highLabel="높음"
                />
              </div>
              <div>
                <span className="text-xs text-gray-500 mr-2">병원 경쟁력</span>
                <ToggleGroup
                  value={t.competitiveness}
                  onChange={(v) => update(index, { competitiveness: v })}
                  lowLabel="낮음"
                  highLabel="높음"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-2 aspect-square max-w-sm mx-auto w-full">
        {QUADRANTS.map((q) => {
          const items = treatments
            .map((t, i) => ({ ...t, i }))
            .filter((t) => t.demand === q.demand && t.competitiveness === q.competitiveness && t.name.trim())
          return (
            <div
              key={`${q.demand}-${q.competitiveness}`}
              className={cn(
                "rounded-2xl p-4 flex flex-col justify-between border",
                q.demand === "high" && q.competitiveness === "high"
                  ? "bg-[#C1452D] border-[#C1452D] text-white"
                  : "bg-white border-gray-100 text-gray-700"
              )}
            >
              <p className="text-xs sm:text-sm font-semibold" style={{ wordBreak: "keep-all" }}>
                {q.label}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {items.map((t) => (
                  <span
                    key={t.i}
                    className={cn(
                      "text-[10px] sm:text-xs px-2 py-0.5 rounded-full",
                      q.demand === "high" && q.competitiveness === "high"
                        ? "bg-white/20"
                        : "bg-[#FBEEE8] text-[#C1452D]"
                    )}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
