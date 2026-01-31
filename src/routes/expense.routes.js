const express = require('express');
const { createExpense } = require('../controllers/expense.controller');

const router = express.Router();

router.post('/expenses', createExpense);

module.exports = router;
