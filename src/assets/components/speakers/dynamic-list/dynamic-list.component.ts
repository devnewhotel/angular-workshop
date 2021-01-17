import { Component, OnInit } from '@angular/core';
import * as speakers from '../../../../assets/json/speakers.json';


@Component({
  selector: 'smart-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent implements OnInit {
  speakersList: any[];

  constructor() { }

  ngOnInit() {
    this.speakersList = (speakers as any).default;
  }

}
