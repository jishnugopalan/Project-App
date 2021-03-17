import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyhomepagePage } from './facultyhomepage.page';

const routes: Routes = [
  {
    path: '',
    component: FacultyhomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyhomepagePageRoutingModule {}
