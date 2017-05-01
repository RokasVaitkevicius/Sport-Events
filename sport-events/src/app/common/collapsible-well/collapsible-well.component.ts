import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent {
  visible: boolean = false;

  toggleContent() {
    this.visible = !this.visible;
  }

}
