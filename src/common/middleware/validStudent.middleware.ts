import { HttpException, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from 'src/db';

@Injectable()
export class ValidStudentMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('ValidStudentMiddleware is called');
    const studentId = req.params.studentId;
    const studentExist = students.some((student) => student.id === studentId);

    if (!studentExist) {
      throw new HttpException('Student not found', 404);
    }
    next();
  }
}
