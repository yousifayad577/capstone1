import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 
  usersData: any;
  achievements = [];

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers(localStorage.getItem('email')).subscribe((response: any) => {
      if (response.success) {
        // this.dataService.setUserData(response.data);
        this.usersData = response.data;
        this.achievements = response.achievements;
        // this.profile = {
        //   ...this.profile,
        //   ...this.userData,
        //   image: this.userData.image ? `${constants.apiUrls.baseUrl}/${response.data.image}` : '/assets/images/def_profile.png'
        // }
      }
    }, (err) => {
      console.log(err.error)
    })
  }
}

