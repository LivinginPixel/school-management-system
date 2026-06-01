import { Router } from 'express';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  patchStudent,
  deleteStudent,
} from '../controllers/student.controller';

const router = Router();

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.patch('/:id', patchStudent);
router.delete('/:id', deleteStudent);

export default router;
