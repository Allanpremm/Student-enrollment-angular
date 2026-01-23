import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { EnrollStudentComponent } from './components/enroll-student/enroll-student.component';
import { StudentEnrollmentComponent } from './components/student-enrollment/student-enrollment.component';

export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'enroll', component: EnrollStudentComponent },
  { path: 'student/:id/enrollments', component: StudentEnrollmentComponent }
];
