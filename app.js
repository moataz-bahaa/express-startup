import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import fs from 'fs';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import errorHandlerMiddleware from './middlewares/error-handler.js';

const app = express();

// middlewares
app.use(cors({ origin: '*' }));
app.use('/public', express.static(path.resolve('public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app routes

// swagger routes
app.use('/docs/json', (req, res) =>
  res.json(JSON.parse(fs.readFileSync(path.resolve('swagger', 'swagger.json'))))
);
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(
    JSON.parse(fs.readFileSync(path.resolve('swagger', 'swagger.json')))
  )
);

// error handler
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
