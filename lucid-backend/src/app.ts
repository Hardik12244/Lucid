import express from "express";
import cors from "cors";
import helmet from "helmet";

import productRoutes from "./routes/product.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import searchRoutes from "./routes/search.routes.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/products", productRoutes);
app.use("/api/search", searchRoutes);

app.use(errorHandler);

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Lucid API is running",
  });
});

export default app;