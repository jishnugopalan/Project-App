import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasssharePageRoutingModule } from './classshare-routing.module';

import { ClasssharePage } from './classshare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasssharePageRoutingModule
  ],
  declarations: [ClasssharePage]
})
export class ClasssharePageModule {}
