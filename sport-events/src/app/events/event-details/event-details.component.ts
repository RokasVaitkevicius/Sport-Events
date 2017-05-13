import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../microservices/event/event.service";
import {IEvent} from "../../microservices/event/event.model";
import {AuthService} from '../../user/shared/auth.service';
import {VoterService} from '../../microservices/voter/voter.service';
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {IUser} from '../../user/shared/user.model';
import {UserService} from '../../user/shared/user.service';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';
import {IVoter} from '../../microservices/voter/voter.model';

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  sportType: ISportType;
  users: IUser[];

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private auth: AuthService,
              private voterService: VoterService,
              private userService: UserService,
              private sportTypeService: SportTypeService,
              private router: Router) { }

  ngOnInit() {
    this.event = this.route.snapshot.data['event'];

    this.sportTypeService.getSportTypeById(this.event.sportTypeId).subscribe(sportType => {
      this.sportType = sportType;
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  toggleVote(event: IEvent) {
    if (this.userHasVoted(event)) {
      this.voterService.deleteVoter(event.eventId, this.auth.currentUser.id).subscribe();
      this.event.voters = this.event.voters.filter(e => e.userId !== this.auth.currentUser.id);
    } else {
      this.voterService.addVoter(event.eventId, this.auth.currentUser.id).subscribe();
      let voter: IVoter = {
        eventId: this.event.eventId,
        userId: this.auth.currentUser.id
      };
      this.event.voters.push(voter);
    }
  }

  userHasVoted(event: IEvent) {
    return this.voterService.userHasVoted(event, this.auth.currentUser.id);
  }

  determineAuthor(authorId: number): string {
    if(this.users !== undefined){
      let foundUser = this.users.find(x => x.id === authorId);
      return `${foundUser.firstName} ${foundUser.lastName}`;
    }
  }
}
