# Database Setup

[← Back to README](../README.md)

Tables are created automatically when the server starts (Sequelize `sync`). You only need PostgreSQL and an empty database.

## 1. Install and start PostgreSQL

```bash
sudo systemctl start postgresql
```

## 2. Create database and user

```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE school_db;
CREATE USER school_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE school_db TO school_user;
\q
```

## 3. Verify connection

```bash
psql -U school_user -d school_db -h localhost
```

If you connect successfully, your credentials match what should go in `.env`.

## 4. Confirm tables after first run

Start the server (`npm run dev`), then:

```bash
psql -U school_user -d school_db -h localhost
```

```sql
\dt
SELECT * FROM students;
```

You should see the `students` table with columns: `id`, `fullName`, `age`, `class`, `gender`, `createdAt`, `updatedAt`.

## Next steps

- [Application Setup](setup.md)
- [API Reference](api.md)
