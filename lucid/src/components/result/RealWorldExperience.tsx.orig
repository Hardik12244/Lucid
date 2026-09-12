"use client";

import { ShieldCheck, Wallet, Clock, AlertTriangle, History, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function RealWorldExperience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const data = {
    verdict: {
      title: "Holds up well over time",
      subtitle:
        "Most owners report strong reliability beyond the first year. Battery wear is the one complaint that keeps showing up.",
    },
    metrics: {
      reliability: 94,
      value: 88,
      avgOwnership: "2.5",
      users: "1,284",
    },
    timeline: [
      { point: "Day 1", score: 4.8, sentiment: "Very positive", state: "good" },
      { point: "6 months", score: 4.5, sentiment: "Still positive", state: "good" },
      { point: "1+ year", score: 4.3, sentiment: "Minor decline", state: "flag" },
    ],
    ownershipBreakdown: [
      { label: "< 6 months", pct: 24 },
      { label: "6–12 months", pct: 31 },
      { label: "1–2 years", pct: 28 },
      { label: "2+ years", pct: 17 },
    ],
    issues: [
      {
        issue: "Battery degradation",
        percentage: 18,
        severity: "High impact",
        onset: "Usually reported after 12+ months",
      },
      {
        issue: "Screen burn-in",
        percentage: 7,
        severity: "Medium impact",
        onset: "Usually reported after 18+ months",
      },
    ],
    valueBreakdown: [
      { name: "Features", score: 96 },
      { name: "Performance", score: 94 },
      { name: "Durability", score: 91 },
      { name: "Price", score: 78 },
    ],
    dealbreakers: [
      { type: "warning", text: "Battery degradation", subtext: "Relevant if you plan to keep it 3+ years" },
      { type: "success", text: "No major reliability concerns across hardware" },
    ],
    confidence: {
      score: 91,
      text: "Strong evidence across 12+ months of ownership",
    },
  };

  const stateColors: Record<string, string> = {
    good: "#eab308",
    flag: "#ef4444",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="mx-auto mt-24 w-full max-w-6xl rounded-3xl border border-white/[0.08] bg-[#0c0c0e] p-8 text-white shadow-2xl sm:p-12 lg:mt-32"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-dossier { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .font-tag { font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace; }
      `}</style>

      <motion.div variants={itemVariants} className="flex flex-col gap-5">
        <div className="flex items-center gap-3 font-tag text-[11px] font-medium tracking-[0.22em] text-zinc-400 sm:text-xs">
          <span className="rounded-sm border border-[#eab308]/40 bg-[#eab308]/10 px-2.5 py-1 text-[#eab308]">EXHIBIT 04</span>
          <span>REAL-WORLD EXPERIENCE</span>
        </div>
        <div>
          <h2 className="font-dossier text-3xl font-medium tracking-tight sm:text-4xl">{data.verdict.title}</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">{data.verdict.subtitle}</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="flex items-center gap-6 rounded-[20px] border border-white/[0.04] bg-[#121214]/60 p-6 sm:p-8">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="8" />
              <motion.circle
                cx="50" cy="50" r="42" fill="none" stroke="#eab308" strokeWidth="8" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: data.metrics.reliability / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ strokeDasharray: "264", strokeDashoffset: "0" }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="font-dossier text-2xl font-medium">{data.metrics.reliability}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#eab308]" />
              <span className="font-tag text-[11px] uppercase tracking-wide text-zinc-400">Reliability</span>
            </div>
            <p className="mt-1.5 text-sm text-zinc-500">Long-term durability</p>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[20px] border border-white/[0.04] bg-[#121214]/60 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-[#6fce7b]" />
            <span className="font-tag text-[11px] uppercase tracking-wide text-zinc-400">Value for money</span>
          </div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-dossier text-5xl font-medium text-white">{data.metrics.value}</span>
            <span className="text-base text-zinc-500">/ 100</span>
          </div>
          <div className="mt-3 inline-flex max-w-fit items-center rounded-sm border border-[#6fce7b]/25 bg-[#6fce7b]/10 px-2.5 py-1 font-tag text-[11px] font-medium text-[#6fce7b]">
            Excellent value
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[20px] border border-white/[0.04] bg-[#121214]/60 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-zinc-400" />
            <span className="font-tag text-[11px] uppercase tracking-wide text-zinc-400">Avg. ownership</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-dossier text-5xl font-medium text-white">{data.metrics.avgOwnership}</span>
            <span className="text-base text-zinc-500">years</span>
          </div>
          <div className="mt-3 text-sm text-zinc-500">
            Based on <span className="font-medium text-zinc-300">{data.metrics.users}</span> owners
          </div>
        </div>
      </motion.div>

      <div className="mt-16 grid gap-12 border-t border-white/[0.06] pt-16 lg:grid-cols-[1.5fr_1fr]">
        <motion.div variants={itemVariants} className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
              <History className="h-5 w-5 text-[#eab308]" />
              <h3 className="font-tag text-[11px] font-semibold tracking-[0.18em] text-zinc-400">LONG-TERM OWNERSHIP</h3>
            </div>

            <div className="relative mt-14 px-4 sm:px-8">
              <div className="absolute left-[10%] right-[10%] top-[38px] flex justify-between">
                {[...Array(21)].map((_, i) => (
                  <div key={i} className={`w-px bg-white/[0.06] ${i % 5 === 0 ? "h-3" : "h-1.5"}`} />
                ))}
              </div>
              <div className="absolute left-[10%] right-[10%] top-[38px] h-px bg-white/[0.08]" />

              <div className="relative flex justify-between">
                {data.timeline.map((point, idx) => (
                  <div key={idx} className="relative flex flex-col items-center gap-3">
                    <span className="font-dossier text-3xl font-medium text-white">{point.score}</span>
                    <div
                      className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-[4px] border-[#0c0c0e]"
                      style={{ backgroundColor: stateColors[point.state] }}
                    >
                      <div className="h-2 w-2 rounded-full bg-[#0c0c0e]" />
                    </div>
                    <div className="mt-1 flex flex-col items-center gap-1 text-center">
                      <span className="font-tag text-[11px] uppercase tracking-wide text-zinc-300">{point.point}</span>
                      <span className="text-xs font-medium sm:text-sm" style={{ color: stateColors[point.state] }}>
                        {point.sentiment}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[16px] border border-white/[0.04] bg-[#121214]/60 p-8">
            <h4 className="font-tag text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Ownership breakdown</h4>
            <div className="mt-8 flex flex-col gap-5">
              {data.ownershipBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4">
                  <span className="w-24 text-sm text-zinc-300 sm:w-28 sm:text-base">{item.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full rounded-full bg-zinc-500"
                    />
                  </div>
                  <span className="w-10 text-right font-tag text-sm text-zinc-400">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
              <AlertTriangle className="h-5 w-5 text-[#ef4444]" />
              <h3 className="font-tag text-[11px] font-semibold tracking-[0.18em] text-zinc-400">FLAGGED — RECURRING ISSUES</h3>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {data.issues.map((issue, idx) => (
                <div key={idx} className="rounded-[14px] border border-[#ef4444]/15 bg-[#ef4444]/[0.04] p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-base font-medium text-white sm:text-lg">{issue.issue}</span>
                      <p className="mt-1.5 text-sm text-zinc-400">{issue.percentage}% of long-term complaints</p>
                    </div>
                    <span className="font-dossier text-2xl font-medium text-[#ef4444]">{issue.percentage}%</span>
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${issue.percentage * 2}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-[#ef4444]"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between font-tag text-[11px]">
                    <span className="text-[#ef4444]">{issue.severity}</span>
                    <span className="text-zinc-500">{issue.onset}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
              <Wallet className="h-5 w-5 text-[#6fce7b]" />
              <h3 className="font-tag text-[11px] font-semibold tracking-[0.18em] text-zinc-400">VALUE BREAKDOWN</h3>
            </div>
            <div className="mt-8 flex flex-col gap-5">
              {data.valueBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5">
                  <span className="w-24 text-sm text-zinc-300 sm:w-28 sm:text-base">{item.name}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full rounded-full bg-[#6fce7b]"
                    />
                  </div>
                  <span className="w-8 text-right font-tag text-sm font-medium text-zinc-400">{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-16 rounded-[20px] border border-white/[0.06] bg-[#121214]/40 p-8 sm:p-10">
        <h4 className="font-tag text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Signals worth weighing</h4>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {data.dealbreakers.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-5 rounded-[14px] border p-5 sm:p-6 ${
                item.type === "warning" ? "border-[#ef4444]/15 bg-[#ef4444]/[0.04]" : "border-[#eab308]/15 bg-[#eab308]/[0.04]"
              }`}
            >
              {item.type === "warning" ? (
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-[#ef4444]" />
              ) : (
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#eab308]" />
              )}
              <div>
                <p className={`text-base font-medium sm:text-lg ${item.type === "warning" ? "text-[#ef4444]" : "text-[#eab308]"}`}>
                  {item.text}
                </p>
                {item.subtext && <p className="mt-1.5 text-sm text-zinc-400">{item.subtext}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 flex flex-col items-center justify-between gap-8 border-t border-white/[0.06] pt-10 sm:flex-row"
      >
        <div className="text-sm text-zinc-400 sm:text-base">
          Based on <span className="font-medium text-white">{data.metrics.users}</span> reviews from owners with 6+ months of use
        </div>
        <div className="flex w-full max-w-sm flex-col gap-3">
          <div className="flex items-center justify-between font-tag text-[11px] font-medium">
            <span className="text-[#eab308]">{data.confidence.score}% CONFIDENCE</span>
            <span className="text-zinc-500">HIGH EVIDENCE</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${data.confidence.score}%` }}
              transition={{ duration: 1.2 }}
              className="h-full rounded-full bg-[#eab308]"
            />
          </div>
          <span className="text-right text-xs text-zinc-500 sm:text-sm">{data.confidence.text}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}