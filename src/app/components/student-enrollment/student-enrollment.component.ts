import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseService } from '../../services/course.service';
import { Student } from '../../models/student';
import { Enrollment } from '../../models/enrollment';
import { Course } from '../../models/course';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-enrollment',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.scss']
})
export class StudentEnrollmentComponent implements OnInit {

  student: Student | undefined;
  enrollments: Enrollment[] = [];
  courses: Course[] = [];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private enrollmentService: EnrollmentService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.studentService.getStudentById(id).subscribe(student => this.student = student);
    this.enrollmentService.getEnrollmentsByStudent(id).subscribe(enrollments => {
      this.enrollments = enrollments;
      this.courseService.getCourses().subscribe(allCourses => {
        this.courses = allCourses.filter(c => enrollments.some(e => e.courseId === c.id));
      });
    });
  }
}