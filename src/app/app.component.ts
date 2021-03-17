import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  h=false;
  f=false;
  s=false;
  profile_pic:any
  name:any
  public hodPages = [
    { title: 'Home', url: 'hodhomepage', icon: 'home' },
    { title: 'Add Project', url: 'addproject', icon: 'reader' },
    { title: 'Add Phase', url: 'addphase', icon: 'book' },

    { title: 'Add Faculty', url: 'addfaculty', icon: 'person-add' },
    { title: 'Assign Students', url: 'assignstudents', icon: 'people' },

    { title: 'View Students', url: 'viewstudents', icon: 'eye' },
   
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },




  ];
  public studentPages = [
    { title: 'Home', url: 'studenthomepage', icon: 'home' },
   
   
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },


  ];
  public facultyPages = [
    { title: 'Home', url: 'facultyhomepage', icon: 'home' },
   
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },


  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state => {
        if (state) {
        console.log("user is "+this.authService.user.email,this.authService.user.usertype,this.authService.user.profile_pic)
        this.authService.viewprofile({"userid":this.authService.user.id}).subscribe((res:any) =>{
          console.log(res)
          this.authService.profile_pic=res.profile_pic
          this.profile_pic=this.authService.profile_pic
        })
        
        this.name=this.authService.user.name
        if(this.authService.user.usertype=='hod'){
          this.h=true
          this.f=false
          this.s=false
            this.router.navigate(['hodhomepage']);
        }
        else  if(this.authService.user.usertype=='student'){
          this.h=false
          this.f=false
          this.s=true
            this.router.navigate(['studenthomepage']);
        }
        else if(this.authService.user.usertype=='faculty'){
          this.h=false
          this.s=false
          this.f=true
          this.router.navigate(['facultyhomepage']);

        }
        
        } else {
          this.router.navigate(['home']);
        }
    });
  });
}
}
