"use client";

import {
  ShieldCheck,
  Wallet,
  Clock,
  AlertTriangle,
  History,
  CheckCircle2,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function RealWorldExperience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const data = {
    verdict: {
      title: "Holds up well over time",
      subtitle: "Most owners report strong reliability beyond the first year, with battery wear being the most common long-term complaint."
    },
    metrics: {
      reliability: 94,
      value: 88,
      avgOwnership: "2.5",
      users: "1,284"
    },
    timeline: [
      { point: "Day 1", score: 4.8, sentiment: "Very positive", color: "bg-[#6fce7b]", text: "text-[#6fce7b]" },
      { point: "6 Months", score: 4.5, sentiment: "Still positive", color: "bg-[#6fce7b]/80", text: "text-[#6fce7b]/80" },
      { point: "1+ Year", score: 4.3, sentiment: "Minor decline", color: "bg-amber-400", text: "text-amber-400" }
    ],
    ownershipBreakdown: [
      { label: "< 6 months", pct: 24 },
      { label: "6–12 months", pct: 31 },
      { label: "1–2 years", pct: 28 },
      { label: "2+ years", pct: 17 }
    ],
    changes: [
      { name: "Build quality", status: "Stable", score: 5, color: "bg-[#6fce7b]" },
      { name: "Performance", status: "Stable", score: 5, color: "bg-[#6fce7b]" },
      { name: "Display", status: "Stable", score: 5, color: "bg-[#6fce7b]" },
      { name: "Software", status: "Slight decline", score: 4, color: "bg-amber-400" },
      { name: "Battery", status: "Declines", score: 3, color: "bg-rose-400" }
    ],
    issues: [
      {
        issue: "Battery degradation",
        percentage: 18,
        severity: "High impact",
        onset: "Usually reported after 12+ months",
        color: "bg-rose-500"
      },
      {
        issue: "Screen burn-in",
        percentage: 7,
        severity: "Medium impact",
        onset: "Usually reported after 18+ months",
        color: "bg-amber-400"
      }
    ],
    valueBreakdown: [
      { name: "Features", score: 96 },
      { name: "Performance", score: 94 },
      { name: "Durability", score: 91 },
      { name: "Price", score: 78 }
    ],
    dealbreakers: [
      { type: "warning", text: "Battery degradation", subtext: "Relevant if you plan to keep it 3+ years" },
      { type: "success", text: "No major reliability concerns across hardware" }
    ],
    confidence: {
      score: 91,
      text: "Strong evidence across 12+ months of ownership"
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="mx-auto mt-24 w-full max-w-6xl rounded-3xl border border-white/[0.08] bg-[#0c0c0e] p-8 font-sans text-white shadow-2xl sm:p-12 lg:mt-32"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-5">
        <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-zinc-400 sm:text-sm">
          <span className="rounded bg-white/10 px-3 py-1.5 text-white">04</span>
          REAL-WORLD EXPERIENCE
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {data.verdict.title}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {data.verdict.subtitle}
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="flex items-center gap-6 rounded-[24px] border border-white/[0.04] bg-[#121214]/50 p-6 sm:p-8">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              <motion.circle
                cx="50" cy="50" r="42" fill="none" stroke="#6fce7b" strokeWidth="8" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: data.metrics.reliability / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ strokeDasharray: "264", strokeDashoffset: "0" }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-bold">{data.metrics.reliability}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#6fce7b]" />
              <span className="text-base font-medium text-zinc-300">Reliability</span>
            </div>
            <p className="mt-1 text-sm text-zinc-500">Long-term durability</p>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[24px] border border-white/[0.04] bg-[#121214]/50 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-blue-400" />
            <span className="text-base font-medium text-zinc-300">Value for Money</span>
          </div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-5xl font-semibold text-white">{data.metrics.value}</span>
            <span className="text-base text-zinc-500">/ 100</span>
          </div>
          <div className="mt-3 inline-flex max-w-fit items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400 sm:text-sm">
            Excellent value
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[24px] border border-white/[0.04] bg-[#121214]/50 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-purple-400" />
            <span className="text-base font-medium text-zinc-300">Avg. Ownership</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-semibold text-white">{data.metrics.avgOwnership}</span>
            <span className="text-base text-zinc-500">years</span>
          </div>
          <div className="mt-3 text-sm text-zinc-500">
            Based on <span className="font-medium text-zinc-300">{data.metrics.users}</span> users
          </div>
        </div>
      </motion.div>

      <div className="mt-16 grid gap-12 border-t border-white/[0.06] pt-16 lg:grid-cols-[1.5fr_1fr]">
        <motion.div variants={itemVariants} className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
              <History className="h-6 w-6 text-[#6fce7b]" />
              <h3 className="text-base font-semibold tracking-wide text-zinc-200 uppercase sm:text-lg">Long-Term Ownership</h3>
            </div>
            
            <div className="relative mt-12 flex justify-between px-4 sm:px-8">
              <div className="absolute left-[10%] right-[10%] top-5 h-1 bg-gradient-to-r from-[#6fce7b] via-[#6fce7b]/50 to-amber-400/50" />
              
              {data.timeline.map((point, idx) => (
                <div key={idx} className="relative flex flex-col items-center gap-4">
                  <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-[5px] border-[#0c0c0e] ${point.color}`}>
                    <div className="h-2.5 w-2.5 rounded-full bg-[#0c0c0e]" />
                  </div>
                  <span className="mt-3 text-3xl font-bold text-white">{point.score}</span>
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <span className="text-sm font-medium text-white sm:text-base">{point.point}</span>
                    <span className={`text-xs font-medium sm:text-sm ${point.text}`}>{point.sentiment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/[0.02] p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Ownership Breakdown</h4>
              <div className="mt-6 flex flex-col gap-4">
                {data.ownershipBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4">
                    <span className="w-28 text-sm text-zinc-300 sm:text-base">{item.label}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full rounded-full bg-zinc-500"
                      />
                    </div>
                    <span className="w-10 text-right text-sm text-zinc-400 sm:text-base">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl w-76 bg-white/[0.02] p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">What changes over time?</h4>
              <div className="mt-6 flex flex-col gap-4">
                {data.changes.map((item, idx) => (
                  <div key={idx} className="flex items-center text-nowrap  justify-between">
                    <span className="text-sm mr-3 text-zinc-300 sm:text-base">{item.name}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-4 rounded-sm ${i < item.score ? item.color : 'bg-white/5'}`}
                          />
                        ))}
                      </div>
                      <span className="w-12 text-right text-xs text-zinc-400 sm:text-sm">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
              <AlertTriangle className="h-6 w-6 text-amber-400" />
              <h3 className="text-base font-semibold tracking-wide text-zinc-200 uppercase sm:text-lg">Recurring Issues</h3>
            </div>

            <div className="mt-8 flex flex-col gap-8">
              {data.issues.map((issue, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-base font-medium text-zinc-200 sm:text-lg">{issue.issue}</span>
                      <p className="mt-1.5 text-sm text-zinc-500">{issue.percentage}% of long-term complaints</p>
                    </div>
                    <span className="text-2xl font-bold text-white">{issue.percentage}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${issue.percentage * 2}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${issue.color}`}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={issue.color.replace('bg-', 'text-')}>{issue.severity}</span>
                    <span className="text-zinc-500">{issue.onset}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
              <Wallet className="h-6 w-6 text-blue-400" />
              <h3 className="text-base font-semibold tracking-wide text-zinc-200 uppercase sm:text-lg">Value Breakdown</h3>
            </div>
            <div className="mt-8 flex flex-col gap-5">
              {data.valueBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5">
                  <span className="w-28 text-sm text-zinc-300 sm:text-base">{item.name}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full rounded-full bg-blue-400/80"
                    />
                  </div>
                  <span className="w-8 text-right text-sm font-medium text-zinc-400 sm:text-base">{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-16 rounded-[24px] border border-white/[0.06] bg-[#121214]/30 p-8 sm:p-10">
        <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase sm:text-sm">Deal Breakers & Signals</h4>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {data.dealbreakers.map((item, idx) => (
            <div key={idx} className="flex items-start gap-5 rounded-2xl bg-white/[0.02] p-5 sm:p-6">
              {item.type === 'warning' ? (
                <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-400" />
              ) : (
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#6fce7b]" />
              )}
              <div>
                <p className={`text-base font-medium sm:text-lg ${item.type === 'warning' ? 'text-amber-400' : 'text-[#6fce7b]'}`}>
                  {item.text}
                </p>
                {item.subtext && (
                  <p className="mt-1.5 text-sm text-zinc-400">{item.subtext}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center justify-between gap-8 border-t border-white/[0.06] pt-10 sm:flex-row">
        <div className="text-sm text-zinc-400 sm:text-base">
          Based on <span className="font-medium text-white">{data.metrics.users}</span> reviews from owners with 6+ months of use
        </div>
        <div className="flex w-full max-w-sm flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-medium sm:text-sm">
            <span className="text-[#6fce7b]">{data.confidence.score}% Confidence Score</span>
            <span className="text-zinc-500">High Evidence</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${data.confidence.score}%` }}
              transition={{ duration: 1.2 }}
              className="h-full rounded-full bg-[#6fce7b]"
            />
          </div>
          <span className="text-right text-xs text-zinc-500 sm:text-sm">{data.confidence.text}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}