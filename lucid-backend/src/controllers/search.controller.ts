import type { Request, Response, NextFunction } from "express";

import { searchSchema } from "../validators/search.validator.js";
import { searchProduct } from "../services/product-search.service.js";

export async function searchController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = searchSchema.parse(req.body);
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;

    const result = await searchProduct(data.query, page, limit);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}