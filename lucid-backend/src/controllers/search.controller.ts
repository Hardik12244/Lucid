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

    const result = await searchProduct(data.query);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}