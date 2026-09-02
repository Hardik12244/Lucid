import type { NormalizedProductData } from "../providers/types.js";

export interface AnalysisInput {
  productName: string;

  sources: string[];

  reviews: {
    source: string;
    rating: number | null;
    title: string | null;
    content: string;
  }[];

  stats: {
    totalReviews: number;
    ratedReviews: number;
    averageRating: number | null;
  };
}

const MAX_REVIEWS = 150;

export function buildAnalysisInput(
  data: NormalizedProductData,
): AnalysisInput {
  const usableReviews = data.reviews
    .filter(
      (review) => review.content.trim().length >= 20,
    )
    .slice(0, MAX_REVIEWS);

  const ratedReviews = usableReviews.filter(
    (review) => review.rating !== null,
  );

  const averageRating =
    ratedReviews.length > 0
      ? ratedReviews.reduce(
          (sum, review) => sum + (review.rating ?? 0),
          0,
        ) / ratedReviews.length
      : null;

  return {
    productName: data.productName,

    sources: data.sources,

    reviews: usableReviews.map((review) => ({
      source: review.source,
      rating: review.rating,
      title: review.title,
      content: review.content,
    })),

    stats: {
      totalReviews: usableReviews.length,
      ratedReviews: ratedReviews.length,
      averageRating,
    },
  };
}