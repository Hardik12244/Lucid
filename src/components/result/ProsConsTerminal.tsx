"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

interface ProsConsScrollRevealProps {
  pros?: string[];
  cons?: string[];
}

export default function ProsConsScrollReveal({
  pros = [],
  cons = [],
}: ProsConsScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["58vw", "76vw", "96vw"]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [34, 28]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={ref} className="relative h-[100vh] bg-black select-none">
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-8 py-12">
        <motion.div
          style={{
            width,
            scale,
            borderRadius: radius,
            opacity,
            y,
          }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-[34px] bg-white/5 blur-2xl" />

          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#6fce7b]/10 blur-[170px]" />

          <div className="absolute -bottom-24 -right-28 h-[320px] w-[320px] rounded-full bg-rose-500/10 blur-[150px]" />

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#060606] shadow-[0_0_80px_rgba(255,255,255,.05)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(111,206,123,.08),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(244,63,94,.05),transparent_35%),linear-gradient(to_bottom,#0a0a0a,#050505,#000000)]" />

            <div className="absolute inset-[1px] rounded-[33px] border border-white/[0.04]" />

            <div className="relative z-20">
              <div className="pt-12 pb-8 text-center px-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-[42px] font-light leading-none tracking-tight text-white sm:text-[54px]"
                >
                  AI Sentiment Analysis
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="mx-auto mt-5 max-w-2xl text-lg font-light leading-8 text-white/50"
                >
                  Real-time breakdown of thousands of verified customer reviews, automatically categorized into key strengths and critical flaws.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 gap-6 px-7 pb-12 lg:grid-cols-2">
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#050505]/90 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#6fce7b]/[0.03] via-transparent to-transparent" />
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6fce7b]/30 to-transparent" />
                  
                  <div className="p-2 sm:p-4">
                    <Terminal>
                      <TypingAnimation>&gt; Initializing positive sentiment engine...</TypingAnimation>

                      <AnimatedSpan className="text-zinc-500">
                        ✔ Scraping 4 & 5 star verified feedback.
                      </AnimatedSpan>
                      <AnimatedSpan className="text-zinc-500">
                        ✔ Extracting core feature praise.
                      </AnimatedSpan>

                      <AnimatedSpan className="mt-4 block font-semibold text-white">
                        [ PROS DETECTED ]
                      </AnimatedSpan>
                      {pros.map((pro, index) => (
                        <AnimatedSpan key={`pro-${index}`} className="text-[#6fce7b]">
                          + {pro}
                        </AnimatedSpan>
                      ))}

                      <TypingAnimation className="mt-4 text-zinc-400">
                        Strengths analysis complete.
                      </TypingAnimation>
                    </Terminal>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#050505]/90 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-rose-500/[0.03] via-transparent to-transparent" />
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
                  
                  <div className="p-2 sm:p-4">
                    <Terminal>
                      <TypingAnimation>&gt; Initializing critical sentiment engine...</TypingAnimation>

                      <AnimatedSpan className="text-zinc-500">
                        ✔ Scraping 1 & 2 star verified feedback.
                      </AnimatedSpan>
                      <AnimatedSpan className="text-zinc-500">
                        ✔ Filtering outliers and extracting flaws.
                      </AnimatedSpan>

                      <AnimatedSpan className="mt-4 block font-semibold text-white">
                        [ CONS DETECTED ]
                      </AnimatedSpan>
                      {cons.map((con, index) => (
                        <AnimatedSpan key={`con-${index}`} className="text-rose-400">
                          - {con}
                        </AnimatedSpan>
                      ))}

                      <TypingAnimation className="mt-4 text-zinc-400">
                        Weaknesses analysis complete.
                      </TypingAnimation>
                    </Terminal>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{
              x: ["-25%", "130%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute top-0 left-0 h-px w-40 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[2px]"
          />

          <div className="pointer-events-none absolute inset-0 rounded-[34px] shadow-[inset_0_0_120px_rgba(0,0,0,.6)]" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}