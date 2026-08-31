import type { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth.js";

export async function requireAuth(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const headers = new Headers();

        for (const [key, value] of Object.entries(req.headers)) {
            if (value !== undefined) {
                headers.set(key, Array.isArray(value) ? value.join(", ") : value);
            }
        }

        const session = await auth.api.getSession({
            headers,
        });

        if (!session) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        res.locals.user = session.user;

        next();
    } catch (error) {
        next(error);
    }
}