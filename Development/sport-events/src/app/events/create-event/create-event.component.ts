import {Component, OnInit} from '@angular/core';
import {EventService} from '../../microservices/event/event.service';
import {Router} from '@angular/router';
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';
import {INewEvent} from '../../microservices/event/event.model';
import {AuthService} from '../../user/shared/auth.service';
import {ToastrService} from 'toastr-ng2';

@Component({
  selector: 'create-event',
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  sportTypes: ISportType[];
  event: any = {location: {}};

  constructor(private eventService: EventService,
              private router: Router,
              private sportTypeService: SportTypeService,
              private auth: AuthService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.sportTypeService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });
  }

  saveEvent(formValues: any) {
    const newEvent: INewEvent = {
      userId: this.auth.currentUser.userId,
      name: formValues.name,
      sportTypeId: formValues.sportTypeId,
      eventDate: new Date(formValues.eventDate),
      timeFrom: formValues.timeFrom,
      timeTill: formValues.timeTill,
      phoneNumber: formValues.phoneNumber,
      price: formValues.price,
      location: {
        address: formValues.location.address,
        city: formValues.location.city,
        country: formValues.location.country,
      },
      facebookEventUrl: formValues.facebookEventUrl,
      description: formValues.description,
      imageUrl: formValues.imageUrl
    };

    console.log(newEvent);

    this.eventService.saveEvent(newEvent).subscribe();

    this.router.navigate(['/myEvents']);
    this.isDirty = false;
    this.toastrService.success('Event Created Successfully!');
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
