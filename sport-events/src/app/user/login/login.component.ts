import { Component } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {ILogin} from '../shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {

  }

  login(formValues) {
    console.log(formValues);
    const login: ILogin = {
      email: formValues.userName,
      password: formValues.password
    };
    this.authService.loginUser(login).subscribe();
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
