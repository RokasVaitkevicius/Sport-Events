import { Component, OnInit } from '@angular/core';
import {IEvent} from '../shared/event.model';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../shared/event.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: IEvent;
  eventForm: FormGroup;

  constructor(private eventService: EventService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent
    (+this.route.snapshot.params['id']);
    this.eventForm = new FormGroup({
      author: new FormControl(this.event.author),
      name: new FormControl(this.event.name),
      sportType: new FormControl(this.event.sportType),
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

}
