import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UploadedfilePageRoutingModule } from './uploadedfile-routing.module';
import { UploadedfilePage } from './uploadedfile.page';
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
 import { File } from '@ionic-native/file/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadedfilePageRoutingModule
  ],
 providers: [
  PreviewAnyFile,
  FileOpener,
  File
 ],
  declarations: [UploadedfilePage]
})
export class UploadedfilePageModule {}
