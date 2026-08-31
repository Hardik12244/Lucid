import { z } from "zod";

export const createSearchHistorySchema = z.object({
  query: z.string().trim().min(1).max(200),
  productId: z.string().optional(),
});

export const saveProductSchema = z.object({
  productId: z.string().min(1),
});