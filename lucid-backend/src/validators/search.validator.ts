import { z } from "zod";

export const searchSchema = z.object({
  query: z
    .string()
    .trim()
    .min(2, "Search query must be at least 2 characters")
    .max(200, "Search query is too long"),
});

export type SearchInput = z.infer<typeof searchSchema>;