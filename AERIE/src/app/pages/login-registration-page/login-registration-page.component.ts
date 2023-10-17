import { Component } from '@angular/core';

@Component({
  selector: 'app-login-registration-page',
  templateUrl: './login-registration-page.component.html',
  styleUrls: ['./login-registration-page.component.css']
})
export class LoginRegistrationPageComponent {

   onLogin: boolean = true;

  toggleLogin(): void {
    this.onLogin = !this.onLogin;
    console.log("toggle login");
  }

}
