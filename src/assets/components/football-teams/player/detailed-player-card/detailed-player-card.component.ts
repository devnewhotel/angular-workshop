import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smart-detailed-player-card',
  templateUrl: './detailed-player-card.component.html',
  styleUrls: ['./detailed-player-card.component.scss']
})
export class DetailedPlayerCardComponent implements OnInit {
  @Input() player: any;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickCard() {
    this.onClick.emit(this.player.id);
  }
}
