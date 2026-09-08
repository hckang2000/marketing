"use client"

import { useState } from "react"

function formatWon(value: number) {
  return new Intl.NumberFormat("ko-KR").format(Math.round(value))
}

export function RevenueSimulator() {
  const [ticketPrice, setTicketPrice] = useState(300000)
  const [monthlyPatients, setMonthlyPatients] = useState(20)

  const monthlyRevenue = ticketPrice * monthlyPatients

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="ticket-price" className="text-sm font-semibold text-gray-900">
              일본인 고객 평균 객단가
            </label>
            <span className="text-[#C1452D] font-bold">{formatWon(ticketPrice)}원</span>
          </div>
          <input
            id="ticket-price"
            type="range"
            min={50000}
            max={2000000}
            step={10000}
            value={ticketPrice}
            onChange={(e) => setTicketPrice(Number(e.target.value))}
            className="w-full accent-[#C1452D]"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="monthly-patients" className="text-sm font-semibold text-gray-900">
              월 해외환자 내원 수
            </label>
            <span className="text-[#C1452D] font-bold">{monthlyPatients}명</span>
          </div>
          <input
            id="monthly-patients"
            type="range"
            min={1}
            max={200}
            step={1}
            value={monthlyPatients}
            onChange={(e) => setMonthlyPatients(Number(e.target.value))}
            className="w-full accent-[#C1452D]"
          />
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-[#FBEEE8] text-center">
        <p className="text-gray-600 text-sm mb-2">예상 월 해외환자 매출</p>
        <p className="text-3xl sm:text-4xl font-bold text-[#C1452D]">{formatWon(monthlyRevenue)}원</p>
        <p className="text-gray-500 text-xs mt-3">
          객단가 × 월 내원환자 수 기준 단순 시뮬레이션이며, 실제 매출과 다를 수 있습니다.
        </p>
      </div>
    </div>
  )
}
