import {Component, OnInit, Input} from '@angular/core';
import {IEvent} from "../../microservices/event/event.model";
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {EventService} from '../../microservices/event/event.service';
import {AuthService} from '../../user/shared/auth.service';
import {IUser} from '../../user/shared/user.model';
import {UserService} from '../../user/shared/user.service';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit{
  @Input() event: IEvent;
  sportTypes: ISportType[];
  users: IUser[];

  constructor(private eventService: EventService, private userService: UserService,
              private sportTypeService: SportTypeService) {
  }

  ngOnInit(): void {

    this.sportTypeService.getSportTypes().subscribe(sportType => {
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
