"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductById, getProductReviews } from "@/lib/api";

import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";
import ProductVerdict from "@/components/result/ProductVerdict";
import RatingAnalytics from "@/components/result/RatingAnalytics";
import RealWorldExperience from "@/components/result/RealWorldExperience";
import AskLucid from "@/components/result/AskLucid";
import HistoryAnalytics from "@/components/result/HistoryAnalytics";
import ProsConsTerminal from "@/components/result/ProsConsTerminal";
import SourcesAndEvidence from "@/components/result/SourcesAndEvidence";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: productResponse, isLoading: isProductLoading, isError: isProductError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  const product = productResponse?.data;

  const { data: reviewsResponse, isLoading: isReviewsLoading } = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => getProductReviews(id),
    enabled: !!id,
  });

  if (isProductLoading || isReviewsLoading) {
    return (
      <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AppNavbar />
          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-zinc-500">Loading product...</p>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  if (isProductError || !product) {
    return (
      <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AppNavbar />
          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-red-400">Failed to load product or product not found.</p>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  const reviews = reviewsResponse?.data || [];

  const fakeSearchResult = {
    product: {
      productName: product?.name || "",
      sources: ["amazon", "reddit", "youtube", "expert"],
      reviews: reviews.map((r: any) => ({
        source: ["amazon", "reddit", "youtube"][Math.floor(Math.random() * 3)],
        rating: r.rating,
        title: r.title,
        content: r.content,
      }))
    },
    analysis: {
      summary: "Highly recommended by the community with overwhelming positive feedback on build quality and performance.",
      verdict: "GREAT",
      pros: ["Great battery life", "Excellent sound quality", "Comfortable fit"],
      cons: ["High price", "Connectivity issues on Windows"],
      sentiment: { positive: 80, neutral: 10, negative: 10 }
    }
  };

  return (
    <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AppNavbar />

        <ProductVerdict result={fakeSearchResult as any} dbProduct={product} />
        
        {product?.stats && (
          <RatingAnalytics result={fakeSearchResult as any} />
        )}

        <SourcesAndEvidence result={fakeSearchResult as any} />

        <RealWorldExperience />

        <HistoryAnalytics />
        <AskLucid />

        <Footer />
      </div>
    </main>
  );
}