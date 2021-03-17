import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.page.html',
  styleUrls: ['./addproject.page.scss'],
})
export class AddprojectPage implements OnInit {
  projectForm: any;

  constructor(public formBuilder:FormBuilder,private authService: AuthService,
    private router: Router,public toastController: ToastController) { }
addProject(){
  console.log(this.projectForm.value)
  this.authService.addproject({"userid":this.authService.user.id,"department_id":this.authService.departmentid,"academic_year":this.projectForm.value.academic_year,"project_type":this.projectForm.value.project_type}).subscribe(async (res:any)=>{
    console.log(res);
    const toast = await this.toastController.create({
      message: 'Project Added Successfully',
      duration: 2000
    });
    toast.present();
    this.router.navigateByUrl("/hodhomepage")
  
  })
}
  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      academic_year: ['', [Validators.required]],
      project_type: ['', [Validators.required]],

    })
  }

}
