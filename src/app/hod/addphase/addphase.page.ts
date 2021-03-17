import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var p:any
@Component({
  selector: 'app-addphase',
  templateUrl: './addphase.page.html',
  styleUrls: ['./addphase.page.scss'],
})
export class AddphasePage implements OnInit {
project=[]
  projectForm: any;
  constructor(public formBuilder:FormBuilder,private authService: AuthService,
    private router: Router,public toastController: ToastController) { }
addProject(){
  console.log(this.projectForm.value)
  this.authService.addprojectphase(this.projectForm.value).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message: 'Project Phase Added Successfully',
      duration: 2000
    });
    toast.present();
    this.router.navigateByUrl("/hodhomepage")
  })
}
  ngOnInit() {
    this.authService.viewproject({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      p=res
      this.project=p
    })
    this.projectForm = this.formBuilder.group({
     // academic_year: ['', [Validators.required]],
      project_id: ['', [Validators.required]],
      phase: ['', [Validators.required]],
      description: ['', [Validators.required]],
      due_date: ['', [Validators.required]],
      





    })
  }

}
