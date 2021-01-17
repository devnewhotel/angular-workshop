import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent implements OnInit {
  // Component properties
  data: Object;

  constructor() { }

  ngOnInit() {
    this.data =  {
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
}
