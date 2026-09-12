"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/lib/api";
import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

function CompareContent() {
  const searchParams = useSearchParams();
  const ids = searchParams.get("ids")?.split(",") || [];

  const { data: products, isLoading } = useQuery({
    queryKey: ["compare", ids],
    queryFn: async () => {
      if (!ids.length) return [];
      const promises = ids.map(id => getProductById(id));
      const results = await Promise.all(promises);
      return results.filter(p => p !== null);
    },
    enabled: ids.length > 0,
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#6fce7b]/30">
      <AppNavbar />
      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
        <div className="mb-8 border-b border-white/[0.08] pb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Compare Products
          </h1>
        </div>

        {ids.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-zinc-500">No products selected for comparison.</p>
          </div>
        ) : isLoading ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-zinc-500">Loading products for comparison...</p>
          </div>
        ) : !products || products.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-red-400">Could not find any of the selected products.</p>
          </div>
        ) : (
          <div className="grid gap-6 overflow-x-auto pb-8" style={{ gridTemplateColumns: `repeat(${products.length}, minmax(280px, 1fr))` }}>
            {products.map((product: any) => (
              <div key={product.id} className="flex flex-col gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-zinc-900">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="h-full w-full object-contain p-4" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-zinc-700">No Image</div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-500">{product.brand || "Unknown"}</h3>
                  <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>
                  <p className="mt-2 text-2xl font-bold">{product.price ? `$${product.price}` : "N/A"}</p>
                </div>

                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Description</h4>
                  <p className="mt-2 text-sm text-zinc-300">{product.description || "No description available."}</p>
                </div>

                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Community Score</h4>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#6fce7b]">
                      {product.stats?.averageRating ? product.stats.averageRating.toFixed(1) : "—"}
                    </span>
                    <span className="text-zinc-500">/ 5</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">
                    Based on {product.stats?.totalReviews || 0} reviews
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <CompareContent />
    </Suspense>
  );
}
