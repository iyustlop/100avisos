import express from 'express';
import typesRouter from './routes/types';

const app = express();

app.use(express.json());
app.use(typesRouter);

app.get('/', (_req, res) => {
  res.send('100avisos-ads backend is running');
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
