import { Router } from "express";

import { requireAuth } from "../middleware/auth.js";

import {
  saveProductController,
  getSavedProductsController,
  unsaveProductController,
} from "../controllers/saved-product.controller.js";

const router = Router();

router.use(requireAuth);

router.post("/", saveProductController);
router.get("/", getSavedProductsController);
router.delete("/:productId", unsaveProductController);

export default router;