import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private urlPath: string = "https://localhost:8080/api/v1/Student";
    currentUser: any;

    constructor(private http: HttpClient) {
      let token = localStorage.getItem('token');
      if (token) {
        let jwt = new JwtHelperService();
        this.currentUser = jwt.decodeToken(token);
      }
    }

    // loginUser(user: any) {
    loginUser(email: string, password: string) {
      return this.http.post(this.urlPath, JSON.stringify({ "email": email, "password": password})).pipe(
      // return this.http.post<any>(this.urlPath + "/login", { email, password }).pipe(
        map((response: any) => {
          let result = response.json();

          if (result && result.token) {
            localStorage.setItem("token", result.token);
            const token = localStorage.getItem("token");

            if(token) {
              let jwt = new JwtHelperService();
              this.currentUser = jwt.decodeToken(token);
              return true;
            }
            else {
              return false;
            }
          }
          else {
            return false;
          }
        }
      ));
    }
  };

