export interface Review {
  source: string;
  rating: number | null;
  title: string | null;
  content: string;
}

export interface SearchResult {
  product: {
    productName: string;
    sources: string[];
    imageUrl?: string | null;
    price?: number | null;
    brand?: string | null;
    description?: string | null;
    category?: string | null;
  };

  reviews: Review[];

  analysis: {
    summary: string;
    verdict: string;
    pros: string[];
    cons: string[];
    sentiment: {
      positive: number;
      neutral: number;
      negative: number;
    };
  };

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
export interface DBProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number | null;
  description: string | null;
  imageUrl: string | null;
  stats?: {
    totalReviews: number;
    averageRating: number;
    ratingDistribution: Record<1 | 2 | 3 | 4 | 5, number>;
  };
}
