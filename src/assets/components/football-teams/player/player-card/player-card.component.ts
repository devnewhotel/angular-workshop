import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smart-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player: any;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickCard() {
    this.onClick.emit(this.player.id);
  }
}
