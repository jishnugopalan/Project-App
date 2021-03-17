import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { File } from '@ionic-native/file/ngx';

import { FileOpener } from '@ionic-native/file-opener/ngx';
@Component({
  selector: 'app-viewsubmission',
  templateUrl: './viewsubmission.page.html',
  styleUrls: ['./viewsubmission.page.scss'],
})
export class ViewsubmissionPage implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,public toastController: ToastController,private fileOpener: FileOpener,private file: File) { }
pdf=""
convertBase64ToBlob(b64Data, contentType): Blob {
  contentType = contentType || '';
  const sliceSize = 512;
  b64Data = b64Data.replace(/^[^,]+,/, '');
  b64Data = b64Data.replace(/\s/g, '');
  const byteCharacters = window.atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
       const slice = byteCharacters.slice(offset, offset + sliceSize);
       const byteNumbers = new Array(slice.length);
       for (let i = 0; i < slice.length; i++) {
           byteNumbers[i] = slice.charCodeAt(i);
       }
       const byteArray = new Uint8Array(byteNumbers);
       byteArrays.push(byteArray);
  }
 return new Blob(byteArrays, {type: contentType});
}
  ngOnInit() {
    this.authService.viewsubmittedphase({"student_id":this.authService.studentid,"phase_id":this.authService.phaseid}).subscribe(async (res:any)=>{
      console.log(res)
      //console.log(res[0].media)
      
      //this.saveAndOpenPdf(this.pdf,'mypdf')
      if(res.length>0){
        //this.d=true
       // console.log(this.d)
      this.pdf=res[0].media

        const writeDirectory =  this.file.externalDataDirectory;
        this.file.writeFile(writeDirectory, 'mypdf', this.convertBase64ToBlob(this.pdf, 'data:application/pdf;base64'), {replace: true})
           {
             this.fileOpener.open(writeDirectory + 'mypdf', 'application/pdf')
             console.log("pdf opened")
                 
          }
      }
      else{
        const toast = await this.toastController.create({
          message: 'File Not Submitted',
          duration: 2000
        });
        toast.present(); 
      }
      
    
     
     
    })
  }

}
