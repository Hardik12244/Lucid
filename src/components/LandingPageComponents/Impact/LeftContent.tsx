
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Search } from "lucide-react";

export default function LeftContent() {
  return (
    <div className="max-w-[560px] pt-6 sm:pt-10">
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#5BAD62] sm:text-[13px] sm:tracking-[0.35em]"
      >
        Real Reviews. Real Insights.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-6 text-[42px] font-light leading-[0.95] tracking-[-0.03em] text-white sm:mt-7 sm:text-[56px] sm:leading-[0.9] sm:tracking-[-0.04em] md:text-[64px] lg:text-[72px] xl:text-[78px] xl:tracking-[-0.05em]"
      >
        Honest reviews
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
        className="mt-6 max-w-[460px] text-[15px] leading-7 text-zinc-400 sm:mt-9 sm:text-[17px] sm:leading-8"
      >
        Lucid combines reviews, Reddit discussions, YouTube opinions, expert
        analysis and long-term ownership experiences into one AI-powered
        buying decision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-9 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5"
      >
        <button className="group flex h-[52px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#70BB7A] via-[#66B273] to-[#58A784] px-7 text-[15px] font-medium text-black transition-all duration-300 hover:scale-[1.03] sm:h-14 sm:text-[16px]">
          <Search size={18} />
          Start Searching
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <button className="group flex h-[52px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 text-[15px] text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:h-14 sm:text-[16px]">
          <Play size={17} fill="currentColor" />
          How it works
        </button>
      </motion.div>
    </div>
  );
}