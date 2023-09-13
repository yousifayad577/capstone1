import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  onLogin: boolean = true;

  toggleLogin(): void {
    this.onLogin = !this.onLogin;
    console.log("toggle login");
  }
}
