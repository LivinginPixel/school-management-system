# Postman Guide

[← Back to README](../README.md)

## Import the collection

1. Open Postman.
2. Click **Import** → select `School_Management_API.postman_collection.json` from the project root.
3. Set the collection variable `base_url` to `http://localhost:3000`.

## Run the server first

```bash
npm run dev
```

## Suggested test order

1. **POST** — Create Student  
2. **GET** — Get All Students  
3. **GET** — Get Student by ID  
4. **PUT** — Update Student  
5. **PATCH** — Patch Student  
6. **DELETE** — Delete Student  

## Screenshots

Postman screenshots for the required CRUD operations (POST, GET, PUT, DELETE) are in [API Reference](api.md).

## Next steps

- [API Reference](api.md)
- [Setup Guide](setup.md)
