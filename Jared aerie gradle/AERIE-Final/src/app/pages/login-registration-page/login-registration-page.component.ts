import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-registration-page',
  templateUrl: './login-registration-page.component.html',
  styleUrls: ['./login-registration-page.component.css']
})
export class LoginRegistrationPageComponent implements OnInit {

  onLogin: boolean = true;
  email: string = "";
  password: string = "";

  signupBody = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.dataService.setUserData({});
  }

  toggleLogin(): void {
    this.onLogin = !this.onLogin;
    console.log("toggle login");
  }

  onLoginClick(): void {
    this.userService.login(this.email, this.password).subscribe((response: any) => {
      if (response.success) {
        // Logged in successfully
        this.dataService.setUserData(response.data);
        this.router.navigate(['/']);
        localStorage.setItem('email', response.data.email);
      }
    }, (err) => {
      this.toastrService.error(err.error.message, 'Login Failed');
    })
  }

  onSignup(): void {
    this.userService.signup(this.signupBody).subscribe((response: any) => {
      if (response.success) {
        this.dataService.setUserData(response.data);
        this.router.navigate(['/']);
        localStorage.setItem('email', response.data.email);
      }
    }, (err) => {
      this.toastrService.error(err.error.message, 'Signup Failed');
    })
  }

}
