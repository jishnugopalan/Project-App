import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  activatedRouter: any;
  passwordForm: any;
  first=true
  second=false
  pass1=''
  pass2=''
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
 
  constructor(public loadingController: LoadingController,private formBuilder: FormBuilder,private authService:AuthService,private router:Router,public toastController:ToastController) { }
  
  
 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }
  get password(){
    return this.passwordForm.get('password');
  }
  get repassword(){
    return this.passwordForm.get('repassword');
  }
  public errorMessages1 = {
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', messages: 'password cannot be longer than 8 charetors' }
    ],
    repassword: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', messages: 'password cannot be longer than 8 charetors' }
    ],
    
  };
  public async submitpassword(){
    console.log(this.passwordForm.get('password')) 
    if(this.pass1==this.pass2){
  
    console.log(this.authService.hodregform)
    if(this.authService.hodregform.usertype=='hod'){
      var u=this.authService.hodregform;
     let data=Object.assign(this.authService.hodregform,{"password":this.pass2})
     this.authService.register(data).subscribe((res:any)=>{
       console.log(res)
     let userid=res._id
     this.authService.adddepartment({"userid":userid,"department":this.authService.hodregform.department}).subscribe((res:any)=>{
       console.log(res)
       this.authService.login(data).subscribe();
     })
     
     })


    }
    if(this.authService.hodregform.usertype=='student'){

     // var u=this.authService.studentregform;
      let data=Object.assign(this.authService.hodregform,{"password":this.pass2})
      this.authService.register(data).subscribe((res:any)=>{
        console.log(res)
      let userid=res._id
      this.authService.addstudent({"student_id":userid,"department_id":this.authService.hodregform.department_id}).subscribe((res:any)=>{
        console.log(res)
        this.authService.login(data).subscribe();
      })
      
      })

    }
     
    
     
    }
    else{
     const toast = await this.toastController.create({
       message: 'Please enter the correct password',
       duration: 2000
     });
     toast.present();
    }
    
        
     }
  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
