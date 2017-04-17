import { Component, OnInit } from '@angular/core';
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../shared/event.model";
import {Subscription} from 'rxjs';

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit{
  events: IEvent[];
  searchTerm: string = "";
  private searchSubscription: Subscription;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    this.searchSubscription = this.eventService.searchNotificationObservable$.subscribe((searchResults) => {
      this.events = searchResults.events;
      this.searchTerm = searchResults.searchTerm;
    });
  }
}
