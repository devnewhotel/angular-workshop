import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-collapsed-card',
  templateUrl: './collapsed-card.component.html',
  styleUrls: ['./collapsed-card.component.scss']
})
export class CollapsedCardComponent implements OnInit {
  // Component properties
  data: Object;
  expanded: boolean = false;

  constructor() { }

  ngOnInit() {
    this.data = {
      "id": 1,
      "name": "Diana Rodrigues",
      "company": "Newhotel Software",
      "job": "Frontend Developer",
      "gender": "female",
      "photo": "assets/img/demo/gallery/1.jpg",
      "website": null,
      "twitter": null,
      "linkedin": "https://www.linkedin.com/in/dianafrodrigues/",
      "github": null,
      "description": "Diana Rodrigues has a master's degree in Electronics and Telecommunications Engineering, by University of Aveiro."
    }
  }

  toggleCollapsed() {
    this.expanded = !this.expanded;
  }
}
