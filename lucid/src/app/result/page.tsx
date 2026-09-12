"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { SearchResult } from "@/lib/types";

import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";
import ProductVerdict from "@/components/result/ProductVerdict";
import RatingAnalytics from "@/components/result/RatingAnalytics";
import RealWorldExperience from "@/components/result/RealWorldExperience";
import AskLucid from "@/components/result/AskLucid";
import HistoryAnalytics from "@/components/result/HistoryAnalytics";
import SourcesAndEvidence from "@/components/result/SourcesAndEvidence";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<SearchResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("lucid_search_result");
    if (stored) {
      try {
        setResult(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse search result", e);
      }
    } else {
      router.push("/search");
    }
  }, [router]);

  if (!result) {
    return (
      <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AppNavbar />
          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-zinc-500">Loading AI analysis...</p>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AppNavbar />

        <ProductVerdict result={result} />
        <RatingAnalytics result={result} />
        <SourcesAndEvidence result={result} />
        <RealWorldExperience result={result} />
        <HistoryAnalytics result={result} />
        <AskLucid />

        <Footer />
      </div>
    </main>
  );
}