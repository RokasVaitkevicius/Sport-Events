import {IUser} from './user.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IRegister} from './register.model';
import {RequestOptions, Response, Headers, Http} from '@angular/http';
import {ILogin} from './login.model';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:5001';
  currentUser: IUser;

  constructor(private http: Http) {
  }

  loginUser(loginInfo) : Observable<ILogin>{
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${this.baseUrl}/Account/Login`, JSON.stringify(loginInfo), options).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  registerUser(newUser): Observable<IRegister>{
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${this.baseUrl}/Account/Register`, JSON.stringify(newUser), options).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  //getCurrentUserName(): string {
  //  return `${this.currentUser.firstName} ${this.currentUser.lastName}`
 // }
}
