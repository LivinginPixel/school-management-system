import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/student.routes';
import { errorHandler } from './middleware/errorHandler';
import { connectDB } from '../config/database';
import './models/student.model';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'School Management System API is running!' });
});

app.use(errorHandler);

const startServer = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

export default app;
