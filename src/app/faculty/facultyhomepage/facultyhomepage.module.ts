import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyhomepagePageRoutingModule } from './facultyhomepage-routing.module';

import { FacultyhomepagePage } from './facultyhomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyhomepagePageRoutingModule
  ],
  declarations: [FacultyhomepagePage]
})
export class FacultyhomepagePageModule {}
