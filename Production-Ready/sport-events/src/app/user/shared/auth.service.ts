import {IUser} from './user.model';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private cookieService: CookieService) {
  }

  login() {
    this.currentUser = <IUser>this.cookieService.getObject('user');
  }

  isAuthenticated() {
    this.currentUser = <IUser>this.cookieService.getObject('user');
    return !!this.currentUser;
  }

  updateUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    this.cookieService.putObject('user', this.currentUser);
  };

  logout() {
    this.currentUser = null;
    this.cookieService.removeAll();
  }
}
