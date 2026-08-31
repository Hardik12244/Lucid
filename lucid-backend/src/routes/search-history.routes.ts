import { Router } from "express";

import { requireAuth } from "../middleware/auth.js";

import {
  createSearchHistoryController,
  getSearchHistoryController,
  deleteSearchHistoryController,
} from "../controllers/search-history.controller.js";

const router = Router();

router.use(requireAuth);

router.post("/", createSearchHistoryController);
router.get("/", getSearchHistoryController);
router.delete("/:id", deleteSearchHistoryController);

export default router;