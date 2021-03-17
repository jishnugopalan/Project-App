import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudenthomepagePage } from './studenthomepage.page';

const routes: Routes = [
  {
    path: '',
    component: StudenthomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudenthomepagePageRoutingModule {}
