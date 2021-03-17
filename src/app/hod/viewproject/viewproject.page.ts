import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var p:any
var ph:any
@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.page.html',
  styleUrls: ['./viewproject.page.scss'],
})
export class ViewprojectPage implements OnInit {
project=[]
phase=[]
  constructor( private authService: AuthService,
    private router: Router) { }
    setascomplete(id){
      console.log(id)
      this.authService.projectcompleted({"projectid":id}).subscribe((res:any)=>{
        console.log(res);
      })
    }
edit(id){
  this.authService.phaseid=id
  this.router.navigateByUrl("/editphase")
}
delete(id){
  console.log(id)
  this.authService.deletephase({"phaseid":id}).subscribe((res:any) => {
    console.log(res)
    this.ngOnInit()
  })
}
  ngOnInit() {
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
