import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {IEvent} from "./event.model";
import {ISportType} from './sport-type.model';

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

  getSportTypes(): Observable<ISportType[]> {
    console.log('hello');
    let subject = new Subject<ISportType[]>();
    setTimeout(() => {subject.next(SPORTTYPES); subject.complete(); },
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

const SPORTTYPES: ISportType[] = [
  {
    id: 1,
    name: "Basketball"
  },
  {
    id: 2,
    name: "Football"
  },
  {
    id: 3,
    name: "Table tennis"
  },
  {
    id: 4,
    name: "Other"
  }
]

const EVENTS : IEvent[] = [
  {
    id: 1,
    author: 'Rokas Pokas',
    name: 'Table Tennis',
    sportType: 3,
    date: new Date('2036/09/05'),
    timeFrom: 10,
    timeTill: 12,
    phoneNumber: '866666999',
    price: 20,
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    },
    facebookEventUrl: "fb.com/1236544",
    voters: ['bradgreen', 'boi', 'kara', 'aaaa']
  },
  {
    id: 2,
    author: 'Rokas Pokas',
    name: 'Footbal',
    sportType: 2,
    date: new Date('2036/09/05'),
    timeFrom: 10,
    timeTill: 12,
    phoneNumber: '866666999',
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    },
    voters: ['bradgreen', 'boi', 'kara']
  },
  {
    id: 3,
    author: 'Rokas Pokas',
    name: 'Basketball',
    sportType: 1,
    date: new Date('2036/09/05'),
    timeFrom: 10,
    timeTill: 12,
    phoneNumber: '866666999',
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    },
    voters: ['bradgreen', 'boi', 'kara']
  }
];
