import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT ?? '3001', 10);

app.use(express.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (_req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

interface Ad {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

const ads: Ad[] = [
  { id: '1', title: 'Yamaha MT-07 2023', description: 'Moto seminueva, 5000 km, excelente estado.', createdAt: new Date('2025-11-15').toISOString() },
  { id: '2', title: 'Honda CB500X', description: 'Perfecta para viajes, 12000 km, recién revisada.', createdAt: new Date('2026-01-20').toISOString() },
  { id: '3', title: 'Kawasaki Z900', description: 'Potencia y diseño, 8000 km, única dueña.', createdAt: new Date('2026-03-10').toISOString() },
];

app.get('/api/ads', (_req: Request, res: Response) => {
  res.json(ads);
});

app.listen(PORT, () => {
  console.log(`Ads API running on http://localhost:${PORT}`);
});
