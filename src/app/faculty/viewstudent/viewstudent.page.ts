import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var ph,s;
@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.page.html',
  styleUrls: ['./viewstudent.page.scss'],
})
export class ViewstudentPage implements OnInit {
phase=""
student=""
mark:any
  
  constructor(private authService: AuthService,
    private router: Router,public toastController: ToastController) { }

   
viewsubmission(id){
console.log(id)
this.authService.phaseid=id;
this.router.navigateByUrl("/viewsubmission")
}
chat(id){
console.log(id)
this.router.navigateByUrl("/chat")
}
  async addinternalmark(){
if(this.mark.length>0){
if(this.mark>20){
  const toast = await this.toastController.create({
    message: 'Please add internal mark out of 20',
    duration: 2000
  });
  toast.present(); 

}
else{
  this.authService.addinternalmark({"student_id":this.authService.studentid,"internal_mark":this.mark}).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message: 'Internal mark added successfully',
      duration: 2000
    });
    toast.present(); 
  this.ngOnInit()

  
  })
}
}
else{
  const toast = await this.toastController.create({
    message: 'Please add internal mark',
    duration: 2000
  });
  toast.present(); 
}

}

  ngOnInit() {
    this.authService.viewprojectphase({"project_id":this.authService.projectid}).subscribe((res:any)=>{
      console.log(res)
      ph=res
      this.phase=ph
      
    })
    this.authService.viewstudentbyid({"student_id":this.authService.studentid}).subscribe((res:any)=>{
      console.log(res)
      s=res
      this.student=s
      
    })
  }

}
