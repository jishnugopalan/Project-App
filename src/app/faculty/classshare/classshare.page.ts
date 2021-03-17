import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var c;
@Component({
  selector: 'app-classshare',
  templateUrl: './classshare.page.html',
  styleUrls: ['./classshare.page.scss'],
})
export class ClasssharePage implements OnInit {
content=""
cls=[]
  constructor(private authService: AuthService,
    private router: Router,public toastController: ToastController) { }

    deleteshare(id){
      console.log(id)
      this.authService.deleteshare({"shareid":id}).subscribe((res:any) =>{
        console.log(res)
        this.ngOnInit()
      })
    }
  async share(){
  if(this.content.length!=0){
    this.authService.addclassshare({"faculty_id":this.authService.user.id,"content":this.content,"project_id":this.authService.projectid}).subscribe((res:any)=>{
      console.log(res)
      this.ngOnInit()
    })
  }else{
    const toast = await this.toastController.create({
      message: 'Please write something',
      duration: 2000
    });
    toast.present(); 
  }

}

  ngOnInit() {
    this.authService.viewclassshare({"faculty_id":this.authService.user.id,"project_id":this.authService.projectid}).subscribe((res:any)=>{
      console.log(res)
      c=res
      this.cls=c
    })
  }

}
