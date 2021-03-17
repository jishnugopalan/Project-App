import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inside',
    loadChildren: () => import('./pages/inside/inside.module').then( m => m.InsidePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'hodhomepage',
    loadChildren: () => import('./hod/hodhomepage/hodhomepage.module').then( m => m.HodhomepagePageModule)
  },
  {
    path: 'addproject',
    loadChildren: () => import('./hod/addproject/addproject.module').then( m => m.AddprojectPageModule)
  },
  {
    path: 'addphase',
    loadChildren: () => import('./hod/addphase/addphase.module').then( m => m.AddphasePageModule)
  },
  {
    path: 'addfaculty',
    loadChildren: () => import('./hod/addfaculty/addfaculty.module').then( m => m.AddfacultyPageModule)
  },
  {
    path: 'studentregistration',
    loadChildren: () => import('./student/studentregistration/studentregistration.module').then( m => m.StudentregistrationPageModule)
  },
  {
    path: 'studenthomepage',
    loadChildren: () => import('./student/studenthomepage/studenthomepage.module').then( m => m.StudenthomepagePageModule)
  },
  {
    path: 'facultyhomepage',
    loadChildren: () => import('./faculty/facultyhomepage/facultyhomepage.module').then( m => m.FacultyhomepagePageModule)
  },
  {
    path: 'assignstudents',
    loadChildren: () => import('./hod/assignstudents/assignstudents.module').then( m => m.AssignstudentsPageModule)
  },
  {
    path: 'viewproject',
    loadChildren: () => import('./hod/viewproject/viewproject.module').then( m => m.ViewprojectPageModule)
  },
  {
    path: 'viewmyproject',
    loadChildren: () => import('./student/viewproject/viewproject.module').then( m => m.ViewprojectPageModule)
  },
  {
    path: 'viewprojectbyfac',
    loadChildren: () => import('./faculty/viewproject/viewproject.module').then( m => m.ViewprojectPageModule)
  },
  {
    path: 'uploadedfile',
    loadChildren: () => import('./student/uploadedfile/uploadedfile.module').then( m => m.UploadedfilePageModule)
  },
  {
    path: 'viewstudent',
    loadChildren: () => import('./faculty/viewstudent/viewstudent.module').then( m => m.ViewstudentPageModule)
  },
  {
    path: 'viewsubmission',
    loadChildren: () => import('./faculty/viewsubmission/viewsubmission.module').then( m => m.ViewsubmissionPageModule)
  },
  {
    path: 'classshare',
    loadChildren: () => import('./faculty/classshare/classshare.module').then( m => m.ClasssharePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'studentchat',
    loadChildren: () => import('./student/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'editphase',
    loadChildren: () => import('./hod/editphase/editphase.module').then( m => m.EditphasePageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgortpassword/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'viewstudents',
    loadChildren: () => import('./hod/viewstudents/assignstudents.module').then( m => m.AssignstudentsPageModule)
  },
  {
    path: 'viewsdetails',
    loadChildren: () => import('./hod/viewsdetails/assignstudents.module').then( m => m.AssignstudentsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
