import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {ICheckUser, IRegisterUser} from '../shared/login.model';
import {UserService} from '../shared/user.service';
import {ToastrService} from 'toastr-ng2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private exists: boolean;


  constructor(private userService: UserService, private router: Router, private toastrService: ToastrService) {
  }

  ngOnInit() {
  }

  register(formValues) {
    console.log(formValues);
    const checkUser: ICheckUser = {
      email: formValues.email,
      userName: formValues.username
    };

    this.userService.checkUser(checkUser).subscribe(r =>{
      this.exists = r;

    if (this.exists === true) {
      this.toastrService.error('User with username eixists');
    } else {
      const register: IRegisterUser = {
        email: formValues.email,
        password: formValues.password,
        userName: formValues.username,
        firstName: formValues.firstname,
        lastName: formValues.lastname
      };
      this.userService.registerUser(register).subscribe();

      this.toastrService.success('User registered!');

      this.router.navigate(['events']);
    }
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
