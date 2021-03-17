import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { File } from '@ionic-native/file/ngx';

import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
var p:any
var image
@Component({
  selector: 'app-uploadedfile',
  templateUrl: './uploadedfile.page.html',
  styleUrls: ['./uploadedfile.page.scss'],
})
export class UploadedfilePage implements OnInit {
phase=[]
pdf=""
  platform: any;
  d=false
  b=true;
  t=false
  
  constructor(private authService: AuthService,
    private router: Router,public toastController: ToastController,private previewAnyFile: PreviewAnyFile,private fileOpener: FileOpener,private file: File) { }

    gotouploads(pid){
      console.log(pid);
      this.authService.viewsubmittedphase({"student_id":this.authService.user.id,"phase_id":pid}).subscribe(async (res:any)=>{
        console.log(res)
        //console.log(res[0].media)
        
        //this.saveAndOpenPdf(this.pdf,'mypdf')
        if(res.length>0){
          this.d=true
          console.log(this.d)
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
            message: 'You are not uploaded the file',
            duration: 2000
          });
          toast.present(); 
        }
        
         
       // let p=this.convertBase64ToBlob(this.pdf, 'data:application/pdf;base64')
        //this.fileOpener.open(p, 'application/pdf')
       // console.log(p)
       
       
      })
    }
   
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
  deletemedia(id){
    this.authService.deletemedia({"student_id":this.authService.user.id,"phase_id":id}).subscribe(async (res:any)=>{
      console.log(res)
      image=null
      const toast = await this.toastController.create({
        message: 'File deletd successfully',
        duration: 2000
      });
      toast.present();
      this.ngOnInit()
    })
  }
    uploads(id){
      console.log(id)
      this.authService.submitprojectphase({"student_id":this.authService.user.id,"phase_id":id,"media":image,}).subscribe(async (res:any)=>{
        console.log(res)
        image=null
        const toast = await this.toastController.create({
          message: 'File uploaded successfully',
          duration: 2000
        });
        toast.present();
        this.ngOnInit()
      })
          }

      async encodeImageFileAsURL() {
        console.log("err")
        console.log("err")
        var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
        var filesSelected = document.getElementById("inputFileToLoad")["files"];
        var fileInput = document.getElementById('inputFileToLoad');
        var filePath = fileInput["value"];
        var allowedExtensions = /(\.pdf)$/i;
        if(!allowedExtensions.exec(filePath)){
             //alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
            fileInput["value"] = '';
            
            const toast = await this.toastController.create({
              message: 'Please upload file having extensions .pdf only.',
              duration: 2000
            });
            toast.present();
           return false;
      
        
          }
          else{
            console.log(filesSelected.length)
            if (filesSelected.length > 0) {
              var fileToLoad = filesSelected[0];
        
              var fileReader = new FileReader();
        
              fileReader.onload = function(fileLoadedEvent) {
                var srcData = fileLoadedEvent.target["result"]; // <--- data: base64
                image=srcData;
                console.log(image)
              }
              fileReader.readAsDataURL(fileToLoad);
            }
          }
      }
  ngOnInit() {
    this.authService.viewprojectphasebyid({"phaseid":this.authService.phaseid}).subscribe((res:any)=>{
      console.log(res)
      p=res;
      this.phase=p;
      console.log(res[0].due_date)
      var u=res[0].due_date
     var the_date=Date.parse(u)
      console.log(the_date)
      var d=Date.now();
      console.log(d)
      if(the_date<=d){
        this.b=false
        this.t=true
      }
    })

    this.authService.viewsubmittedphase({"student_id":this.authService.user.id,"phase_id":this.authService.phaseid}).subscribe(async (res:any)=>{
      console.log(res)
      if(res.length>0){
        this.d=true
      }
      else{
        this.d=false
      }
    })

  }

}
