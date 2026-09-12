import prisma from "../lib/prisma.js";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "../validators/product.validator.js";
import { getCache, setCache } from "./cache.service.js";
import { deleteCache } from "./cache.service.js";

export async function getProducts() {
  const cacheKey = "products:all";

  const cached = await getCache(cacheKey);

  if (cached) {
    return cached;
  }

  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  await setCache(cacheKey, products, 60);
  
  return products;
}

export async function getProductById(id: string) {
  const cacheKey = `product:${id}`;
  const cached = await getCache(cacheKey);
  if (cached) return cached;

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      reviews: {
        select: { rating: true }
      }
    }
  });

  if (!product) return null;

  const totalReviews = product.reviews.length;
  const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let totalScore = 0;

  product.reviews.forEach((r) => {
    if (r.rating >= 1 && r.rating <= 5) {
      ratingDistribution[r.rating as keyof typeof ratingDistribution]++;
      totalScore += r.rating;
    }
  });

  const averageRating = totalReviews > 0 ? totalScore / totalReviews : null;

  const result = {
    ...product,
    stats: {
      totalReviews,
      averageRating,
      ratingDistribution
    }
  };

  await setCache(cacheKey, result, 60);
  return result;
}

export async function createProduct(data: CreateProductInput) {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      brand: data.brand ?? null,
      category: data.category ?? null,
      imageUrl: data.imageUrl ?? null,
      price: (data as any).price ?? null,
      description: (data as any).description ?? null,
    },
  });

    await deleteCache("products:all");
    return product;
}

export async function updateProduct(
  id: string,
  data: UpdateProductInput
) {
  const product = await prisma.product.update({
    where: { id },
    data: {
      ...(data.name !== undefined && { name: data.name }),
      ...(data.brand !== undefined && { brand: data.brand }),
      ...(data.category !== undefined && { category: data.category }),
      ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl }),
      ...((data as any).price !== undefined && { price: (data as any).price }),
      ...((data as any).description !== undefined && { description: (data as any).description }),
    },
  });

  await deleteCache("products:all");

  return product;
}

export async function deleteProduct(id: string) {
  const product = await prisma.product.delete({
    where: { id },
  });

  await deleteCache("products:all");

  return product;
}