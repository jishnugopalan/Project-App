import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HodhomepagePageRoutingModule } from './hodhomepage-routing.module';

import { HodhomepagePage } from './hodhomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HodhomepagePageRoutingModule
  ],
  declarations: [HodhomepagePage]
})
export class HodhomepagePageModule {}
