import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {IEvent} from "./event.model";

@Injectable()
export class EventService {
  private searchNotification = new Subject<any>();
  searchNotificationObservable$ = this.searchNotification.asObservable();

  getEvents(): Observable<IEvent[]> {
    let subject = new Subject<IEvent[]>();
    setTimeout(() => {subject.next(EVENTS); subject.complete(); },
      100);
    return subject;
  }

  getEvent(id: number) : IEvent {
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event) {
    event.id = 999;
    EVENTS.push(event);
  }

  public activateSearch(searchTerm: string) {
    let results: IEvent[] = [];
    let term = searchTerm.trim().toLocaleLowerCase();
    if(term === "") {
      results = EVENTS;
      this.searchNotification.next({events: results, searchTerm: term});
    } else {
      results = EVENTS.filter(events =>
         events.name.toLocaleLowerCase().indexOf(term) > -1
      );
      this.searchNotification.next({events: results, searchTerm: searchTerm});
    }
  }
}

const EVENTS : IEvent[] = [
  {
    id: 1,
    author: 'Rokas Pokas',
    name: 'Table Tennis',
    sport: 'table-tennis',
    date: new Date('2036/09/05'),
    time: '10:00 am',
    phoneNumber: '866666999',
    price: 20,
    duration: 1,
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    },
    facebookEventUrl: "fb.com/1236544"
  },
  {
    id: 2,
    author: 'Rokas Pokas',
    name: 'Footbal',
    sport: 'football',
    date: new Date('2036/09/05'),
    time: '8:00 am',
    phoneNumber: '866666999',
    duration: 2,
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    }
  },
  {
    id: 3,
    author: 'Rokas Pokas',
    name: 'Basketball',
    sport: 'basketball',
    date: new Date('2036/09/05'),
    time: '12:00 am',
    phoneNumber: '866666999',
    duration: 3,
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    }
  }
];
