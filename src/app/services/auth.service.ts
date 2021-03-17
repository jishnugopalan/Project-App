
import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
 
const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  a:any
  hodregform:any
  studentregform:any
  departmentid:any
  projectid:any
  phaseid:any
  studentid:any
  facultyid:any
  profile_pic:any
 
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  
  projectcompleted(credentials) {
    return this.http.post(`${this.url}/api/projectcompleted`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  finduser(credentials) {
    return this.http.post(`${this.url}/api/finduser`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  updateduedate(credentials) {
    return this.http.post(`${this.url}/api/updateduedate`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatedescription(credentials) {
    return this.http.post(`${this.url}/api/updatedescription`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatephase(credentials) {
    return this.http.post(`${this.url}/api/updatephase`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletephase(credentials) {
    return this.http.post(`${this.url}/api/deletephase`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateimage(credentials) {
    return this.http.post(`${this.url}/api/updateimage`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatephone(credentials) {
    return this.http.post(`${this.url}/api/updatephone`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateemail(credentials) {
    return this.http.post(`${this.url}/api/updateemail`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatename(credentials) {
    return this.http.post(`${this.url}/api/updatename`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatepassword(credentials) {
    return this.http.post(`${this.url}/api/updatepass`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  checkpassword(credentials) {
    return this.http.post(`${this.url}/api/checkpass`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  sendotp(credentials) {
    return this.http.post(`${this.url}/api/sendotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  checkotp(credentials) {
    return this.http.post(`${this.url}/api/checkotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprofile(credentials) {
    return this.http.post(`${this.url}/api/viewprofile`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmsg(credentials) {
    return this.http.post(`${this.url}/api/viewmsg`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  sendmsg(credentials) {
    return this.http.post(`${this.url}/api/sendmsg`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  deletemedia(credentials) {
    return this.http.post(`${this.url}/api/deletemedia`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deleteshare(credentials) {
    return this.http.post(`${this.url}/api/deleteshare`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewclassshare(credentials) {
    return this.http.post(`${this.url}/api/viewclassshare`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addclassshare(credentials) {
    return this.http.post(`${this.url}/api/addclassshare`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addinternalmark(credentials) {
    return this.http.post(`${this.url}/api/addinternalmark`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewstudentbyfaculty(credentials) {
    return this.http.post(`${this.url}/api/viewstudentbyfaculty`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewsubmittedphase(credentials) {
    return this.http.post(`${this.url}/api/viewsubmittedphase`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprojectphasebyid(credentials) {
    return this.http.post(`${this.url}/api/viewprojectphasebyid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  submitprojectphase(credentials) {
    return this.http.post(`${this.url}/api/submitprojectphase`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprojectphase(credentials) {
    return this.http.post(`${this.url}/api/viewprojectphase`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprojectbyid(credentials) {
    return this.http.post(`${this.url}/api/viewprojectbyid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  assignfaculty(credentials) {
    return this.http.post(`${this.url}/api/assignfaculty`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  viewstudentbydepartment(credentials) {
    return this.http.post(`${this.url}/api/viewstudentbydepartment`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewfaculty(credentials) {
    return this.http.post(`${this.url}/api/viewfaculty`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewfacultybyid(credentials) {
    return this.http.post(`${this.url}/api/viewfacultybyid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprojectbydepartment(credentials) {
    return this.http.post(`${this.url}/api/viewprojectbydepartment`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewstudentbyid(credentials) {
    return this.http.post(`${this.url}/api/viewstudentbyid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addstudent(credentials) {
    return this.http.post(`${this.url}/api/addstudent`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewalldepartment(credentials) {
    return this.http.post(`${this.url}/api/viewalldepartment`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  addfaculty(credentials) {
    return this.http.post(`${this.url}/api/addfaculty`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addprojectphase(credentials) {
    return this.http.post(`${this.url}/api/addprojectphase`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewproject(credentials) {
    return this.http.post(`${this.url}/api/viewproject`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addproject(credentials) {
    return this.http.post(`${this.url}/api/addproject`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewdepartment(credentials) {
    return this.http.post(`${this.url}/api/viewdepartment`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  adddepartment(credentials) {
    return this.http.post(`${this.url}/api/adddepartment`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  register(credentials) {
    return this.http.post(`${this.url}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  login(credentials) {
    return this.http.post(`${this.url}/api/login`, credentials)
      .pipe(
        tap(res => {
          console.log(res);
         
          this.storage.set(TOKEN_KEY, res['token']);
          this.a=res['token'];
          this.user = this.helper.decodeToken(res['token']);
          console.log(this.user);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    console.log(this.authenticationState.value);
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}