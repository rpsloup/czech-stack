import { Router } from 'express';

import { pool } from '../main';

const ideaRouter = Router();

ideaRouter.get('/', async (_, res) => {
  try {
    const ideas = await pool.query('SELECT * FROM Ideas');
    return res.json(ideas?.rows ?? []);
  } catch (error) {
    console.log(error);
    return res.json([]);
  }
});

export default ideaRouter;
