"use client";

import { useEffect, useState } from "react";
import type { SearchResult } from "@/lib/types";

import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";
import AskLucid from "@/components/result/AskLucid";
import HistoryAnalytics from "@/components/result/HistoryAnalytics";
import ProductVerdict from "@/components/result/ProductVerdict";
import RatingAnalytics from "@/components/result/RatingAnalytics";
import RealWorldExperience from "@/components/result/RealWorldExperience";
import SourcesAndEvidence from "@/components/result/SourcesAndEvidence";

export default function ResultPage() {
const [result, setResult] = useState<SearchResult | null>(null);

  useEffect(() => {
    const storedResult = sessionStorage.getItem(
      "lucid-search-result"
    );

    if (storedResult) {
      setResult(JSON.parse(storedResult) as SearchResult);
    }
  }, []);

  if (!result) {
    return (
      <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AppNavbar />

          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-zinc-500">
              Loading result...
            </p>
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

        <RealWorldExperience />

        <HistoryAnalytics />

        <SourcesAndEvidence result={result} />

        <AskLucid />

        <Footer />
      </div>
    </main>
  );
}