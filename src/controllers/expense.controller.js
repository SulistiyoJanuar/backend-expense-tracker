import { createExpense, getAllExpenses } from '../services/expense.service.js';
import asyncHandler from '../middlewares/async-handler.middleware.js';

const createExpenseController = asyncHandler(async (req, res) => {
  const expense = await createExpense(req.body);
  res.status(201).json({ message: 'Expense created', data: expense });
});

const getAllExpensesController = asyncHandler(async (req, res) => {
  const expenses = await getAllExpenses();
  res.status(200).json({ message: 'Expenses retrieved', data: expenses });
});

export { createExpenseController, getAllExpensesController };
