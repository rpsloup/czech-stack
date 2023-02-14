import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

import ideaRouter from './routes/ideaRoutes';

const app = express();
app.use(cors());
app.use(express.json());

// Ports
export const DEFAULT_EXPRESS_PORT = 3001;
export const DEFAULT_POSTGRES_PORT = 5432;

// PostgreSQL Connection
dotenv.config();
export const pool = new Pool({
  host: process.env.DB_HOST ?? 'localhost',
  user: process.env.DB_USER ?? '',
  password: process.env.DB_PASS ?? '',
  database: process.env.DB_NAME ?? '',
  port: Number(process.env.PORT) || DEFAULT_POSTGRES_PORT,
});

// Routes
app.use('/idea', ideaRouter);

const port = process.env.PORT || DEFAULT_EXPRESS_PORT;
app.listen(port, () => {
  console.log(`[STATUS] Listening on port ${port}...`);
});
