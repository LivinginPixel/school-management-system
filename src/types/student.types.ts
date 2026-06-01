export interface StudentAttributes {
  id: number;
  fullName: string;
  age: number;
  className: string;
  gender: string;
}

export type StudentCreationAttributes = Omit<StudentAttributes, 'id'>;

export interface CreateStudentInput {
  fullName: string;
  age: number;
  className: string;
  gender: string;
}

export type UpdateStudentInput = Partial<CreateStudentInput>;
