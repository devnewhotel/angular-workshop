import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'smart-angular-architecture',
  templateUrl: './angular-architecture.component.html',
  styleUrls: ['./angular-architecture.component.css']
})
export class AngularArchitectureComponent implements OnInit {
  private currentHeight: number;
  private currentWidth: number;
  
  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (event) {
      this.currentWidth = event.target.innerWidth;
      this.currentHeight = event.target.innerHeight;
    } else {
      this.currentWidth = window.innerWidth;
      this.currentHeight = window.innerHeight;
    }
  }

  get pageHeight(): string {
    return `${Math.ceil(this.currentHeight - this.currentHeight*0.22)}px`;
  }

  get pageWidth(): string {
    return `${Math.ceil(this.currentWidth - this.currentWidth*0.2)}px`;
  }
  
  ngOnInit() {
  }

}
