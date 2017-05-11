import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../shared/event.service";
import {IEvent} from "../shared/event.model";
import {AuthService} from '../../user/shared/auth.service';
import {VoterService} from '../shared/voter.service';
import {ISportType} from '../shared/sport-type.model';
import {IUser} from '../../user/shared/user.model';
import {UserService} from '../../user/shared/user.service';

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  sportTypes: ISportType[];
  users: IUser[];

  constructor(private eventService: EventService,
              private route:ActivatedRoute,
              private auth: AuthService,
              private voterService: VoterService,
              private userService: UserService) { }

  ngOnInit() {
    this.event = this.route.snapshot.data['event'];

    this.eventService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
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

  determineSportType(sportTypeId: number): string {
    if(this.sportTypes !== undefined){
      return this.sportTypes.find(x => x.sportTypeId === sportTypeId).name;
    }
  }

  determineAuthor(authorId: number): string {
    if(this.users !== undefined){
      let foundUser = this.users.find(x => x.id === authorId);
      return `${foundUser.firstName} ${foundUser.lastName}`;
    }
  }
}
