const express = require('express');
const app = express();
const port = 3000;

const expenseRoutes = require('./routes/expense.routes');

app.use(express.json());

app.use('/api', expenseRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
