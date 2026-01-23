import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      department: "Computer Science"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      department: "Mathematics"
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      department: "Physics"
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      department: "Chemistry"
    }
  ];

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  getStudentById(id: number): Observable<Student | undefined> {
    return of(this.students.find(s => s.id === id));
  }
}