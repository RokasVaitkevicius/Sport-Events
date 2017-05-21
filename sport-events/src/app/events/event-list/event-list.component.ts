import {Component, OnInit} from '@angular/core';
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';
import {IUser} from '../../user/shared/user.model';
import {UserService} from '../../user/shared/user.service';
import {IEvent} from '../../microservices/event/event.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../microservices/event/event.service';

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  sportTypes: ISportType[];
  users: IUser[];
  searchTerm = '';
  filterTerm = '';
  private searchSubscription: Subscription;
  private filterSubscription: Subscription;
  private resetSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventService,
              private sportTypeService: SportTypeService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];

    this.sportTypeService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
      this.events = this.mapSportTypes(this.events);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.events = this.mapUsers(this.events);
    });

    this.resetSubscription = this.eventService.resetEventsObservable$.subscribe(() => {
      this.filterTerm = '';
      this.searchTerm = '';
      this.eventService.getEvents().subscribe(e => {
        this.events = e;
        this.events = this.mapUsers(this.events);
        this.events = this.mapSportTypes(this.events);
      });
    });

    this.searchSubscription = this.eventService.searchNotificationObservable$.subscribe((searchTerm) => {
      this.filterTerm = '';
      this.searchTerm = searchTerm;
      this.eventService.getEventsBySearchTerm(searchTerm).subscribe(e => {
        this.events = e;
        this.events = this.mapUsers(this.events);
        this.events = this.mapSportTypes(this.events);
      });
    });

    this.filterSubscription = this.eventService.filterNotificationObservable$.subscribe((sportTypeId) => {
      this.filterTerm = this.determineSportType(sportTypeId);
      this.searchTerm = '';
      this.eventService.getEventsBySportTypeId(sportTypeId).subscribe(e => {
        console.log(e);
        this.events = e;
        this.events = this.mapUsers(this.events);
        this.events = this.mapSportTypes(this.events);
      });
    });
  }

  private mapSportTypes(events: IEvent[]): IEvent[] {
    return events.map(e => {
      e.sportTypeName = this.determineSportType(e.sportTypeId);
      return e;
    });
  }

  private mapUsers(events: IEvent[]): IEvent[] {
    return events.map(e => {
      e.authorName = this.determineAuthor(e.userId);
      return e;
    });
  }

  private determineSportType(sportTypeId: number): string {
    if (this.sportTypes !== undefined) {
      return this.sportTypes.find(x => x.sportTypeId === sportTypeId).name;
    }
  }

  private determineAuthor(authorId: number): string {
    if (this.users !== undefined) {
      const foundUser = this.users.find(x => x.id === authorId);
      return `${foundUser.firstName} ${foundUser.lastName}`;
    }
  }


}
