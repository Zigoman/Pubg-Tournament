import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../../../../../shared/interfaces/store.interface';

@Component({
  selector: 'pubg-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() playerInfo?: IPlayer;

  constructor() {}

  ngOnInit(): void {}
}
