import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditphasePageRoutingModule } from './editphase-routing.module';

import { EditphasePage } from './editphase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditphasePageRoutingModule
  ],
  declarations: [EditphasePage]
})
export class EditphasePageModule {}
