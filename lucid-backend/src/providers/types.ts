export interface RawReview {
  source: string;
  author?: string;
  rating?: number;
  title?: string;
  content: string;
  url?: string;
  publishedAt?: string;
}

export interface ProductSourceResult {
  source: string;
  productName: string;
  productUrl?: string;
  reviews: RawReview[];
}

export interface NormalizedReview {
  source: string;
  author: string | null;
  rating: number | null;
  title: string | null;
  content: string;
  url: string | null;
  publishedAt: string | null;
}

export interface NormalizedProductData {
  productName: string;
  sources: string[];
  reviews: NormalizedReview[];
}

export interface ProductProvider {
  searchProduct(query: string): Promise<ProductSourceResult>;
}