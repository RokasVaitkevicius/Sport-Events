import { Component } from '@angular/core';
import {EventService} from "../shared/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'create-event',
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.css']
})
export class CreateEventComponent {
  isDirty: boolean = true;
  constructor(private eventService: EventService, private router: Router) {
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
