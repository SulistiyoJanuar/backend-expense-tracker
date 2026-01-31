const createExpense = (req, res) => {
  const { title, amount } = req.body;

  if (!title || !amount) {
    return res.status(400).json({ error: 'Title and amount are required' });
  }

  res.status(201).json({ message: 'Expense created', data: { title, amount } });
};

module.exports = {
  createExpense,
};
