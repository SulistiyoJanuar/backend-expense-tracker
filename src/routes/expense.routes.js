import express from 'express';
import {
  createExpenseController,
  getAllExpensesController,
} from '../controllers/expense.controller.js';
import validateExpense from '../middlewares/validate-expense.middleware.js';

const router = express.Router();

router.post('/expenses', validateExpense, createExpenseController);
router.get('/expenses', getAllExpensesController);

export default router;
