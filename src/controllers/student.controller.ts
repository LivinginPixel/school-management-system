import { Request, Response, NextFunction } from 'express';
import { Student } from '../models/student.model';
import { AppError } from '../middleware/errorHandler';
import type { CreateStudentInput, UpdateStudentInput } from '../types/student.types';

const validateStudentInput = (data: Partial<CreateStudentInput>): string | null => {
  if (data.fullName !== undefined && !data.fullName.trim()) {
    return 'Full name is required';
  }
  if (data.age !== undefined && (!Number.isInteger(data.age) || data.age < 1)) {
    return 'Age must be a positive integer';
  }
  if (data.className !== undefined && !data.className.trim()) {
    return 'Class is required';
  }
  if (data.gender !== undefined && !data.gender.trim()) {
    return 'Gender is required';
  }
  return null;
};

export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.body || typeof req.body !== 'object') {
      throw new AppError(
        'Request body is required. Send JSON with Content-Type: application/json',
        400
      );
    }

    const { fullName, age, className, gender } = req.body as CreateStudentInput;

    if (!fullName?.trim() || age === undefined || !className?.trim() || !gender?.trim()) {
      throw new AppError('fullName, age, className, and gender are required', 400);
    }

    const error = validateStudentInput({ fullName, age, className, gender });
    if (error) throw new AppError(error, 400);

    const student = await Student.create({ fullName, age, className, gender });
    res.status(201).json({ success: true, data: student });
  } catch (err) {
    next(err);
  }
};

export const getAllStudents = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const students = await Student.findAll({ order: [['id', 'ASC']] });
    res.json({ success: true, data: students });
  } catch (err) {
    next(err);
  }
};

export const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id as string;
    const student = await Student.findByPk(id);
    if (!student) throw new AppError('Student not found', 404);

    res.json({ success: true, data: student });
  } catch (err) {
    next(err);
  }
};

const applyStudentUpdate = async (
  req: Request,
  res: Response,
  requireAtLeastOneField: boolean
): Promise<void> => {
  const id = req.params.id as string;
  const student = await Student.findByPk(id);
  if (!student) throw new AppError('Student not found', 404);

  if (!req.body || typeof req.body !== 'object') {
    throw new AppError(
      'Request body is required. Send JSON with Content-Type: application/json',
      400
    );
  }

  const updates = req.body as UpdateStudentInput;

  if (requireAtLeastOneField && Object.keys(updates).length === 0) {
    throw new AppError('At least one field is required to patch', 400);
  }

  const error = validateStudentInput(updates);
  if (error) throw new AppError(error, 400);

  await student.update(updates);
  res.json({ success: true, data: student });
};

export const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await applyStudentUpdate(req, res, false);
  } catch (err) {
    next(err);
  }
};

export const patchStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await applyStudentUpdate(req, res, true);
  } catch (err) {
    next(err);
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id as string;
    const student = await Student.findByPk(id);
    if (!student) throw new AppError('Student not found', 404);

    await student.destroy();
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (err) {
    next(err);
  }
};
