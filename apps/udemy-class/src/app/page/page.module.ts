import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';


@NgModule({
  declarations: [CourseListComponent, CoursesDetailComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
