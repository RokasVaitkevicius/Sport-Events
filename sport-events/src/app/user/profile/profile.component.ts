import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {TOASTR_TOKEN} from "../../shared/toastr.service";
import {Toastr} from "../../shared/toastr.model";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName, [Validators.required,
        Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(
      this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValue) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName);
      this.router.navigate(['events']);
      //this.toastr.success('Profile Saved');
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }


  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }


}
