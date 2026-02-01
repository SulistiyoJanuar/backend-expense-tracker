const { createExpense } = require('../services/expense.service');

const createExpenseController = (req, res, next) => {
  try {
    const expense = createExpense(req.body);
    res.status(201).json({ message: 'Expense created', data: expense });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createExpenseController,
};
