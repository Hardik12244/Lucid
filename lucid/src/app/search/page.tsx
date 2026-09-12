"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { searchProduct } from "@/lib/api";
import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/app/ProductCard";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchProduct(query),
    enabled: !!query,
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#6fce7b]/30">
      <AppNavbar />

      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
        <div className="mb-8 border-b border-white/[0.08] pb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Search results for <span className="text-[#6fce7b]">"{query}"</span>
          </h1>
        </div>

        {isLoading ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-zinc-500">Searching...</p>
          </div>
        ) : isError ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-red-400">Failed to load results.</p>
          </div>
        ) : data?.data?.items?.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-zinc-500">No products found matching "{query}".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.data?.items?.map((product: any) => (
              <div key={product.id} onClick={() => router.push(`/product/${product.id}`)}>
                <ProductCard
                  product={{
                    id: product.id,
                    title: product.name,
                    brand: product.brand || "Unknown",
                    category: product.category || "General",
                    price: product.price ? `$${product.price}` : "N/A",
                    rating: 0, // We would need stats in search results or just show 0
                    reviewCount: 0,
                    image: product.imageUrl,
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <SearchResults />
    </Suspense>
  );
}
