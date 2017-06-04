import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ILogin} from '../shared/login.model';
import {UserService} from '../shared/user.service';
import {CookieService} from 'ngx-cookie';
import {ToastrService} from 'toastr-ng2';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService,
    private cookieService: CookieService, private toastrService: ToastrService, private authService: AuthService) {

  }

  login(formValues) {

    const login: ILogin = {
      email: formValues.email,
      password: formValues.password
    };

    this.userService.loginUser(login).subscribe(r => {
      if( r !== null) {
        this.cookieService.putObject('user', r);
        this.authService.login();
        this.router.navigate(['events']);
      } else {
        this.toastrService.error('Wrong password or username');
      }
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
