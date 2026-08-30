import { Request, Response, NextFunction } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/product.service.js";
import {
  createProductSchema,
  productIdSchema,
  updateProductSchema,
} from "../validators/product.validator.js";

export async function getProductsController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const products = await getProducts();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProductByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = productIdSchema.parse(req.params);

    const product = await getProductById(id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

export async function createProductController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = createProductSchema.parse(req.body);

    const product = await createProduct(data);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateProductController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = updateProductSchema.parse(req.body);
    const { id } = productIdSchema.parse(req.params);

    const product = await updateProduct(id, data);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProductController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = productIdSchema.parse(req.params);

    await deleteProduct(id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}