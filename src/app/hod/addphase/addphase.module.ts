import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddphasePageRoutingModule } from './addphase-routing.module';

import { AddphasePage } from './addphase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddphasePageRoutingModule
  ],
  declarations: [AddphasePage]
})
export class AddphasePageModule {}
