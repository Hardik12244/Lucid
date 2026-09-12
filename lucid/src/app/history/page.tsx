"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getSearchHistory } from "@/lib/api";
import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";

export default function HistoryPage() {
  const router = useRouter();
  const { data: history, isLoading, isError } = useQuery({
    queryKey: ["searchHistory"],
    queryFn: getSearchHistory,
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#6fce7b]/30">
      <AppNavbar />
      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
        <div className="mb-8 border-b border-white/[0.08] pb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Search History
          </h1>
        </div>
        
        {isLoading ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-zinc-500">Loading history...</p>
          </div>
        ) : isError ? (
          <div className="flex min-h-[40vh] items-center justify-center flex-col gap-4">
            <p className="text-red-400">Failed to load search history.</p>
            <p className="text-sm text-zinc-500">Make sure you are logged in.</p>
          </div>
        ) : !history || history.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center flex-col gap-4">
            <p className="text-zinc-500">You haven't searched for anything yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {history.map((item: any) => (
              <div 
                key={item.id} 
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 cursor-pointer hover:border-white/10 transition-colors"
                onClick={() => {
                  if (item.productId) {
                    router.push(`/product/${item.productId}`);
                  } else {
                    router.push(`/search?q=${encodeURIComponent(item.query)}`);
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{item.query}</h3>
                  <span className="text-sm text-zinc-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
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
