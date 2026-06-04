import { Router } from 'express';
import { TypeItem } from '../types';
import { verifyJwt } from '../middleware/authMiddleware';

const router = Router();

const typeItems: TypeItem[] = [
  { id: '1', name: 'Compra', description: 'Anuncios para compra de productos o servicios' },
  { id: '2', name: 'Venta', description: 'Anuncios para venta de productos o servicios' },
  { id: '3', name: 'Intercambio', description: 'Anuncios para intercambio o trueque' },
];

router.get('/types', verifyJwt, (_req, res) => {
  res.json({ types: typeItems });
});

export default router;
