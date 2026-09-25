"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { searchProduct } from "@/lib/api";
import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";
import { Suspense, useEffect, useRef } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const router = useRouter();
  const requestId = useRef(
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now()),
  );

  useEffect(() => {
    sessionStorage.removeItem("lucid_search_result");
  }, [query]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", query, requestId.current],
    queryFn: () => searchProduct(query),
    enabled: !!query,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data?.data) {
      sessionStorage.setItem("lucid_search_result", JSON.stringify(data.data));
      router.push("/result");
    }
  }, [data, router]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#6fce7b]/30">
      <AppNavbar />

      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
        <div className="mb-8 border-b border-white/8 pb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Search results for <span className="text-[#6fce7b]">"{query}"</span>
          </h1>
        </div>

        {isLoading ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-zinc-500 animate-pulse">Running AI analysis on product reviews...</p>
          </div>
        ) : isError ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-red-400">Failed to load results. Please try again.</p>
          </div>
        ) : (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-zinc-500">No products found matching "{query}".</p>
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
