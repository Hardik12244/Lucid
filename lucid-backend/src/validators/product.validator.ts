import { z } from "zod";

export const productIdSchema = z.object({
  id: z.string().min(1),
});

export const createProductSchema = z.object({
  name: z.string().trim().min(1).max(200),
  brand: z.string().trim().max(100).optional(),
  category: z.string().trim().max(100).optional(),
  imageUrl: z.string().url().optional(),
});

export const updateProductSchema = createProductSchema.partial();
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;