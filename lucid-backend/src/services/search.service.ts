import prisma from "../lib/prisma.js";
import type { SearchInput } from "../validators/search.validator.js";

export async function searchProduct(data: SearchInput) {
  const query = data.query;

  let product = await prisma.product.findFirst({
    where: {
      name: {
        equals: query,
        mode: "insensitive",
      },
    },
  });

  if (!product) {
    product = await prisma.product.create({
      data: {
        name: query,
      },
    });
  }

  return product;
}