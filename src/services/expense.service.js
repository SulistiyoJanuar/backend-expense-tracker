const createExpense = async ({ title, amount }) => {
  if (!title || !amount) {
    const error = new Error('Title and amount are required');
    error.statusCode = 400;
    throw error;
  }

  const expense = {
    id: Date.now(),
    title,
    amount,
    date: new Date(),
  };

  return expense;
};

module.exports = {
  createExpense,
};
