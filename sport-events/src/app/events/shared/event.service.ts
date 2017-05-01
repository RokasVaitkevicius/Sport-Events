import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {IEvent} from "./event.model";
import {ISportType} from './sport-type.model';
import {IUser} from '../../user/shared/user.model';

@Injectable()
export class EventService {
  private searchNotification = new Subject<any>();
  private filterNotification = new Subject<any>();
  private resetEventsNotification = new Subject<any>();
  searchNotificationObservable$ = this.searchNotification.asObservable();
  filterNotificationObservable$ = this.filterNotification.asObservable();
  resetEventsObservable$ = this.resetEventsNotification.asObservable();

  getEvents(): Observable<IEvent[]> {
    let subject = new Subject<IEvent[]>();
    setTimeout(() => {subject.next(EVENTS); subject.complete(); },
      100);
    return subject;
  }

  getSportTypes(): Observable<ISportType[]> {
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

  filterEvents(id: number, name: string) {
    let results: IEvent[] = [];
    results = EVENTS.filter(event => event.sportType === id);
    this.filterNotification.next({events: results, filterName: name});
  }

  resetEvents() {
    this.resetEventsNotification.next({events: EVENTS});
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
];

const EVENTS : IEvent[] = [
  {
    id: 1,
    author: 1,
    name: 'Table Tennis',
    sportType: 3,
    date: new Date('2036/09/05'),
    timeFrom: '10:15',
    timeTill: '12:15',
    phoneNumber: '866666999',
    price: 20,
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    },
    facebookEventUrl: "fb.com/1236544",
    voters: ['bradgreen', 'boi', 'kara', 'aaaa'],
    description: 'Nice event',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51HEs7T6f2L.jpg',
    dateUpdated: new Date('2017/05/01')
  },
  {
    id: 2,
    author: 1,
    name: 'Footbal',
    sportType: 2,
    date: new Date('2036/09/05'),
    timeFrom: '10:15',
    timeTill: '12:30',
    phoneNumber: '866666999',
    price: 0,
    voters: ['bradgreen', 'boi', 'kara'],
    dateUpdated: new Date('2017/04/01'),
    facebookEventUrl: "fb.com/1236544",
    description: "Koool event i love it asdas requiem asdas lasodaosdpas"
  },
  {
    id: 3,
    author: 1,
    name: 'Basketball',
    sportType: 1,
    date: new Date('2036/09/05'),
    timeFrom: '10:15',
    timeTill: '12:20',
    phoneNumber: '866666999',
    price: 5,
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    },
    voters: ['bradgreen', 'boi', 'kara'],
    dateUpdated: new Date('2017/02/01')
  }
];
