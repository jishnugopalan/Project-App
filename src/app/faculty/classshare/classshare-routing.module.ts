import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasssharePage } from './classshare.page';

const routes: Routes = [
  {
    path: '',
    component: ClasssharePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasssharePageRoutingModule {}
