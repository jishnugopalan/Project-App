import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var p;
@Component({
  selector: 'app-editphase',
  templateUrl: './editphase.page.html',
  styleUrls: ['./editphase.page.scss'],
})
export class EditphasePage implements OnInit {
phase=""
a=false
b=false
c=false
phs:any
desc:any
due:any
  constructor( private authService: AuthService,
    private router: Router) { }

    setphase(){
this.a=true;
    }
    setdesc(){
this.b=true;
    }
    setduedate(){
this.c=true;
    }
    updatephase(){
console.log(this.phs)
if(this.phs.length>0){
  this.authService.updatephase({"phaseid":this.authService.phaseid,"phase":this.phs}).subscribe((res:any)=>{
    console.log(res)
    this.ngOnInit()
  })
}
    }
    updatedesc(){
console.log(this.desc)
if(this.desc.length>0){
  this.authService.updatedescription({"phaseid":this.authService.phaseid,"description":this.desc}).subscribe((res:any)=>{
    console.log(res)
    this.ngOnInit()

  })
}
    }
    updatedue(){
console.log(this.due)
if(this.due.length>0){
  this.authService.updateduedate({"phaseid":this.authService.phaseid,"due_date":this.due}).subscribe((res:any)=>{
    console.log(res)
    this.ngOnInit()

  })
}
    }
  ngOnInit() {
    this.authService.viewprojectphasebyid({"phaseid":this.authService.phaseid}).subscribe((res:any) => {
      console.log(res)
      p=res;
      this.phase=p
    })
  }

}
