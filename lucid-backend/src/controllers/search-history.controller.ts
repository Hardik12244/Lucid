import type { Request, Response, NextFunction } from "express";

import {
    createSearchHistory,
    getSearchHistory,
    deleteSearchHistory,
} from "../services/search-history.service.js";

export async function createSearchHistoryController(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const userId = res.locals.user.id;

        const { query, productId } = req.body;

        const history = await createSearchHistory(
            userId,
            query,
            productId,
        );

        res.status(201).json(history);
    } catch (error) {
        next(error);
    }
}

export async function getSearchHistoryController(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const userId = res.locals.user.id;

        const history = await getSearchHistory(userId);

        res.json(history);
    } catch (error) {
        next(error);
    }
}

export async function deleteSearchHistoryController(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const userId = res.locals.user.id;

        const id = req.params.id;

        if (typeof id !== "string") {
            return res.status(400).json({
                message: "Invalid search history ID",
            });
        }

        const result = await deleteSearchHistory(userId, id);

        if (result.count === 0) {
            return res.status(404).json({
                message: "Search history not found",
            });
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
}