"use client";

import Image from "next/image";
import { Check, Star, ShieldCheck, Clock, Sparkles } from "lucide-react";
import ProsConsTerminal from "./ProsConsTerminal";

export default function ProductVerdict() {
  const data = {
    brand: "Apple",
    name: "iPhone 15 Pro",
    price: "₹1,19,900",
    tags: ["Smartphone", "Released Sep 2023"],
    verdict: {
      status: "Buy",
      description: "Highly recommended by AI and community.",
    },
    scores: {
      community: 4.6,
      reviews: "12,842",
      confidence: 92,
      confidenceText:
        "Our AI is highly confident in this analysis based on volume, recency & diversity of reviews.",
    },
    breakdown: {
      pros: [
        "Top-tier camera quality",
        "Premium build & design",
        "Excellent performance",
      ],
      cons: [
        "Battery can drain fast",
        "Charging is relatively slow",
        "Expensive accessories",
      ],
    },
    meta: {
      lastUpdated: "27 May 2024",
      dataAnalyzed: "18,547 reviews from 23 sources",
    },
  };

  return (
    <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/[0.08] bg-[#0c0c0e] p-8 text-white shadow-2xl sm:p-10">
      <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest text-zinc-400">
        <span className="rounded bg-white/10 px-2.5 py-1 text-white">01</span>
        PRODUCT VERDICT
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[200px_1fr_auto]">
        <div className="relative flex items-center justify-center">
          <div className="absolute bottom-0 h-12 w-3/4 rounded-[100%] bg-[#6fce7b]/30 blur-[30px]" />
          <div className="relative h-[280px] w-[200px] overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-br from-zinc-800 to-black shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700">Image Placeholder</div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12 2.04c-.1.35-.41.97-1.12 1.63-.76.71-1.61 1.09-2.34 1.15-.12-1.05.34-2.11 1-2.83.69-.76 1.7-1.25 2.59-1.29.04.45 0 .9-.13 1.34zM13.63 6.94c-1.39 0-2.4.9-3.4 1.05-1 .15-2.2-.95-3.35-.95-1.5 0-2.9 1.25-3.7 2.7-.85 1.55-1.4 4.5.3 7.05.8 1.2 1.8 2.55 3.05 2.5 1.15-.05 1.7-.85 3.15-.85 1.45 0 2.05.85 3.15.8 1.2-.05 2.05-1.3 2.85-2.5.95-1.4 1.35-2.75 1.4-2.85-.05-.05-2.65-1-2.7-4-.05-2.5 2-3.8 2.1-3.85-1.15-1.7-2.95-1.95-3.5-1.95z" />
            </svg>
            {data.brand}
          </div>
          
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            {data.name}
          </h1>
          
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-semibold sm:text-3xl">{data.price}</span>
            <span className="text-sm text-zinc-500">Starting Price</span>
          </div>

          <div className="mt-5 flex gap-3">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 rounded-3xl bg-[#0c0c0e] p-2 pr-6">
          <div className="flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full border border-[#6fce7b]/20 bg-[#152319]">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[3px] border-[#6fce7b]">
              <Check className="h-7 w-7 text-[#6fce7b]" strokeWidth={3.5} />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-[15px] font-medium text-zinc-400">Overall Verdict</h3>
            <div className="mt-1 text-[72px] font-bold leading-[0.9] tracking-tight text-[#6fce7b]">
              {data.verdict.status}
            </div>
            <p className="mt-2 text-[15px] font-medium text-zinc-100">
              {data.verdict.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center rounded-[20px] border border-white/[0.06] bg-[#121214] p-7">
          <h3 className="text-[11px] font-bold tracking-widest text-zinc-400">
            COMMUNITY SCORE
          </h3>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-4xl font-semibold text-[#6fce7b]">
              {data.scores.community}
            </span>
            <span className="text-xl text-zinc-500">/ 5</span>
          </div>
          <div className="mt-3 flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= 4
                    ? "fill-[#6fce7b] text-[#6fce7b]"
                    : "fill-zinc-700 text-zinc-700"
                }`}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Based on {data.scores.reviews} reviews
          </p>
        </div>

        <div className="flex items-center gap-6 rounded-[20px] border border-white/[0.06] bg-[#121214] p-7">
          <div className="flex-1">
            <h3 className="text-[11px] font-bold tracking-widest text-zinc-400">
              CONFIDENCE SCORE
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-zinc-400">
              {data.scores.confidenceText}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#6fce7b]/20 bg-[#6fce7b]/10 px-2.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#6fce7b]" />
              <span className="text-[11px] font-medium text-[#6fce7b]">
                High Data Quality
              </span>
            </div>
          </div>
          
          <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#27272a"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#6fce7b"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * data.scores.confidence) / 100}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold">{data.scores.confidence}%</span>
              <span className="text-[8px] uppercase tracking-wider text-zinc-400">
                High Confidence
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-10">
        <ProsConsTerminal pros={data.breakdown.pros} cons={data.breakdown.cons} />
      </div>

      <div className="mt-12 flex flex-col gap-6 rounded-2xl bg-white/[0.02] p-6 sm:flex-row sm:gap-16">
        <div className="flex items-center gap-4">
          <Clock className="h-6 w-6 text-zinc-500" strokeWidth={1.5} />
          <div>
            <p className="text-[11px] text-zinc-500">Last Updated</p>
            <p className="mt-0.5 text-xs font-medium text-zinc-300">{data.meta.lastUpdated}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Sparkles className="h-6 w-6 text-zinc-500" strokeWidth={1.5} />
          <div>
            <p className="text-[11px] text-zinc-500">Data Analyzed</p>
            <p className="mt-0.5 text-xs font-medium text-zinc-300">{data.meta.dataAnalyzed}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}