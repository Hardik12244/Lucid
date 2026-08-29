import { Request, Response } from "express";

export function searchProducts(req: Request, res: Response) {
  const query = req.query.q;

  res.json({
    success: true,
    query,
    message: "Product search endpoint working",
  });
}