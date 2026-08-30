import { Router } from "express";
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProductsController);
router.get("/:id", getProductByIdController);

router.post("/", createProductController);

router.patch("/:id", updateProductController);

router.delete("/:id", deleteProductController);

export default router;