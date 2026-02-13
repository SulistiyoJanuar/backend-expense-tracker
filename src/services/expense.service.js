const expenses = [];

const createExpense = async (payload) => {
  const expense = {
    id: Date.now(),
    title: payload.title,
    amount: payload.amount,
    date: new Date(),
  };

  expenses.push(expense);

  return expense;
};

const getAllExpenses = async () => {
  return expenses;
};

export { createExpense, getAllExpenses };
