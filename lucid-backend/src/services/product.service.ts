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
  return prisma.product.findUnique({
    where: { id },
  });
}

export async function createProduct(data: CreateProductInput) {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      brand: data.brand ?? null,
      category: data.category ?? null,
      imageUrl: data.imageUrl ?? null,
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