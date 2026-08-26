"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, TrendingDown, Clock, Minus, Activity } from "lucide-react";

export default function HistoryAnalytics() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const data = {
    reviewEvents: [
      { date: "Sep 2023", label: "Launch", rating: "4.8", y: 60, align: "start" },
      { date: "Dec 2023", label: "OS Update", rating: "4.8", y: 60, align: "middle" },
      { date: "Mar 2024", label: "Battery complaints", rating: "4.5", y: 140, align: "middle" },
      { date: "Aug 2024", label: "Today", rating: "4.6", y: 110, align: "end" },
    ],
    priceSnapshot: {
      current: "₹1,04,900",
      lowest: "₹1,04,900",
      average: "₹1,12,400",
      launch: "₹1,19,900",
      status: "↓ 6.6% vs average"
    },
    insight: {
      text: "Current pricing is highly favorable. The product has hit its lowest price since launch, while community sentiment has stabilized after minor battery wear complaints in March. With no new model expected for 6 months, this is an optimal purchasing window.",
      priceStatus: { label: "Favorable", icon: <TrendingDown className="h-4 w-4 text-[#6fce7b]" />, color: "text-[#6fce7b]" },
      sentimentStatus: { label: "Stable", icon: <Minus className="h-4 w-4 text-zinc-400" />, color: "text-zinc-300" },
      buyTiming: { label: "BUY NOW", color: "bg-[#6fce7b] text-[#071009]" }
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
        <div className="flex items-center gap-3 font-tag text-[11px] font-medium tracking-[0.22em] text-zinc-400 sm:text-xs">
          <span className="rounded-sm border border-[#6fce7b]/40 bg-[#6fce7b]/10 px-2.5 py-1 text-[#6fce7b]">SECTION 05</span>
          <span>HISTORY</span>
        </div>
        <div>
          <h2 className="font-dossier text-3xl font-medium tracking-tight text-white sm:text-4xl">
            What changed over time?
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Price, sentiment and ownership signals across the product's history.
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-14 overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#121214] p-8 sm:p-10">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-zinc-400" />
            <h3 className="text-base font-semibold tracking-wide text-zinc-200 uppercase">Review & Sentiment Timeline</h3>
          </div>
        </div>

        <div className="relative mt-8 h-[220px] w-full">
          <svg viewBox="0 0 1000 220" className="h-full w-full overflow-visible">
            {[40, 100, 160].map((y, i) => (
              <line key={i} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
            ))}

            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 50,60 L 350,60 C 450,60 550,140 650,140 C 750,140 850,110 950,110"
              fill="none"
              stroke="#6fce7b"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {data.reviewEvents.map((event, i) => {
              const xOffsets = [50, 350, 650, 950];
              const xPos = xOffsets[i];
              
              return (
                <g key={event.date}>
                  <motion.line
                    initial={{ opacity: 0, y2: event.y }}
                    whileInView={{ opacity: 1, y2: 200 }}
                    transition={{ delay: 1 + (i * 0.2), duration: 0.5 }}
                    x1={xPos} y1={event.y} x2={xPos} y2={200}
                    stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3"
                  />

                  <motion.text
                    initial={{ opacity: 0, y: event.y - 10 }}
                    whileInView={{ opacity: 1, y: event.y - 20 }}
                    transition={{ delay: 1 + (i * 0.2) }}
                    x={xPos} y={event.y - 20}
                    textAnchor={event.align as "start" | "middle" | "end"}
                    className="fill-white text-[15px] font-bold"
                  >
                    {event.rating} ★
                  </motion.text>

                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 + (i * 0.2), type: "spring" }}
                    cx={xPos} cy={event.y} r="5"
                    className="fill-[#121214] stroke-[#6fce7b]" strokeWidth="3"
                  />

                  <motion.text
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2 + (i * 0.2) }}
                    x={xPos} y="215"
                    textAnchor={event.align as "start" | "middle" | "end"}
                    className="fill-zinc-300 text-[13px] font-medium"
                  >
                    {event.label}
                  </motion.text>

                  <motion.text
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2 + (i * 0.2) }}
                    x={xPos} y="235"
                    textAnchor={event.align as "start" | "middle" | "end"}
                    className="fill-zinc-500 text-[11px]"
                  >
                    {event.date}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <motion.div variants={itemVariants} className="flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#121214] p-8 sm:p-10">
          <div className="flex items-center gap-3 border-b border-white/[0.06] pb-6">
            <TrendingDown className="h-5 w-5 text-zinc-400" />
            <h3 className="text-base font-semibold tracking-wide text-zinc-200 uppercase">Price History</h3>
          </div>

          <div className="relative mt-12 h-[180px] w-full">
            <svg viewBox="0 0 600 180" className="h-full w-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                d="M 0,20 C 150,20 200,60 300,60 C 400,60 450,120 600,120 L 600,180 L 0,180 Z"
                fill="url(#priceGradient)"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M 0,20 C 150,20 200,60 300,60 C 400,60 450,120 600,120"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              <text x="0" y="10" className="fill-zinc-400 text-[12px] font-medium">₹1.2L</text>
              <text x="300" y="45" className="fill-zinc-400 text-[12px] font-medium" textAnchor="middle">₹1.15L</text>
              <text x="600" y="105" className="fill-zinc-400 text-[12px] font-medium" textAnchor="end">₹1.04L</text>

              <line x1="0" y1="160" x2="600" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <text x="0" y="178" className="fill-zinc-500 text-[11px]">Sep</text>
              <text x="300" y="178" className="fill-zinc-500 text-[11px]" textAnchor="middle">Mar</text>
              <text x="600" y="178" className="fill-zinc-500 text-[11px]" textAnchor="end">Aug</text>
            </svg>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#121214] p-8 sm:p-10">
          <div className="flex items-center gap-3 border-b border-white/[0.06] pb-6">
            <Clock className="h-5 w-5 text-zinc-400" />
            <h3 className="text-base font-semibold tracking-wide text-zinc-200 uppercase">Price Snapshot</h3>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">Current</span>
              <span className="text-lg font-bold text-[#6fce7b]">{data.priceSnapshot.current}</span>
            </div>
            
            <div className="h-px w-full bg-white/[0.04]" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Lowest</span>
              <span className="text-sm font-medium text-white">{data.priceSnapshot.lowest}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Average</span>
              <span className="text-sm font-medium text-white">{data.priceSnapshot.average}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Launch</span>
              <span className="text-sm font-medium text-white">{data.priceSnapshot.launch}</span>
            </div>

            <div className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#6fce7b]/10 py-2.5 text-sm font-medium text-[#6fce7b]">
              {data.priceSnapshot.status}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-8 overflow-hidden rounded-[24px] border border-[#6fce7b]/20 bg-gradient-to-b from-[#6fce7b]/5 to-transparent">
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-[#6fce7b]" />
            <h3 className="text-lg font-semibold tracking-wide text-white uppercase">Lucid Insight</h3>
          </div>
          
          <p className="mt-6 max-w-4xl text-[15px] leading-relaxed text-zinc-300 sm:text-[17px]">
            {data.insight.text}
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-center gap-12">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-zinc-500 uppercase">Price</span>
                <div className={`mt-2 flex items-center gap-2 text-sm font-medium ${data.insight.priceStatus.color}`}>
                  {data.insight.priceStatus.icon}
                  {data.insight.priceStatus.label}
                </div>
              </div>
              
              <div>
                <span className="text-[11px] font-bold tracking-widest text-zinc-500 uppercase">Sentiment</span>
                <div className={`mt-2 flex items-center gap-2 text-sm font-medium ${data.insight.sentimentStatus.color}`}>
                  {data.insight.sentimentStatus.icon}
                  {data.insight.sentimentStatus.label}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:justify-end">
              <span className="text-[11px] font-bold tracking-widest text-zinc-500 uppercase">Buy Timing</span>
              <div className={`rounded-full px-5 py-2 text-sm font-bold tracking-wide ${data.insight.buyTiming.color}`}>
                {data.insight.buyTiming.label}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}