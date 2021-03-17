import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfacultyPageRoutingModule } from './addfaculty-routing.module';

import { AddfacultyPage } from './addfaculty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddfacultyPageRoutingModule
  ],
  declarations: [AddfacultyPage]
})
export class AddfacultyPageModule {}
