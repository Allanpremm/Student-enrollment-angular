import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Basic programming concepts using Python",
      credits: 3
    },
    {
      id: 2,
      title: "Data Structures",
      description: "Advanced data structures and algorithms",
      credits: 4
    },
    {
      id: 3,
      title: "Web Development",
      description: "Building web applications with HTML, CSS, and JavaScript",
      credits: 3
    },
    {
      id: 4,
      title: "Database Systems",
      description: "Design and implementation of database systems",
      credits: 3
    }
  ];

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }
}