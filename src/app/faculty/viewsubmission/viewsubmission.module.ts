import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewsubmissionPageRoutingModule } from './viewsubmission-routing.module';

import { ViewsubmissionPage } from './viewsubmission.page';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewsubmissionPageRoutingModule
  ],
  providers: [
    
    FileOpener,
    File
   ],
  declarations: [ViewsubmissionPage]
})
export class ViewsubmissionPageModule {}
