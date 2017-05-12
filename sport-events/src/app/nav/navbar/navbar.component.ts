import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../user/shared/auth.service';
import {EventService} from '../../microservices/event/event.service';
import {ISportType} from '../../microservices/sport-type/sport-type.model';
import {SportTypeService} from '../../microservices/sport-type/sport-type.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  sportTypes: ISportType[];

  constructor(private authService: AuthService,
    private eventService: EventService,
    private sportTypeService: SportTypeService) {
  }

  ngOnInit() {
    this.sportTypeService.getSportTypes().subscribe(sportType => {
      this.sportTypes = sportType;
      console.log(this.sportTypes);
    });
    console.log("aaa");
  }

  searchEvents(searchTerm: string) {
    this.eventService.activateSearch(searchTerm);
  }

  filterEvents(id: number, name: string) {
    this.searchTerm = null;
    this.eventService.filterEvents(id, name);
  }

  resetEvents() {
    this.searchTerm = null;
    this.eventService.resetEvents();
  }
}
