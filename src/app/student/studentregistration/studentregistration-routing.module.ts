import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentregistrationPage } from './studentregistration.page';

const routes: Routes = [
  {
    path: '',
    component: StudentregistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentregistrationPageRoutingModule {}
