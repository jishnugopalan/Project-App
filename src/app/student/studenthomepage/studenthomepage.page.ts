import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var p:any
@Component({
  selector: 'app-studenthomepage',
  templateUrl: './studenthomepage.page.html',
  styleUrls: ['./studenthomepage.page.scss'],
})
export class StudenthomepagePage implements OnInit {
project=[]
  constructor(private authService: AuthService,
    private router: Router) { }
    logout() {
      this.authService.logout()
    }
    viewproject(id){
      console.log(id)
      this.authService.projectid=id
      this.router.navigateByUrl("/viewmyproject")
    }
  ngOnInit() {
    this.authService.viewstudentbyid({"student_id":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res[0].department_id)
      this.authService.departmentid=res[0].department_id
      this.authService.viewprojectbydepartment({"department_id":this.authService.departmentid}).subscribe((res:any)=>{
        console.log(res)
        p=res
        this.project=p
      })
    })
    // this.authService.viewdepartment({"userid":this.authService.user.id}).subscribe((res:any)=>{
    //   console.log(res)
    //   this.authService.departmentid=res._id
    // })
    
  }

}
