"use client";

import { motion } from "framer-motion";
import {
  Search,
  Star,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Search,
    number: "10M+",
    label: "Reviews Analyzed",
  },
  {
    icon: MessageCircle,
    number: "250K+",
    label: "Community Discussions",
  },
  {
    icon: Star,
    number: "50K+",
    label: "Products Covered",
  },
  {
    icon: ShieldCheck,
    number: "97%",
    label: "AI Confidence",
  },
];

export default function StatsBar() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
      className="mt-32"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5" />


        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative grid grid-cols-2 gap-10 px-10 py-10 md:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="
                    mb-5
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/[0.04]
                    text-emerald-400
                  "
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-5xl font-light tracking-tight text-white">
                  {item.number}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}