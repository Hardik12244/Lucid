"use client";

import { Check, Star, ShieldCheck, Clock, Sparkles } from "lucide-react";
import ProsConsTerminal from "./ProsConsTerminal";
import { motion, Variants } from "framer-motion";
import type { SearchResult } from "@/lib/types";


export default function ProductVerdict({ result }: { result: SearchResult }) {
  
  const product = {
  brand: result.product.productName,
  name: result.product.productName,
  price: "—",
  tags: result.product.sources,
  verdictStatus: result.analysis.verdict,
  verdictDescription: result.analysis.summary,
  communityScore:
  result.product.reviews.length > 0
    ? result.product.reviews
        .filter((review: any) => review.rating !== null)
        .reduce(
          (sum: number, review: any) =>
            sum + review.rating,
          0
        ) /
      result.product.reviews.filter(
        (review: any) => review.rating !== null
      ).length
    : 0,
  reviewCount: result.product.reviews.length.toString(),
  confidenceScore: 90,
  confidenceText:
    "AI confidence is based on the available review data.",
  pros: result.analysis.pros,
  cons: result.analysis.cons,
  lastUpdated: "Just now",
  dataAnalyzed: `${result.product.reviews.length} reviews from ${result.product.sources.length} sources`,
};

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const circleCircumference = 2 * Math.PI * 40; // ~251.2
  const strokeDashoffset = circleCircumference - (circleCircumference * product.confidenceScore) / 100;



  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto w-full max-w-6xl rounded-3xl border border-white/[0.08] bg-black p-8 text-white shadow-2xl sm:p-10"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-5">
        <div className="font-tag flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-zinc-400 sm:text-xs">
          <span className="rounded-sm border border-[#6fce7b]/40 bg-[#6fce7b]/10 px-2.5 py-1 text-[#6fce7b]">
            EXHIBIT 01
          </span>
          <span>OVERALL VERDICT</span>
        </div>

        <h2 className="font-dossier text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Product Verdict
        </h2>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] lg:grid-cols-[220px_1fr_340px]">
        <div className="relative flex items-center justify-center bg-[#0A0A0A] p-8">
          <div className="absolute bottom-6 h-10 w-2/3 rounded-full bg-[#6FCE7B]/20 blur-[28px]" />
          <div className="relative h-[220px] w-[160px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-gradient-to-br from-zinc-900 to-black">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-700">
              Image placeholder
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 bg-[#0A0A0A] p-8">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
            {product.brand}
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{product.name}</h1>

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tabular-nums sm:text-3xl">{product.price}</span>
            <span className="text-sm text-zinc-500">Starting price</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {product.tags.map((tag:any) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex items-center gap-5 overflow-hidden bg-[#0A0A0A] p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#6FCE7B]/[0.14] blur-3xl" />
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#6FCE7B]/30 bg-[#6FCE7B]/10">
            <Check className="h-7 w-7 text-[#6FCE7B]" strokeWidth={3} />
          </div>
          <div className="relative flex flex-col">
            <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-500">Overall verdict</h3>
            <div className="mt-1 text-5xl font-bold leading-[0.95] tracking-tight text-[#6FCE7B]">
              {product.verdictStatus}
            </div>
            <p className="mt-2 text-sm font-medium text-zinc-300">{product.verdictDescription}</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] md:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#0A0A0A] p-7">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Community score</h3>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="text-4xl font-semibold tabular-nums text-[#6FCE7B]">{product.communityScore}</span>
            <span className="text-lg text-zinc-500">/ 5</span>
          </div>
          <div className="mt-3 flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.round(product.communityScore) 
                    ? "fill-[#6FCE7B] text-[#6FCE7B]" 
                    : "fill-zinc-800 text-zinc-800"
                }`}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">Based on {product.reviewCount} reviews</p>
        </div>

        <div className="flex items-center gap-6 bg-[#0A0A0A] p-7">
          <div className="flex-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Confidence score</h3>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">{product.confidenceText}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#6FCE7B]/20 bg-[#6FCE7B]/10 px-2.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#6FCE7B]" />
              <span className="text-[11px] font-medium text-[#6FCE7B]">High data quality</span>
            </div>
          </div>

          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="9" />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#6FCE7B"
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray={circleCircumference}
                initial={{ strokeDashoffset: circleCircumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              />
            </svg>
            <div className="absolute flex flex-col items-center text-center">
              <span className="text-xl font-bold tabular-nums">{product.confidenceScore}%</span>
              <span className="text-[8px] uppercase tracking-wider text-zinc-500">Confidence</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-12 border-t border-white/[0.06] pt-10">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Pros &amp; cons</h3>
        <div className="mt-6">
          <ProsConsTerminal pros={product.pros} cons={product.cons} />
        </div>
      </motion.div>

      {/* META */}
      <motion.div variants={itemVariants} className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] sm:grid-cols-2">
        <div className="flex items-center gap-4 bg-[#0A0A0A] p-6">
          <Clock className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
          <div>
            <p className="text-[11px] text-zinc-500">Last updated</p>
            <p className="mt-0.5 text-sm font-medium text-zinc-300">{product.lastUpdated}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#0A0A0A] p-6">
          <Sparkles className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
          <div>
            <p className="text-[11px] text-zinc-500">Data analyzed</p>
            <p className="mt-0.5 text-sm font-medium text-zinc-300">{product.dataAnalyzed}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}