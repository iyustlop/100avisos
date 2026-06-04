# 100avisos

Second-hand motorcycle e-commerce platform.

## Architecture

```
100avisos-front/   React 19 + Vite + MUI 6 + react-router-dom 7   pnpm   :3000
login/             Express 4 auth (plain JS, in-memory users)       npm    :4000
100avisos-ads/     TypeScript + Express skeleton (no source yet)    npm    :3001
```

- Frontend consumes login API (`:4000`) and ads API (`:3001`)
- No database — users are stored in memory inside the login service

## Quick Start

```sh
# Prerequisites: Node.js, pnpm (npm i -g pnpm)

# 1. Install dependencies
cd 100avisos-front && pnpm install
cd ../login && npm install

# 2. Configure login
cd ../login
echo LOGIN_PORT=4000 > .env
echo LOGIN_DECODE_SECRET=mysecret >> .env

# 3. Start both services (two terminals)
# Terminal A
cd 100avisos-front && pnpm dev

# Terminal B
cd login && npm start
```

Open **http://localhost:3000** in a browser.

## Commands

| Package | Command | Description |
|---|---|---|
| `100avisos-front` | `pnpm dev` | Dev server on `:3000` (Vite) |
| `100avisos-front` | `pnpm test` | Vitest (watch mode) |
| `100avisos-front` | `pnpm test run` | Vitest (single run) |
| `100avisos-front` | `pnpm run build` | Production build to `dist/` |
| `100avisos-front` | `pnpm exec tsc` | TypeScript check (no emit) |
| `login` | `npm start` | Express on `:4000` |
| `100avisos-ads` | `npm run tsc` | Compile TypeScript to `build/` |

## API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Log in, returns JWT in `token` response header |
| POST | `/api/auth/new` | Register a new user |

**Auth flow:**
- Passwords are base64-encoded (`btoa()`) on the client
- Login decodes them with `LOGIN_DECODE_SECRET`
- JWT is generated with `crypto.createHmac('sha256')` — no `jsonwebtoken` library
- Frontend stores the token from the `token` header in `localStorage`

## Environment Variables

### `login/.env`

| Variable | Default | Description |
|---|---|---|
| `LOGIN_PORT` | `4000` | Port for the login API |
| `LOGIN_DECODE_SECRET` | — | Secret for decoding base64 passwords |

## Important Notes

- **No docker-compose.yml exists.** Running `docker-compose up --build` will fail
- **login stores users in memory** (`UserRepository`). Restarting the service clears all users. Mongoose is a dependency but is unused
- **100avisos-ads has zero source files.** Only `tsconfig.json` and `package.json` exist
- No CI/CD, linters, or formatters are configured

## Kanban Board

https://trello.com/invite/b/FbP0CzFc/b656eac9304748442ef2e7a8e556c17a/100avisos
