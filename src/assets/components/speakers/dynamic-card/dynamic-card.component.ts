import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.scss']
})
export class DynamicCardComponent implements OnInit {
  @Input() speaker: Object;

  // Component properties
  data: Object;
  expanded: boolean = false;

  constructor() {
    // console.log('Constructor:');
    // console.log(this.speaker);
  }

  ngOnInit() {
    // console.log('ngOnInit:');
    // console.log(this.speaker);
  }

  toggleCollapsed() {
    this.expanded = !this.expanded;
  }
}
