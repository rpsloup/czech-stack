import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const DEFAULT_PORT = 3001;
const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
  console.log(`[STATUS] Listening on port ${port}...`);
});
