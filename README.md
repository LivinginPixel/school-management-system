# School Management System API

Backend assessment project — a REST API for managing student records.

**Repository:** https://github.com/LivinginPixel/school-management-system

## Tech Stack

- Node.js, Express, TypeScript
- PostgreSQL with Sequelize ORM

## Assessment Requirements

| Requirement | Endpoint | Status |
|-------------|----------|--------|
| Add a new student | `POST /api/students` | Done |
| View all students | `GET /api/students` | Done |
| Update a student record | `PUT /api/students/:id` | Done |
| Delete a student record | `DELETE /api/students/:id` | Done |

**Student fields:** Full Name (`fullName`), Age (`age`), Class (`className`), Gender (`gender`)

Additional endpoints: `GET /api/students/:id`, `PATCH /api/students/:id` (partial update).

## Documentation

| Document | Description |
|----------|-------------|
| [Setup Guide](docs/setup.md) | Install dependencies, configure `.env`, run the server |
| [Database Setup](docs/database.md) | PostgreSQL installation and database creation |
| [API Reference](docs/api.md) | Endpoints, request/response examples, Postman screenshots |
| [Postman Guide](docs/postman.md) | Import collection and test the API |

## Quick Start

```bash
npm install
cp .env.example .env   # edit with your DB credentials
npm run dev
```

Base URL: `http://localhost:3000`

See [Setup Guide](docs/setup.md) and [Database Setup](docs/database.md) for full instructions.

## Project Structure

```
school-management-system/
├── src/
│   ├── controllers/student.controller.ts
│   ├── routes/student.routes.ts
│   ├── models/student.model.ts
│   ├── middleware/errorHandler.ts
│   ├── types/student.types.ts
│   └── app.ts
├── config/database.ts
├── docs/
│   ├── setup.md
│   ├── database.md
│   ├── api.md
│   ├── postman.md
│   └── *.png              # Postman screenshots
├── School_Management_API.postman_collection.json
├── .env.example
├── package.json
└── tsconfig.json
```

## Submission Checklist

- [x] Source code — this repository
- [x] Database setup — [docs/database.md](docs/database.md)
- [x] API documentation — [docs/api.md](docs/api.md) + Postman collection
- [x] Postman screenshots — [docs/api.md](docs/api.md)
- [x] GitHub link — https://github.com/LivinginPixel/school-management-system
