import type { NormalizedProductData } from "../providers/types.js";

export interface AnalysisInput {
  productName: string;
  sources: string[];

  reviews: {
    source: string;
    rating: number | null;
    title: string | null;
    content: string;
    publishedAt: string | null;
    url: string | null;
  }[];

  stats: {
    totalReviews: number;
    ratedReviews: number;
    averageRating: number | null;

    ratingDistribution: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
    };

    sourceBreakdown: {
      source: string;
      reviewCount: number;
      percentage: number;
    }[];
  };
}

const MAX_REVIEWS = 150;

export function buildAnalysisInput(
  data: NormalizedProductData,
): AnalysisInput {
  const usableReviews = data.reviews
    .filter(
      (review) =>
        review.content.trim().length >= 20,
    )
    .slice(0, MAX_REVIEWS);

  const ratedReviews = usableReviews.filter(
    (review) => review.rating !== null,
  );

  const averageRating =
    ratedReviews.length > 0
      ? ratedReviews.reduce(
          (sum, review) =>
            sum + (review.rating ?? 0),
          0,
        ) / ratedReviews.length
      : null;

  const ratingDistribution = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  for (const review of ratedReviews) {
    const rating = review.rating;

    if (
      rating !== null &&
      Number.isInteger(rating) &&
      rating >= 1 &&
      rating <= 5
    ) {
      ratingDistribution[
        rating as 1 | 2 | 3 | 4 | 5
      ]++;
    }
  }

  const sourceCounts = new Map<string, number>();

  for (const review of usableReviews) {
    sourceCounts.set(
      review.source,
      (sourceCounts.get(review.source) ?? 0) + 1,
    );
  }

  const totalReviews = usableReviews.length;

  const sourceBreakdown = Array.from(
    sourceCounts.entries(),
  ).map(([source, reviewCount]) => ({
    source,
    reviewCount,
    percentage:
      totalReviews > 0
        ? Math.round(
            (reviewCount / totalReviews) * 100,
          )
        : 0,
  }));

  return {
    productName: data.productName,
    sources: data.sources,

    reviews: usableReviews.map((review) => ({
      source: review.source,
      rating: review.rating,
      title: review.title,
      content: review.content,
      publishedAt: review.publishedAt,
      url: review.url,
    })),

    stats: {
      totalReviews,
      ratedReviews: ratedReviews.length,
      averageRating,

      ratingDistribution,

      sourceBreakdown,
    },
  };
}