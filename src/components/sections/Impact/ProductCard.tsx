"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Star, ShieldCheck, ArrowRightLeft } from "lucide-react";
import { useRef, useState } from "react";

interface Product {
  id: string;
  image: string;
  title: string;
  brand: string;
  rating: number;
  users: string;
  confidence: number;
  badge: string;
  highlight?: boolean;
}

interface ProductTileProps extends Product {
  delay?: number;
  flat?: boolean;
}

function ProductTile({
  image,
  title,
  brand,
  rating,
  users,
  confidence,
  badge,
  highlight = false,
  delay = 0,
  flat = false,
}: ProductTileProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], flat ? [0, 0] : [10, -10]);
  const rotateYTilt = useTransform(
    springX,
    [-0.5, 0.5],
    flat ? [0, 0] : [-10, 10]
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (flat) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{ rotateX, rotateY: rotateYTilt, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
      className="group relative w-[240px] shrink-0 sm:w-[270px] lg:w-[290px]"
    >
      <div
        className="absolute inset-0 rounded-[28px] lg:rounded-[32px] bg-black/40 blur-xl"
        style={{
          transform: "translateZ(-40px)",
        }}
      />

      {Array.from({ length: 12 }).map((_, idx) => (
        <div
          key={idx}
          className="absolute inset-0 rounded-[28px] lg:rounded-[32px]"
          style={{
            background: idx === 11 ? "#a3a3a3" : "#d4d4d4",
            transform: `translateZ(${-idx * 2 - 2}px)`,
            border: "1px solid rgba(0,0,0,0.03)",
          }}
        />
      ))}

      <div
        className="relative rounded-[28px] lg:rounded-[32px] overflow-hidden"
        style={{
          background: highlight
            ? "radial-gradient(120% 90% at 15% 0%, #eef6ef 0%, #ffffff 55%)"
            : "linear-gradient(180deg, #ffffff 0%, #f6f6f5 100%)",
          border: "1px solid rgba(255,255,255,0.8)",
          transform: "translateZ(0px)",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-[28px] bg-gradient-to-b from-white/90 to-transparent lg:rounded-t-[32px]" />

        <div className="relative z-10 px-5 pt-5 sm:px-6 sm:pt-6">
          <span className="inline-block rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#2f6f43] shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:px-3.5 sm:text-xs">
            {badge}
          </span>
        </div>

        <div
          className="relative mx-auto mt-4 h-[160px] w-[160px] sm:mt-5 sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px]"
          style={{ transform: flat ? undefined : "translateZ(50px)" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="relative z-10 px-6 pb-6 pt-1 sm:px-7 sm:pb-7">
          <h3 className="text-[19px] font-bold leading-tight tracking-[-0.02em] text-zinc-900 sm:text-[22px] lg:text-[24px]">
            {title}
          </h3>
          <p className="mt-1 text-[13px] text-zinc-500 sm:text-[14px]">
            {brand}
          </p>

          <div className="mt-5 flex items-center justify-between sm:mt-6">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-zinc-900 text-zinc-900 sm:h-[18px] sm:w-[18px]" />
              <span className="text-[15px] font-bold text-zinc-900 sm:text-[16px]">
                {rating}
              </span>
              <span className="text-[14px] text-zinc-400 sm:text-[15px]">
                /5
              </span>
            </div>
            <span className="text-[12px] text-zinc-500 sm:text-[13px]">
              {users}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-zinc-200/80 pt-4 sm:mt-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#4E9B5B]" />
              <span className="text-[12px] text-zinc-500 sm:text-[13px]">
                AI Confidence
              </span>
            </div>
            <span className="text-[12px] font-bold text-[#4E9B5B] sm:text-[13px]">
              {confidence}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const products: Product[] = [
  {
    id: "iphone",
    image: "/iphone.png",
    title: "iPhone 15 Pro",
    brand: "Apple",
    rating: 4.6,
    users: "10,235+ users",
    confidence: 96,
    badge: "#1 Best Rated",
    highlight: true,
  },
  {
    id: "macbook",
    image: "/macbook.png",
    title: "MacBook Air M3",
    brand: "Apple",
    rating: 4.7,
    users: "8,432+ users",
    confidence: 95,
    badge: "#2 Top Choice",
  },
  {
    id: "sony",
    image: "/sony.png",
    title: "Sony WH-1000XM5",
    brand: "Sony",
    rating: 4.5,
    users: "6,127+ users",
    confidence: 94,
    badge: "#3 Great Value",
  },
  {
    id: "oneplus",
    image: "/buds.png",
    title: "OnePlus Buds 3",
    brand: "OnePlus",
    rating: 4.4,
    users: "5,893+ users",
    confidence: 93,
    badge: "#4 Popular",
  },
];

export default function ProductCard() {
  const [isOpen, setIsOpen] = useState(false);
  const lastIndex = products.length - 1;

  return (
    <>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 pl-4 pr-6 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
        {products.map((product, i) => (
          <div key={product.id} className="snap-center py-4">
            <ProductTile {...product} delay={i * 0.08} flat />
          </div>
        ))}
      </div>

      <div
        className="relative hidden items-center justify-start lg:flex h-[550px] w-full pl-10 pt-10"
        style={{ perspective: 2400 }}
      >
        <div className="relative w-full h-full flex items-center" style={{ transformStyle: "preserve-3d" }}>
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={false}
              animate={{
                x: isOpen ? i * 240 : i * 75,
                y: isOpen ? i * 15 : i * 2,
                z: isOpen ? -i * 80 : -i * 20,
                rotateY: isOpen ? 10 + (i * 3) : 22,
                rotateX: isOpen ? 4 : 8,
                rotateZ: isOpen ? -2 : 0,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.9 }}
              className="absolute left-0 transform-gpu"
              style={{
                zIndex: products.length - i,
                transformStyle: "preserve-3d",
              }}
            >
              <ProductTile {...product} delay={0} />
            </motion.div>
          ))}

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            initial={false}
            animate={{
              x: isOpen ? (lastIndex * 240) + 260 - 50 : (lastIndex * 75) + 260,
              y: isOpen ? (lastIndex * 15) : (lastIndex * 2),
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.9 }}
            className="absolute left-0 top-[45%] z-50 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-900 shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-zinc-200"
            style={{ transform: "translateZ(80px)" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <ArrowRightLeft className="h-7 w-7" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </>
  );
}