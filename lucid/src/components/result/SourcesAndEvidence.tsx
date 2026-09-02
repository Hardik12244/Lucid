"use client";
import type { SearchResult } from "@/lib/types";

import React, { useEffect, useState, useRef } from "react";
import { motion, animate, Variants, useScroll, useTransform, useSpring, AnimationSequence } from "framer-motion";
import { Award, ArrowRight, Info, Quote, CheckCircle2, Radar } from "lucide-react";
import { cn } from "@/lib/utils";

const RedditIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.25-1.25-1.25zm-2.75 3.999c-1.1 0-2.003.405-2.28.932l1.042.493c.106-.233.627-.425 1.238-.425.612 0 1.133.192 1.238.425l1.042-.493c-.277-.527-1.18-.932-2.28-.932z" />
  </svg>
);

const AmazonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.88 11.25c-2.43 0-3.32 1.36-3.32 2.68 0 1.54 1.05 2.5 2.5 2.5 1.48 0 2.76-.87 3.3-1.7v1.5h2.8V9.32c0-2.6-1.58-4.18-4.52-4.18-2.64 0-4.4 1.4-4.55 3.32h2.72c.12-.9.84-1.32 1.73-1.32 1.25 0 1.83.67 1.83 1.9v.74c-.58-.1-1.3-.18-2.5-.18zm1.08 1.9c0 .7-.54 1.44-1.53 1.44-.73 0-1.22-.44-1.22-1.12 0-.82.68-1.26 1.8-1.26.4 0 .74.03.95.07v.87zm7.3 6.26c-2.8 1.6-6.4 2.4-9.8 2.4-3.5 0-6.9-1-9.6-2.8-.4-.3-.2-.7.2-.6 2.7 1.3 6 2 9.5 2 3.6 0 7.2-.8 9.9-2.3.4-.2.7.2.5.5l-.7.8z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const confidenceSignals = [
  { label: "Review volume", strength: "Very strong", score: 95 },
  { label: "Source diversity", strength: "Strong", score: 82 },
  { label: "Sentiment agreement", strength: "Very strong", score: 92 },
  { label: "Long-term evidence", strength: "Moderate", score: 60 },
  { label: "Recent reviews", strength: "Strong", score: 85 },
];

const evidenceData = [
  {
    id: "ev-1",
    exhibit: "A",
    quote: "Battery life has noticeably degraded after about a year of daily use. It still gets me through the day, but barely.",
    source: "Reddit",
    timeAgo: "8 months ago",
    supportClaim: "Battery durability",
  },
  {
    id: "ev-2",
    exhibit: "B",
    quote: "After two years, the phone still feels fast and the display looks excellent. Hardware holds up remarkably well.",
    source: "Long-term review",
    timeAgo: "1.4 years ago",
    supportClaim: "Long-term reliability",
  },
  {
    id: "ev-3",
    exhibit: "C",
    quote: "The camera update in March completely fixed the focusing issues. Low light shots are significantly sharper now.",
    source: "YouTube Tech Review",
    timeAgo: "3 months ago",
    supportClaim: "Software improvements",
  },
];

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!hasTriggered) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(start + (value - start) * easeOutQuart));
      if (progress < 1) requestAnimationFrame(updateCounter);
    };
    requestAnimationFrame(updateCounter);
  }, [value, hasTriggered]);

  return <motion.span onViewportEnter={() => setHasTriggered(true)}>{count}</motion.span>;
};

const Container = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={cn(
      "flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] shadow-[0px_0px_12px_0px_rgba(111,206,123,0.08)_inset]",
      className
    )}
  >
    {children}
  </div>
);

const EvidenceScanSkeleton = () => {
  useEffect(() => {
    const pulse = { scale: [1, 1.08, 1] };

    const sequence: AnimationSequence = [
      [".dot-1", pulse, { duration: 0.7 }],
      [".dot-2", pulse, { duration: 0.7 }],
      [".dot-3", pulse, { duration: 0.7 }],
      [".dot-4", pulse, { duration: 0.7 }],
      [".dot-5", pulse, { duration: 0.7 }],
    ];

    const controls = animate(sequence, { repeat: Infinity, repeatDelay: 1.2 });

    return () => controls.stop();
  }, []);

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden p-8 pb-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="flex shrink-0 flex-row items-center justify-center gap-3">
        <Container className="dot-1 h-10 w-10"><RedditIcon className="h-4 w-4 text-zinc-400" /></Container>
        <Container className="dot-2 h-14 w-14"><YouTubeIcon className="h-5 w-5 text-[#6fce7b]" /></Container>
        <Container className="dot-3 h-16 w-16 border-[#6fce7b]/30 bg-[#6fce7b]/10"><Radar className="h-7 w-7 text-[#6fce7b]" /></Container>
        <Container className="dot-4 h-14 w-14"><AmazonIcon className="h-6 w-6 text-zinc-400" /></Container>
        <Container className="dot-5 h-10 w-10"><Award className="h-4 w-4 text-zinc-400" /></Container>
      </div>

      <motion.div
        className="absolute top-1/2 left-0 h-40 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#6fce7b] to-transparent shadow-[0_0_10px_rgba(111,206,123,0.55)]"
        animate={{ left: ["6%", "94%", "6%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const VerdictStamp = ({ value }: { value: number }) => (
  <div
    className="pointer-events-none absolute -top-6 right-6 z-30 flex h-24 w-24 rotate-[-11deg] flex-col items-center justify-center rounded-full border-[1.5px] border-[#6fce7b]/70 text-[#6fce7b] sm:h-28 sm:w-28"
    style={{ boxShadow: "0 0 0 3px rgba(111,206,123,0.12)" }}
  >
    <div className="absolute inset-[5px] rounded-full border border-dashed border-[#6fce7b]/40" />
    <span className="font-mono text-[9px] font-semibold tracking-[0.2em] sm:text-[10px]">VERIFIED</span>
    <span className="font-mono text-xl font-bold leading-none sm:text-2xl">{value}%</span>
    <span className="font-mono text-[8px] tracking-[0.15em] text-[#6fce7b]/70 sm:text-[9px]">CONFIDENCE</span>
  </div>
);

export default function SourcesAndEvidence({ result }: { result: SearchResult }) {
  const timelineRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const getSignalColor = (strength: string) => (strength.includes("Strong") ? "bg-[#6fce7b]" : "bg-zinc-600");

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 50%"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heightTransform = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="mx-auto mt-24 w-full max-w-6xl rounded-3xl border border-white/[0.08] bg-[#0c0c0e] p-6 text-white shadow-2xl sm:p-12 lg:mt-32"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-dossier { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .font-tag { font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace; }
      `}</style>

      <motion.div variants={itemVariants} className="flex flex-col gap-5">
        <div className="flex items-center gap-3 font-tag text-[11px] font-medium tracking-[0.22em] text-zinc-400 sm:text-xs">
          <span className="rounded-sm border border-[#6fce7b]/40 bg-[#6fce7b]/10 px-2.5 py-1 text-[#6fce7b]">EXHIBIT 06</span>
          <span>SOURCES &amp; EVIDENCE</span>
        </div>
        <div>
          <h2 className="font-dossier text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Where this verdict comes from
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Lucid reads independent reviews, discussions, and expert write-ups, then weighs how much each one
            deserves to move the verdict.
          </p>
        </div>
      </motion.div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          variants={itemVariants}
          className="flex flex-col rounded-[20px] border border-white/[0.06] bg-[#121214]/60 p-8 sm:p-10"
        >
          <h3 className="font-tag text-[11px] font-semibold tracking-[0.18em] text-zinc-400">CASE FILE — SOURCES</h3>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-b border-white/[0.06] pb-8 sm:justify-between sm:gap-0">
            {[
              { value: "18", label: "Sources analyzed" },
              { value: "3,939", label: "Ratings analyzed" },
              { value: "113", label: "Reviews analyzed" },
            ].map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="flex flex-col">
                  <span className="font-dossier text-3xl font-medium text-white">{stat.value}</span>
                  <span className="mt-1 font-tag text-[11px] uppercase tracking-wide text-zinc-500">{stat.label}</span>
                </div>
                {i < 2 && <div className="hidden h-10 w-px bg-white/[0.06] sm:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {result.product.sources.map((source, idx) => (
              <div key={source} className="group flex items-center gap-5">
                <div className="flex w-36 items-center gap-3 text-[14px] text-zinc-300 transition-colors group-hover:text-white">
                  <span className="text-zinc-500 transition-colors group-hover:text-[#6fce7b]">
                    {source === "reddit" && <RedditIcon className="h-[18px] w-[18px]" />}
                    {source === "amazon" && <AmazonIcon className="h-5 w-5" />}
                    {source === "youtube" && <YouTubeIcon className="h-[18px] w-[18px]" />}
                    {source !== "reddit" &&
                      source !== "amazon" &&
                      source !== "youtube" && (
                        <Award className="h-4 w-4" />
                      )}
                  </span>

                  {source}
                </div>

                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + idx * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-zinc-600 transition-colors group-hover:bg-[#6fce7b]"
                  />
                </div>

                <div className="flex w-12 flex-col items-end">
                  <span className="font-tag text-[13px] font-medium text-white">
                    {result.product.reviews.filter(
                      (review) => review.source === source
                    ).length}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10">
            <button className="group flex items-center gap-2 font-tag text-[12px] font-medium uppercase tracking-wide text-zinc-400 transition-colors hover:text-[#6fce7b]">
              View all sources
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative flex flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#121214]/60 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        >
          <div className="relative z-40 h-[16rem] w-full overflow-hidden bg-[#0c0c0e] [mask-image:radial-gradient(60%_60%_at_50%_50%,white_0%,transparent_100%)]">
            <EvidenceScanSkeleton />
          </div>

          <VerdictStamp value={94} />

          <div className="relative z-20 flex flex-1 flex-col border-t border-white/[0.04] bg-[#121214] p-8 sm:p-10">
            <div className="flex items-start justify-between">
              <h3 className="font-tag text-[11px] font-semibold tracking-[0.18em] text-zinc-400">AI CONFIDENCE</h3>
              <span className="font-tag text-[11px] font-medium text-[#6fce7b]">
                <AnimatedCounter value={94} />% — high confidence
              </span>
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {confidenceSignals.map((signal, idx) => (
                <div key={signal.label} className="flex flex-col gap-2.5">
                  <div className="flex justify-between text-[12px]">
                    <span className="text-zinc-400">{signal.label}</span>
                    <span className={signal.strength.includes("Strong") ? "font-tag text-[#6fce7b]" : "font-tag text-zinc-500"}>
                      {signal.strength}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${signal.score}%` }}
                      transition={{ duration: 1, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${getSignalColor(signal.strength)}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.05] bg-white/[0.03] p-6">
              <p className="text-[13px] leading-relaxed text-zinc-300">
                Sources agree closely on performance and reliability, and the sample is large enough to trust that
                agreement. Long-term evidence is thinner — worth another look in a few months.
              </p>
            </div>

            <div className="mt-6 flex items-start gap-2 text-zinc-500">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <p className="text-[12px] leading-relaxed">
                Scored on volume, diversity, agreement, recency, and long-term data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-20" ref={timelineRef}>
        <div className="mb-12 flex flex-col gap-2">
          <h3 className="font-dossier text-xl font-medium text-white">Supporting evidence</h3>
          <p className="text-[15px] text-zinc-400">Statements pulled from the reviews behind this verdict.</p>
        </div>

        <div className="relative ml-2 sm:ml-6">
          <div className="absolute bottom-0 left-[7px] top-4 w-px bg-white/5" />
          <motion.div
            style={{ height: heightTransform }}
            className="absolute left-[7px] top-4 w-px bg-gradient-to-b from-[#6fce7b] via-[#6fce7b] to-transparent shadow-[0_0_10px_rgba(111,206,123,0.5)]"
          />

          <div className="flex flex-col gap-10 pb-8">
            {evidenceData.map((evidence, idx) => (
              <motion.div key={evidence.id} variants={itemVariants} className="group relative pl-8 sm:pl-12">
                <div className="absolute left-0 top-6 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border-[3px] border-zinc-600 bg-[#0c0c0e] transition-colors duration-300 group-hover:border-[#6fce7b] group-hover:shadow-[0_0_12px_rgba(111,206,123,0.5)]" />

                <div
                  className="relative flex flex-col gap-5 overflow-hidden rounded-[16px] border border-white/[0.06] bg-[#121214]/60 p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-0 group-hover:border-[#6fce7b]/30 group-hover:bg-[#121214] group-hover:shadow-[0_8px_30px_rgba(111,206,123,0.05)] sm:p-8"
                  style={{ transform: `rotate(${idx % 2 === 0 ? "-0.4deg" : "0.4deg"})` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-tag text-[10px] font-semibold tracking-[0.2em] text-zinc-500 group-hover:text-[#6fce7b]/70">
                      EXHIBIT {evidence.exhibit}
                    </span>
                    <Quote className="h-5 w-5 text-white/[0.06]" />
                  </div>

                  <p className="font-dossier text-[16px] font-normal italic leading-relaxed text-zinc-200 sm:text-[18px]">
                    "{evidence.quote}"
                  </p>

                  <div className="mt-2 flex flex-col justify-between gap-4 border-t border-white/[0.04] pt-5 sm:flex-row sm:items-center">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-400">
                        {evidence.source === "Reddit" && <RedditIcon className="h-3.5 w-3.5" />}
                        {evidence.source === "YouTube Tech Review" && <YouTubeIcon className="h-3.5 w-3.5" />}
                        {evidence.source === "Long-term review" && <Award className="h-3.5 w-3.5" />}
                        {evidence.source}
                      </div>
                      <span className="text-zinc-600">·</span>
                      <span className="font-tag text-[11px] text-zinc-500">{evidence.timeAgo}</span>
                      <div className="flex items-center gap-1.5 rounded-sm border border-[#6fce7b]/20 bg-[#6fce7b]/10 px-2.5 py-1 text-[11px] font-medium text-[#6fce7b]">
                        <CheckCircle2 className="h-3 w-3" /> Supports {evidence.supportClaim}
                      </div>
                    </div>

                    <button className="flex w-fit items-center gap-1.5 font-tag text-[11px] font-medium uppercase tracking-wide text-zinc-500 transition-colors group-hover:text-[#6fce7b]">
                      View source <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
          <button className="rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-2.5 font-tag text-[12px] font-medium uppercase tracking-wide text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-[#6fce7b]">
            Show more evidence
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}