"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductCards() {
  return (
    <div className="absolute inset-0">
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-0 z-40"
        style={{ scale: 1 }}
      >
        <ProductCard
          image="/iphone.png"
          title="iPhone 15 Pro"
          brand="Apple"
          rating={4.8}
          users="12.4k Reviews"
          confidence={97}
          badge="#1 Best Rated"
          rotate={-7}
          delay={0}
        />
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[300px] top-[-80px] z-30"
        style={{ scale: 0.93 }}
      >
        <ProductCard
          image="/macbook.png"
          title="MacBook Air M3"
          brand="Apple"
          rating={4.9}
          users="9.2k Reviews"
          confidence={98}
          badge="#2 Editor's Pick"
          rotate={-2}
          delay={0.15}
        />
      </motion.div>

      <motion.div
        animate={{ y: [-6, 8, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[600px] top-[-85px] z-20"
        style={{ scale: 0.86 }}
      >
        <ProductCard
          image="/sony.png"
          title="Sony XM5"
          brand="Sony"
          rating={4.7}
          users="8.1k Reviews"
          confidence={95}
          badge="#3 Top Choice"
          rotate={2}
          delay={0.3}
        />
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[850px] top-[-128px] z-10"
        style={{ scale: 0.79 }}
      >
        <ProductCard
          image="/buds.png"
          title="Galaxy Buds3 Pro"
          brand="Samsung"
          rating={4.6}
          users="6.5k Reviews"
          confidence={94}
          badge="#4 Trending"
          rotate={5}
          delay={0.45}
        />
      </motion.div>
    </div>
  );
}