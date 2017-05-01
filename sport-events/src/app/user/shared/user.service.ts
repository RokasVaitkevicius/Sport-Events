import {IUser} from "./user.model";
import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  getUsers(): Observable<IUser[]> {
    let subject = new Subject<IUser[]>();
    setTimeout(() => {subject.next(USERS); subject.complete(); },
      100);
    return subject;
  }
}

const USERS : IUser[] = [
  {
    id: 1,
    userName: "Jjj",
    firstName: 'Jonas',
    lastName: 'Jonaitis'
  }
];
