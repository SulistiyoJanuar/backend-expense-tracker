const express = require('express');
const app = express();
const port = 3000;

const expenseRoutes = require('./routes/expense.routes');
const errorHandler = require('./middlewares/error-handler.middleware');

app.use(express.json());

app.use('/api', expenseRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
