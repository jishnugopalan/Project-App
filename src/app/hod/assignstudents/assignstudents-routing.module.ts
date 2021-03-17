import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignstudentsPage } from './assignstudents.page';

const routes: Routes = [
  {
    path: '',
    component: AssignstudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignstudentsPageRoutingModule {}
