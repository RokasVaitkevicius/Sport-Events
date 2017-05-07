import { Component, OnInit } from '@angular/core';
import {IEvent} from '../shared/event.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ISportType} from "../shared/sport-type.model";
import {ToastrService} from "toastr-ng2";

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: IEvent;
  eventForm: FormGroup;
  sportTypes: ISportType[];

  constructor(private eventService: EventService,
              private route:ActivatedRoute,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent
    (+this.route.snapshot.params['eventId']);

    this.eventService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });

    this.eventForm = new FormGroup({
      author: new FormControl(this.event.authorId),
      name: new FormControl(this.event.name),
      sportType: new FormControl(this.event.sportTypeId),
      date: new FormControl(this.event.date),
      timeFrom: new FormControl(this.event.timeFrom),
      timeTill: new FormControl(this.event.timeTill),
      price: new FormControl(this.event.price),
      phoneNumber: new FormControl(this.event.phoneNumber),
      address: new FormControl(this.event.location.address),
      city: new FormControl(this.event.location.city),
      country: new FormControl(this.event.location.country),
      description: new FormControl(this.event.description),
      facebookEventUrl: new FormControl(this.event.facebookEventUrl),
      imageUrl: new FormControl(this.event.imageUrl)
    });
  }

  cancel() {
    this.router.navigate(['/myEvents']);
  }

  saveEvent(formValue: IEvent) {
    console.log(formValue);
      this.eventService.updateEvent(formValue);
      //this.router.navigate(['events']);
      this.toastrService.success('Profile Saved');
  }
}
