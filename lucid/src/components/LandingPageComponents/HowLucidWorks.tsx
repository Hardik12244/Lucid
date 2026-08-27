"use client";

import {
  Search,
  Globe2,
  Funnel,
  FileText,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "You Search",
    description: "Search any product you're planning to buy.",
    icon: Search,
  },
  {
    number: "2",
    title: "We Collect",
    description: "We scan thousands of reviews, discussions, videos & articles.",
    icon: Globe2,
  },
  {
    number: "3",
    title: "AI Filters",
    description: "Our AI removes noise, spam and biased opinions.",
    icon: Funnel,
    highlight: true,
  },
  {
    number: "4",
    title: "Build Report",
    description: "We create a clear, unbiased report with key insights.",
    icon: FileText,
  },
  {
    number: "5",
    title: "You Decide",
    description: "Get a confident answer and buy with clarity.",
    icon: Check,
  },
];

export default function HowLucidWorks() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 select-none">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-[1460px]">
        <div
          className="relative overflow-hidden rounded-[28px] border border-white/[0.08] px-8 py-10 sm:px-10 lg:px-12 lg:py-11"
          style={{
            background:
              "radial-gradient(circle at 50% -20%, rgba(255,255,255,0.035), transparent 45%), #050505",
            boxShadow:
              "0 30px 100px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.025)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10 mb-12">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4e9b5b]">
              From search to decision
            </p>

            <h2 className="text-[34px] font-medium tracking-[-0.035em] text-white sm:text-[40px]">
              How Lucid works.
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center md:px-5"
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+55px)] top-[50px] hidden h-px w-[calc(100%-110px)] md:block">
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 bg-[#245c31]/40" />

                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + index * 0.15,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 origin-left"
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(78,155,91,0.9), rgba(78,155,91,0.35))",
                          }}
                        />

                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 1 + index * 0.15,
                          }}
                          className="absolute right-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#6fc47b] shadow-[0_0_10px_rgba(111,196,123,0.8)]"
                        />
                      </div>
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    className={`relative z-10 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] border ${
                      step.highlight
                        ? "border-[#4e9b5b]/30 bg-[#0b130d]"
                        : "border-white/[0.08] bg-[#0b0b0b]"
                    }`}
                    style={{
                      boxShadow: step.highlight
                        ? "0 0 35px rgba(78,155,91,0.06), inset 0 1px 0 rgba(255,255,255,0.04)"
                        : "inset 0 1px 0 rgba(255,255,255,0.035)",
                    }}
                  >
                    <Icon
                      strokeWidth={1.7}
                      className={`h-[31px] w-[31px] ${
                        step.highlight
                          ? "text-[#a5d49d]"
                          : "text-[#d6d6d6]"
                      }`}
                    />

                    {step.highlight && (
                      <div className="absolute inset-0 rounded-[20px] bg-emerald-400/[0.025]" />
                    )}
                  </motion.div>

                  <div className="mt-5 max-w-[220px]">
                    <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-white">
                      {step.number}. {step.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-[1.55] text-[#77777a]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}