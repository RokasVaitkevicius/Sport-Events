import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {IEvent, INewEvent} from './event.model';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {AuthService} from '../../user/shared/auth.service';


@Injectable()
export class EventService {
  private searchNotification = new Subject<any>();
  private filterNotification = new Subject<any>();
  private resetEventsNotification = new Subject<any>();
  searchNotificationObservable$ = this.searchNotification.asObservable();
  filterNotificationObservable$ = this.filterNotification.asObservable();
  resetEventsObservable$ = this.resetEventsNotification.asObservable();
    private baseUrl = 'http://localhost:5000';

  constructor(private http: Http,
              private auth: AuthService) {

  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get(this.baseUrl + '/api/events')
      .map((response: Response) => {
        return <IEvent[]>response.json();
      }).catch(this.handleError);
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get(this.baseUrl + '/api/events/' + id)
      .map((response: Response) => {
        return <IEvent>response.json();
      }).catch(this.handleError);
  }

  saveEvent(event: IEvent) {
    console.log(event);
    //event.id = 999;
    EVENTS.push(event);
  }

  saveEvent2(eventForm): Observable<IEvent> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    //event.userId = this.auth.currentUser.id;
    //event.eventDate = new Date(event.eventDate);
    const event: INewEvent = {
      userId: 1,
      name: 'Table Tennis',
      sportTypeId: 1,
      eventDate: new Date('09/05/2036'),
      timeFrom: '10:15',
      timeTill: '12:15',
      phoneNumber: '866666999',
      price: 20,
      location: {
        address: '155-12',
        city: 'Kaunas',
        country: 'Lithuania'
      },
      facebookEventUrl: 'fb.com/1236544',
      description: 'Nice event',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51HEs7T6f2L.jpg',
    };

    return this.http.post(`${this.baseUrl}/api/events`, JSON.stringify(eventForm), options).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  public activateSearch(searchTerm: string) {
    let results: IEvent[] = [];
    let term = searchTerm.trim().toLocaleLowerCase();
    if(term === '') {
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
    results = EVENTS.filter(event => event.sportTypeId === id);
    this.filterNotification.next({events: results, filterName: name});
  }

  resetEvents() {
    this.resetEventsNotification.next({events: EVENTS});
  }

  getEventsByUserId(userId: number): Observable<IEvent[]> {
    return this.http.get(this.baseUrl + '/api/myEvents/' + userId)
      .map((response: Response) => {
        return <IEvent>response.json();
      }).catch(this.handleError);
  }

  updateEvent(formValue: IEvent) {
    let event = EVENTS.find(event => event.eventId === formValue.eventId);
    event = formValue;
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
const EVENTS: IEvent[] = [];
/**const EVENTS: IEvent[] = [
  {
    eventId: 1,
    userId: 1,
    name: 'Table Tennis',
    sportTypeId: 3,
    date: new Date('09/05/2036'),
    timeFrom: '10:15',
    timeTill: '12:15',
    phoneNumber: '866666999',
    price: 20,
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    },
    facebookEventUrl: 'fb.com/1236544',
    voters: ['bradgreen', 'boi', 'kara', 'aaaa'],
    description: 'Nice event',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51HEs7T6f2L.jpg',
    dateUpdated: new Date('05/01/2011')
  },
  {
    eventId: 2,
    userId: 1,
    name: 'Footbal',
    sportTypeId: 2,
    date: new Date('2011/09/05'),
    timeFrom: '10:15',
    timeTill: '12:30',
    phoneNumber: '866666999',
    price: 0,
    location: {
      address: '',
      city: '',
      country: ''
    },
    voters: ['bradgreen', 'boi', 'kara'],
    dateUpdated: new Date('04/01/2017'),
    facebookEventUrl: 'fb.com/1236544',
    description: 'Koool event i love it asdas requiem asdas lasodaosdpas'
  },
  {
    eventId: 3,
    userId: 1,
    name: 'Basketball',
    sportTypeId: 1,
    date: new Date('2013/09/05'),
    timeFrom: '10:15',
    timeTill: '12:20',
    phoneNumber: '866666999',
    price: 5,
    location: {
      address: '155-12',
      city: 'Kaunas',
      country: 'Lithuania'
    },
    voters: ['bradgreen', 'boi', 'kara','kara'],
    dateUpdated: new Date('2017/02/01')
  }
];*/
