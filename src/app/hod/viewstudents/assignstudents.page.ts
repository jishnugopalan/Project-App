import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var s:any
var f:any
@Component({
  selector: 'app-assignstudents',
  templateUrl: './assignstudents.page.html',
  styleUrls: ['./assignstudents.page.scss'],
})
export class AssignstudentsPage implements OnInit {
student=[]
faculty=[]
student_id=""
faculty_id=""
  constructor(public formBuilder:FormBuilder,private authService: AuthService,
    private router: Router,public toastController: ToastController) { }
    setfac($event){
      console.log("inn")
      console.log($event.target.value)
      this.faculty_id=$event.target.value
      //this.faculty_id=fid
      //console.log(this.faculty_id)

    }
    viewstudent(id){
console.log(id)
this.authService.studentid=id
this.router.navigateByUrl("/viewsdetails")

    }
// assign(id){
//   this.student_id=id
//   console.log(this.student_id,this.faculty_id)
//   this.authService.assignfaculty({"student_id":this.student_id,"faculty_id":this.faculty_id}).subscribe(async (res:any)=>{
//     console.log(res)
//     const toast = await this.toastController.create({
//       message: 'Faculty assigned successfully',
//       duration: 1000
//     });
//     toast.present();
//   })

// }
  ngOnInit() {
    this.authService.viewstudentbydepartment({"department_id":this.authService.departmentid}).subscribe((res:any)=>{
      console.log(res)
      s=res
      this.student=s
    })
    this.authService.viewfaculty({"department_id":this.authService.departmentid}).subscribe((res:any)=>{
      console.log(res)
      f=res
      this.faculty=f
    })
  }

}
