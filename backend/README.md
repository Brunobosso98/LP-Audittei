# Backend

Backend minimo para receber o formulario da landing page e gravar no PostgreSQL.

## Arquivos

- `src/server.js`: API HTTP
- `sql/demo_requests.sql`: tabela de leads
- `.env.example`: variaveis de ambiente

## Uso

1. Instale dependencias com `npm install`.
2. Crie `backend/.env` com `DATABASE_URL` e `PORT`.
3. Execute o SQL de `backend/sql/demo_requests.sql` no PostgreSQL.
4. Inicie a API com `npm run start`.

## Endpoints

- `GET /api/health`
- `POST /api/demo-requests`
