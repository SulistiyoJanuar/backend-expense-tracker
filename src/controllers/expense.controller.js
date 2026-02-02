const { createExpense } = require('../services/expense.service');
const asyncHandler = require('../middlewares/async-handler.middleware');

const createExpenseController = asyncHandler(async (req, res) => {
  const expense = await createExpense(req.body);
  res.status(201).json({ message: 'Expense created', data: expense });
});

module.exports = {
  createExpenseController,
};
