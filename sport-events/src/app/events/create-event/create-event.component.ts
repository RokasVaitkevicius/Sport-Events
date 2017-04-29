import {Component, OnInit} from '@angular/core';
import {EventService} from "../shared/event.service";
import {Router} from "@angular/router";
import {ISportType} from '../shared/sport-type.model';

@Component({
  selector: 'create-event',
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.css']
})
export class CreateEventComponent implements OnInit{
  isDirty: boolean = true;
  sportTypes: ISportType[];
  constructor(private eventService: EventService, private router: Router) {
  }

  ngOnInit(): void {
    this.eventService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
