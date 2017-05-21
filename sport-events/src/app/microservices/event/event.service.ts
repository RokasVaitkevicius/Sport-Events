import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {IEvent, INewEvent, IUpdateEvent} from './event.model';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {AuthService} from '../../user/shared/auth.service';


@Injectable()
export class EventService {
  private searchNotification = new Subject<string>();
  searchNotificationObservable$ = this.searchNotification.asObservable();

  private filterNotification = new Subject<number>();
  filterNotificationObservable$ = this.filterNotification.asObservable();

  private resetEventsNotification = new Subject<any>();
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

  getEventsBySearchTerm(searchTerm: string): Observable<IEvent[]> {
    return this.http.get(`${this.baseUrl}/api/events/search/${searchTerm}`)
      .map((response: Response) => {
        return <IEvent[]>response.json();
      }).catch(this.handleError);
  }

  getEventsBySportTypeId(sportTypeId: number): Observable<IEvent[]> {
    return this.http.get(`${this.baseUrl}/api/events/sportType/${sportTypeId}`)
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

  saveEvent(newEvent): Observable<INewEvent> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${this.baseUrl}/api/events`, JSON.stringify(newEvent), options).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  updateEvent(updateEvent, eventId: number): Observable<IUpdateEvent> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.put(`${this.baseUrl}/api/myEvents/${eventId}`, JSON.stringify(updateEvent), options).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  changeEventState(eventId: number): Observable<IEvent> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    console.log(eventId);
    return this.http.put(`${this.baseUrl}/api/events/${eventId}/state`, options).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  public activateSearch(searchTerm: string) {
    this.searchNotification.next(searchTerm);
  }

  filterEvents(sportTypeId: number) {
    this.filterNotification.next(sportTypeId);
  }

  resetEvents() {
    this.resetEventsNotification.next();
  }





  getEventsByUserId(userId: number): Observable<IEvent[]> {
    return this.http.get(this.baseUrl + '/api/myEvents/' + userId)
      .map((response: Response) => {
        return <IEvent>response.json();
      }).catch(this.handleError);
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
