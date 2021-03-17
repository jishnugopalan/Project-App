import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewprojectPageRoutingModule } from './viewproject-routing.module';

import { ViewprojectPage } from './viewproject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewprojectPageRoutingModule
  ],
  declarations: [ViewprojectPage]
})
export class ViewprojectPageModule {}
