import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import * as reviewService from "../services/review.service.js";

const createReviewSchema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().optional(),
  content: z.string().optional(),
  productId: z.string()
});

const updateReviewSchema = z.object({
  rating: z.number().min(1).max(5).optional(),
  title: z.string().optional(),
  content: z.string().optional(),
});

export async function getReviewsController(req: Request, res: Response, next: NextFunction) {
  try {
    const productId = req.params.productId as string;
    const reviews = await reviewService.getReviewsByProduct(productId);
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    next(error);
  }
}

export async function createReviewController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = res.locals.user.id as string;
    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const parsedData = createReviewSchema.parse(req.body);
    const data: any = { ...parsedData, userId };
    Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
    const review = await reviewService.createReview(data);

    res.status(201).json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
}

export async function updateReviewController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = res.locals.user.id as string;
    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const id = req.params.id as string;
    const parsedData = updateReviewSchema.parse(req.body);
    const data: any = { ...parsedData };
    Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);

    const review = await reviewService.updateReview(id, userId, data);

    if (!review) {
       res.status(403).json({ success: false, message: "Not authorized or review not found" });
       return;
    }

    res.status(200).json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
}

export async function deleteReviewController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = res.locals.user.id as string;
    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const id = req.params.id as string;
    const success = await reviewService.deleteReview(id, userId);

    if (!success) {
      res.status(403).json({ success: false, message: "Not authorized or review not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
