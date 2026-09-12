import prisma from "../lib/prisma.js";
import { buildAnalysisInput } from "./product-analysis.service.js";
import { analyzeProduct } from "./gemini.service.js";
import type { NormalizedProductData } from "../providers/types.js";

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

  const analysis = await analyzeProduct(analysisInput);

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