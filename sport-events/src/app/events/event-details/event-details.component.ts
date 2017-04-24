import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../shared/event.service";
import {IEvent} from "../shared/event.model";
import {AuthService} from '../../user/shared/auth.service';
import {VoterService} from '../shared/voter.service';

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;

  constructor(private eventService: EventService,
              private route:ActivatedRoute,
              private auth: AuthService,
              private voterService: VoterService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent
    (+this.route.snapshot.params['id']);
  }

  toggleVote(event: IEvent) {
    if(this.userHasVoted(event)) {
      this.voterService.deleteVoter(event, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(event, this.auth.currentUser.userName);
    }
  }

  userHasVoted(event: IEvent) {
    return this.voterService.userHasVoted(event, this.auth.currentUser.userName);
  }

}
