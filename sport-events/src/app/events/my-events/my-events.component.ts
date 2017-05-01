import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../user/shared/auth.service';
import {IEvent} from '../shared/event.model';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  private myEvents: IEvent[];
  private arrow: string = '&#9660;';

  constructor(private auth: AuthService,
              private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //let authorId = this.auth.currentUser.id;
    //this.myEvents = this.eventService.getEventsByAuthorId(authorId);
    this.myEvents = this.eventService.getEventsByAuthorId(1);
    //console.log(this.myEvents);
  }

    onCancelClick(id: number) {
    console.log(`Hello from my events cancel click: ${id}`)
  }
}
//<session-list [eventId]="event?.id" [sortBy]="sortBy" [filterBy]="filterBy" *ngIf="!addMode" [sessions]="event?.sessions"></session-list>
