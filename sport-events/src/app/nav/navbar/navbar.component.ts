import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../user/shared/auth.service";
import {EventService} from '../../events/shared/event.service';
import {ISportType} from '../../events/shared/sport-type.model';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  sportTypes: ISportType[];

  constructor(private authService: AuthService,
    private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
    });
  }

  searchEvents(searchTerm: string) {
    this.eventService.activateSearch(searchTerm);
  }

}
