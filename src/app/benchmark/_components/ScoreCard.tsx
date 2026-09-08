"use client"

import { useEffect, useMemo, useState } from "react"
import {
  CRITERIA,
  DOMAIN_LABELS,
  TOTAL_MAX,
  getDefaultScores,
  getDomainTotal,
  getTier,
  type DomainKey,
} from "./scoring"

interface ScoreCardProps {
  onChange?: (total: number, tierId: string) => void
}

const DOMAIN_ORDER: DomainKey[] = ["clinic", "market", "acquisition", "operation"]

export function ScoreCard({ onChange }: ScoreCardProps) {
  const [scores, setScores] = useState<Record<string, number>>(getDefaultScores)

  const total = useMemo(
    () => CRITERIA.reduce((sum, c) => sum + (scores[c.key] ?? 0), 0),
    [scores]
  )
  const tier = useMemo(() => getTier(total), [total])

  useEffect(() => {
    onChange?.(total, tier.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, tier.id])

  const handleSlider = (key: string, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div>
      <div className="space-y-10">
        {DOMAIN_ORDER.map((domain) => {
          const domainInfo = DOMAIN_LABELS[domain]
          const domainTotal = getDomainTotal(scores, domain)
          return (
            <div key={domain}>
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-sm font-bold text-[#C1452D] uppercase tracking-wide">
                    {domainInfo.title}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">{domainInfo.subtitle}</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {domainTotal} / {domainInfo.max}
                </span>
              </div>

              <div className="space-y-6">
                {CRITERIA.filter((c) => c.domain === domain).map((c) => (
                  <div key={c.key} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor={c.key} className="font-semibold text-gray-900 text-sm sm:text-base">
                        {c.label}
                      </label>
                      <span className="text-[#C1452D] font-bold text-sm sm:text-base">
                        {scores[c.key]} / {c.max}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mb-3" style={{ wordBreak: "keep-all" }}>
                      {c.question}
                    </p>
                    <input
                      id={c.key}
                      type="range"
                      min={0}
                      max={c.max}
                      value={scores[c.key]}
                      onChange={(e) => handleSlider(c.key, Number(e.target.value))}
                      className="w-full accent-[#C1452D]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* 결과 패널 */}
      <div className="mt-10 p-8 rounded-2xl bg-[#C1452D] text-white text-center">
        <p className="text-white/70 text-sm mb-2">종합 Scorecard</p>
        <p className="text-4xl sm:text-5xl font-bold mb-1">
          {total} <span className="text-xl font-normal text-white/70">/ {TOTAL_MAX}</span>
        </p>
        <p className="text-lg sm:text-xl font-bold tracking-wide mb-3">{tier.label}</p>
        <p className="text-white/85 max-w-xl mx-auto text-sm sm:text-base leading-relaxed" style={{ wordBreak: "keep-all" }}>
          {tier.description}
        </p>
      </div>
    </div>
  )
}
