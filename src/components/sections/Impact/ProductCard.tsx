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
  const isHovered = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const hoverSpring = useSpring(isHovered, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(springY, [-0.5, 0.5], flat ? [0, 0] : [12, -12]);
  const rotateYTilt = useTransform(springX, [-0.5, 0.5], flat ? [0, 0] : [-12, 12]);
  
  const cardLift = useTransform(hoverSpring, [0, 1], flat ? [0, 0] : [0, 30]);
  const imageZ = useTransform(hoverSpring, [0, 1], flat ? [0, 0] : [35, 90]);
  const badgeZ = useTransform(hoverSpring, [0, 1], flat ? [0, 0] : [20, 50]);
  const contentZ = useTransform(hoverSpring, [0, 1], flat ? [0, 0] : [15, 35]);
  const glassX = useTransform(springX, [-0.5, 0.5], ["-10%", "10%"]);
  const glassY = useTransform(springY, [-0.5, 0.5], ["-10%", "10%"]);

  const ambientShadowOpacity = useTransform(hoverSpring, [0, 1], [0.15, 0.3]);
  const dropShadowBlur = useTransform(hoverSpring, [0, 1], ["blur(15px)", "blur(30px)"]);
  const imageShadow = useTransform(hoverSpring, [0, 1], [
    "drop-shadow(0px 10px 15px rgba(0,0,0,0.1))", 
    "drop-shadow(0px 25px 30px rgba(0,0,0,0.3))"
  ]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (flat) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseEnter() {
    if (flat) return;
    isHovered.set(1);
  }

  function handleMouseLeave() {
    if (flat) return;
    mouseX.set(0);
    mouseY.set(0);
    isHovered.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative w-[240px] shrink-0 sm:w-[270px] lg:w-[290px]"
    >
      <motion.div
        animate={{
          y: flat ? 0 : [0, -8, 0],
          rotateZ: flat ? 0 : [0, 0.5, -0.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ 
            rotateX, 
            rotateY: rotateYTilt, 
            translateZ: cardLift,
            transformStyle: "preserve-3d" 
          }}
          className="relative h-[410px] w-full rounded-[28px] transition-transform duration-100 ease-linear sm:h-[470px] lg:h-[500px] lg:rounded-[32px]"
        >
          <motion.div
            className="absolute inset-0 rounded-[28px] bg-black lg:rounded-[32px]"
            style={{ 
              opacity: ambientShadowOpacity,
              filter: dropShadowBlur,
              transform: "translateZ(-50px) translateY(20px) scale(0.95)"
            }}
          />
          <div
            className="absolute inset-0 rounded-[28px] bg-black/40 blur-md lg:rounded-[32px]"
            style={{ transform: "translateZ(-20px) translateY(10px) scale(0.98)" }}
          />

          {Array.from({ length: 14 }).map((_, idx) => (
            <div
              key={idx}
              className="absolute inset-0 rounded-[28px] bg-[#e4e4e7] lg:rounded-[32px]"
              style={{ transform: `translateZ(-${idx + 1}px)` }}
            />
          ))}
          <div
            className="absolute inset-0 rounded-[28px] border border-zinc-300/80 bg-gradient-to-br from-[#c4c4c4] to-[#a3a3a3] lg:rounded-[32px]"
            style={{ transform: "translateZ(-15px)" }}
          />

          <div
            className="absolute inset-0 overflow-hidden rounded-[28px] border border-white shadow-[inset_0_1px_4px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,0,0,0.05)] lg:rounded-[32px]"
            style={{
              background: highlight
                ? "linear-gradient(135deg, #ffffff 0%, #f4fbf6 50%, #eaf5ec 100%)"
                : "linear-gradient(135deg, #ffffff 0%, #fcfcfc 50%, #f2f2f2 100%)",
              transform: "translateZ(0px)",
            }}
          >
            <div className="absolute left-1/2 top-[35%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[30px]" />
            
            <motion.div
              className="absolute inset-[-50%] bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-80 mix-blend-overlay"
              style={{ x: glassX, y: glassY }}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 to-transparent" />
          </div>

          <div className="absolute inset-0 pointer-events-none flex flex-col" style={{ transformStyle: "preserve-3d" }}>
            
            <motion.div className="relative z-20 px-5 pt-5 sm:px-6 sm:pt-6" style={{ translateZ: badgeZ }}>
              <span className="inline-flex items-center rounded-full border border-white/60 bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#2f6f43] shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] backdrop-blur-md sm:text-xs">
                {badge}
              </span>
            </motion.div>

            <motion.div
              className="relative mx-auto mt-2 h-[160px] w-[160px] sm:mt-4 sm:h-[190px] sm:w-[190px] lg:h-[220px] lg:w-[220px]"
              style={{ translateZ: imageZ }}
            >
              <motion.div className="absolute inset-0" style={{ filter: imageShadow }}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative z-10 mt-auto flex flex-col bg-gradient-to-t from-white/40 to-transparent px-6 pb-6 pt-1 sm:px-7 sm:pb-7" 
              style={{ translateZ: contentZ, transformStyle: "preserve-3d" }}
            >
              <h3 className="drop-shadow-sm text-[20px] font-bold leading-tight tracking-[-0.03em] text-zinc-900 sm:text-[22px] lg:text-[25px]">
                {title}
              </h3>
              <p className="mt-1 text-[13px] font-medium text-zinc-500 sm:text-[14px]">
                {brand}
              </p>

              <div className="mt-5 flex items-center justify-between sm:mt-6">
                <div className="flex items-center gap-1.5">
                  <Star className="h-[18px] w-[18px] fill-zinc-900 text-zinc-900" />
                  <span className="drop-shadow-sm text-[15px] font-bold text-zinc-900 sm:text-[16px]">
                    {rating}
                  </span>
                  <span className="text-[14px] font-medium text-zinc-400 sm:text-[15px]">
                    /5
                  </span>
                </div>
                <span className="text-[12px] font-medium text-zinc-500 sm:text-[13px]">
                  {users}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-zinc-200/80 pt-4 sm:mt-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-[18px] w-[18px] text-[#4E9B5B]" />
                  <span className="text-[12px] font-semibold text-zinc-600 sm:text-[13px]">
                    AI Confidence
                  </span>
                </div>
                <span className="drop-shadow-sm text-[13px] font-bold text-[#4E9B5B] sm:text-[14px]">
                  {confidence}%
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
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
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-12 pl-4 pr-6 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
        {products.map((product, i) => (
          <div key={product.id} className="snap-center py-4">
            <ProductTile {...product} delay={i * 0.08} flat />
          </div>
        ))}
      </div>

      <div
        className="relative hidden h-[600px] w-full items-center justify-start pl-10 pt-10 lg:flex"
        style={{ perspective: 2800 }}
      >
        <div className="relative flex h-full w-full items-center" style={{ transformStyle: "preserve-3d" }}>
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
            className="absolute left-0 top-[45%] z-50 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
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