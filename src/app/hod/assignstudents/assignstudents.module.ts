import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignstudentsPageRoutingModule } from './assignstudents-routing.module';

import { AssignstudentsPage } from './assignstudents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AssignstudentsPageRoutingModule
  ],
  declarations: [AssignstudentsPage]
})
export class AssignstudentsPageModule {}
