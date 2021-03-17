import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudenthomepagePageRoutingModule } from './studenthomepage-routing.module';

import { StudenthomepagePage } from './studenthomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudenthomepagePageRoutingModule
  ],
  declarations: [StudenthomepagePage]
})
export class StudenthomepagePageModule {}
