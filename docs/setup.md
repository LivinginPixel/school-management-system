# Setup Guide

[← Back to README](../README.md)

## Prerequisites

- Node.js 18+
- PostgreSQL (see [Database Setup](database.md))

## 1. Install dependencies

```bash
npm install
```

## 2. Environment variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
PORT=3000
DB_NAME=school_db
DB_USER=school_user
DB_PASSWORD=your_password
DB_HOST=localhost
```

## 3. Run the server

**Development** (auto-reload):

```bash
npm run dev
```

**Production:**

```bash
npm run build
npm start
```

## Expected output

```
Database connected successfully
Server running on port 3000
```

Base URL: `http://localhost:3000`

Tables are created automatically on first run — no manual SQL migrations needed.

## Next steps

- [Test with Postman](postman.md)
- [API Reference](api.md)
