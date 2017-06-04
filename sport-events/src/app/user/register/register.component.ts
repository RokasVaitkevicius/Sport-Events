import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {IRegister} from '../shared/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(formValues) {
    console.log(formValues);
    const register: IRegister = {
      email: formValues.username,
      password: formValues.password
    };
    this.authService.registerUser(register).subscribe();
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
