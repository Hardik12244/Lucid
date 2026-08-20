"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import AppNavbar from "@/components/app/AppNavbar";
import ProductCard from "@/components/app/ProductCard";

const filters = [
  "All",
  "Trending",
  "Top Rated",
  "Best Value",
  "Most Reviewed",
];

const mockProducts = [
  {
    id: 1,
    title: "Dashboard Pro Kit",
    brand: "UI Foundry",
    category: "Template",
    price: "$49",
    rating: 4.8,
    confidence: 96,
  },
  {
    id: 2,
    title: "Icon Library 3.0",
    brand: "Pixelcraft",
    category: "Icons",
    price: "$29",
    rating: 4.7,
    confidence: 94,
  },
  {
    id: 3,
    title: "Auth Starter Pack",
    brand: "Devbase",
    category: "Plugin",
    price: "$39",
    rating: 4.6,
    confidence: 92,
  },
  {
    id: 4,
    title: "Landing Page Set",
    brand: "Frame Studio",
    category: "Template",
    price: "$59",
    rating: 4.9,
    confidence: 97,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#6fce7b]/30">
      <AppNavbar />

      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
        <section className="relative flex flex-col items-center py-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6fce7b]/[0.04] blur-[100px]"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col items-center"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[13px] font-medium uppercase tracking-[0.18em] text-[#6fce7b]"
            >
              Search smarter
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[56px] lg:text-[64px]"
            >
              Find your next
              <br />
              <span className="text-[#6fce7b]">perfect product.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-[16px] leading-7 text-zinc-400 sm:text-[18px]"
            >
              Search products, compare what people actually think, and make
              better buying decisions with AI.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="relative mt-10 w-full max-w-2xl"
            >
              <div className="group relative flex items-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] transition-all duration-300 focus-within:border-[#6fce7b]/40 focus-within:shadow-[0_0_40px_rgba(111,206,123,0.08)]">
                <div className="flex pl-4 pr-2">
                  <Search
                    className="h-5 w-5 text-zinc-500 transition-colors group-focus-within:text-[#6fce7b]"
                    strokeWidth={2}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Search a product..."
                  className="w-full bg-transparent py-3 pl-2 pr-4 text-[15px] text-white outline-none placeholder:text-zinc-600"
                />

                <button className="flex h-11 shrink-0 items-center justify-center rounded-xl bg-white px-6 text-[14px] font-semibold text-black transition-all duration-200 hover:bg-[#6fce7b]">
                  Search
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-2 text-xs text-zinc-600"
            >
              <span>Try</span>
              <button className="text-zinc-400 transition-colors hover:text-white">
                iPhone 15 Pro
              </button>
              <span>·</span>
              <button className="text-zinc-400 transition-colors hover:text-white">
                AirPods Pro
              </button>
              <span>·</span>
              <button className="text-zinc-400 transition-colors hover:text-white">
                MacBook Air
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {filters.map((filter) => {
                const active = activeFilter === filter;

                return (
                  <motion.button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-full px-5 py-2 text-[14px] font-medium transition-all duration-200 ${
                      active
                        ? "bg-[#6fce7b] text-[#071009] shadow-[0_0_18px_rgba(111,206,123,0.25)]"
                        : "border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {filter}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 border-t border-white/[0.08] pt-12"
        >
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                Your activity
              </p>

              <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                Recently viewed
              </h2>
            </div>

            <button className="text-sm text-zinc-500 transition-colors hover:text-white">
              View all
            </button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {mockProducts.map((product) => (
              <motion.div key={product.id} variants={fadeUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}