import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewstudentPageRoutingModule } from './viewstudent-routing.module';

import { ViewstudentPage } from './viewstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewstudentPageRoutingModule
  ],
  declarations: [ViewstudentPage]
})
export class ViewstudentPageModule {}
