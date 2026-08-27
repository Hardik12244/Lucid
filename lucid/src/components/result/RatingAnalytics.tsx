"use client";

import { Star, TrendingUp, AlertCircle, Trash2 } from "lucide-react";

const ratingData = [
  { stars: 5, percentage: 91 },
  { stars: 4, percentage: 8 },
  { stars: 3, percentage: 0 },
  { stars: 2, percentage: 0 },
  { stars: 1, percentage: 0 },
];

const trendPoints = [
  { label: "Apr", value: 2.6, x: 40, y: 110 },
  { label: "May", value: 2.9, x: 140, y: 95 },
  { label: "Jun", value: 4.1, x: 240, y: 35 },
  { label: "Jul", value: 4.4, x: 340, y: 20 },
];

export default function RatingAnalytics() {
  return (
    <section className="mx-auto w-full max-w-6xl cursor-pointer select-none">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase mt-16 pl-1 tracking-[0.16em] text-[#6fce7b]">
            Community feedback
          </p>
          <h2 className="mt-2 text-2xl font-semibold pl-1 tracking-tight text-white">
            Rating analytics
          </h2>
        </div>

        <div className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
          <TrendingUp className="h-4 w-4 text-[#6fce7b]" />
          Improving over time
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0c0d] p-7 sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#6fce7b]/[0.06] blur-[90px]" />

          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-zinc-500">Community score</p>

                <div className="mt-3 flex items-end gap-3">
                  <span className="text-6xl font-semibold leading-none tracking-[-0.06em] text-white">
                    4.9
                  </span>
                  <span className="mb-1 text-sm text-zinc-600">/ 5</span>
                </div>

                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-[18px] w-[18px] fill-[#6fce7b] text-[#6fce7b]"
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#6fce7b]/20 bg-[#6fce7b]/[0.06] px-3 py-2 text-right">
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                  Score
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#6fce7b]">
                  Excellent
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs text-zinc-500">
                  Rating distribution
                </span>
                <span className="text-xs text-zinc-600">
                  3,939 ratings
                </span>
              </div>

              <div className="space-y-3">
                {ratingData.map((row) => (
                  <div
                    key={row.stars}
                    className="grid grid-cols-[42px_1fr_36px] items-center gap-3"
                  >
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <span>{row.stars}</span>
                      <Star className="h-3 w-3 fill-zinc-600 text-zinc-600" />
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="h-full rounded-full bg-[#6fce7b] transition-all"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>

                    <span className="text-right text-xs tabular-nums text-zinc-500">
                      {row.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/[0.06] pt-6">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-rose-400" />
                  <span className="text-xs text-zinc-400">
                    Negative reviews
                  </span>
                </div>
                <p className="mt-2 text-xl font-semibold text-white">3</p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4 text-zinc-500" />
                  <span className="text-xs text-zinc-400">
                    Deleted reviews
                  </span>
                </div>
                <p className="mt-2 text-xl font-semibold text-white">1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0c0d] p-7 sm:p-8">
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#6fce7b]/[0.05] blur-[100px]" />

          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-zinc-500">Average rating</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                  Rating trend
                </h3>
              </div>

              <div className="rounded-full border border-[#6fce7b]/15 bg-[#6fce7b]/[0.05] px-3 py-1.5 text-xs font-medium text-[#6fce7b]">
                +1.8 this quarter
              </div>
            </div>

            <div className="relative mt-8 h-[260px] w-full">
              <svg
                viewBox="0 0 380 210"
                className="h-full w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="ratingArea"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#6fce7b"
                      stopOpacity="0.16"
                    />
                    <stop
                      offset="100%"
                      stopColor="#6fce7b"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                {[0, 1, 2, 3, 4].map((index) => (
                  <line
                    key={index}
                    x1="28"
                    y1={20 + index * 38}
                    x2="360"
                    y2={20 + index * 38}
                    stroke="rgba(255,255,255,0.045)"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                  />
                ))}

                {[5, 4, 3, 2, 1].map((value, index) => (
                  <text
                    key={value}
                    x="0"
                    y={24 + index * 38}
                    className="fill-zinc-600 text-[10px]"
                  >
                    {value}
                  </text>
                ))}

                <path
                  d="M40 210 L40 110 L140 95 L240 35 L340 20 L340 210 Z"
                  fill="url(#ratingArea)"
                />

                <path
                  d="M40 110 L140 95 L240 35 L340 20"
                  fill="none"
                  stroke="#6fce7b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {trendPoints.map((point) => (
                  <g key={point.label}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="7"
                      fill="#0b0c0d"
                      stroke="#6fce7b"
                      strokeWidth="2"
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="2.5"
                      fill="#6fce7b"
                    />

                    <text
                      x={point.x}
                      y="202"
                      textAnchor="middle"
                      className="fill-zinc-500 text-[11px]"
                    >
                      {point.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
              <div>
                <p className="text-xs text-zinc-600">Starting rating</p>
                <p className="mt-1 text-sm font-medium text-zinc-300">2.6</p>
              </div>

              <div className="h-px flex-1 mx-6 bg-white/[0.06]" />

              <div className="text-right">
                <p className="text-xs text-zinc-600">Current rating</p>
                <p className="mt-1 text-sm font-medium text-[#6fce7b]">4.4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}