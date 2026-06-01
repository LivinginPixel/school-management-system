import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'sequelize';

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
    return;
  }

  if (err instanceof ValidationError) {
    res.status(400).json({
      success: false,
      message: err.errors.map((e) => e.message).join(', '),
    });
    return;
  }

  console.error(err);
  res.status(500).json({ success: false, message: 'Internal server error' });
};
