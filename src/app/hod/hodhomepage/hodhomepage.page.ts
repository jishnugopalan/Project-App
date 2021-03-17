import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var p:any
@Component({
  selector: 'app-hodhomepage',
  templateUrl: './hodhomepage.page.html',
  styleUrls: ['./hodhomepage.page.scss'],
})
export class HodhomepagePage implements OnInit {
project=[]
  constructor( private authService: AuthService,
    private router: Router) { }
logout(){
  this.authService.logout()
}
viewproject(id){
  console.log(id)
  this.authService.projectid=id
  this.router.navigateByUrl("/viewproject")
}
  ngOnInit() {
    this.authService.viewdepartment({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.authService.departmentid=res._id
    })
    this.authService.viewproject({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      p=res
      this.project=p
    })
  }

}
