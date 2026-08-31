import prisma from "../lib/prisma.js";

export async function saveProduct(
  userId: string,
  productId: string,
) {
  return prisma.savedProduct.create({
    data: {
      userId,
      productId,
    },
    include: {
      product: true,
    },
  });
}

export async function getSavedProducts(userId: string) {
  return prisma.savedProduct.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function unsaveProduct(
  userId: string,
  productId: string,
) {
  return prisma.savedProduct.deleteMany({
    where: {
      userId,
      productId,
    },
  });
}