import express from 'express';
import mongoose from 'mongoose';
import { DB_URI } from './utils/config.js';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors';
import usersRouter from './controllers/users.js';
import loginRouter from './controllers/login.js';

const app = express();

(async () => {
  const connection = await mongoose.connect(DB_URI);

  if (connection) console.log('Connected to MongoDB');
})();

app.use(cors());
app.use(express.json());

app.use(morgan('tiny'));

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

export default app;
