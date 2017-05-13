import {Component, OnInit} from '@angular/core';
import {EventService} from '../../microservices/event/event.service';
import {Router} from '@angular/router';
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';
import {IEvent} from '../../microservices/event/event.model';
import {AuthService} from '../../user/shared/auth.service';
import {audit} from 'rxjs/operator/audit';

@Component({
  selector: 'create-event',
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.css']
})
export class CreateEventComponent implements OnInit{
  isDirty: boolean = true;
  sportTypes: ISportType[];
  event: any = { location: {} };
  constructor(private eventService: EventService,
              private router: Router,
              private sportTypeService: SportTypeService,
              private auth: AuthService
    ) {
  }

  ngOnInit(): void {
    this.sportTypeService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });
  }

  /**saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    //this.router.navigate(['/events']);
  }*/

  saveEvent(formValues: IEvent) {
    formValues.userId = this.auth.currentUser.id;
    formValues.date = new Date('2017-05-13T08:11:38.478Z');
    console.log(formValues);

    this.eventService.saveEvent2(formValues).subscribe(event => {
      this.router.navigate(['/myEvents']);
      this.isDirty = false;
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
