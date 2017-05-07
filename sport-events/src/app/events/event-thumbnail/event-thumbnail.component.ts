import {Component, OnInit, Input} from '@angular/core';
import {IEvent} from "../shared/event.model";
import {ISportType} from '../shared/sport-type.model';
import {EventService} from '../shared/event.service';
import {AuthService} from '../../user/shared/auth.service';
import {IUser} from '../../user/shared/user.model';
import {UserService} from '../../user/shared/user.service';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit{
  @Input() event: IEvent;
  sportTypes: ISportType[];
  users: IUser[];

  constructor(private eventService: EventService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.eventService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
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
