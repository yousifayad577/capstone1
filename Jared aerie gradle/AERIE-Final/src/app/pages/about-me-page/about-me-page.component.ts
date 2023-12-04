import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/app.constants';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css']
})
export class AboutMePageComponent implements OnInit {

  profile = {
    image: '',
    firstName: '',
    lastName: '',
    email: '',
    major: '',
    interest: '',
    description: ''
  }

  profileImageUrl: string | Blob = '';
  userData: any;

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('email')).subscribe((response: any) => {
      if (response.success) {
        this.dataService.setUserData(response.data);
        this.userData = this.dataService.getUserData();
        this.profile = {
          ...this.profile,
          ...this.userData,
          image: this.userData.image ? `${constants.apiUrls.baseUrl}/${response.data.image}` : '/assets/images/def_profile.png'
        }
      }
    }, (err) => {
      console.log(err.error)
    })
  }

  updateProfile(): void {
    const formData = new FormData();
    formData.append('_id', this.userData._id);
    formData.append('firstName', this.profile.firstName);
    formData.append('lastName', this.profile.lastName);
    formData.append('email', this.profile.email);
    formData.append('major', this.profile.major);
    formData.append('interest', this.profile.interest);
    formData.append('description', this.profile.description);
    if (this.profileImageUrl) {
      formData.append('image', this.profileImageUrl);
    }

    this.userService.updateProfile(formData).subscribe((response: any) => {
      if (response.success) {
        this.dataService.setUserData(response.data);
        this.toastrService.success(response.message, 'Profile Updated');
      }
    }, (err) => {
      this.toastrService.error(err.error.message, 'Failed');
    })
  }

  onFileSelected(event: any): void {
    this.profileImageUrl = event.target.files[0];
    this.profile.image = URL.createObjectURL(event.target.files[0]);
  }
}
