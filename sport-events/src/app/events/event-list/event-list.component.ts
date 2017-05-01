import {Component, OnInit} from '@angular/core';
import {EventService} from "../shared/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IEvent} from "../shared/event.model";
import {Subscription} from 'rxjs';

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  searchTerm: string = "";
  filterTerm: string = "";
  private searchSubscription: Subscription;
  private filterSubscription: Subscription;
  private resetSubscription: Subscription;

  constructor(private eventService: EventService, private route: ActivatedRoute,  private router: Router) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];

    if(this.route.snapshot.params['searchTerm']) {
      let term = this.route.snapshot.params['searchTerm'].trim().toLocaleLowerCase();
      if(term === "") {
        this.router.navigate(['/events']);
      } else {
        this.events = this.events.filter(events =>
          events.name.toLocaleLowerCase().indexOf(term) > -1);
      }
      console.log('hello from search');
    } else if(this.route.snapshot.params['categoryId']) {
        let category = Number(this.route.snapshot.params['categoryId']);
        this.events = this.events.filter(event => event.sportType === category);
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
}
