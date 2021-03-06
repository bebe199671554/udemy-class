import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';

// tslint:disable: max-line-length
const routes: Routes = [
  {
    path: 'course',
    component: CoursesListComponent,
  },
  {
    path: 'course/:CourseId',
    component: CoursesDetailComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'course',
  },
  // 暫時用不到layout，故隱藏
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'course',
  //       component: CoursesListComponent,
  //     },
  //     {
  //       path: 'course/:CourseId',
  //       component: CoursesDetailComponent,
  //     },

  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       redirectTo: 'course',
  //     },
  // ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
