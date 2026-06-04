# 100avisos — AGENTS.md

## Paquetes

- `100avisos-front/` — React 19 + Vite + TypeScript + MUI 6 + react-router-dom 7. Usa **pnpm**.
- `login/` — Express 4 auth service (JS plano, no TypeScript). Usa **npm**.
- `100avisos-ads/` — TypeScript + Express ads API (`GET /api/ads`). Usa **npm**.

## Comandos

```sh
# Frontend
cd 100avisos-front && pnpm dev             # Dev en :3000 (Vite)
cd 100avisos-front && pnpm test            # Vitest (watch mode)
cd 100avisos-front && pnpm test run        # Vitest (single run)
cd 100avisos-front && pnpm run build       # Producción a dist/
cd 100avisos-front && pnpm exec tsc        # TypeScript check sin compilar

# Login
cd login && npm start                      # Express en :4000 (node app.js)

# Ads API
cd 100avisos-ads && npm run dev            # Dev en :3001 (ts-node src/app.ts)
cd 100avisos-ads && npm start              # Producción (node build/app.js, compilar antes con npm run build)
cd 100avisos-ads && npm run build          # Compila TypeScript a build/
```

## Arquitectura

- Frontend (`:3000`) → login API (`:4000`) + ads API (`:3001`)
- Login expone `POST /api/auth/login` y `POST /api/auth/new`
- El frontend espera el JWT en el header HTTP `token` (response header)
- Las contraseñas viajan `btoa()` (base64) desde el frontend; el login las desencripta usando `LOGIN_DECODE_SECRET`
- `login/` almacena usuarios **en memoria** (`UserRepository`), no usa MongoDB pese a tener mongoose como dependencia
- JWT se genera con `crypto.createHmac('sha256')` — no usa librería jsonwebtoken
- Auth context en frontend: `src/context/AuthContext.tsx` con `localStorage` para el token

## Setup

```sh
cd login
# Crear .env con:
#   LOGIN_PORT=4000
#   LOGIN_DECODE_SECRET=<tu_secreto>
npm start
```

## Notas

- **No existe docker-compose.yml** a pesar de que README lo menciona — el comando `docker-compose up --build` no funciona
- No hay CI/CD, linters ni formateadores configurados en el repo
- `100avisos-ads/` expone `GET /api/ads` en `:3001`, devuelve array de avisos mock. CORS abierto para desarrollo. Lee `PORT` de `.env` (default 3001)
- `login/` carga `.env` con `dotenv`; solo las variables `LOGIN_PORT` y `LOGIN_DECODE_SECRET` son necesarias
