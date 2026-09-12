import prisma from "../lib/prisma.js";

export async function getReviewsByProduct(productId: string) {
  return prisma.review.findMany({
    where: { productId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createReview(data: {
  rating: number;
  title?: string;
  content?: string;
  userId: string;
  productId: string;
}) {
  return prisma.review.create({
    data: {
      rating: data.rating,
      title: data.title ?? null,
      content: data.content ?? null,
      userId: data.userId,
      productId: data.productId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
}

export async function updateReview(
  id: string,
  userId: string,
  data: {
    rating?: number;
    title?: string;
    content?: string;
  }
) {
  // Verify ownership
  const review = await prisma.review.findUnique({ where: { id } });
  if (!review || review.userId !== userId) {
    return null;
  }

  return prisma.review.update({
    where: { id },
    data: {
      ...(data.rating !== undefined && { rating: data.rating }),
      ...(data.title !== undefined && { title: data.title }),
      ...(data.content !== undefined && { content: data.content }),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
}

export async function deleteReview(id: string, userId: string) {
  // Verify ownership
  const review = await prisma.review.findUnique({ where: { id } });
  if (!review || review.userId !== userId) {
    return false;
  }

  await prisma.review.delete({
    where: { id },
  });

  return true;
}
