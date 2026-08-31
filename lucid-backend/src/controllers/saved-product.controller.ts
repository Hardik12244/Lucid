import type { Request, Response, NextFunction } from "express";

import {
    saveProduct,
    getSavedProducts,
    unsaveProduct,
} from "../services/saved-product.service.js";

export async function saveProductController(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const userId = res.locals.user.id;
        const { productId } = req.body;

        const saved = await saveProduct(userId, productId);

        res.status(201).json(saved);
    } catch (error) {
        next(error);
    }
}

export async function getSavedProductsController(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const userId = res.locals.user.id;

        const products = await getSavedProducts(userId);

        res.json(products);
    } catch (error) {
        next(error);
    }
}

export async function unsaveProductController(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const userId = res.locals.user.id;

        const productId = req.params.productId;

        if (typeof productId !== "string") {
            return res.status(400).json({
                message: "Invalid product ID",
            });
        }

        const result = await unsaveProduct(userId, productId);

        if (result.count === 0) {
            return res.status(404).json({
                message: "Saved product not found",
            });
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
}