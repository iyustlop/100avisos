"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : '3001', 10);
app.use(express_1.default.json());
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
const ads = [
    { id: '1', title: 'Yamaha MT-07 2023', description: 'Moto seminueva, 5000 km, excelente estado.', createdAt: new Date('2025-11-15').toISOString() },
    { id: '2', title: 'Honda CB500X', description: 'Perfecta para viajes, 12000 km, recién revisada.', createdAt: new Date('2026-01-20').toISOString() },
    { id: '3', title: 'Kawasaki Z900', description: 'Potencia y diseño, 8000 km, única dueña.', createdAt: new Date('2026-03-10').toISOString() },
];
app.get('/api/ads', (_req, res) => {
    res.json(ads);
});
app.listen(PORT, () => {
    console.log(`Ads API running on http://localhost:${PORT}`);
});
