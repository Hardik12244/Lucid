"use client";

import { motion } from "framer-motion";
import { Search, Star, MessageCircle, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Search, number: "10M+", label: "Reviews Analyzed" },
  { icon: MessageCircle, number: "250K+", label: "Community Discussions" },
  { icon: Star, number: "50K+", label: "Products Covered" },
  { icon: ShieldCheck, number: "97%", label: "AI Confidence" },
];

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-[1400px]"
    >
      <div className="absolute -inset-1 rounded-[32px] md:rounded-[100px] bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20 blur-xl opacity-50" />
      
      <div className="relative flex flex-col gap-6 rounded-[28px] border border-white/10 bg-[#0a0a0c]/80 px-6 py-8 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:rounded-[100px] md:px-10 md:py-5">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center w-full md:w-auto justify-between md:justify-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group flex cursor-default items-center gap-4 md:gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] transition-colors duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/20 group-hover:text-emerald-300">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                
                <div className="flex flex-col">
                  <span className="mb-1 text-[22px] font-bold leading-none tracking-tight text-white md:text-[24px]">
                    {item.number}
                  </span>
                  <span className="text-[13px] font-medium leading-none text-zinc-400 md:text-[14px]">
                    {item.label}
                  </span>
                </div>
              </motion.div>

              {index < stats.length - 1 && (
                <div className="hidden h-12 w-px bg-white/[0.08] md:block md:mx-6 lg:mx-10" />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}