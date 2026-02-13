import express from 'express';
const app = express();
const port = 3000;

import expenseRoutes from './routes/expense.routes.js';
import errorHandler from './middlewares/error-handler.middleware.js';

app.use(express.json());

app.use('/api', expenseRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
