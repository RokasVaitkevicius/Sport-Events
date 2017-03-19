import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../user/shared/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

}
