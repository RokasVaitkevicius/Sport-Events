import {Component, OnInit} from '@angular/core';
import {EventService} from '../../microservices/event/event.service';
import {Router} from '@angular/router';
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';

@Component({
  selector: 'create-event',
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.css']
})
export class CreateEventComponent implements OnInit{
  isDirty: boolean = true;
  sportTypes: ISportType[];
  constructor(private eventService: EventService,
              private router: Router,
              private sportTypeService: SportTypeService
    ) {
  }

  ngOnInit(): void {
    this.sportTypeService.getSportTypes().subscribe(sportType => {
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
