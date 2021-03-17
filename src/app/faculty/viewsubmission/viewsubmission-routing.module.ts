import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsubmissionPage } from './viewsubmission.page';

const routes: Routes = [
  {
    path: '',
    component: ViewsubmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsubmissionPageRoutingModule {}
