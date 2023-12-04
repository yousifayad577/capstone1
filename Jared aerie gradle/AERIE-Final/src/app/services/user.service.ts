import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { constants } from "../app.constants";

@Injectable()
export class UserService {

    
    constructor(private httpClient: HttpClient) { }

    login(email: string, password: string) {
        const loginBody = { email, password };
        return this.httpClient.post(`${constants.apiUrls.baseUrl}${constants.apiUrls.login}`, loginBody).pipe(
            catchError((error: Error) => {
                return throwError(error);
            }));
    }

    signup(signupBody: any) {
        // const loginBody = { email, password };
        return this.httpClient.post(`${constants.apiUrls.baseUrl}${constants.apiUrls.signup}`, signupBody).pipe(
            catchError((error: Error) => {
                return throwError(error);
            }));
    }

    updateProfile(userProfile: any) {
        // const loginBody = { email, password };
        return this.httpClient.post(`${constants.apiUrls.baseUrl}${constants.apiUrls.profile}`, userProfile).pipe(
            catchError((error: Error) => {
                return throwError(error);
            }));
    }

    getUser(email: any) {
        // const loginBody = { email, password };
        return this.httpClient.get(`${constants.apiUrls.baseUrl}${constants.apiUrls.getUser}?email=${email}`).pipe(
            catchError((error: Error) => {
                return throwError(error);
            }));
    }

    getAllUsers(email: any) {
        return this.httpClient.get(`${constants.apiUrls.baseUrl}${constants.apiUrls.getAllUsers}?email=${email}`).pipe(
            catchError((error: Error) => {
                return throwError(error);
            }));
    }
}
