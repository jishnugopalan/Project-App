import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var p:any
@Component({
  selector: 'app-facultyhomepage',
  templateUrl: './facultyhomepage.page.html',
  styleUrls: ['./facultyhomepage.page.scss'],
})
export class FacultyhomepagePage implements OnInit {
project=[]
  constructor(private authService: AuthService,
    private router: Router) { }
logout() {
  this.authService.logout()
}
viewproject(id){
  console.log(id)
  this.authService.projectid=id
  this.router.navigateByUrl("/viewprojectbyfac")
}
  ngOnInit() {
    this.authService.viewfacultybyid({"faculty_id":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res);
      this.authService.departmentid=res[0].department_id
      this.authService.viewprojectbydepartment({"department_id":this.authService.departmentid}).subscribe((res:any)=>{
        console.log(res)
        p=res
        this.project=p
      })
    })
  }

}
