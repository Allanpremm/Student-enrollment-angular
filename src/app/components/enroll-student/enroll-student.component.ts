import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Student } from '../../models/student';
import { Course } from '../../models/course';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatOptionModule],
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.scss']
})
export class EnrollStudentComponent implements OnInit {

  enrollForm: FormGroup;
  students: Student[] = [];
  courses: Course[] = [];
  showSuccess = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {
    this.enrollForm = this.fb.group({
      studentId: ['', Validators.required],
      courseId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      const { studentId, courseId } = this.enrollForm.value;
      this.enrollmentService.enrollStudent(studentId, courseId).subscribe(() => {
        this.showSuccess = true;
        this.enrollForm.reset();
        setTimeout(() => this.showSuccess = false, 3000);
      });
    }
  }
}