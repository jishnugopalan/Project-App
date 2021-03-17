import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfacultyPage } from './addfaculty.page';

const routes: Routes = [
  {
    path: '',
    component: AddfacultyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfacultyPageRoutingModule {}
