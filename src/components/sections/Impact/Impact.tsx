"use client";

import LeftContent from "./LeftContent";
import ProductCards from "./ProductCards";
import ReviewCards from "./ReviewCards";
import StatsBar from "./StatsBar";

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-black py-40">

      <div className="absolute inset-0">

        <div
          className="
            absolute
            left-0
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-500/10
            blur-[180px]
          "
        />

        <div
          className=" absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[200px]"
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]

            bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]

            bg-[size:80px_80px]
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <LeftContent />

          <div className="relative h-[720px]">

            <ProductCards />

            <ReviewCards />

          </div>

        </div>

        <StatsBar />

      </div>

    </section>
  );
}