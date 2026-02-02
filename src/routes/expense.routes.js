const express = require('express');
const {
  createExpenseController,
} = require('../controllers/expense.controller');

const router = express.Router();

router.post('/expenses', createExpenseController);

module.exports = router;
