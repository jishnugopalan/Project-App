import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HodhomepagePage } from './hodhomepage.page';

const routes: Routes = [
  {
    path: '',
    component: HodhomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HodhomepagePageRoutingModule {}
