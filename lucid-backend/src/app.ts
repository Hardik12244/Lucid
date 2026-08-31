import express from "express";
import cors from "cors";
import helmet from "helmet";

import productRoutes from "./routes/product.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import searchRoutes from "./routes/search.routes.js";
import searchHistoryRoutes from "./routes/search-history.routes.js";
import savedProductRoutes from "./routes/saved-product.routes.js";

import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/search-history", searchHistoryRoutes);
app.use("/api/saved-products", savedProductRoutes);
app.use(errorHandler);

export default app;