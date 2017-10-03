import {IUser} from './user.model';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';
import * as auth0 from 'auth0-js';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: IUser;

  auth0 = new auth0.WebAuth({
    clientID: 'TjLRmJl6dmuyh275VCWg300XEgG0uGt0',
    domain: 'eventsdb.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'http://localhost:5000',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor(private cookieService: CookieService, public router: Router) {
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public login(): void {
    this.auth0.authorize();
  }

  /**login() {
    console.log('hello')
    this.currentUser = <IUser>this.cookieService.getObject('user');
  }*/

  updateUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    this.cookieService.putObject('user', this.currentUser);
  }

  /**isAuthenticated() {
    this.currentUser = <IUser>this.cookieService.getObject('user');
    return !!this.currentUser;
  }



  logout() {
    this.currentUser = null;
    this.cookieService.removeAll();
  }*/
}
