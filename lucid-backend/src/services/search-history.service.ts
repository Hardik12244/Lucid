import prisma from "../lib/prisma.js";

export async function createSearchHistory(
  userId: string,
  query: string,
  productId?: string,
) {
  return prisma.searchHistory.create({
    data: {
      userId,
      query,
      ...(productId !== undefined && { productId }),
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