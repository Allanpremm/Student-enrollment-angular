import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Enrollment } from '../models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrollments: Enrollment[] = [
    {
      id: 1,
      studentId: 1,
      courseId: 1,
      date: new Date("2023-09-01")
    },
    {
      id: 2,
      studentId: 1,
      courseId: 2,
      date: new Date("2023-09-01")
    },
    {
      id: 3,
      studentId: 2,
      courseId: 3,
      date: new Date("2023-09-01")
    }
  ];
  private enrollmentsSubject = new BehaviorSubject<Enrollment[]>([]);

  constructor() {
    this.enrollmentsSubject.next(this.enrollments);
  }

  enrollStudent(studentId: number, courseId: number): Observable<boolean> {
    const newEnrollment: Enrollment = {
      id: this.enrollments.length + 1,
      studentId,
      courseId,
      date: new Date()
    };
    this.enrollments.push(newEnrollment);
    this.enrollmentsSubject.next(this.enrollments);
    return of(true);
  }

  getEnrollments(): Observable<Enrollment[]> {
    return this.enrollmentsSubject.asObservable();
  }

  getEnrollmentsByStudent(studentId: number): Observable<Enrollment[]> {
    return this.enrollmentsSubject.asObservable().pipe(
      map((enrollments: Enrollment[]) => enrollments.filter((e: Enrollment) => e.studentId === studentId))
    );
  }
}