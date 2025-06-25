import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const repo = process.env.ENV_REPO
  res.send(`working from ${repo}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});