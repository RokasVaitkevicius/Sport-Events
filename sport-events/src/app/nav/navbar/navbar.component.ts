import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../user/shared/auth.service";
import {EventService} from '../../events/shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";

  constructor(private authService: AuthService,
    private eventService: EventService) {

  }

  ngOnInit() {
  }

  searchEvents(searchTerm: string) {
    this.eventService.activateSearch(searchTerm);
  }

}
