
"use client";

import LeftContent from "./LeftContent";
import ProductCard from "./ProductCard";
import ReviewCards from "./ReviewCards";
import StatsBar from "./StatsBar";

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-black pb-20 pt-20 select-none">
      <div className="absolute inset-0">
        <div className="absolute -left-44 top-32 h-[720px] w-[720px] rounded-full bg-emerald-500/10 blur-[220px]" />
        <div className="absolute -right-52 -top-40 h-[820px] w-[820px] rounded-full bg-blue-500/10 blur-[260px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.025]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div>
            <LeftContent />
            <div className="relative mt-16 lg:mt-20">
              <ProductCard />
            </div>
          </div>

          <div className="relative lg:h-[760px]">
            <ReviewCards />
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <StatsBar />
        </div>
      </div>
    </section>
  );
}