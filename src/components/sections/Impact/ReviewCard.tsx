"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ReviewCardProps {
  company: string;
  logo: string;
  review: string;
  author: string;
  rating: number;
  delay?: number;
}

export default function ReviewCard({
  company,
  logo,
  review,
  author,
  rating,
  delay = 0,
}: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="w-[285px] rounded-[30px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,.10)]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-[#66B273]"
            >
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
            </svg>
          ))}

          <span className="ml-2 text-sm font-semibold text-zinc-700">
            {rating.toFixed(1)}
          </span>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5]">
          <Image src={logo} alt={company} width={20} height={20} />
        </div>
      </div>

      <h3 className="mt-6 text-[28px] font-medium leading-[1.05] tracking-[-0.04em] text-zinc-900">
        {company}
      </h3>

      <p className="mt-3 max-w-[210px] text-[15px] leading-6 text-zinc-500">
        {review}
      </p>

      <div className="mt-6 flex items-center gap-2 text-[13px] text-zinc-400">
        <span>{author}</span>
        <span>•</span>
        <span>Verified</span>
      </div>
    </motion.div>
  );
}