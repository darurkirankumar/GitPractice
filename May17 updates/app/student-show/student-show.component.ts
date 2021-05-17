import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  students= [
    new Student(1,'Harish','Kumar','Vizag',7.9),
    new Student(2,'Kumar','Polam','manubole',10),
    new Student(3,'Venki','Bana','Bananapalli',7.0),
    new Student(4,'Tony','Stark','Base',9.9),
    new Student(5,'Steve','Roger','Avengers',7.9),
    new Student(6,'Natasha','Black','Squad',8.8),

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
