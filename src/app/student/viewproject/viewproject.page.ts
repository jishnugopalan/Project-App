import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var p:any
var ph:any
var f:any
var image
var c:any
@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.page.html',
  styleUrls: ['./viewproject.page.scss'],
})
export class ViewprojectPage implements OnInit {
project=[]
phase=[]
faculty=[]
cls=[]
  constructor( private authService: AuthService,
    private router: Router,public toastController: ToastController) { }
    chat(){
      this.router.navigateByUrl("/studentchat")
      
    }
gotouploads(pid){
  console.log(pid)
  this.authService.phaseid=pid;
   this.router.navigateByUrl("/uploadedfile")
}
//     upload(id){
// console.log(id)
// this.authService.submitprojectphase({"student_id":this.authService.user.id,"phase_id":id,"media":image,}).subscribe(async (res:any)=>{
//   console.log(res)
//   const toast = await this.toastController.create({
//     message: 'File uploaded successfully',
//     duration: 2000
//   });
//   toast.present();
// })
//     }

  ngOnInit() {
    this.authService.viewstudentbyid({"student_id":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      let faculty_id=res[0].faculty_id;
      console.log(faculty_id)
      this.authService.facultyid=faculty_id
      this.authService.viewfacultybyid({"faculty_id":faculty_id}).subscribe((res:any)=>{
        console.log(res)
        f=res
        this.faculty=f
        let fid=res[0].faculty_id;
        this.authService.viewclassshare({"faculty_id":fid,"project_id":this.authService.projectid}).subscribe((res:any)=>{
          console.log(res)
          c=res
          this.cls=c
        })
      })
    })
    this.authService.viewprojectbyid({"projectid":this.authService.projectid}).subscribe((res:any)=>{
      console.log(res)
      p=res
      this.project=p
    })
    this.authService.viewprojectphase({"project_id":this.authService.projectid}).subscribe((res:any)=>{
      console.log(res)
      ph=res
      this.phase=ph
    })
    
  }

}
