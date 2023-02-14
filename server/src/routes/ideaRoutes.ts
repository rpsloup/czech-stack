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

ideaRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idea = await pool.query('SELECT * FROM Ideas WHERE idea_id = $1', [
      id,
    ]);
    return res.json(idea?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    return res.json(null);
  }
});

export default ideaRouter;
