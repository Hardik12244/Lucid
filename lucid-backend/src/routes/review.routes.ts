import { Router } from "express";

import { requireAuth } from "../middleware/auth.js";
import {
  createReviewController,
  deleteReviewController,
  getReviewsController,
  updateReviewController,
} from "../controllers/review.controller.js";

const router = Router();

// Public route to get reviews for a product
router.get("/product/:productId", getReviewsController);

// Protected routes
router.use(requireAuth);

router.post("/", createReviewController);
router.patch("/:id", updateReviewController);
router.delete("/:id", deleteReviewController);

export default router;
