import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditphasePage } from './editphase.page';

const routes: Routes = [
  {
    path: '',
    component: EditphasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditphasePageRoutingModule {}
