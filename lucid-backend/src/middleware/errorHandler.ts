import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: "Invalid request data",
      errors: err.issues,
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

export default errorHandler;