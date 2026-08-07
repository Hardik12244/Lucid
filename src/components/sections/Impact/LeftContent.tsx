"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Search } from "lucide-react";

export default function LeftContent() {
  return (
    <div className="max-w-[500px] pt-10">
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[13px] font-semibold uppercase tracking-[0.35em] text-[#5BAD62]"
      >
        REAL REVIEWS. REAL INSIGHTS.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-7 text-[78px] font-light leading-[0.9] tracking-[-0.05em] text-white"
      >
        Honest Reviews
        <br />
        <span className="bg-gradient-to-r from-[#70BB7A] via-[#66B273] to-[#58A784] bg-clip-text text-transparent">
          In one place.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-9 max-w-[430px] text-[17px] leading-8 text-zinc-400"
      >
        Lucid combines reviews, Reddit discussions, YouTube opinions,
        expert analysis and long-term ownership experiences into one
        AI-powered buying decision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-12 flex items-center gap-5"
      >
        <button className="group flex h-14 items-center gap-3 rounded-2xl bg-gradient-to-r from-[#70BB7A] via-[#66B273] to-[#58A784] px-7 text-[16px] font-medium text-black transition-all duration-300 hover:scale-[1.03]">
          <Search size={18} />
          Start Searching
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <button className="group flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 text-[16px] text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
          <Play size={17} fill="currentColor" />
          How it works
        </button>
      </motion.div>
    </div>
  );
}