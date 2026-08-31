import prisma from "../lib/prisma.js";

export async function createSearchHistory(
  userId: string,
  query: string,
  productId?: string,
) {
  if (productId) {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }
  }

  return prisma.searchHistory.create({
    data: {
      userId,
      query,
      ...(productId !== undefined && { productId }),
    },
    include: {
      product: true,
    },
  });
}

export async function getSearchHistory(userId: string) {
  return prisma.searchHistory.findMany({
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

export async function deleteSearchHistory(
  userId: string,
  searchId: string,
) {
  return prisma.searchHistory.deleteMany({
    where: {
      id: searchId,
      userId,
    },
  });
}