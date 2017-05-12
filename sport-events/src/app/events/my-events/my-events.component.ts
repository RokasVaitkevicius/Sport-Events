import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../user/shared/auth.service';
import {IEvent} from '../../microservices/event/event.model';
import {EventService} from '../../microservices/event/event.service';
import {ActivatedRoute} from '@angular/router';
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  private myEvents: IEvent[];
  private author: string = "";
  sportTypes: ISportType[];


  constructor(private auth: AuthService,
              private eventService: EventService,
              private sportTypeService: SportTypeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //let userId = this.auth.currentUser.eventId;
    //this.myEvents = this.eventService.getEventsByUserId(userId);
    this.sportTypeService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });

    this.eventService.getEventsByUserId(1).subscribe(e => {
      this.myEvents = e;
      this.myEvents.sort((event1, event2) => {
        if(event1.date > event2.date) {
          return 1;
        } else if(event1.date < event2.date) {
          return -1;
        }
        return 0;
      });
    })
    //this.author = this.auth.getCurrentUserName();
    //console.log(this.myEvents);
  }

    onCancelClick(id: number) {
    console.log(`Hello from my events cancel click: ${id}`);
  }

  determineSportType(sportTypeId: number): string {
    if (this.sportTypes !== undefined) {
      return this.sportTypes.find(x => x.sportTypeId === sportTypeId).name;
    }
  }
}
//<session-list [eventId]="event?.eventId" [sortBy]="sortBy" [filterBy]="filterBy" *ngIf="!addMode" [sessions]="event?.sessions"></session-list>
