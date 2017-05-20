import {Component, OnInit} from '@angular/core';
import {EventService} from "../../microservices/event/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IEvent} from "../../microservices/event/event.model";
import {Subscription} from 'rxjs';
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';
import {IUser} from '../../user/shared/user.model';
import {UserService} from '../../user/shared/user.service';

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  sportTypes: ISportType[];
  users: IUser[];
  searchTerm: string = "";
  filterTerm: string = "";
  private searchSubscription: Subscription;
  private filterSubscription: Subscription;
  private resetSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sportTypeService: SportTypeService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];

    this.sportTypeService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;

      this.events = this.events.map(e => {
        e.sportTypeName = this.determineSportType(e.sportTypeId);
        return e;
      });
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;

      this.events = this.events.map(e => {
        e.authorName = this.determineAuthor(e.userId);
        return e;
      });
    });
    
    if (this.route.snapshot.params['searchTerm']) {
      let term = this.route.snapshot.params['searchTerm'].trim().toLocaleLowerCase();
      if (term === "") {
        this.router.navigate(['/events']);
      } else {
        this.events = this.events.filter(events =>
        events.name.toLocaleLowerCase().indexOf(term) > -1);
      }
      console.log('hello from search');
    } else if (this.route.snapshot.params['categoryId']) {
      let category = Number(this.route.snapshot.params['categoryId']);
      this.events = this.events.filter(event => event.sportTypeId === category);
      console.log('hello from category');
      console.log(this.events);
      console.log(category);
    }


    /**this.resetSubscription = this.eventService.resetEventsObservable$.subscribe((events) => {
      this.events = events.events;
      this.filterTerm = "";
      this.searchTerm = "";
    });

     this.searchSubscription = this.eventService.searchNotificationObservable$.subscribe((searchResults) => {
      this.events = searchResults.events;
      this.searchTerm = searchResults.searchTerm;
      this.filterTerm = "";
    });

     this.filterSubscription = this.eventService.filterNotificationObservable$.subscribe((filterResults) => {
      this.events = filterResults.events;
      this.filterTerm = filterResults.filterName;
      this.searchTerm = "";
    });*/
  }


  determineSportType(sportTypeId: number): string {
    if (this.sportTypes !== undefined) {
      return this.sportTypes.find(x => x.sportTypeId === sportTypeId).name;
    }
  }

  determineAuthor(authorId: number): string {
    if (this.users !== undefined) {
      let foundUser = this.users.find(x => x.id === authorId);
      return `${foundUser.firstName} ${foundUser.lastName}`;
    }
  }
}
