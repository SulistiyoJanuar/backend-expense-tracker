const validateExpense = (req, res, next) => {
  const { title, amount } = req.body;
  if (!title || title.trim() === '') {
    return res
      .status(400)
      .json({ success: false, message: 'Title is required' });
  }

  if (typeof amount !== 'number' || amount <= 0) {
    return res
      .status(400)
      .json({ success: false, message: 'Amount must be a positive number' });
  }

  next();
};

export default validateExpense;
