import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
var a;
var l;
var b
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
profile_pic=""
name=""
pages = []
newMsg='';
m=this.authService.user.id
  f=this.authService.studentid
  constructor(private authService:AuthService,private router:Router) { }

  public sendmsg()
{
  var Dt = Date.now();
  console.log(this.newMsg)
  this.authService.sendmsg({"myid":this.authService.user.id,"friendid":this.authService.studentid,"message":this.newMsg}).subscribe(res=>{
    console.log(res)
    b=[res]
   
       this.pages.push(b[0]);
      this.newMsg=''
    
  })
  
  
  
}
  ngOnInit() {
    this.authService.viewprofile({"userid":this.authService.studentid}).subscribe((res:any) => {
      console.log(res)
      this.profile_pic=res.profile_pic
      this.name=res.name
    })

    this.authService.viewmsg({"myid":this.authService.user.id,"friendid":this.authService.studentid,"myid1":this.authService.studentid,"friendid1":this.authService.user.id}).subscribe(res=>{
      console.log(res)
      a=res;
      l=a.length;
      for(var i=0;i<a.length;i++)
      {
       
       this.pages.push(a[i]);
      }
       
    })
  }

}
