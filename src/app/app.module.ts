import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [StudentModule, TeacherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
