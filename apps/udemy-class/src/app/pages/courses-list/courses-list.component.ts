import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemy-class-course-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('hi')


  }

}
