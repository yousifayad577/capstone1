import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { constants } from '../app.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  userData: any;
  userName: string = 'Name';
  image: string = 'assets/images/def_profile.png';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data: any) => {
      this.userData = data;
      this.userName = data.firstName ? `${data.firstName} ${data.lastName}` : 'Name'
      this.image = this.userData.image ? `${constants.apiUrls.baseUrl}/${this.userData.image}` : 'assets/images/def_profile.png';
    });
  }

  

}

