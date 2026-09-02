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
    reviews: Review[];
  };

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
}