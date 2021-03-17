import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentregistrationPageRoutingModule } from './studentregistration-routing.module';

import { StudentregistrationPage } from './studentregistration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StudentregistrationPageRoutingModule
  ],
  declarations: [StudentregistrationPage]
})
export class StudentregistrationPageModule {}
