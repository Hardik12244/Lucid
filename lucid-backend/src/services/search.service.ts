import prisma from "../lib/prisma.js";
import { buildAnalysisInput } from "./product-analysis.service.js";
import { analyzeProduct } from "./gemini.service.js";
import type { NormalizedProductData } from "../providers/types.js";

function buildFallbackAnalysis(input: ReturnType<typeof buildAnalysisInput>) {
  const positiveReviews =
    input.stats.ratingDistribution[4] + input.stats.ratingDistribution[5];
  const negativeReviews =
    input.stats.ratingDistribution[1] + input.stats.ratingDistribution[2];
  const totalReviews = Math.max(input.stats.totalReviews, 1);

  const positive = Math.round((positiveReviews / totalReviews) * 100);
  const negative = Math.round((negativeReviews / totalReviews) * 100);
  const neutral = Math.max(0, 100 - positive - negative);

  const average = input.stats.averageRating ?? 0;
  const verdict =
    average >= 4.3
      ? "A strong pick for most buyers based on the review patterns."
      : average >= 3.5
        ? "A decent option with clear strengths and a few tradeoffs."
        : "A mixed product that may be worth a closer look before buying.";

  return {
    summary:
      `Local review analysis for ${input.productName} shows ${positiveReviews} positive reviews and ${negativeReviews} negative reviews out of ${input.stats.totalReviews} total.`,
    verdict,
    pros: [
      "Strong overall user feedback",
      "Helpful review volume from multiple sources",
      "Consistent product sentiment across the available reviews",
    ],
    cons: [
      "AI analysis is unavailable in local fallback mode",
      "Sentiment is derived from review ratings rather than a live LLM summary",
    ],
    sentiment: {
      positive,
      neutral,
      negative,
    },
  };
}

export async function searchProduct(query: string) {
  const product = await prisma.product.findFirst({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { brand: { contains: query, mode: "insensitive" } }
      ]
    },
    include: {
      reviews: true
    }
  });

  if (!product) {
    return null;
  }

  const reviews = product.reviews;

  const normalizedData = {
    productName: product.name,
    sources: Array.from(new Set(reviews.map(r => r.source))),
    reviews: reviews.map(r => ({
      source: r.source,
      author: null,
      rating: r.rating,
      title: r.title,
      content: r.content || "",
      url: null,
      publishedAt: r.createdAt.toISOString()
    }))
  };

  const analysisInput = buildAnalysisInput(normalizedData as any);

  // Development logging to prove Gemini scoping
  console.log(`\n=== DEVELOPMENT LOG: GEMINI PIPELINE ===`);
  console.log(`Product: ${product.name}`);
  console.log(`Number of reviews sent to Gemini: ${analysisInput.reviews.length}`);
  if (analysisInput.reviews && analysisInput.reviews.length > 0) {
    console.log(`Sample review: [${analysisInput.reviews[0]?.source}] ${analysisInput.reviews[0]?.title}`);
  }
  console.log(`==========================================\n`);

  let analysis;

  try {
    analysis = await analyzeProduct(analysisInput);
  } catch (error) {
    console.warn(`Gemini analysis failed for ${product.name}; using fallback analysis.`, error);
    analysis = buildFallbackAnalysis(analysisInput);
  }

  return {
    product: {
      productName: product.name,
      sources: normalizedData.sources,
      imageUrl: product.imageUrl,
      price: product.price,
      brand: product.brand,
      description: product.description,
      category: product.category,
    },
    reviews: normalizedData.reviews,
    stats: analysisInput.stats,
    analysis
  };
}