"use client"
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import LucidSearchCard from "../ui/LucidSearchCard";
import FloatingDots from "../ui/FloatingDots";


const sources = [
  { name: "Amazon", icon: "/amazon.png" },
  { name: "Flipkart", icon: "/flipkart.png" },
  { name: "Reddit", icon: "/reddit.png" },
  { name: "YouTube", icon: "/youtube.png" },
  { name: "Forums", icon: "/forums.png" },
  { name: "Expert Blogs", icon: "/trusted-blog.png" },
  { name: "Tech Sites", icon: "/expert.png" },
];

const stats = [
  { value: "10M+", title: "Reviews Analyzed", desc: "From across the web" },
  { value: "120K+", title: "Products Covered", desc: "And counting" },
  { value: "95%", title: "Accuracy Rate", desc: "In AI recommendations" },
  { value: "50+", title: "Categories", desc: "Tech, Home, Beauty & more" },
  { value: "250K+", title: "Happy Decisions", desc: "And growing everyday" },
];

export function TrustAndStatsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000000] px-6 py-12 sm:px-10 lg:px-16">
      <FloatingDots
        count={40} />
      <div className="relative z-10 mx-auto flex w-full max-w-[1300px] flex-col gap-5">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-10 rounded-[24px] border border-white/[0.06] bg-[#070707] p-8 md:flex-row md:items-center lg:rounded-[32px] lg:p-12"
        >
          <div className="flex shrink-0 flex-col">
            <span className="mb-3 text-[11px] font-bold tracking-widest text-[#6fce7b] uppercase">
              Trusted Sources
            </span>
            <h2 className="text-[26px] font-light tracking-tight text-white sm:text-[30px]">
              We leave no stone unturned.
            </h2>
            <p className="mt-2 text-[15px] text-zinc-400 sm:text-[16px]">
              Data from every corner of the internet.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 sm:flex sm:flex-wrap sm:justify-end sm:gap-4 lg:gap-5">
            {sources.map((source, index) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center gap-2.5"
              >
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-white/[0.06] bg-[#101010] shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] transition-colors hover:bg-[#161616] sm:h-[64px] sm:w-[64px]">
                  <img
                    src={source.icon}
                    alt={source.name}
                    className="h-[26px] w-[26px] object-contain sm:h-[30px] sm:w-[30px]"
                  />
                </div>
                <span className="text-[10px] font-medium text-zinc-500 sm:text-[11px]">
                  {source.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[24px] border border-white/[0.06] bg-[#070707] py-10 lg:rounded-[32px]"
        >
          <div className="grid grid-cols-2 gap-y-10 divide-white/[0.06] md:grid-cols-3 lg:grid-cols-5 lg:divide-x">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center px-4 text-center sm:px-6">
                <div className="text-[38px] font-semibold tracking-tight text-[#6fce7b] sm:text-[46px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-white sm:text-[15px]">
                  {stat.title}
                </div>
                <div className="mt-1.5 text-[11px] text-zinc-500 sm:text-[12px]">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
export function CTASection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#000000] px-6 py-24 sm:px-10 lg:px-16">

      {/* Floating white dots */}
      <FloatingDots count={55} />

      {/* Ambient green glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />

        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-emerald-500/[0.04] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1300px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">

          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-[44px] font-light leading-[1.05] tracking-[-0.04em] text-white sm:text-[56px] lg:text-[64px]"
            >
              Buy with <span className="text-[#6fce7b]">clarity.</span>
              <br />
              Not confusion.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-[540px] text-[16px] leading-relaxed text-zinc-400 sm:text-[18px]"
            >
              Lucid scans thousands of reviews, discussions, and expert
              opinions from across the web and gives you one clear
              answer in seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <ShimmerButton
                background="black"
                shimmerColor="white"
                shimmerSize="0.1em"
                className="rounded-xl px-8 py-4 text-white transition-transform hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2.5 whitespace-nowrap text-[16px] font-semibold text-white">
                  <Search size={22} strokeWidth={2.5} />
                  Start Searching
                </span>
              </ShimmerButton>
            </motion.div>
          </div>

          <LucidSearchCard />

        </div>
      </div>
    </section>
  );
}
