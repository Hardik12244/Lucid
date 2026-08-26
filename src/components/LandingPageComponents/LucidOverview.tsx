"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Search,
  ShieldCheck,
  ListFilter,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function OrbitNode({
  image,
  title,
  align = "right",
}: {
  image: string;
  title: string;
  align?: "left" | "right";
}) {
  return (
    <div className="relative flex h-[58px] w-[58px] items-center justify-center">
      <div className="relative z-10 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#6fce7b]/40 bg-[#0b0b0b] shadow-[0_0_20px_rgba(111,206,123,0.3),inset_0_0_10px_rgba(255,255,255,0.1)]">
        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          <img
            src={image}
            alt={title}
            draggable={false}
            className="h-[28px] w-[28px] object-contain"
          />
        </div>
      </div>

      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap ${
          align === "right" ? "left-full ml-4" : "right-full mr-4 text-right"
        }`}
      >
        <div className="text-[14px] font-semibold text-white drop-shadow-md">
          {title}
        </div>
        
      </div>
    </div>
  );
}

export default function LucidOverview() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#000000] px-4 py-12 sm:px-8 lg:p-12 text-white">
      <div className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#050505] shadow-[0_0_100px_rgba(0,0,0,1)]">
        <div className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-emerald-500/[0.06] blur-[180px]" />
        <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.04] blur-[150px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        <div className="relative z-10 grid min-h-[720px] grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 lg:py-20">
            <div className="mb-7 flex w-fit items-center gap-2.5 rounded-full border border-[#6fce7b]/20 bg-[#6fce7b]/[0.05] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#6fce7b] shadow-[0_0_12px_rgba(111,206,123,0.9)]" />
              <span className="text-[13px] font-medium tracking-wide text-[#7ed989]">
                All-in-One Research
              </span>
            </div>

            <h2 className="max-w-[650px] text-[48px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[58px] lg:text-[64px]">
              Stop searching.
              <br />
              Start deciding.
            </h2>

            <p className="mt-4 max-w-[620px] text-[28px] font-medium leading-tight tracking-[-0.02em] text-zinc-300 sm:text-[32px]">
              Everything in{" "}
              <span className="relative inline-block text-[#6fce7b]">
                one search.
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 160 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6fce7b" stopOpacity="1" />
                      <stop offset="100%" stopColor="#6fce7b" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 15 Q 80 5 158 15"
                    stroke="url(#line-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </p>

            <p className="mt-8 max-w-[590px] text-[16px] leading-relaxed text-zinc-400 sm:text-[17px]">
              Lucid brings together reviews, discussions, and opinions
              from across the web so you get one clear, unbiased report.
              No more tabs. No more confusion.
              <br />
              <span className="mt-2 block">Just clarity.</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              
              <ShimmerButton
                background="black"
                shimmerColor="white"
                shimmerSize="0.1em"
                className="rounded-xl px-8 py-4 text-white transition-transform hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2.5 whitespace-nowrap text-[16px] font-semibold text-[#ffffff]">
                  <Search size={22} strokeWidth={2.5} />
                  Start Searching
                </span>
              </ShimmerButton>

             
            </div>


          </div>

          <div className="relative min-h-[400px] w-full lg:min-h-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-[580px] w-[580px] scale-[0.6] items-center justify-center sm:scale-75 lg:scale-100 origin-center">
                
                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.06] blur-[50px]" />
                <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6fce7b]/40 shadow-[0_0_30px_rgba(111,206,123,0.15)]" />
                
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6fce7b]/50 shadow-[0_0_20px_rgba(111,206,123,0.2)]" />
                <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]" />

                <div className="absolute left-1/2 top-1/2 z-30 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#6fce7b]/50 bg-[#060a06]/95 shadow-[0_0_80px_rgba(111,206,123,0.2)]">
                  <div className="absolute inset-[8px] rounded-full border border-[#6fce7b]/20" />
                  <div className="relative flex flex-col items-center text-center">
                    <Sparkles className="mb-2 h-7 w-7 text-[#6fce7b]" strokeWidth={1.5} />
                    <div className="mb-1 text-[32px] font-semibold tracking-[-0.04em] text-white">
                      Lucid
                    </div>
                    <p className="text-[11px] leading-[15px] text-zinc-400">
                      One search.
                      <br />
                      Every perspective.
                    </p>
                  </div>
                </div>

                <OrbitingCircles radius={280} duration={45} path={false}>
                  <OrbitNode image="/amazon.png" title="Amazon" align="right" />
                  <OrbitNode image="/reddit.png" title="Reddit"  align="right" />
                  <OrbitNode image="/expert.png" title="Expert Sites"  align="right" />
                  <OrbitNode image="/flipkart.png" title="Flipkart"  align="left" />
                </OrbitingCircles>

                <OrbitingCircles radius={210} duration={35} reverse path={false}>
                  <OrbitNode image="/x.png" title="X (Twitter)"  align="right" />
                  <OrbitNode image="/youtube.png" title="YouTube"  align="left" />
                </OrbitingCircles>

                <OrbitingCircles radius={150} duration={25} path={false}>
                  <OrbitNode image="/forums.png" title="Forums"  align="right" />
                  <OrbitNode image="/trusted-blog.png" title="Trusted Blogs" align="left" />
                </OrbitingCircles>

                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-[210px] rounded-full bg-[#6fce7b] shadow-[0_0_15px_rgba(111,206,123,1)]" />
                  <div className="absolute left-1/2 top-1/2 h-[5px] w-[5px] translate-x-[280px] -translate-y-1/2 rounded-full bg-[#6fce7b]/80 shadow-[0_0_12px_rgba(111,206,123,0.8)]" />
                  <div className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-[150px] -translate-y-1/2 rounded-full bg-[#6fce7b]/90 shadow-[0_0_12px_rgba(111,206,123,0.9)]" />
                  <div className="absolute left-1/2 top-1/2 h-[4px] w-[4px] -translate-x-[210px] translate-y-[100px] rounded-full bg-[#6fce7b]/70 shadow-[0_0_10px_rgba(111,206,123,0.7)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/[0.05] bg-[#050505]">
          <div className="grid grid-cols-1 divide-y divide-white/[0.05] md:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            <Feature 
              icon={Search} 
              title="One Search" 
              text="All perspectives, one place." 
            />
            <Feature 
              icon={ListFilter} 
              title="AI-Powered" 
              text="Advanced AI analyzes thousands of opinions." 
            />
            <Feature 
              icon={ShieldCheck} 
              title="Unbiased" 
              text="No brand influence. Just the truth." 
            />
            <Feature 
              icon={Zap} 
              title="Save Time" 
              text="Make decisions in minutes, not hours." 
            />
            <Feature 
              icon={CheckCircle2} 
              title="Buy Confidently" 
              text="Know you're making the right choice." 
            />
          </div>
        </div>

      </div>
    </section>
  );
}


function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 px-6 py-8 transition-colors hover:bg-white/[0.02]">
      <div className="mt-0.5 flex shrink-0 items-center justify-center text-[#6fce7b]">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-white">{title}</h3>
        <p className="mt-1.5 max-w-[180px] text-[13px] leading-[20px] text-zinc-500">
          {text}
        </p>
      </div>
    </div>
  );
}