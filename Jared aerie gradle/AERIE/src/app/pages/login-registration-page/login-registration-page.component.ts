import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-registration-page',
  templateUrl: './login-registration-page.component.html',
  styleUrls: ['./login-registration-page.component.css']
})
export class LoginRegistrationPageComponent {

  email: string = "";
  password: string = "";
  onLogin: boolean = true;
  invalidLogin: boolean = false;
  loginUserData = {};

  constructor(private router: Router, private _auth: AuthService) {}

  loginUser() {
    this.loginUserData  = {"email": this.email, "password": this.password};
    // console.log(this.loginUserData)
    // this._auth.loginUser(this.loginUserData)
    this._auth.loginUser(this.email, this.password)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
 // this.authService.login(this.email, this.password)
    //   .subscribe((result: any) => {
    //     if(result) {
    //       console.log(result);
    //       // this.router.navigate(['']);
    //     }
    //     else {
    //       console.log(result);
    //       this.invalidLogin = true;
    //     }
    //   });
  toggleLogin(): void {
    this.onLogin = !this.onLogin;
    console.log("toggle login");
  }
}
