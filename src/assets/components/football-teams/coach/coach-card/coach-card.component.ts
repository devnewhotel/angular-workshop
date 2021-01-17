import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-coach-card',
  templateUrl: './coach-card.component.html',
  styleUrls: ['./coach-card.component.scss']
})
export class CoachCardComponent implements OnInit {
  @Input() coach: any;

  // Component properties
  expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.expanded = !this.expanded;
  }
}
