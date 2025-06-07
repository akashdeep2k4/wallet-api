import express from "express";
import {
  createTransection,
  deleteTransaction,
  getAllTransactionsById,
  getSummaryByUserId,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:userId", getAllTransactionsById);

router.post("/", createTransection);

router.delete("/:id", deleteTransaction);

router.get("/summary/:userId", getSummaryByUserId);

export default router;
