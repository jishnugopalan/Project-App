import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddphasePage } from './addphase.page';

const routes: Routes = [
  {
    path: '',
    component: AddphasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddphasePageRoutingModule {}
