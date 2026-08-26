"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Review = {
  id: string;
  rating: number;
  title: string;
  body: string;
  meta: string;
  logo: string;
  icon: "battery" | "sound" | "gem";
  base: {
    top: string;
    left: string;
    rotateZ: number;
    rotateX: number;
    rotateY: number;
    z: number;
    width: string;
  };
};

const reviews: Review[] = [
  {
    id: "battery",
    rating: 5,
    title: "Battery life is insane!",
    body: "Easily lasts a full day with heavy usage. Best battery performance I've seen on any phone.",
    meta: "Verified Purchase  •  Amazon",
    logo: "/amazon.png",
    icon: "battery",
    base: {
      top: "10px",
      left: "40px",
      rotateZ: 6,
      rotateX: 12,
      rotateY: -18,
      z: 80,
      width: "22rem",
    },
  },
  {
    id: "sound",
    rating: 4.5,
    title: "Perfect for travel",
    body: "The noise cancellation is next level. Flights, cafes, metro—nothing comes through.",
    meta: "Verified Buyer  •  Reddit",
    logo: "/reddit.png",
    icon: "sound",
    base: {
      top: "230px",
      left: "-30px",
      rotateZ: -4,
      rotateX: 10,
      rotateY: 15,
      z: 30,
      width: "22rem",
    },
  },
  {
    id: "value",
    rating: 4.7,
    title: "Value for money",
    body: "Great features at this price. Display and performance are way beyond expectations.",
    meta: "Verified Purchase  •  Flipkart",
    logo: "/flipkart.png",
    icon: "gem",
    base: {
      top: "470px",
      left: "30px",
      rotateZ: 5,
      rotateX: 8,
      rotateY: -10,
      z: 0,
      width: "22rem",
    },
  },
];

function Stars({ rating }: { rating: number }) {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="mb-3 flex items-center gap-1">
      {items.map((n) => {
        const fill = rating >= n ? 1 : rating >= n - 0.5 ? 0.5 : 0;
        return (
          <svg key={n} viewBox="0 0 20 20" className="h-[15px] w-[15px]">
            <defs>
              <linearGradient id={`star-${n}-${rating}`} x1="0" x2="1">
                <stop offset={`${fill * 100}%`} stopColor="#4caf6d" />
                <stop offset={`${fill * 100}%`} stopColor="#d1d1d1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${n}-${rating})`}
              d="M10 1l2.6 5.9 6.4.6-4.9 4.3 1.5 6.2L10 14.9 4.4 18l1.5-6.2L1 7.5l6.4-.6z"
            />
          </svg>
        );
      })}
      <span className="ml-2 text-sm font-semibold text-zinc-500">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function BadgeIcon({ icon }: { icon: Review["icon"] }) {
  if (icon === "battery") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="4" y="7" width="14" height="10" rx="2" stroke="#eafff0" strokeWidth="1.6" />
        <rect x="19" y="10" width="2" height="4" rx="0.6" fill="#eafff0" />
        <rect x="6.3" y="9.3" width="9.4" height="5.4" rx="1" fill="#4caf6d" />
      </svg>
    );
  }
  if (icon === "sound") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M4 10v4h3l4 4V6L7 10H4z" fill="#eafff0" />
        <path d="M15.5 9.2c1.1 1 1.1 4.6 0 5.6" stroke="#eafff0" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 7.2c2.3 2 2.3 7.6 0 9.6" stroke="#eafff0" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M6 9l3-4h6l3 4-6 9-6-9z" fill="#eafff0" />
      <path d="M6 9h12" stroke="#0e2a1c" strokeWidth="0.8" />
    </svg>
  );
}

function CardFace({ review }: { review: Review }) {
  return (
    <div
      className="relative rounded-[20px] p-6 pb-5"
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)",
        border: "1px solid rgba(255,255,255,0.8)",
        boxShadow: "inset 0 1px 2px rgba(255,255,255,1)",
      }}
    >
      <div
        className="absolute right-[20px] top-[20px] flex h-[44px] w-[44px] items-center justify-center rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, #1c5a3a, #0e2a1c 70%, #071c12 100%)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.2)",
        }}
      >
        <BadgeIcon icon={review.icon} />
      </div>

      <Stars rating={review.rating} />

      <h3 className="mb-2 pr-12 text-[20px] font-bold tracking-tight text-zinc-900">
        {review.title}
      </h3>

      <p className="mb-6 pr-2 text-[14px] leading-relaxed text-zinc-600">
        {review.body}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-[12px] font-medium text-zinc-400">
          {review.meta}
        </span>
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
          <Image
            src={review.logo}
            alt={review.meta}
            width={18}
            height={18}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function FloatingCard({
  review,
  tilt,
}: {
  review: Review;
  tilt: { x: number; y: number };
}) {
  const { base } = review;
  const rotateX = base.rotateX + tilt.y;
  const rotateY = base.rotateY + tilt.x;

  return (
    <div
      className="absolute transition-transform duration-300 ease-out"
      style={{
        top: base.top,
        left: base.left,
        width: base.width,
        transformStyle: "preserve-3d",
        transform: `translateZ(${base.z}px) rotateZ(${base.rotateZ}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <div
        className="absolute inset-0 rounded-[20px] bg-[#d4d4d4]"
        style={{ transform: "translateZ(-14px)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
      />
      
      <div
        className="absolute inset-0 rounded-[20px] bg-[#e8e8e8]"
        style={{ transform: "translateZ(-7px)" }}
      />
      
      <div style={{ transform: "translateZ(0px)" }}>
        <CardFace review={review} />
      </div>
    </div>
  );
}

export default function ReviewCards() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 15, y: py * -15 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <>
      <div className="flex flex-col gap-6 lg:hidden py-10 px-4">
        {reviews.map((review) => (
          <div key={review.id} className="mx-auto w-full max-w-sm" style={{ transformStyle: "preserve-3d" }}>
             <div className="relative">
                <div className="absolute inset-0 rounded-[20px] bg-[#d4d4d4] translate-y-2 translate-x-1" />
                <CardFace review={review} />
             </div>
          </div>
        ))}
      </div>

      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative hidden h-[700px] w-full overflow-visible lg:block"
        style={{ perspective: 1500 }}
      >
        <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
          {reviews.map((review) => (
            <FloatingCard key={review.id} review={review} tilt={tilt} />
          ))}
        </div>
      </div>
    </>
  );
}