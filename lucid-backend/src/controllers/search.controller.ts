import type { Request, Response, NextFunction } from "express";

import { searchSchema } from "../validators/search.validator.js";
import { searchProduct } from "../services/search.service.js";

export async function searchController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = searchSchema.parse(req.body);

    const product = await searchProduct(data);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
}