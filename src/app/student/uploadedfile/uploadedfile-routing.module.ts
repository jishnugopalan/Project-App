import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadedfilePage } from './uploadedfile.page';

const routes: Routes = [
  {
    path: '',
    component: UploadedfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadedfilePageRoutingModule {}
