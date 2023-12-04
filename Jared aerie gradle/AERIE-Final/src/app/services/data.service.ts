// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userData: any;

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  setUserData(data: any) {
    this.userData = data;
    this.dataSubject.next(data);
  }

  getUserData() {
    return this.userData;
  }
}
