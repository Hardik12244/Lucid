"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getSavedProducts } from "@/lib/api";
import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/app/ProductCard";

export default function SavedProductsPage() {
  const router = useRouter();
  const { data: savedProducts, isLoading, isError } = useQuery({
    queryKey: ["savedProducts"],
    queryFn: getSavedProducts,
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#6fce7b]/30">
      <AppNavbar />
      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
        <div className="mb-8 border-b border-white/[0.08] pb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Saved Products
          </h1>
        </div>
        
        {isLoading ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-zinc-500">Loading saved products...</p>
          </div>
        ) : isError ? (
          <div className="flex min-h-[40vh] items-center justify-center flex-col gap-4">
            <p className="text-red-400">Failed to load saved products.</p>
            <p className="text-sm text-zinc-500">Make sure you are logged in.</p>
          </div>
        ) : !savedProducts || savedProducts.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center flex-col gap-4">
            <p className="text-zinc-500">You haven't saved any products yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {savedProducts.map((item: any) => {
              const product = item.product;
              if (!product) return null;
              
              return (
                <div key={item.id} onClick={() => router.push(`/product/${product.id}`)}>
                  <ProductCard
                    product={{
                      id: product.id,
                      title: product.name,
                      brand: product.brand || "Unknown",
                      category: product.category || "General",
                      price: product.price ? `$${product.price}` : "N/A",
                      rating: 0,
                      reviewCount: 0,
                      image: product.imageUrl,
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
