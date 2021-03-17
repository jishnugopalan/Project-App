import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var d:any
@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.page.html',
  styleUrls: ['./studentregistration.page.scss'],
})
export class StudentregistrationPage implements OnInit {
  credentialsForm: any;
dep=[]
  constructor(public loadingController: LoadingController,
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router:Router,public toastController: ToastController) { }
    register() {
      console.log(this.credentialsForm.value)
      let data
  
      data=Object.assign({"usertype":"student"},this.credentialsForm.value)
      console.log(data)
      this.authService.hodregform=data
      this.router.navigateByUrl("/password")

      
            
      
      
      
    }
    get name(){
      return this.credentialsForm.get('name');
    }
    get email(){
      return this.credentialsForm.get('email');
    }
    get phone(){
      return this.credentialsForm.get('phone');
    }
    get usertype(){
      return this.credentialsForm.get('usertype');
    }
    get department(){
      return this.credentialsForm.get('department');
    }
    public errorMessages = {
      name: [
        { type: 'required', message: 'Name is required' },
        { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
      ],
      email: [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Please enter a valid email address' }
      ],
      phone: [
        { type: 'required', message: 'Phone number is required' },
        { type: 'pattern', message: 'Please enter a valid phone number' },
        { type: 'maxlength', messages: 'Please enter a valid phone number' }
      ]
    };
  ngOnInit() {
    this.authService.viewalldepartment({}).subscribe((res:any)=>{
      console.log(res)
      d=res
      this.dep=d
    })
    this.credentialsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10)
          
        ]
      ],
      department_id: ['', [Validators.required, Validators.maxLength(100)]],

      
    });
  }

}
