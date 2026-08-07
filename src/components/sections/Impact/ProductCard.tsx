"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  brand: string;
  rating: number;
  users: string;
  confidence: number;
  badge: string;
  rotate?: number;
  delay?: number;
}

export default function ProductCard({
  image,
  title,
  brand,
  rating,
  users,
  confidence,
  badge,
  rotate = 0,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -18, rotate: 0, scale: 1.05 }}
      className="group relative w-[320px] overflow-hidden rounded-[36px] bg-white shadow-[0_45px_120px_rgba(0,0,0,0.28)] transition-all duration-500"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(112,187,122,.12),transparent_45%)]" />

      <div className="relative z-10 flex items-center justify-between px-7 pt-7">
        <span className="rounded-full bg-[#EDF8F0] px-3 py-1 text-xs font-semibold text-[#4E9B5B]">
          {badge}
        </span>

        <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500">
          AI
        </div>
      </div>

      <div className="relative mx-auto mt-4 h-[250px] w-[250px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-8 pb-8">
        <h3 className="text-[30px] font-medium leading-none tracking-[-0.04em] text-zinc-900">
          {title}
        </h3>

        <p className="mt-2 text-[15px] text-zinc-500">
          {brand}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-[#F6C344] text-[#F6C344]" />

            <span className="text-lg font-semibold text-zinc-900">
              {rating}
            </span>

            <span className="text-zinc-400">
              /5
            </span>
          </div>

          <span className="text-sm text-zinc-500">
            {users}
          </span>
        </div>

        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-zinc-500">
              AI Confidence
            </span>

            <span className="text-sm font-semibold text-[#58A784]">
              {confidence}%
            </span>
          </div>

          <div className="h-[7px] overflow-hidden rounded-full bg-zinc-200">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${confidence}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: delay + 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-[#70BB7A] via-[#66B273] to-[#58A784]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}