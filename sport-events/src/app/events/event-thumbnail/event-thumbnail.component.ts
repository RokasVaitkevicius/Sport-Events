import {Component, OnInit, Input} from '@angular/core';
import {IEvent} from "../shared/event.model";
import {ISportType} from '../shared/sport-type.model';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit{
  @Input() event: IEvent;
  sportTypes: ISportType[];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });
  }

  determineSportType(sportTypeId: number): string {
    if(this.sportTypes !== undefined){
      return this.sportTypes.find(x => x.id === sportTypeId).name;
    }
  }
}
